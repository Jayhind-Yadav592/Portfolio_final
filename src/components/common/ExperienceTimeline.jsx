import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

export default function ExperienceTimeline({ experiences }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical Timeline Track Line */}
      <div 
        className="absolute left-4 sm:left-6 top-3 bottom-6 w-0.5 bg-gradient-to-b from-primary-500 via-indigo-300 to-slate-200"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="space-y-4 sm:space-y-5 relative z-10"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="relative pl-9 sm:pl-14 group"
          >
            {/* Timeline Node */}
            <div className="absolute left-4 sm:left-6 top-5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-[2.5px] border-primary-600 shadow-sm group-hover:scale-125 group-hover:border-accent-600 transition-all duration-200 z-20 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-accent-600 transition-colors" />
            </div>

            {/* Experience Card */}
            <ExperienceCard experience={exp} isRecent={exp.isRecent} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
