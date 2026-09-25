import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { cn } from '../../utils/cn'

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  isExternal = true,
  className,
}) {
  const content = (
    <div
      className={cn(
        'p-3.5 sm:p-4 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-200/90 hover:border-primary-400 hover:shadow-card transition-all duration-200 flex items-center justify-between group cursor-pointer text-left',
        className
      )}
    >
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-white text-primary-600 flex items-center justify-center border border-slate-200/90 shrink-0 group-hover:scale-105 group-hover:bg-primary-600 group-hover:text-white transition-all duration-200 shadow-2xs">
          {Icon && <Icon className="w-5 h-5" />}
        </div>
        <div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
            {label}
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
            {value}
          </span>
        </div>
      </div>

      {href && (
        <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-400 group-hover:text-primary-600 group-hover:border-primary-300 flex items-center justify-center transition-all shadow-2xs">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        whileHover={{ y: -2 }}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl"
        aria-label={`${label}: ${value}`}
      >
        {content}
      </motion.a>
    )
  }

  return content
}
