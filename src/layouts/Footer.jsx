import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { openEmail } from '../utils/contactUtils'
import Container from '../components/ui/Container'
import { footerData } from '../data/footer'

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  LeetCode: SiLeetcode,
  WhatsApp: FaWhatsapp,
  Email: FaEnvelope,
}

export default function Footer() {
  const { brand, socials, quickLinks, services, newsletter, copyright } = footerData

  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('idle') // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleServiceClick = (e, service) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
    if (service.serviceId) {
      window.dispatchEvent(new CustomEvent('open-service-detail', { detail: service.serviceId }))
    }
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email || !email.trim()) {
      setSubscribeStatus('error')
      setErrorMessage('Please enter your email address.')
      return
    }

    if (!emailRegex.test(email.trim())) {
      setSubscribeStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setSubscribeStatus('success')
    setErrorMessage('')
    setEmail('')

    // Reset success note after 4 seconds
    setTimeout(() => {
      setSubscribeStatus('idle')
    }, 4000)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-200/80 relative overflow-hidden text-left z-10 pt-8 sm:pt-10 pb-5 sm:pb-6">
      <Container size="lg">
        {/* 4-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 lg:gap-8 pb-6 sm:pb-8 items-start">
          {/* Column 1: Brand & Personal Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-3">
              {/* JY Monogram Logo */}
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-xs shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer"
                aria-label="Back to top"
              >
                {brand.logoText}
              </a>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-tight">
                  {brand.firstName} <span className="text-blue-600">{brand.lastName}</span>
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {brand.role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
              {brand.description}
            </p>

            {/* Social Icons Row */}
            <div className="pt-1 flex items-center gap-2">
              {socials.map((social) => {
                const IconComponent = socialIconMap[social.name] || FaGithub
                const isEmail = social.name === 'Email' || social.url.startsWith('mailto:')

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    onClick={(e) => {
                      if (isEmail) {
                        e.preventDefault()
                        openEmail('jayhind01022003@gmail.com')
                      }
                    }}
                    target={isEmail ? '_self' : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
                    aria-label={social.ariaLabel}
                    whileHover={{ y: -2 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer"
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2.2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors py-0.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => handleServiceClick(e, service)}
                    className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors py-0.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
              {newsletter.heading}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {newsletter.description}
            </p>

            {/* Newsletter Subscription Box */}
            <form onSubmit={handleSubscribe} noValidate className="space-y-2 pt-0.5">
              <div className="relative flex items-center bg-white border border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/15 rounded-xl p-1 transition-all duration-200 shadow-2xs">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (subscribeStatus === 'error') setSubscribeStatus('idle')
                  }}
                  placeholder={newsletter.placeholder}
                  aria-label={newsletter.placeholder}
                  className="w-full px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label={newsletter.buttonAria}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs group cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Status Message Alerts */}
              <AnimatePresence>
                {subscribeStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium pt-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Thanks for subscribing!</span>
                  </motion.div>
                )}

                {subscribeStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex items-center gap-1.5 text-[11px] text-rose-600 font-medium pt-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Bottom Clean Divider & Copyright Row */}
        <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-xs text-slate-500 font-medium">
          <p>
            © {currentYear} {copyright.author}. {copyright.rights}
          </p>
          <p className="flex items-center gap-1">
            <span>{copyright.madeWithText}</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
