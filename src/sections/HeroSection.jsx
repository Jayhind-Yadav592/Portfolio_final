import React from 'react'
import { motion } from 'framer-motion'
import { Code2, ArrowRight, FileText, Download, ChevronDown, FolderGit2, GitCommit, Briefcase } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { openEmail } from '../utils/contactUtils'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { profileData } from '../data/profile'
import { socialLinks } from '../data/socialLinks'
import jayhindPortrait from '../assets/jayhind-portrait-transparent.png'
import jayhindAvatar from '../assets/jayhind-avatar.png'
import heroBgOption2 from '../assets/hero-bg-option2-fluidwave.jpg'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  const heroStats = [
    {
      value: '20+',
      label: 'Projects Built',
      icon: FolderGit2,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20',
      glow: 'bg-blue-500/5',
    },
    {
      value: '10+',
      label: 'Technologies',
      icon: Code2,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      hoverBorder: 'hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20',
      glow: 'bg-emerald-500/5',
    },
    {
      value: '500+',
      label: 'GitHub Contributions',
      icon: GitCommit,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20',
      glow: 'bg-purple-500/5',
    },
    {
      value: '3+',
      label: 'Internships / Experience',
      icon: Briefcase,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      hoverBorder: 'hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20',
      glow: 'bg-amber-500/5',
    },
  ]

  const githubLink = socialLinks.find((l) => l.iconName === 'github')?.url || 'https://github.com'
  const linkedinLink = socialLinks.find((l) => l.iconName === 'linkedin')?.url || 'https://linkedin.com'
  const leetcodeLink = socialLinks.find((l) => l.iconName === 'leetcode')?.url || 'https://leetcode.com/u/Jayhind592/'
  const rawEmail = 'jayhind01022003@gmail.com'
  const emailLink = `mailto:${rawEmail}`

  return (
    <section
      id="hero"
      className="relative pt-3 pb-5 sm:pt-5 sm:pb-6 md:pt-6 md:pb-8 lg:pt-8 lg:pb-10 overflow-hidden bg-white/40"
    >
      {/* 3D Fluid Glassmorphism Hero Background */}
      <div className="pointer-events-none absolute inset-0 w-full h-full z-0 overflow-hidden select-none">
        <img
          src={heroBgOption2}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right md:object-right-center opacity-85 transition-opacity duration-700"
        />
        {/* Soft Left Linear Overlay for pristine text readability without obscuring 3D elements */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent z-[1]" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-[1]" 
          aria-hidden="true" 
        />
      </div>

      <Container size="lg" className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* MOBILE VIEW (< md): Clean, Balanced & Prominent Portrait Mobile Hero      */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col text-left pt-3 sm:pt-4"
          >
            {/* Top Row: Heading on Left + Large Prominent Portrait on Right */}
            <div className="flex items-center justify-between gap-3 sm:gap-4 mb-2">
              
              {/* Left Side Info */}
              <div className="flex-1 min-w-0 pr-1">
                <span className="text-xs font-semibold text-slate-500 block">
                  Hi, I’m
                </span>
                
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mt-0.5">
                  <span className="text-gradient font-black block">
                    {profileData.name}
                  </span>
                </h1>

                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1 h-3.5 bg-primary-600 rounded-full inline-block shrink-0" />
                  <p className="text-xs sm:text-sm font-bold text-primary-600 tracking-tight">
                    {profileData.role}
                  </p>
                </div>
              </div>

              {/* Right Side: Prominent Circular Portrait Frame */}
              <div className="shrink-0 relative">
                {/* Soft ambient aura */}
                <div 
                  className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-300/40 via-primary-300/30 to-violet-300/30 blur-md pointer-events-none" 
                  aria-hidden="true" 
                />
                
                {/* Portrait Circle */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-sky-200 via-blue-100 to-indigo-100 p-1 border-2 border-white shadow-card overflow-hidden flex items-end justify-center">
                  <img
                    src={jayhindAvatar}
                    alt={`Portrait of ${profileData.name}`}
                    className="w-full h-full object-cover object-top scale-105 select-none"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Tagline Description */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3 text-left"
            >
              {profileData.tagline}
            </motion.p>

            {/* CTA Action Buttons (View Projects & Professional Resume / CV Button) */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 mb-2.5 w-full"
            >
              <Button
                href="#projects"
                variant="primary"
                size="sm"
                className="flex-1 justify-center shadow-xs bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-2.5 text-xs rounded-xl"
                leftIcon={<Code2 className="w-3.5 h-3.5 mr-1" />}
              >
                Projects
              </Button>

              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 border border-slate-300 hover:border-blue-400 text-xs font-semibold shadow-2xs transition-all duration-200 group"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Resume / CV</span>
                <Download className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 pt-0.5 mb-3"
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200/80 flex items-center justify-center transition-all shadow-2xs"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200/60 flex items-center justify-center transition-all shadow-2xs"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
              </a>

              <a
                href={leetcodeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="w-8 h-8 rounded-full bg-amber-50 hover:bg-amber-600 text-amber-600 hover:text-white border border-amber-200/60 flex items-center justify-center transition-all shadow-2xs"
              >
                <SiLeetcode className="w-3.5 h-3.5" />
              </a>

              <a
                href={emailLink}
                onClick={(e) => {
                  e.preventDefault()
                  openEmail(rawEmail)
                }}
                aria-label="Send Email"
                className="w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-600 text-rose-500 hover:text-white border border-rose-200/60 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Mobile 4 Premium Glass Cards (2x2 Grid) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-2 w-full pt-1"
            >
              {heroStats.map((stat, idx) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                      opacity: 1,
                      y: [0, -3, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.4, delay: 0.2 + idx * 0.08 },
                      y: {
                        duration: 3 + idx * 0.4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: idx * 0.3,
                      },
                    }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 ${stat.hoverBorder} shadow-2xs transition-all duration-300 group overflow-hidden`}
                  >
                    {/* Subtle ambient card tint glow */}
                    <div className={`absolute -right-3 -bottom-3 w-10 h-10 rounded-full ${stat.glow} blur-md pointer-events-none`} />

                    <div className="flex items-center justify-between mb-1 relative z-10">
                      <span className="text-base font-extrabold text-slate-900 tracking-tight">
                        {stat.value}
                      </span>
                      <div className={`w-5 h-5 rounded-md ${stat.bg} ${stat.color} border ${stat.border} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200`}>
                        <IconComponent className="w-3 h-3" />
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-600 leading-tight block truncate relative z-10">
                      {stat.label}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP, LAPTOP & TABLET VIEW (>= md): 2-Column Exact Reference Layout    */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 45–50% Information & Actions with Generous Left Spacing */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-6 lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left relative z-10 md:pl-2 lg:pl-6 xl:pl-8 pt-1"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-2 lg:mb-3">
              <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-5xl xl:text-5.5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Hi, I’m
                <span className="block text-gradient font-extrabold mt-0.5">
                  {profileData.name}
                </span>
              </h1>
            </motion.div>

            {/* Role: Vertical accent bar */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 my-1 mb-3 lg:mb-4">
              <span className="w-1.5 h-5 lg:h-6 bg-primary-600 rounded-full inline-block shrink-0" />
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 tracking-tight">
                {profileData.role}
              </h2>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm lg:text-base text-slate-700 font-normal leading-relaxed mb-4 lg:mb-5 max-w-xl"
            >
              {profileData.tagline}
            </motion.p>

            {/* CTA Buttons (View Projects & Professional Resume / CV Button) */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-wrap items-center gap-3 mb-4 lg:mb-5 w-full"
            >
              <Button
                href="#projects"
                variant="primary"
                size="md"
                className="shadow-md hover:shadow-primary-500/30 bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
                leftIcon={<Code2 className="w-4 h-4 mr-1.5" />}
                rightIcon={<ArrowRight className="w-4 h-4 ml-1.5" />}
              >
                View Projects
              </Button>

              {/* Professional Resume / CV Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 border border-slate-300/90 hover:border-blue-400 text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all duration-200 cursor-pointer group"
              >
                <FileText className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Resume / CV</span>
                <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-y-0.5 transition-all" />
              </a>

              {/* Subtle Decorative Upward Growth Squiggle Arrow */}
              <div 
                className="hidden xl:block absolute -right-6 -bottom-6 pointer-events-none opacity-85 select-none" 
                aria-hidden="true"
              >
                <svg 
                  className="w-10 h-10 text-violet-400 stroke-current transform -rotate-6" 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 38 C16 36, 20 22, 30 24 C36 25, 38 16, 38 8" />
                  <path d="M28 8 H38 V18" />
                </svg>
              </div>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 mb-4 lg:mb-5"
            >
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200/80 flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200/60 flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                href={leetcodeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-amber-50 hover:bg-amber-600 text-amber-600 hover:text-white border border-amber-200/60 flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <SiLeetcode className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                href={emailLink}
                onClick={(e) => {
                  e.preventDefault()
                  openEmail(rawEmail)
                }}
                aria-label="Send Email"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-rose-50 hover:bg-rose-600 text-rose-500 hover:text-white border border-rose-200/60 flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>

            {/* 4 Premium Glass Cards (Under Social Icons) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 lg:gap-3 w-full"
            >
              {heroStats.map((stat, idx) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 18, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      y: [0, -4, 0],
                      scale: 1,
                    }}
                    transition={{
                      opacity: { duration: 0.45, delay: 0.25 + idx * 0.08 },
                      scale: { duration: 0.45, delay: 0.25 + idx * 0.08 },
                      y: {
                        duration: 3.2 + idx * 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: idx * 0.4,
                      },
                    }}
                    whileHover={{ y: -7, scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative p-2.5 lg:p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-2xs ${stat.hoverBorder} transition-all duration-300 group text-left cursor-default overflow-hidden`}
                  >
                    {/* Shimmer Light Reflection Sweep on Hover */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
                    </div>

                    {/* Ambient Glow in Card Corner */}
                    <div className={`absolute -right-4 -bottom-4 w-12 h-12 rounded-full ${stat.glow} blur-lg pointer-events-none`} />

                    <div className="flex items-center justify-between mb-1 relative z-10">
                      <span className="text-base lg:text-lg font-extrabold text-slate-900 tracking-tight group-hover:scale-105 transition-transform duration-200">
                        {stat.value}
                      </span>
                      <div className={`w-6 h-6 rounded-lg ${stat.bg} ${stat.color} border ${stat.border} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-120 group-hover:rotate-12 transition-all duration-300`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 group-hover:text-slate-900 leading-tight block transition-colors duration-200 relative z-10">
                      {stat.label}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: 50–55% Clean Large Portrait & Ambient Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="md:col-span-6 lg:col-span-6 xl:col-span-6 flex items-center justify-center relative w-full"
          >
            <div className="relative w-full max-w-[360px] md:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] flex items-center justify-center">
              
              {/* Soft Ambient Background Glow */}
              <div 
                className="pointer-events-none absolute w-[340px] h-[340px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-tr from-sky-300/30 via-indigo-300/25 to-violet-300/20 blur-2xl z-0" 
                aria-hidden="true" 
              />

              {/* Glassmorphic Ambient Ring */}
              <div 
                className="pointer-events-none absolute w-[320px] h-[320px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] xl:w-[460px] xl:h-[460px] rounded-full border border-white/80 bg-white/10 backdrop-blur-[2px] shadow-sm z-0" 
                aria-hidden="true" 
              />

              {/* Dotted Grid Pattern on Top-Right */}
              <div 
                className="pointer-events-none absolute top-4 right-0 lg:right-4 grid grid-cols-5 gap-2 opacity-40 z-0 select-none" 
                aria-hidden="true" 
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                ))}
              </div>

              {/* Floating Decorative Purple Ring on Top-Left */}
              <div 
                className="pointer-events-none absolute top-8 left-4 lg:left-8 w-3.5 h-3.5 rounded-full border-2 border-violet-400/80 z-0 select-none" 
                aria-hidden="true" 
              />

              {/* Jayhind Yadav Professional Portrait */}
              <div className="relative z-10 w-full flex items-end justify-center">
                <img
                  src={jayhindPortrait}
                  alt={`Portrait of ${profileData.name} - ${profileData.role}`}
                  className="w-full h-auto max-h-[420px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[540px] object-contain object-bottom select-none drop-shadow-md transform hover:scale-[1.01] transition-transform duration-300"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                  }}
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden md:flex flex-col items-center justify-center mt-1 lg:mt-2 text-slate-400 hover:text-primary-600 transition-colors cursor-pointer select-none"
          onClick={() => {
            const aboutSec = document.getElementById('about')
            if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-[10px] font-mono tracking-wider mb-1 uppercase font-medium">
            Scroll Down
          </span>
          <div className="w-4.5 h-7 rounded-full border-2 border-slate-300 flex items-start justify-center p-0.5">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-slate-500"
            />
          </div>
          <ChevronDown className="w-3 h-3 mt-0.5 text-slate-400" />
        </motion.div>
      </Container>
    </section>
  )
}
