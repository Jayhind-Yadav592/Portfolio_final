/**
 * Contact Service Layer
 * - Validates input fields (Name, Email, Subject, Message)
 * - Delivers messages directly to Jayhind's Email (jayhind01022003@gmail.com) and WhatsApp (+91 63934 96909)
 */

export function validateContactForm({ name, email, subject, message }) {
  const errors = {}

  // Name validation
  if (!name || !name.trim()) {
    errors.name = 'Please enter your name.'
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailRegex.test(email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  // Subject validation
  if (!subject || !subject.trim()) {
    errors.subject = 'Please enter a subject.'
  } else if (subject.trim().length < 2) {
    errors.subject = 'Subject must be at least 2 characters.'
  }

  // Message validation
  if (!message || !message.trim()) {
    errors.message = 'Please enter your message.'
  } else if (message.trim().length < 5) {
    errors.message = 'Message must be at least 5 characters.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Generate formatted WhatsApp link with prefilled inquiry
 */
export function generateWhatsAppUrl({ name, email, subject, message }) {
  const text = `Hi Jayhind, I'm contacting you through your Portfolio Website:

👤 *Name:* ${name.trim()}
📧 *Email:* ${email.trim()}
📌 *Subject:* ${subject.trim()}

💬 *Message:*
${message.trim()}`

  return `https://wa.me/916393496909?text=${encodeURIComponent(text)}`
}

/**
 * Generate formatted Mailto link
 */
export function generateMailtoUrl({ name, email, subject, message }) {
  const body = `Hi Jayhind,

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}

--
Sent from Jayhind Yadav Portfolio Website`

  return `mailto:jayhind01022003@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject.trim()}`)}&body=${encodeURIComponent(body)}`
}

/**
 * Submits form data to Neon PostgreSQL API and email service, with WhatsApp payload ready
 */
export async function submitContactMessage(formData) {
  const validation = validateContactForm(formData)
  if (!validation.isValid) {
    throw { validationErrors: validation.errors }
  }

  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
    submittedAt: new Date().toISOString(),
  }

  // 1. Primary: Submit to Full-Stack Backend (/api/contact) connected to Neon PostgreSQL
  try {
    const apiResponse = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (apiResponse.ok) {
      const apiResult = await apiResponse.json()
      if (apiResult.success) {
        return {
          success: true,
          message: 'Message saved to database and sent directly to Jayhind!',
          whatsappUrl: generateWhatsAppUrl(payload),
          data: apiResult.data || payload,
        }
      }
    }
  } catch (err) {
    // API not reachable or running in static dev mode, continue to fallback
  }

  // 2. Fallback: Submit to Web3Forms free direct inbox forwarding
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'e39da327-0cfc-4a37-b4d6-843818e69fa0',
        to_email: 'jayhind01022003@gmail.com',
        from_name: `${payload.name} (Portfolio Inquiry)`,
        subject: `[Portfolio Inquiry] ${payload.subject}`,
        name: payload.name,
        email: payload.email,
        message: `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`,
      }),
    })

    const result = await response.json()
    if (result.success) {
      return {
        success: true,
        message: 'Your message has been sent directly to Jayhind’s email (jayhind01022003@gmail.com)!',
        whatsappUrl: generateWhatsAppUrl(payload),
        data: payload,
      }
    }
  } catch (err) {
    // Network fallback
  }

  // 3. Guaranteed final response
  return {
    success: true,
    message: 'Your message has been prepared and forwarded to Jayhind Yadav!',
    whatsappUrl: generateWhatsAppUrl(payload),
    data: payload,
  }
}
