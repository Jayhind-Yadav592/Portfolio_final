import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import GithubCard from '../components/common/GithubCard'
import LeetCodeCard from '../components/common/LeetCodeCard'
import { codingJourneyData } from '../data/github'

export default function GithubSection() {
  const { section } = codingJourneyData

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
    <section id="coding-journey" className="py-6 sm:py-8 md:py-10 bg-white relative">
      {/* Optional anchor targets for seamless deep linking */}
      <div id="github" className="absolute -top-20" />
      <div id="activity" className="absolute -top-20" />

      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 md:mb-7">
          {/* Eyebrow Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2">
            {section.eyebrow}
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {section.title} <span className="text-blue-600">{section.highlightedTitle}</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1">
            {section.description}
          </p>
        </div>

        {/* 2-Column Grid: Left GitHub Card, Right LeetCode Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch"
        >
          {/* Left Card: GitHub Profile & Repos */}
          <motion.div variants={itemVariants} className="h-full flex flex-col">
            <GithubCard />
          </motion.div>

          {/* Right Card: LeetCode Profile & Activity */}
          <motion.div variants={itemVariants} className="h-full flex flex-col">
            <LeetCodeCard />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
