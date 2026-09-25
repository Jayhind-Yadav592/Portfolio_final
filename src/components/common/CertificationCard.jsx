import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowUpRight, Award, ExternalLink, X, Eye } from 'lucide-react'

export default function CertificationCard({ cert }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="group flex flex-col justify-between h-full rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/80 transition-all duration-300 overflow-hidden text-left"
      >
        <div>
          {/* Certificate Image Preview Header */}
          <div 
            onClick={() => setShowModal(true)}
            className="aspect-[16/10] w-full relative overflow-hidden bg-slate-100 rounded-t-2xl border-b border-slate-100 cursor-pointer group/img"
          >
            <img
              src={cert.image}
              alt={`${cert.title} - ${cert.issuer}`}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Hover Quick View Overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/30 transition-colors duration-200 flex items-center justify-center">
              <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-xs flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span>Preview</span>
              </span>
            </div>

            {/* Category Pill Tag */}
            <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-blue-700 border border-blue-100/90 shadow-2xs backdrop-blur-xs">
                <Award className="w-2.5 h-2.5 text-blue-600" />
                <span>{cert.category}</span>
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-3.5 sm:p-4 pb-2.5">
            {/* Certificate Title */}
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1 mb-1">
              {cert.title}
            </h3>

            {/* Issuer & Date */}
            <div className="flex items-center justify-between gap-1.5 text-xs text-slate-500 font-medium my-1.5">
              <span className="font-semibold text-slate-700 truncate">
                {cert.issuer}
              </span>
              <div className="inline-flex items-center gap-1 text-slate-500 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{cert.dateDisplay}</span>
              </div>
            </div>

            {/* Skill / Technology Tags */}
            <div className="flex flex-wrap gap-1.5 my-2">
              {cert.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/70 group-hover:border-blue-200 group-hover:bg-blue-50/40 group-hover:text-blue-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* View & Verify Certificate Link Button */}
        <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-0">
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify Certificate - ${cert.title}`}
            className="w-full py-2 px-3 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-600 hover:text-white text-blue-700 text-xs sm:text-[13px] font-semibold flex items-center justify-center gap-1.5 shadow-2xs transition-all duration-200 cursor-pointer group/btn"
          >
            <span>View / Verify</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>

      {/* Fullscreen Certificate Lightbox Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/80">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Issued by <span className="font-semibold text-slate-700">{cert.issuer}</span> • {cert.dateDisplay}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-2xs"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Full HD Certificate Image View */}
              <div className="p-3 sm:p-4 bg-slate-900/5 max-h-[75vh] overflow-auto flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={`${cert.title} Full Certificate`}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-md border border-slate-200"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
