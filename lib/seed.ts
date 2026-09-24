import { Pool } from 'pg'
import { hashSync } from 'bcryptjs'
import { readFileSync } from 'fs'
import { join } from 'path'

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://grid:strongpassword@187.127.139.208:5432/cwt-jobs'

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

    console.log('\n🎉 Database seeded successfully!')
  } catch (error) {
    console.error('❌ Seed failed:', error)
  } finally {
    await pool.end()
  }
}

seed()
