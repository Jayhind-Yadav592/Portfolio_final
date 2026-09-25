import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = '916393496909'
  const defaultMessage = 'Hi Jayhind, I came across your portfolio website and would like to connect!'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5">
      {/* Tooltip on Hover / Large Screen Badge */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md text-white shadow-xl border border-slate-700/80 text-xs font-semibold select-none pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Container */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jayhind on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Subtle Pulse Animation Wave */}
        <span 
          className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" 
          aria-hidden="true" 
        />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />

        {/* Green Online Dot Badge */}
        <span 
          className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full z-20" 
          title="Online"
        />
      </motion.a>
    </div>
  )
}
