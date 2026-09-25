import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react'
import lionixLogo from '../../assets/lionix-logo.png'

// Company Logo Component tailored to authentic reference designs
function CompanyLogo({ type, company }) {
  if (type === 'lionix') {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center shrink-0 p-1 group-hover:scale-105 transition-transform duration-200 overflow-hidden">
        <img
          src={lionixLogo}
          alt={company || 'LionIX LLP'}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    )
  }

  if (type === 'cognifyz') {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-tr from-sky-50 to-blue-50 border border-sky-100/80 shadow-2xs flex items-center justify-center shrink-0 p-2 group-hover:scale-105 transition-transform duration-200">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <circle cx="50" cy="50" r="38" stroke="url(#cognifyz-grad)" strokeWidth="12" strokeLinecap="round" strokeDasharray="160 50" />
          <circle cx="50" cy="50" r="18" fill="#0284C7" />
          <defs>
            <linearGradient id="cognifyz-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  if (type === 'codveda') {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-2xs flex items-center justify-center shrink-0 p-2 group-hover:scale-105 transition-transform duration-200">
        <svg viewBox="0 0 100 100" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
          <rect x="25" y="25" width="50" height="50" rx="10" transform="rotate(45 50 50)" stroke="#FFFFFF" strokeWidth="8" />
          <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
        </svg>
      </div>
    )
  }

  // The Developers Arena (TDA)
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-900 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
      <span className="text-white font-extrabold font-mono text-xs sm:text-sm tracking-wider">
        TDA
      </span>
    </div>
  )
}

export default function ExperienceCard({ experience }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group w-full p-5 sm:p-6 md:p-7 rounded-2xl bg-white border ${
        experience.isCurrent
          ? 'border-blue-300 shadow-xs hover:border-blue-500 hover:shadow-md'
          : 'border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400/70'
      } transition-all duration-300 text-left relative overflow-hidden`}
    >
      {/* Top Row: Logo + Company/Role on Left, Date/Location on Right */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3">
        {/* Left Side: Logo & Titles */}
        <div className="flex items-center gap-3.5">
          <CompanyLogo type={experience.logoType} company={experience.company} />
          
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                {experience.company}
              </h3>
              {experience.isCurrent && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Present</span>
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
              {experience.role}
            </p>
          </div>
        </div>

        {/* Right Side: Date & Location Metadata */}
        <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 sm:gap-1 text-xs text-slate-500 font-medium shrink-0 pt-0.5">
          <div className="inline-flex items-center gap-1.5 text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{experience.dateDisplay}</span>
          </div>
          {experience.location && (
            <div className="inline-flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{experience.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal my-3 sm:my-4">
        {experience.description}
      </p>

      {/* Technology Badges & Optional Certificate Verification Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3.5 border-t border-slate-100">
        <div className="flex flex-wrap items-center gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:border-blue-200 group-hover:bg-blue-50/40 group-hover:text-blue-800 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {experience.certificateUrl && (
          <a
            href={experience.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${experience.company} Certificate`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200/90 hover:border-blue-600 text-xs font-bold shadow-2xs hover:shadow-xs transition-all duration-200 group/btn cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <Award className="w-3.5 h-3.5 text-blue-600 group-hover/btn:text-white transition-colors" />
            <span>View Certificate</span>
            <ExternalLink className="w-3 h-3 text-blue-400 group-hover/btn:text-white transition-colors" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
