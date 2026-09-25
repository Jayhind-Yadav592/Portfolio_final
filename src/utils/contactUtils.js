/**
 * Smart Email Handler:
 * - On desktop: Opens Gmail Web Compose in a new browser tab with prefilled 'To' field
 *   (guaranteed to open immediately in Chrome, Edge, Firefox without relying on unconfigured Windows desktop mail clients).
 * - On mobile: Triggers the device's default mail application via mailto:.
 * - Automatically copies the email address to clipboard.
 */
export function openEmail(email = 'jayhind01022003@gmail.com', subject = '', body = '') {
  try {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email).catch(() => {})
    }
  } catch (err) {}

  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (isMobile) {
    const mailtoUrl = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
    window.location.href = mailtoUrl
  } else {
    // Open Gmail web compose directly in new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}${subject ? `&su=${encodeURIComponent(subject)}` : ''}${body ? `&body=${encodeURIComponent(body)}` : ''}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }
}
