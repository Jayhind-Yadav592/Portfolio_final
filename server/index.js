import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import { initDatabase, insertContact, getAllContacts, pool } from './db.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW() as time;')
    res.json({
      status: 'healthy',
      uptime: process.uptime(),
      dbConnected: true,
      dbTime: dbRes.rows[0].time,
      environment: process.env.NODE_ENV || 'production',
    })
  } catch (err) {
    res.status(500).json({
      status: 'degraded',
      dbConnected: false,
      error: err.message,
    })
  }
})

// POST: Submit a contact message and save to Neon PostgreSQL
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Basic server-side validation
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

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const userAgent = req.headers['user-agent']

    // Insert into Neon DB
    const savedContact = await insertContact({
      name,
      email,
      subject,
      message,
      ip,
      userAgent,
    })

    console.log(`📥 New contact saved in Neon PostgreSQL! ID: ${savedContact.id} from ${name} (${email})`)

    // Also forward to FormSubmit in background for instant direct email notification
    try {
      fetch('https://formsubmit.co/ajax/jayhind01022003@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          _replyto: email,
          _subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          subject: subject,
          message: message,
          neon_db_id: savedContact.id,
          _template: 'table',
          _captcha: 'false',
        }),
      }).catch(() => {})
    } catch (_) {}

    return res.status(201).json({
      success: true,
      message: 'Message saved successfully to database and forwarded to Jayhind!',
      data: savedContact,
    })
  } catch (err) {
    console.error('Error saving contact:', err)
    return res.status(500).json({
      success: false,
      error: 'Internal server error while saving message',
    })
  }
})

// GET: Retrieve contacts (protected or for review)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts()
    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    })
  } catch (err) {
    console.error('Error fetching contacts:', err)
    res.status(500).json({ success: false, error: 'Failed to fetch contacts' })
  }
})

// Serve Vite React build in production
const distPath = path.join(__dirname, '../dist')
app.use(express.static(distPath))

// Catch-all fallback for React Single Page App routing
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

// Start Server & Init DB
app.listen(PORT, async () => {
  console.log(`🚀 Jayhind Yadav Portfolio Server running on port ${PORT}`)
  console.log(`🌐 Full-Stack Web App: http://localhost:${PORT}`)
  await initDatabase()
})
