import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function HighlightCard({
  icon: Icon,
  title,
  description,
  accentColor = 'text-primary-600',
  bgColor = 'bg-primary-50',
  borderColor = 'border-primary-100',
  className,
}) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={cn(
        'p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group',
        className
      )}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className={cn(
              'w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 shadow-2xs',
              bgColor,
              borderColor
            )}
          >
            {Icon && <Icon className={cn('w-5 h-5', accentColor)} />}
          </div>
          <h4 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight">
            {title}
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
