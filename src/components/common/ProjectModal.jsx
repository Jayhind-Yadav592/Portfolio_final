import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Layers, Info, CheckCircle2, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import ProjectVisual from './ProjectVisual'

export default function ProjectModal({ project, isOpen, onClose }) {
  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Top Visual Banner */}
          <div className="h-48 sm:h-56 w-full relative">
            <ProjectVisual visualType={project.visualType} featured={project.featured} />
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-slate-700 hover:text-slate-900 hover:bg-white border border-slate-200/80 shadow-soft flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Badges & Title */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <Badge variant="primary" size="sm">
                  {project.category}
                </Badge>
                <Badge variant="secondary" size="sm">
                  {project.type}
                </Badge>
                {project.featured && (
                  <Badge variant="gradient" size="sm" icon={<Sparkles className="w-3 h-3" />}>
                    Featured Project
                  </Badge>
                )}
              </div>

              <h3
                id="project-modal-title"
                className="text-xl sm:text-2xl font-bold text-slate-900"
              >
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Technology Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-50 text-slate-800 border border-slate-200/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions / Links */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              {project.github && (
                <Button
                  href={project.github}
                  variant="outline"
                  size="md"
                  leftIcon={<Github className="w-4 h-4" />}
                >
                  Source Code
                </Button>
              )}
              {project.liveDemo && (
                <Button
                  href={project.liveDemo}
                  variant="primary"
                  size="md"
                  rightIcon={<ExternalLink className="w-4 h-4" />}
                >
                  Live Demo
                </Button>
              )}
              <Button
                variant="outline"
                size="md"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
