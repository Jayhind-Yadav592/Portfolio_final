import pg from 'pg'

const { Pool } = pg

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_1VvEQKWxYgT8@ep-misty-resonance-b54ndn9o-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require'

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
})

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method === 'GET') {
    try {
      const dbRes = await pool.query('SELECT NOW() as current_time;')
      return res.status(200).json({
        status: 'healthy',
        dbConnected: true,
        dbTime: dbRes.rows[0].current_time,
      })
    } catch (err) {
      return res.status(500).json({ status: 'degraded', error: err.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body || {}

      if (!name || !name.trim()) {
        return res.status(400).json({ success: false, error: 'Name is required' })
      }
      if (!email || !email.trim() || !email.includes('@')) {
        return res.status(400).json({ success: false, error: 'Valid email is required' })
      }
      if (!subject || !subject.trim()) {
        return res.status(400).json({ success: false, error: 'Subject is required' })
      }
      if (!message || !message.trim()) {
        return res.status(400).json({ success: false, error: 'Message is required' })
      }

      // Ensure table exists in Neon DB
      await pool.query(`
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

      const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress
      const userAgent = req.headers['user-agent']

      const insertRes = await pool.query(
        `INSERT INTO contacts (name, email, subject, message, ip_address, user_agent)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING id, name, email, subject, created_at;`,
        [
          name.trim(),
          email.trim().toLowerCase(),
          subject.trim(),
          message.trim(),
          ip || null,
          userAgent || null,
        ]
      )

      const savedContact = insertRes.rows[0]

      // Background email delivery via Web3Forms
      try {
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: 'e39da327-0cfc-4a37-b4d6-843818e69fa0',
            to_email: 'jayhind01022003@gmail.com',
            from_name: `${name} (Portfolio Inquiry)`,
            subject: `[Portfolio Inquiry] ${subject}`,
            name: name,
            email: email,
            message: `Neon DB Contact ID: #${savedContact.id}\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          }),
        }).catch(() => {})
      } catch (_) {}

      return res.status(201).json({
        success: true,
        message: 'Message saved successfully to database and forwarded to Jayhind!',
        data: savedContact,
      })
    } catch (err) {
      console.error('Serverless Contact API error:', err)
      return res.status(500).json({
        success: false,
        error: 'Failed to save contact message to database',
      })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
