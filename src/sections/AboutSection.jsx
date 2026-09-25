import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Terminal,
  CheckCircle2
} from 'lucide-react'
import Container from '../components/ui/Container'
import { profileData } from '../data/profile'

export default function AboutSection() {
  const highlights = [
    'Clean architecture & scalable REST APIs',
    'Production backend engineering with Django & FastAPI',
    'Relational & NoSQL database management',
    'Containerized workflows with Docker & Cloud deployments',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="py-7 sm:py-9 md:py-12 bg-white relative overflow-hidden">
      <Container size="lg">
        {/* Centered Section Header with Scroll-in Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-5 sm:mb-7 md:mb-8"
        >
          {/* Eyebrow Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2">
            ABOUT ME
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Building Robust Backend & <span className="text-blue-600">Full Stack Systems</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1">
            Full Stack Python Developer based in Hyderabad, India — dedicated to clean architecture, REST APIs, and scalable web solutions.
          </p>
        </motion.div>

        {/* Centered Comprehensive About Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-7 md:p-9 shadow-xs hover:shadow-md transition-all duration-300 text-left"
        >
          {/* Quick Profile Summary Badge Row */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-5 pb-3.5 sm:pb-4 border-b border-slate-100">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Hyderabad, India</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
              <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Full Stack Python Dev @ LionIX LLP</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>B.Tech CSE (2026)</span>
            </span>
          </div>

          {/* Bio Story Paragraphs */}
          <div className="space-y-3.5 sm:space-y-4 text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
            <p className="font-medium text-slate-900 leading-normal">
              Hi, I'm <strong className="text-blue-700 font-bold">Jayhind Yadav</strong> — a Full Stack Python Developer based in <span className="font-semibold text-slate-800">Hyderabad, India</span>. I completed my B.Tech in Computer Science from <span className="font-semibold text-slate-800">Kasireddy Narayanreddy College</span> in 2026, and since then I've been building backend-heavy web applications with a focus on clean architecture and real-world problem solving.
            </p>
            <p className="text-slate-600">
              My journey started with two frontend internships — at <strong className="text-slate-800">Cognifyz Technologies</strong> and <strong className="text-slate-800">Codveda Technologies</strong> — where I got hands-on with HTML5, CSS3, and JavaScript, building the foundation for how I think about the full stack today.
            </p>
            <p className="text-slate-600 pt-2 border-t border-slate-100">
              Currently, I work as a <strong className="text-slate-900">Full Stack Python Developer at LionIX LLP</strong>, where I build and ship production backend systems using <strong className="text-blue-700">Django</strong>, <strong className="text-blue-700">DRF</strong>, and <strong className="text-blue-700">FastAPI</strong>.
            </p>
          </div>

          {/* Core Philosophy / Highlights with Staggered Motion */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>Engineering Principles & Focus</span>
            </h4>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5"
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
