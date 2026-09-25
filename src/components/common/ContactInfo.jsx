import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { openEmail } from '../../utils/contactUtils'
import { contactData } from '../../data/contact'

const iconMap = {
  email: Mail,
  phone: Phone,
  whatsapp: FaWhatsapp,
  location: MapPin,
}

const colorStyleMap = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    hoverBg: 'group-hover:bg-blue-600',
    border: 'border-blue-100',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    hoverBg: 'group-hover:bg-emerald-600',
    border: 'border-emerald-100',
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    hoverBg: 'group-hover:bg-rose-600',
    border: 'border-rose-100',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    hoverBg: 'group-hover:bg-purple-600',
    border: 'border-purple-100',
  },
}

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  LeetCode: SiLeetcode,
  WhatsApp: FaWhatsapp,
  Email: FaEnvelope,
}

export default function ContactInfo() {
  const { leftSection, contactMethods, socials } = contactData

  return (
    <div className="relative flex flex-col justify-between h-full text-left">
      {/* Subtle Background Decorative Glow */}
      <div
        className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div>
        {/* Availability Badge */}
        {leftSection.availability && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{leftSection.availability}</span>
          </div>
        )}

        {/* Section Heading & Bio */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {leftSection.heading}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 sm:mb-8 max-w-md">
          {leftSection.description}
        </p>

        {/* Vertical Contact Cards List */}
        <div className="space-y-3.5 mb-6 sm:mb-8">
          {contactMethods.map((method) => {
            const IconComponent = iconMap[method.type] || Mail
            const styles = colorStyleMap[method.color] || colorStyleMap.blue
            const isEmail = method.type === 'email' || (method.href && method.href.startsWith('mailto:'))

            const cardContent = (
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  {/* Icon Box */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${styles.bg} ${styles.text} ${styles.hoverBg} group-hover:text-white flex items-center justify-center shrink-0 border ${styles.border} group-hover:scale-105 transition-all duration-200 shadow-2xs`}
                  >
                    <IconComponent className="w-5 h-5 transition-colors" />
                  </div>

                  {/* Labels */}
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {method.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors block truncate">
                      {method.value}
                    </span>
                    {method.subtext && (
                      <span className="text-[11px] text-slate-500 font-normal block truncate mt-0.5">
                        {method.subtext}
                      </span>
                    )}
                  </div>
                </div>

                {method.href && (
                  <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:bg-blue-50 flex items-center justify-center shrink-0 ml-2 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                )}
              </div>
            )

            if (method.href) {
              return (
                <motion.a
                  key={method.id}
                  href={method.href}
                  onClick={(e) => {
                    if (isEmail) {
                      e.preventDefault()
                      openEmail('jayhind01022003@gmail.com')
                    }
                  }}
                  target={isEmail ? '_self' : (method.href.startsWith('http') ? '_blank' : '_self')}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -2 }}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  aria-label={`${method.label}: ${method.value}`}
                >
                  {cardContent}
                </motion.a>
              )
            }

            return (
              <motion.div key={method.id} whileHover={{ y: -2 }}>
                {cardContent}
              </motion.div>
            )
          })}

          {/* Connect / Socials Card */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all duration-200 flex items-center justify-between group">
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              {/* Icon Box */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center shrink-0 border border-purple-100 group-hover:scale-105 transition-all duration-200 shadow-2xs">
                <MessageSquare className="w-5 h-5 transition-colors" />
              </div>

              {/* Labels & Social Icons */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Connect
                </span>
                <div className="flex items-center gap-2">
                  {socials.map((social) => {
                    const SocialIcon = socialIconMap[social.name] || FaGithub
                    const isEmail = social.name === 'Email' || (social.url && social.url.startsWith('mailto:'))

                    return (
                      <a
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
                        aria-label={`Visit my ${social.name} profile`}
                        className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-110 cursor-pointer"
                      >
                        <SocialIcon className="w-3.5 h-3.5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
