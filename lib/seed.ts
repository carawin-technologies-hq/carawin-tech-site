import { Pool } from 'pg'
import { hashSync } from 'bcryptjs'
import { readFileSync } from 'fs'
import { join } from 'path'

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://grid:strongpassword@187.127.139.208:5433/cwt-jobs'

async function seed() {
  const pool = new Pool({ connectionString: DATABASE_URL, ssl: false })

  console.log('⏳ Connecting to database...')

  try {
    // Run schema
    const schema = readFileSync(join(process.cwd(), 'lib', 'schema.sql'), 'utf8')
    await pool.query(schema)
    console.log('✅ Schema created')

    // Seed admin
    const adminPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'CarawinAdmin@2024'
    const hash = hashSync(adminPassword, 12)
    await pool.query(
      `INSERT INTO admins (username, password_hash) VALUES ($1, $2) ON CONFLICT (username) DO UPDATE SET password_hash = $2`,
      ['admin', hash]
    )
    console.log('✅ Admin user seeded (username: admin)')

    // Seed sample job openings
    const jobs = [
      {
        title: 'Senior Full-Stack Developer',
        department: 'Engineering',
        location: 'Remote',
        experience_level: 'Professional',
        job_type: 'Full-Time',
        description: 'We are looking for a Senior Full-Stack Developer to join our Engineering team and build the platforms that power classrooms and institutions at scale. You will work on our Next.js and Node.js stack, designing and implementing features across our education products.',
        requirements: 'Minimum 4+ years of experience with React, Next.js, Node.js, and PostgreSQL. Strong understanding of REST APIs and database design. Experience with cloud deployment (AWS/GCP). Excellent problem-solving and communication skills.',
      },
      {
        title: 'AI/ML Engineer',
        department: 'AI & Product',
        location: 'Bangalore, IN',
        experience_level: 'Professional',
        job_type: 'Full-Time',
        description: 'Join our AI & Product team to design and build the machine learning models behind Carawin Adapt, Carawin Teach, and Carawin Assess. You will work on adaptive learning algorithms, NLP-based assessment tools, and recommendation systems for personalized education.',
        requirements: 'Strong background in ML/DL (PyTorch or TensorFlow). Experience with NLP, recommendation systems, or adaptive learning. Proficiency in Python. Published research or deployed ML systems preferred. 3+ years professional experience.',
      },
      {
        title: 'Education Content Designer',
        department: 'Education',
        location: 'New Delhi, IN',
        experience_level: 'Entry Level',
        job_type: 'Full-Time',
        description: 'Help shape the pedagogy, curriculum, and learning design behind our products. As an Education Content Designer, you will work closely with product and engineering teams to ensure every Carawin product is grounded in how people actually learn and teach.',
        requirements: "Bachelor's degree in Education, Instructional Design, or related field. Strong written and verbal communication. Understanding of Indian education curriculum (CBSE/State boards). Passion for education technology.",
      },
      {
        title: 'DevOps Engineer',
        department: 'Engineering',
        location: 'Remote',
        experience_level: 'Professional',
        job_type: 'Full-Time',
        description: 'We need a DevOps Engineer to manage and scale our cloud infrastructure across AWS and GCP. You will own CI/CD pipelines, container orchestration, monitoring, and security for all Carawin services.',
        requirements: 'Experience with AWS/GCP, Docker, Kubernetes. Strong Linux administration skills. Proficiency with Terraform or CloudFormation. Experience with monitoring tools (Prometheus, Grafana). 3+ years in DevOps/SRE role.',
      },
      {
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'New Delhi, IN',
        experience_level: 'Professional',
        job_type: 'Full-Time',
        description: 'Craft experiences for students, teachers, administrators and government stakeholders that are simple, clear and usable at scale. You will lead the design process from research and wireframing to high-fidelity prototypes and design system maintenance.',
        requirements: 'Portfolio demonstrating strong visual and interaction design skills. Proficiency with Figma. Experience designing for B2B or education products is a plus. Understanding of accessibility standards. 3+ years of product design experience.',
      },
      {
        title: 'Data Analyst',
        department: 'Data & Research',
        location: 'Bangalore, IN',
        experience_level: 'Entry Level',
        job_type: 'Full-Time',
        description: 'Turn learner and institutional signals into evidence — measuring what works and feeding it back into product decisions. You will work with large datasets from our education platforms to surface insights that improve outcomes for students and teachers.',
        requirements: "Strong SQL and Python skills. Experience with data visualization tools (Tableau, Power BI, or similar). Basic understanding of statistics. Bachelor's degree in a quantitative field. Curiosity about education data.",
      },
      {
        title: 'Product Manager',
        department: 'AI & Product',
        location: 'New Delhi, IN',
        experience_level: 'Professional',
        job_type: 'Full-Time',
        description: 'Own the roadmap for one or more Carawin AI products. You will define product strategy, prioritize features, work closely with engineering and design teams, and ensure that what we build solves real problems for educators and learners.',
        requirements: '4+ years of product management experience. Experience with B2B SaaS or education technology. Strong analytical and communication skills. Ability to translate complex technical concepts into clear product requirements. Data-driven decision making.',
      },
      {
        title: 'Implementation Consultant',
        department: 'Implementation & Advisory',
        location: 'Multiple Cities',
        experience_level: 'Professional',
        job_type: 'Full-Time',
        description: "Work directly with schools, universities and governments to deploy, adopt and sustain Carawin's technology on the ground. You will lead implementation projects, train institutional staff, and ensure successful technology adoption across India.",
        requirements: 'Experience in EdTech or government project implementation. Strong stakeholder management and presentation skills. Willingness to travel extensively. Understanding of Indian education institutions. 3+ years of consulting or implementation experience.',
      },
      {
        title: 'Frontend Developer (React)',
        department: 'Engineering',
        location: 'Remote',
        experience_level: 'Entry Level',
        job_type: 'Full-Time',
        description: 'Join our frontend engineering team and build beautiful, performant user interfaces for Carawin\'s suite of education products. You will work with React, Next.js, and TypeScript to deliver pixel-perfect implementations of our design system.',
        requirements: 'Strong proficiency in React, TypeScript, and CSS. Understanding of responsive design and web accessibility. Familiarity with Next.js is a plus. Portfolio or GitHub profile with relevant projects. 0-2 years of experience.',
      },
      {
        title: 'Technical Writer',
        department: 'Education',
        location: 'Remote',
        experience_level: 'Entry Level',
        job_type: 'Contract',
        description: 'Create clear, comprehensive documentation for Carawin\'s products, APIs, and internal tools. You will work with engineering and product teams to produce user guides, API references, tutorials, and knowledge base articles.',
        requirements: 'Excellent English writing skills. Ability to explain complex technical concepts simply. Familiarity with Markdown, Git, and documentation tools. Experience writing software documentation is a plus. Portfolio of technical writing samples.',
      },
    ]

    for (const job of jobs) {
      await pool.query(
        `INSERT INTO jobs (title, department, location, experience_level, job_type, description, requirements)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT DO NOTHING`,
        [job.title, job.department, job.location, job.experience_level, job.job_type, job.description, job.requirements]
      )
    }
    console.log(`✅ ${jobs.length} sample job openings seeded`)

    console.log('\n🎉 Database seeded successfully!')
  } catch (error) {
    console.error('❌ Seed failed:', error)
  } finally {
    await pool.end()
  }
}

seed()
