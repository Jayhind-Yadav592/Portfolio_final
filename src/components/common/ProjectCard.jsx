import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const hasSlides = project.slides && project.slides.length > 0
  const totalSlides = hasSlides ? project.slides.length : 1

  // Auto slide progression when not hovered
  useEffect(() => {
    if (!hasSlides || isHovered) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4500)

    return () => clearInterval(interval)
  }, [hasSlides, isHovered, totalSlides])

  const nextSlide = (e) => {
    if (e) e.stopPropagation()
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = (e) => {
    if (e) e.stopPropagation()
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const currentSlideInfo = hasSlides ? project.slides[currentSlide] : null

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col h-full rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400/80 transition-all duration-300 overflow-hidden text-left"
    >
      {/* 16:9 Large Project Preview Image / Carousel Frame */}
      <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-950 border-b border-slate-100 rounded-t-2xl select-none">
        
        {/* Visual Mockup with Slide State */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0.4, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4, scale: 1.02 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <ProjectVisual
              visualType={project.visualType}
              title={project.title}
              activeSlide={currentSlide}
            />
          </motion.div>
        </AnimatePresence>

        {/* Top Floating Badges for Slide-wise Projects */}
        {hasSlides && (
          <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none">
            {/* Featured Badge */}
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold shadow-xs">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Featured SaaS</span>
              </span>
            )}

            {/* Current Slide Indicator Badge */}
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-200 text-[10px] font-mono border border-slate-700/80 shadow-xs ml-auto">
              {currentSlide + 1} / {totalSlides} · {currentSlideInfo?.badge || 'Preview'}
            </span>
          </div>
        )}

        {/* Carousel Navigation Arrow Controls (Visible when slides exist) */}
        {hasSlides && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center border border-white/20 shadow-md opacity-80 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center border border-white/20 shadow-md opacity-80 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Bottom Slide Dot Indicators */}
            <div className="absolute bottom-2 inset-x-0 z-30 flex items-center justify-center gap-1.5 pointer-events-auto">
              {project.slides.map((slide, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentSlide(idx)
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-6 bg-blue-500 shadow-sm'
                      : 'w-1.5 bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
            {project.description}
          </p>

          {/* Slide-specific Caption (if currently active slide has caption) */}
          {currentSlideInfo && (
            <div className="mb-4 p-2 rounded-xl bg-blue-50/70 border border-blue-100/90 text-slate-700 text-xs">
              <span className="font-bold text-blue-700 block text-[11px] mb-0.5">
                {currentSlideInfo.title}
              </span>
              <p className="text-[11px] text-slate-600 leading-snug">
                {currentSlideInfo.caption}
              </p>
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:border-blue-200 group-hover:bg-blue-50/40 group-hover:text-blue-800 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Buttons: Live Demo & GitHub */}
        <div className="grid grid-cols-2 gap-2.5 pt-3.5 border-t border-slate-100">
          <a
            href={project.liveDemo || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors duration-200 cursor-pointer"
            aria-label={`Live demo for ${project.title}`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>

          <a
            href={project.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-2xs transition-colors duration-200 cursor-pointer"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
