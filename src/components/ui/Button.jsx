import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md hover:shadow-primary-500/20 active:bg-primary-800 border border-transparent',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md active:bg-slate-950 border border-transparent',
  outline: 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300',
  ghost: 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent',
  glass: 'bg-white/70 text-slate-800 hover:bg-white/90 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-soft',
}

const sizes = {
  sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5 font-medium',
  md: 'text-sm px-5 py-2.5 rounded-xl gap-2 font-medium',
  lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-semibold',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  leftIcon,
  rightIcon,
  href,
  onClick,
  disabled = false,
  target,
  rel,
  type = 'button',
  ...props
}) {
  const baseClasses = cn(
    'inline-flex items-center justify-center transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className
  )

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={baseClasses}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
