import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const cardVariants = {
  default: 'bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-primary-300/90',
  elevated: 'bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:border-primary-400',
  subtle: 'bg-slate-50/90 backdrop-blur-sm border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-card',
  gradient: 'bg-gradient-to-b from-white via-white to-slate-50/80 backdrop-blur-md border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-primary-300',
  interactive: 'bg-white backdrop-blur-md border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-primary-400 cursor-pointer',
}

export default function GlassCard({
  children,
  className,
  variant = 'default',
  padding = 'p-6',
  hoverEffect = true,
  animate = true,
  onClick,
  ...props
}) {
  const cardClasses = cn(
    'relative rounded-2xl transition-all duration-300 overflow-hidden',
    padding,
    cardVariants[variant] || cardVariants.default,
    hoverEffect && 'hover:-translate-y-1',
    className
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={cardClasses}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  )
}
