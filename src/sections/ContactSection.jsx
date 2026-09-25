import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import ContactInfo from '../components/common/ContactInfo'
import ContactForm from '../components/common/ContactForm'
import { contactData } from '../data/contact'

export default function ContactSection() {
  const { header } = contactData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="py-8 sm:py-10 md:py-12 lg:py-14 bg-white relative">
      <Container size="lg">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-9">
          {/* Eyebrow */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2.5">
            {header.eyebrow}
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {header.title} <span className="text-blue-600">{header.highlightedTitle}</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2.5" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1.5">
            {header.description}
          </p>
        </div>

        {/* 2-Column Responsive Layout (45% left / 55% right on desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 max-w-6xl mx-auto items-stretch"
        >
          {/* Left Column: Let's Talk, Contact Info & Socials */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col">
            <ContactInfo />
          </motion.div>

          {/* Right Column: Send Me a Message Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col">
            <ContactForm />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
