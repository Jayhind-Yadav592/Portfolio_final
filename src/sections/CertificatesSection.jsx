import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Award } from 'lucide-react'
import Container from '../components/ui/Container'
import CertificationCard from '../components/common/CertificationCard'
import { certificationsData } from '../data/certifications'

export default function CertificatesSection() {
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.68
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="certificates" className="py-6 sm:py-8 md:py-10 bg-white relative">
      <Container size="lg">
        {/* Centered Section Header - Consistent with all other sections */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 md:mb-7">
          {/* Eyebrow Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2">
            CERTIFICATIONS
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified <span className="text-blue-600">Certifications</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1">
            Industry-recognized credentials validating my technical & full-stack expertise.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* 3-Card Horizontal Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto cert-scrollbar pb-3.5 pt-1 px-0.5 snap-x snap-mandatory scroll-smooth"
          >
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="w-[85vw] sm:w-[320px] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-start flex flex-col"
              >
                <CertificationCard cert={cert} />
              </div>
            ))}
          </div>

          {/* Bottom Navigation & Indicator */}
          <div className="flex items-center justify-between mt-2.5 px-1">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Showing 3 of 6 credentials • Scroll to view more & internships</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleScroll('left')}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 text-slate-600 flex items-center justify-center shadow-2xs transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 text-slate-600 flex items-center justify-center shadow-2xs transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
