import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  Users,
  UserCheck,
  Workflow,
  Clock,
  ShieldCheck,
  Zap,
  Code2,
  Rocket
} from 'lucide-react'
import { servicesData } from '../../data/services'

export default function ServiceDetailModal({ activeServiceId, onClose, onSelectService }) {
  const currentService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0]
  const [activeTab, setActiveTab] = useState('how-it-works') // 'how-it-works' | 'individual-scope' | 'deliverables'

  // Handle ESC key to close modal & prevent body background scrolling ONLY when modal is open
  useEffect(() => {
    if (!activeServiceId) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [activeServiceId, onClose])

  if (!activeServiceId) return null

  const handleContactClick = () => {
    onClose()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[92vh] overflow-hidden my-auto"
        >
          {/* Top Bar: All Services Switcher Tabs & Close Button */}
          <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 border-b border-slate-100 bg-slate-50/95 shrink-0 gap-2 sm:gap-3">
            {/* Horizontal Scrollable Tabs: Sabhi Services Dikhayein */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden md:inline">
                Services:
              </span>
              {servicesData.map((service) => {
                const isActive = service.id === currentService.id
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service.id)
                      setActiveTab('how-it-works')
                    }}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-white text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/80'
                    }`}
                  >
                    {service.shortTitle || service.title}
                  </button>
                )
              })}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1 sm:p-1.5 rounded-lg sm:rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors shrink-0 cursor-pointer"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-4 sm:p-6 md:p-7 space-y-5 sm:space-y-6 text-left">
            {/* 1. Header Banner Image with Overlay Info */}
            <div className="aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5.5] w-full rounded-2xl overflow-hidden bg-slate-900 relative shadow-sm border border-slate-100 shrink-0">
              <img
                src={currentService.bannerImage}
                alt={currentService.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10 flex flex-col justify-end p-3.5 sm:p-5 md:p-6 text-white text-left">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${currentService.badgeColor} backdrop-blur-xs`}>
                    {currentService.badge}
                  </span>
                  {currentService.timeline && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium bg-slate-900/80 border border-slate-700 text-slate-200">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>{currentService.timeline}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-white tracking-tight drop-shadow-xs">
                  {currentService.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal mt-0.5 line-clamp-1 drop-shadow-xs">
                  {currentService.tagline}
                </p>
              </div>
            </div>

            {/* 2. Overview Paragraph */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {currentService.overview}
              </p>
            </div>

            {/* 3. Navigation Sub-Tabs inside Modal for Fast Inspection */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab('how-it-works')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'how-it-works'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>How It Gets Built (Step-by-Step)</span>
              </button>

              <button
                onClick={() => setActiveTab('individual-scope')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'individual-scope'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>My Role as an Individual</span>
              </button>

              <button
                onClick={() => setActiveTab('deliverables')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'deliverables'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Deliverables & Stack</span>
              </button>
            </div>

            {/* TAB CONTENT 1: How It Gets Built (Step-by-step roadmap) */}
            {activeTab === 'how-it-works' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 font-mono flex items-center gap-1.5">
                    <Workflow className="w-4 h-4 text-blue-600" />
                    <span>How It Gets Built (Execution Lifecycle)</span>
                  </h4>
                  <span className="text-[11px] font-medium text-slate-400">
                    5-Phase Transparent Process
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {(currentService.buildSteps || currentService.process).map((p, idx) => (
                    <div
                      key={p.step || idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                            Step {p.step}
                          </span>
                          {p.phase && (
                            <span className="text-[10px] font-semibold text-slate-400 uppercase truncate max-w-[130px]">
                              {p.phase}
                            </span>
                          )}
                        </div>
                        <h5 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">
                          {p.title}
                        </h5>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: Individual Role & Scope (My Role as an Individual) */}
            {activeTab === 'individual-scope' && currentService.individualRole && (
              <div className="space-y-4">
                {/* Highlight Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/40 to-slate-50 border border-blue-200/80">
                  <div className="flex items-center gap-2 mb-1.5">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <h4 className="text-xs sm:text-sm font-bold text-blue-900">
                      100% Individual Ownership & Direct Collaboration
                    </h4>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    {currentService.individualRole.summary}
                  </p>
                </div>

                {/* Grid: What I Do Personally vs Key Advantages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Responsibilities list */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-1.5 mb-3">
                      <Code2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>What I Personally Handle for You</span>
                    </h5>
                    <ul className="space-y-2">
                      {currentService.individualRole.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages of hiring an individual developer */}
                  <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200/70">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono flex items-center gap-1.5 mb-3">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Why Work Directly With Me</span>
                    </h5>
                    <ul className="space-y-2.5">
                      {currentService.individualRole.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-emerald-950 leading-snug font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: Deliverables & Tech Stack */}
            {activeTab === 'deliverables' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Deliverables Checklist */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-1.5 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Included Deliverables</span>
                    </h4>
                    <ul className="space-y-2">
                      {currentService.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack & Ideal For */}
                  <div className="space-y-4">
                    {/* Tech Stack */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-1.5 mb-2.5">
                        <Cpu className="w-4 h-4 text-purple-600" />
                        <span>Technologies & Frameworks</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {currentService.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 font-mono flex items-center gap-1.5 mb-1.5">
                        <Users className="w-3.5 h-3.5 text-blue-600" />
                        <span>Best Suited For</span>
                      </h4>
                      <p className="text-xs text-blue-950 font-medium leading-relaxed">
                        {currentService.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer: Action Buttons */}
          <div className="p-3.5 sm:p-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Want to start or discuss <span className="font-semibold text-slate-800">{currentService.title}</span>?
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none py-2 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={handleContactClick}
                className="flex-1 sm:flex-none py-2 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Hire / Discuss Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
