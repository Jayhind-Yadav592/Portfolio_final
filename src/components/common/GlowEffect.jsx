import React from 'react'
import { cn } from '../../utils/cn'

export default function GlowEffect({
  className,
  color = 'indigo', // 'indigo' | 'purple' | 'blue'
  size = 'md', // 'sm' | 'md' | 'lg'
}) {
  const colorMap = {
    indigo: 'bg-indigo-400/15',
    purple: 'bg-purple-400/15',
    blue: 'bg-sky-400/15',
  }

  const sizeMap = {
    sm: 'w-64 h-64 blur-2xl',
    md: 'w-96 h-96 blur-3xl',
    lg: 'w-[500px] h-[500px] blur-3xl',
  }

  return (
    <div
      className={cn(
        'pointer-events-none absolute -z-10 rounded-full select-none transform-gpu',
        colorMap[color] || colorMap.indigo,
        sizeMap[size] || sizeMap.md,
        className
      )}
      aria-hidden="true"
    />
  )
}
