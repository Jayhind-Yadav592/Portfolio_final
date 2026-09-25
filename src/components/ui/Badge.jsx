import React from 'react'
import { cn } from '../../utils/cn'

const badgeVariants = {
  primary: 'bg-primary-50 text-primary-700 border-primary-200/60',
  secondary: 'bg-slate-100 text-slate-700 border-slate-200',
  accent: 'bg-accent-50 text-accent-700 border-accent-200/60',
  outline: 'bg-transparent text-slate-600 border-slate-200',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
  gradient: 'bg-gradient-to-r from-primary-50 to-accent-50 text-primary-800 border-primary-200/60',
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  icon,
  className,
  ...props
}) {
  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-full font-medium gap-1',
    md: 'text-xs px-3 py-1 rounded-full font-medium gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 rounded-full font-semibold gap-2',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center border transition-colors select-none',
        badgeVariants[variant] || badgeVariants.primary,
        sizeClasses[size] || sizeClasses.md,
        className
      )}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-subtle" />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  )
}
