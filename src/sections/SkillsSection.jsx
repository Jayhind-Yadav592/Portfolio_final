import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import SkillCategoryCard from '../components/common/SkillCategoryCard'
import { skillCategories } from '../data/skills'

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-8 sm:py-10 md:py-12 lg:py-14 bg-white relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-9">
          {/* Eyebrow Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2.5">
            MY SKILLS
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & <span className="text-blue-600">Technologies</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2.5" />

          {/* Short Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1.5">
            Here are the tools and technologies I work with to build modern and scalable web applications.
          </p>
        </div>

        {/* 2x2 Category-wise Compact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-6xl mx-auto items-stretch"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.id} variants={cardVariants} className="h-full flex flex-col">
              <SkillCategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
