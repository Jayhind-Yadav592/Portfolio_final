import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const iconVariants = {
  default: 'bg-white border border-slate-200 text-slate-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50/50 shadow-xs',
  glass: 'bg-white/80 backdrop-blur-sm border border-slate-200/80 text-slate-700 hover:text-primary-600 hover:border-primary-300 hover:bg-white shadow-soft',
  primary: 'bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white border border-primary-200/60',
  ghost: 'bg-transparent text-slate-600 hover:text-primary-600 hover:bg-slate-100 border border-transparent',
}

const iconSizes = {
  sm: 'w-8 h-8 text-sm rounded-lg',
  md: 'w-10 h-10 text-base rounded-xl',
  lg: 'w-12 h-12 text-lg rounded-xl',
}

export default function SocialIcon({
  icon,
  href,
  label,
  variant = 'default',
  size = 'md',
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...props
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      title={label}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-200 cursor-pointer',
        iconVariants[variant] || iconVariants.default,
        iconSizes[size] || iconSizes.md,
        className
      )}
      {...props}
    >
      {icon}
    </motion.a>
  )
}
