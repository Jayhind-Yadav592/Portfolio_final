import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, School, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import EducationVisual from './EducationVisual'
import { cn } from '../../utils/cn'

export default function EducationCard({ education }) {
  const renderIcon = () => {
    switch (education.iconType) {
      case 'graduation':
        return <GraduationCap className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
      case 'book':
        return <BookOpen className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
      case 'school':
      default:
        return <School className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
    }
  }

  const getIconBg = () => {
    switch (education.iconType) {
      case 'graduation':
        return 'bg-blue-600'
      case 'book':
        return 'bg-emerald-600'
      case 'school':
      default:
        return 'bg-purple-600'
    }
  }

  const renderStatusBadge = () => {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span>Completed</span>
      </span>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex flex-col justify-between h-full rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400/80 transition-all duration-300 overflow-hidden text-left"
    >
      <div>
        {/* 16:9 Institution Campus Image */}
        <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-100 rounded-t-2xl border-b border-slate-100">
          <div className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-105">
            <EducationVisual type={education.imageType} />
          </div>
        </div>

        {/* Circular Education Icon (Overlapping bottom edge of image) */}
        <div className="-mt-5 ml-4 sm:ml-5 relative z-10">
          <div className={cn(
            'w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-transform duration-200 group-hover:scale-110',
            getIconBg()
          )}>
            {renderIcon()}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5 pt-2">
          {/* Degree / Qualification */}
          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-0.5">
            {education.degree}
          </h3>

          {/* Stream / Specialization */}
          <p className="text-xs font-semibold text-blue-600 mb-0.5">
            {education.specialization}
          </p>

          {/* Institution Name */}
          <p className="text-xs font-medium text-slate-700 mb-2.5 line-clamp-1">
            {education.institution}
          </p>

          {/* Metadata Row: Date & Location */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 font-medium pb-2.5 border-b border-slate-100">
            <div className="inline-flex items-center gap-1 text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{education.duration}</span>
            </div>
            {education.location && (
              <div className="inline-flex items-center gap-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{education.location}</span>
              </div>
            )}
          </div>

          {/* Concise Description */}
          <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2.5">
            {education.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Status Badge */}
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
        {renderStatusBadge()}
      </div>
    </motion.div>
  )
}
