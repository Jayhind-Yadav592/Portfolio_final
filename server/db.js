import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

const defaultConnectionString =
  'postgresql://neondb_owner:npg_1VvEQKWxYgT8@ep-misty-resonance-b54ndn9o-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require'

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || defaultConnectionString,
  ssl: {
    rejectUnauthorized: false,
  },
})

/**
 * Initialize PostgreSQL tables on server startup
 */
export async function initDatabase() {
  try {
    const client = await pool.connect()
    console.log('🔗 Successfully connected to Neon PostgreSQL!')
    
    // Create contacts table
    await client.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'unread',
        ip_address VARCHAR(100),
        user_agent TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `)
    console.log('✅ PostgreSQL Table "contacts" is ready.')
    client.release()
  } catch (error) {
    console.error('❌ Failed to initialize database:', error.message)
  }
}

/**
 * Insert a new contact inquiry into Neon PostgreSQL
 */
export async function insertContact({ name, email, subject, message, ip, userAgent }) {
  const query = `
    INSERT INTO contacts (name, email, subject, message, ip_address, user_agent)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, name, email, subject, created_at;
  `
  const values = [
    name.trim(),
    email.trim().toLowerCase(),
    subject.trim(),
    message.trim(),
    ip || null,
    userAgent || null,
  ]
  const res = await pool.query(query, values)
  return res.rows[0]
}

/**
 * Get all contact inquiries
 */
export async function getAllContacts() {
  const query = `
    SELECT id, name, email, subject, message, status, created_at
    FROM contacts
    ORDER BY created_at DESC
    LIMIT 100;
  `
  const res = await pool.query(query)
  return res.rows
}
