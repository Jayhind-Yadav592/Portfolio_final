import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import ProjectCard from '../components/common/ProjectCard'
import { projectsData } from '../data/projects'

export default function ProjectsSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-8 sm:py-10 md:py-12 lg:py-14 bg-white relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-9">
          {/* Eyebrow Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2.5">
            MY WORK
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-blue-600">Projects</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2.5" />

          {/* Short Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1.5">
            Here are some of the projects I have built using modern technologies.
          </p>
        </div>

        {/* 3-Column Responsive Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 max-w-7xl mx-auto"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
