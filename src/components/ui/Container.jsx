import React from 'react'
import { cn } from '../../utils/cn'

export default function Container({
  children,
  className,
  size = 'default', // 'sm' | 'default' | 'lg' | 'full'
  ...props
}) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size] || sizeClasses.default,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
