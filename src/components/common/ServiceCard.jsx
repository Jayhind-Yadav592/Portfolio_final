import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, Sparkles } from 'lucide-react'

export default function ServiceCard({ service, onOpenDetails }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group flex flex-col justify-between h-full rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/80 transition-all duration-300 text-left overflow-hidden"
    >
      <div>
        {/* Compact Service Banner Image Header */}
        <div
          onClick={() => onOpenDetails && onOpenDetails(service.id)}
          className="aspect-[16/8] w-full relative overflow-hidden bg-slate-100 rounded-t-2xl border-b border-slate-100 cursor-pointer group/img"
        >
          <img
            src={service.bannerImage}
            alt={service.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle Gradient & Hover Quick View Overlay */}
          <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/30 transition-colors duration-200 flex items-center justify-center">
            <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 px-2.5 py-1 rounded-full bg-white/95 text-slate-900 text-[11px] font-semibold shadow-xs flex items-center gap-1.5 transform translate-y-1 group-hover/img:translate-y-0 duration-200">
              <Eye className="w-3 h-3 text-blue-600" />
              <span>Explore Details</span>
            </span>
          </div>

          {/* Service Feature Badge Tag */}
          <div className="absolute top-2 left-2 z-10 pointer-events-none">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${service.badgeColor} shadow-2xs backdrop-blur-xs`}>
              <Sparkles className="w-2.5 h-2.5" />
              <span>{service.badge}</span>
            </span>
          </div>
        </div>

        {/* Service Card Content Body */}
        <div className="p-3.5 sm:p-4 pb-2">
          {/* Service Title */}
          <h3
            onClick={() => onOpenDetails && onOpenDetails(service.id)}
            className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1 cursor-pointer"
          >
            {service.title}
          </h3>

          {/* Service Description (Compact 2 Lines) */}
          <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2 mb-2.5">
            {service.shortDescription || service.description}
          </p>

          {/* Mini Tech Stack Pills */}
          <div className="flex flex-wrap gap-1 mb-1">
            {service.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/70"
              >
                {tech}
              </span>
            ))}
            {service.techStack.length > 3 && (
              <span className="text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                +{service.techStack.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Learn More Action Button */}
      <div className="px-3.5 pb-3.5 pt-0">
        <button
          onClick={() => onOpenDetails && onOpenDetails(service.id)}
          className="w-full py-1.5 px-3 rounded-lg border border-blue-200 bg-blue-50/60 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs transition-all duration-200 cursor-pointer group/btn"
          aria-label={`Learn more about ${service.title}`}
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  )
}
