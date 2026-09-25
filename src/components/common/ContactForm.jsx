import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa6'
import { validateContactForm, submitContactMessage, generateWhatsAppUrl, generateGmailComposeUrl } from '../../services/contactService'
import { cn } from '../../utils/cn'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [formStatus, setFormStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('')
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('')
  const [lastGmailUrl, setLastGmailUrl] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Live validation when touched
    if (touched[name]) {
      const validation = validateContactForm({ ...formData, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: validation.errors[name] || '' }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const validation = validateContactForm(formData)
    setErrors((prev) => ({ ...prev, [name]: validation.errors[name] || '' }))
  }

  // Handle Submit via Email
  const handleSubmit = async (e) => {
    if (e) e.preventDefault()

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    })

    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setFormStatus('submitting')
    setErrors({})

    try {
      const response = await submitContactMessage(formData)
      setFormStatus('success')
      setStatusMessage(response.message || 'Message sent directly to Jayhind’s email (jayhind01022003@gmail.com)!')
      setLastWhatsAppUrl(response.whatsappUrl || generateWhatsAppUrl(formData))
      setLastGmailUrl(response.gmailComposeUrl || generateGmailComposeUrl(formData))
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTouched({})
    } catch (err) {
      setFormStatus('error')
      setStatusMessage('Unable to send. Please check your network or send directly via WhatsApp.')
    }
  }

  // Handle Direct Submit via WhatsApp
  const handleWhatsAppSubmit = (e) => {
    if (e) e.preventDefault()

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    })

    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    const waUrl = generateWhatsAppUrl(formData)
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 md:p-9 shadow-xs hover:shadow-md transition-all duration-300 text-left h-full flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Send Me a Message
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Fill out the form below. Your message will be sent directly to my Email and WhatsApp.
          </p>
        </div>

        {/* Status Alerts */}
        <AnimatePresence mode="wait">
          {formStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-5 mb-6 rounded-2xl bg-emerald-50/90 border border-emerald-300 text-emerald-900 text-xs sm:text-sm shadow-xs space-y-3"
              role="alert"
              aria-live="polite"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-emerald-900 text-sm">Message Processed Successfully!</p>
                  <p className="text-emerald-700 mt-0.5 font-normal leading-relaxed">
                    {statusMessage}
                  </p>
                </div>
              </div>

              {/* Instant follow-up actions */}
              <div className="pt-2 border-t border-emerald-200/80 flex flex-wrap items-center justify-between gap-2.5">
                <span className="text-xs text-emerald-800 font-medium">
                  Direct quick actions:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {lastGmailUrl && (
                    <a
                      href={lastGmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/80 font-semibold text-xs shadow-2xs transition-colors cursor-pointer"
                    >
                      <FaEnvelope className="w-3.5 h-3.5 text-rose-600" />
                      <span>Open in Gmail</span>
                    </a>
                  )}

                  {lastWhatsAppUrl && (
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {formStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-4 mb-6 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 text-xs sm:text-sm shadow-2xs"
              role="alert"
              aria-live="assertive"
            >
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-rose-800">Submission Notice</p>
                <p className="text-rose-700 mt-0.5 font-normal">{statusMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-4.5">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={formStatus === 'submitting'}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="Enter your name"
                className={cn(
                  'w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-3 transition-all duration-200',
                  errors.name
                    ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/15'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/15'
                )}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Your Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={formStatus === 'submitting'}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="Enter your email"
                className={cn(
                  'w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-3 transition-all duration-200',
                  errors.email
                    ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/15'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/15'
                )}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Subject (Open Text Input instead of dropdown) */}
          <div>
            <label
              htmlFor="contact-subject"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Subject <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={formStatus === 'submitting'}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              placeholder="What is this regarding? (e.g., Full-Stack Project, Hiring, Consultation)"
              className={cn(
                'w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-3 transition-all duration-200',
                errors.subject
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/15'
                  : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/15'
              )}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1 text-xs text-rose-600 font-medium">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Row 3: Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={formStatus === 'submitting'}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell me about your project, opportunity or idea..."
              className={cn(
                'w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-3 transition-all duration-200 resize-none min-h-[130px]',
                errors.message
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/15'
                  : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600/15'
              )}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-rose-600 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {/* Row 4: Submit Buttons (Direct Email + Direct WhatsApp) */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Primary Email Submit */}
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-200 group/btn cursor-pointer"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send to Email</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>

            {/* Direct WhatsApp Submit */}
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              disabled={formStatus === 'submitting'}
              className="w-full py-3.5 px-5 rounded-xl bg-emerald-50 hover:bg-[#25D366] text-emerald-700 hover:text-white border border-emerald-200/90 hover:border-[#25D366] disabled:opacity-70 disabled:cursor-not-allowed text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group/wa"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover/wa:text-white transition-colors" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
