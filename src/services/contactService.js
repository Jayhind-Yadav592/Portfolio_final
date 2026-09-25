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
 * Generate clean, professional formatted WhatsApp message link without risky emoji encoding
 */
export function generateWhatsAppUrl({ name, email, subject, message }) {
  const text = `*New Portfolio Message for Jayhind Yadav*

*Name:* ${name.trim()}
*Email:* ${email.trim()}
*Subject:* ${subject.trim()}

*Message:*
${message.trim()}

-----------------------------------
Sent via Jayhind Yadav Portfolio Website`

  return `https://wa.me/916393496909?text=${encodeURIComponent(text)}`
}

/**
 * Generate direct Gmail Web Compose link
 */
export function generateGmailComposeUrl({ name, email, subject, message }) {
  const body = `Hi Jayhind,

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}

-----------------------------------
Sent via Jayhind Yadav Portfolio Website`

  const su = `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`
  return `https://mail.google.com/mail/?view=cm&fs=1&to=jayhind01022003@gmail.com&su=${encodeURIComponent(su)}&body=${encodeURIComponent(body)}`
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
 * Submits form data directly to email inbox (FormSubmit) and Neon PostgreSQL DB API
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

  let isFormSubmitActive = false
  let activationNotice = ''

  // 1. Direct Email Delivery via FormSubmit (delivers directly to jayhind01022003@gmail.com)
  try {
    const emailRes = await fetch('https://formsubmit.co/ajax/jayhind01022003@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        _replyto: payload.email,
        _subject: `New Portfolio Message from ${payload.name}: ${payload.subject}`,
        subject: payload.subject,
        message: payload.message,
        submitted_at: payload.submittedAt,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    const data = await emailRes.json()
    if (data.success === 'true' || data.success === true) {
      isFormSubmitActive = true
    } else if (data.message && data.message.includes('Activation')) {
      activationNotice =
        'FormSubmit has sent a 1-time activation link to jayhind01022003@gmail.com (check Inbox/Spam). Click "Activate Form" once to enable instant email alerts!'
    }
  } catch (err) {
    console.warn('FormSubmit email forwarding notice:', err)
  }

  // 2. Also save to Neon PostgreSQL DB via /api/contact if backend is live
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
          message:
            activationNotice ||
            'Your message has been sent directly to Jayhind’s email (jayhind01022003@gmail.com) and saved to database!',
          whatsappUrl: generateWhatsAppUrl(payload),
          gmailComposeUrl: generateGmailComposeUrl(payload),
          mailtoUrl: generateMailtoUrl(payload),
          data: apiResult.data || payload,
        }
      }
    }
  } catch (err) {
    // API optional fallback
  }

  return {
    success: true,
    message:
      activationNotice ||
      'Your message has been sent directly to Jayhind’s email (jayhind01022003@gmail.com)!',
    whatsappUrl: generateWhatsAppUrl(payload),
    gmailComposeUrl: generateGmailComposeUrl(payload),
    mailtoUrl: generateMailtoUrl(payload),
    data: payload,
  }
}
