import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import EducationCard from '../components/common/EducationCard'
import { educationList } from '../data/education'

export default function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="education" className="py-6 sm:py-8 md:py-10 bg-white relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 md:mb-7">
          {/* Eyebrow Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2">
            EDUCATION
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic <span className="text-blue-600">Qualifications</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1">
            My educational background and academic journey.
          </p>
        </div>

        {/* 3 Education Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto items-stretch"
        >
          {educationList.map((edu) => (
            <motion.div key={edu.id} variants={itemVariants} className="h-full flex">
              <EducationCard education={edu} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
