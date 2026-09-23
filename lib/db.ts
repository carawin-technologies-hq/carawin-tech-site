import { Pool } from 'pg'

let pool: Pool | null = null

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: false,
      max: 10,
      idleTimeoutMillis: 15000,
      connectionTimeoutMillis: 2500,
    })
  }
  return pool
}

export async function query(text: string, params?: any[]) {
  const p = getPool()
  const client = await p.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}

export default getPool
