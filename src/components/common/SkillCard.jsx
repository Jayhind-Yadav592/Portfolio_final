import React from 'react'
import { motion } from 'framer-motion'

export default function SkillCard({ skill }) {
  const IconComponent = skill.icon

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group flex flex-col items-center justify-center text-center p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400/80 transition-all duration-200 cursor-default h-full min-h-[128px] sm:min-h-[140px]"
    >
      {/* Centered Technology Icon Box */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-3 sm:mb-3.5 transition-transform duration-200 group-hover:scale-110">
        {IconComponent && (
          <IconComponent
            className="w-8 h-8 sm:w-9 sm:h-9"
            style={{ color: skill.color }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Technology Name */}
      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
        {skill.name}
      </span>
    </motion.div>
  )
}
