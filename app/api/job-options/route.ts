
import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

const defaults = {
  experience_level: ["Entry Level", "Professional", "Executive"],
  job_type: ["Full-Time", "Part-Time", "Contract", "Internship"],
};

const categories = ["experience_level", "job_type"] as const;
type Category = (typeof categories)[number];

async function ensureTable() {
  await query(`
    CREATE TABLE IF NOT EXISTS job_options (
      id SERIAL PRIMARY KEY,
      category VARCHAR(50) NOT NULL,
      name VARCHAR(100) NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      UNIQUE (category, name)
    )
  `);

  // Insert the default options.
  for (const category of categories) {
    for (const name of defaults[category]) {
      await query(
        `INSERT INTO job_options (category, name)
         VALUES ($1, $2)
         ON CONFLICT DO NOTHING`,
        [category, name]
      );
    }
  }

  // Import existing experience levels from saved jobs.
  await query(`
    INSERT INTO job_options (category, name)
    SELECT 'experience_level', TRIM(experience_level)
    FROM jobs
    WHERE experience_level IS NOT NULL
      AND TRIM(experience_level) <> ''
    ON CONFLICT DO NOTHING
  `);

  // Import existing job types from saved jobs.
  await query(`
    INSERT INTO job_options (category, name)
    SELECT 'job_type', TRIM(job_type)
    FROM jobs
    WHERE job_type IS NOT NULL
      AND TRIM(job_type) <> ''
    ON CONFLICT DO NOTHING
  `);
}

// GET /api/job-options
// Returns saved experience levels and job types.
export async function GET() {
  try {
    await ensureTable();

    const result = await query(
      `SELECT category, name
       FROM job_options
       ORDER BY name ASC`
    );

    const options: Record<Category, string[]> = {
      experience_level: [...defaults.experience_level],
      job_type: [...defaults.job_type],
    };

    for (const row of result.rows) {
      const category = row.category as Category;

      if (categories.includes(category)) {
        options[category].push(row.name);
      }
    }

    for (const category of categories) {
      options[category] = [
        ...new Set(options[category]),
      ].sort((a, b) => a.localeCompare(b));
    }

    return NextResponse.json({ options });
  } catch (error) {
    console.error("Failed to load job options:", error);

    return NextResponse.json(
      { error: "Could not load job options." },
      { status: 503 }
    );
  }
}

// POST /api/job-options
// Saves a custom option permanently.
export async function POST(request: Request) {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const category = body?.category;
    const rawName = body?.name;

    if (
      typeof category !== "string" ||
      !categories.includes(category as Category)
    ) {
      return NextResponse.json(
        { error: "Invalid option category." },
        { status: 400 }
      );
    }

    if (typeof rawName !== "string") {
      return NextResponse.json(
        { error: "Option name must be text." },
        { status: 400 }
      );
    }

    const name = rawName.trim();

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Enter a name between 2 and 100 characters." },
        { status: 400 }
      );
    }

    await ensureTable();

    // Prevent duplicates, ignoring capitalization.
    const existing = await query(
      `SELECT name
       FROM job_options
       WHERE category = $1
         AND LOWER(name) = LOWER($2)
       LIMIT 1`,
      [category, name]
    );

    if (existing.rows.length > 0) {
      return NextResponse.json(
        {
          error: "This option already exists.",
          name: existing.rows[0].name,
        },
        { status: 409 }
      );
    }

    const result = await query(
      `INSERT INTO job_options (category, name)
       VALUES ($1, $2)
       RETURNING name`,
      [category, name]
    );

    return NextResponse.json(
      { option: result.rows[0].name },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to save job option:", error);

    return NextResponse.json(
      { error: "Could not save this option. Please try again." },
      { status: 503 }
    );
  }
}
