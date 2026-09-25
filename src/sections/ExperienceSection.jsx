import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import ExperienceCard from '../components/common/ExperienceCard'
import { experiences } from '../data/experience'

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <section id="experience" className="py-8 sm:py-10 md:py-12 lg:py-14 bg-white relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-9">
          {/* Eyebrow Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2.5">
            MY JOURNEY
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional <span className="text-blue-600">Experience</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2.5" />

          {/* Short Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1.5">
            A timeline of my internships and professional growth.
          </p>
        </div>

        {/* Main Vertical Timeline Container - Wide Modern Layout */}
        <div className="relative max-w-5xl lg:max-w-6xl mx-auto">
          
          {/* Base Timeline Guide Track */}
          <div 
            className="absolute left-4 sm:left-6 md:left-7 top-6 bottom-6 w-[2px] bg-slate-200/80 rounded-full overflow-hidden"
            aria-hidden="true"
          >
            {/* Animated Glowing Light Beam traveling continuously down the vertical line */}
            <motion.div
              className="w-full h-32 bg-gradient-to-b from-transparent via-blue-600 to-transparent rounded-full shadow-[0_0_10px_rgba(37,99,235,0.9)]"
              animate={{
                y: ['-100%', '500%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Static Gradient Overlay for pristine contrast */}
          <div 
            className="absolute left-4 sm:left-6 md:left-7 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-600/30 via-blue-500/20 to-transparent rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Staggered Experience Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-6 sm:space-y-7 md:space-y-8"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex items-start group"
              >
                {/* Timeline Circular Node with Animated Halo */}
                <div className="absolute left-4 sm:left-6 md:left-7 -translate-x-1/2 top-6 z-10">
                  {/* Live pulsing radar halo for current role */}
                  {exp.isCurrent && (
                    <motion.div
                      className="absolute -inset-1.5 rounded-full bg-blue-500/30 pointer-events-none"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                  
                  {/* Core Node Circle */}
                  <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${
                    exp.isCurrent ? 'bg-blue-600 ring-4 ring-blue-200' : 'bg-blue-600 ring-2 sm:ring-4 ring-blue-100'
                  } border-2 sm:border-[3px] border-white shadow-xs group-hover:scale-125 group-hover:ring-blue-300 transition-all duration-300`} />
                </div>

                {/* Experience Card with Left Margin to clear Timeline Line */}
                <div className="w-full pl-9 sm:pl-14 md:pl-16">
                  <ExperienceCard experience={exp} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
