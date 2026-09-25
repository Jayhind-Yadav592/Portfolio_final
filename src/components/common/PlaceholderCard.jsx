import React from 'react'
import { cn } from '../../utils/cn'

export default function PlaceholderCard({
  icon,
  title,
  subtitle,
  children,
  className,
  dashed = false,
}) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-200',
        dashed
          ? 'border-2 border-dashed border-slate-200/90 bg-slate-50/40 hover:bg-slate-50/80 hover:border-slate-300'
          : 'border border-slate-200/80 bg-white/70 shadow-soft hover:shadow-card-hover backdrop-blur-sm',
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 border border-primary-100">
          {icon}
        </div>
      )}
      {title && (
        <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">
          {title}
        </h4>
      )}
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-4 w-full">{children}</div>}
    </div>
  )
}
