import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  className,
}) {
  return (
    <div className={cn('flex items-center justify-center w-full mb-5 sm:mb-6', className)}>
      <div className="flex items-center gap-1 p-1 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs max-w-full overflow-x-auto no-scrollbar">
        {categories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={cn(
                'relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 select-none whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 cursor-pointer',
                isActive
                  ? 'text-primary-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 rounded-lg bg-primary-50 border border-primary-200/80 shadow-2xs -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}
