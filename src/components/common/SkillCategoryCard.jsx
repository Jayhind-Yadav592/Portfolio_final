import React from 'react'
import { motion } from 'framer-motion'

const themeStyles = {
  backend: {
    cardBorder: 'border-2 border-blue-500 hover:border-blue-600 shadow-md shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20',
    headerBorder: 'border-b-2 border-blue-200',
    topAccent: 'from-blue-600 to-indigo-600',
    iconBox: 'text-blue-700 bg-blue-100/90 border-2 border-blue-300',
    badge: 'bg-blue-100 text-blue-800 border-2 border-blue-400 font-bold',
    skillCard: 'bg-blue-50/40 border border-blue-300 hover:bg-blue-100/80 hover:border-blue-500 hover:shadow-xs',
    skillIconBg: 'bg-white border border-blue-300 shadow-2xs',
    skillText: 'text-slate-800 group-hover/skill:text-blue-900',
  },
  frontend: {
    cardBorder: 'border-2 border-emerald-500 hover:border-emerald-600 shadow-md shadow-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20',
    headerBorder: 'border-b-2 border-emerald-200',
    topAccent: 'from-emerald-600 to-teal-600',
    iconBox: 'text-emerald-700 bg-emerald-100/90 border-2 border-emerald-300',
    badge: 'bg-emerald-100 text-emerald-800 border-2 border-emerald-400 font-bold',
    skillCard: 'bg-emerald-50/40 border border-emerald-300 hover:bg-emerald-100/80 hover:border-emerald-500 hover:shadow-xs',
    skillIconBg: 'bg-white border border-emerald-300 shadow-2xs',
    skillText: 'text-slate-800 group-hover/skill:text-emerald-900',
  },
  database: {
    cardBorder: 'border-2 border-amber-500 hover:border-amber-600 shadow-md shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20',
    headerBorder: 'border-b-2 border-amber-200',
    topAccent: 'from-amber-500 to-orange-500',
    iconBox: 'text-amber-800 bg-amber-100/90 border-2 border-amber-300',
    badge: 'bg-amber-100 text-amber-900 border-2 border-amber-400 font-bold',
    skillCard: 'bg-amber-50/40 border border-amber-300 hover:bg-amber-100/80 hover:border-amber-500 hover:shadow-xs',
    skillIconBg: 'bg-white border border-amber-300 shadow-2xs',
    skillText: 'text-slate-800 group-hover/skill:text-amber-950',
  },
  'devops-tools': {
    cardBorder: 'border-2 border-purple-500 hover:border-purple-600 shadow-md shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20',
    headerBorder: 'border-b-2 border-purple-200',
    topAccent: 'from-purple-600 to-fuchsia-600',
    iconBox: 'text-purple-700 bg-purple-100/90 border-2 border-purple-300',
    badge: 'bg-purple-100 text-purple-800 border-2 border-purple-400 font-bold',
    skillCard: 'bg-purple-50/40 border border-purple-300 hover:bg-purple-100/80 hover:border-purple-500 hover:shadow-xs',
    skillIconBg: 'bg-white border border-purple-300 shadow-2xs',
    skillText: 'text-slate-800 group-hover/skill:text-purple-900',
  },
}

export default function SkillCategoryCard({ category }) {
  const CategoryIcon = category.icon
  const style = themeStyles[category.id] || themeStyles.backend

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`bg-white border-2 ${style.cardBorder} rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full text-left group relative overflow-hidden`}
    >
      {/* Top Accent Color Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${style.topAccent}`} />

      <div>
        {/* Category Header */}
        <div className={`flex items-center justify-between gap-3 pb-3.5 ${style.headerBorder}`}>
          <div className="flex items-center gap-3 min-w-0">
            {/* Category Icon Container */}
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${style.iconBox} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200`}>
              {CategoryIcon && <CategoryIcon className="w-5 h-5" />}
            </div>

            {/* Title & Subtitle */}
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight truncate">
                {category.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 font-medium truncate mt-0.5">
                {category.subtitle}
              </p>
            </div>
          </div>

          {/* Skill Count Pill */}
          <span className={`px-2.5 py-1 rounded-full text-[11px] shrink-0 ${style.badge}`}>
            {category.skills.length} Skills
          </span>
        </div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-4 sm:mt-5">
          {category.skills.map((skill) => {
            const SkillIcon = skill.icon

            return (
              <motion.div
                key={skill.id}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className={`group/skill flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl ${style.skillCard} shadow-2xs transition-all duration-200 cursor-default`}
              >
                {/* Brand Icon */}
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg ${style.skillIconBg} flex items-center justify-center shrink-0 group-hover/skill:scale-115 group-hover/skill:rotate-6 transition-transform duration-200`}>
                  {SkillIcon && (
                    <SkillIcon
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Skill Name */}
                <span className={`text-xs sm:text-[13px] font-semibold ${style.skillText} transition-colors leading-tight truncate`}>
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
