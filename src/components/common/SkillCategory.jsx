import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import { cn } from '../../utils/cn'

export default function SkillCategory({ category }) {
  const IconComponent = category.icon

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-primary-300 transition-all duration-300 p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full relative overflow-hidden group">
      
      {/* Top Accent Color Line */}
      <div 
        className={cn(
          'absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r',
          category.id === 'backend' && 'from-primary-600 via-indigo-600 to-purple-600',
          category.id === 'database' && 'from-indigo-500 to-blue-600',
          category.id === 'devops' && 'from-amber-500 to-orange-600',
          category.id === 'frontend' && 'from-sky-400 to-blue-500',
          category.id === 'ai-tools' && 'from-purple-500 to-rose-500'
        )} 
      />

      <div>
        {/* Category Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div
              className={cn(
                'w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200',
                category.bgColor,
                category.borderColor
              )}
            >
              {IconComponent && (
                <IconComponent className={cn('w-5 h-5', category.accentColor)} />
              )}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {category.title}
                </h3>
                {category.badge && (
                  <span className={cn(
                    'text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border',
                    category.id === 'backend' ? 'bg-primary-50 text-primary-700 border-primary-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                  )}>
                    {category.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-normal max-w-xl">
                {category.subtitle}
              </p>
            </div>
          </div>

          {/* Skill Count Badge */}
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-mono font-semibold shrink-0">
            {category.skills.length} Skills
          </span>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {category.skills.map((skill) => (
            <motion.div key={skill.name} variants={childVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
