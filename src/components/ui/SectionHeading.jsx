import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import Badge from './Badge'

export default function SectionHeading({
  badge,
  badgeVariant = 'gradient',
  title,
  gradientTitle,
  description,
  align = 'center', // 'left' | 'center'
  className,
}) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(
        'mb-6 sm:mb-8',
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-2.5', isCenter ? 'flex justify-center' : 'flex justify-start')}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-3.5xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}{' '}
        {gradientTitle && (
          <span className="text-gradient">{gradientTitle}</span>
        )}
      </h2>

      {description && (
        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
