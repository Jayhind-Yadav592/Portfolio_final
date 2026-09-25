import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import ServiceCard from '../components/common/ServiceCard'
import ServiceDetailModal from '../components/common/ServiceDetailModal'
import { servicesData } from '../data/services'

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState(null)

  useEffect(() => {
    const handleOpenService = (e) => {
      if (e.detail) {
        setActiveServiceId(e.detail)
      }
    }
    window.addEventListener('open-service-detail', handleOpenService)
    return () => window.removeEventListener('open-service-detail', handleOpenService)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="py-6 sm:py-8 md:py-10 bg-white relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 md:mb-7">
          {/* Eyebrow Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/80 text-xs font-bold uppercase tracking-wider mb-2">
            SERVICES
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I Do for <span className="text-blue-600">Clients</span>
          </h2>

          {/* Decorative Blue Underline */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto my-2" />

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-1">
            I build modern, scalable and user-friendly web applications to help individuals and businesses grow.
          </p>
        </div>

        {/* 3-Column Services Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto items-stretch"
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="h-full flex">
              <ServiceCard
                service={service}
                onOpenDetails={(id) => setActiveServiceId(id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Dedicated Service Detail Modal / Page View */}
      <ServiceDetailModal
        activeServiceId={activeServiceId}
        onClose={() => setActiveServiceId(null)}
        onSelectService={(id) => setActiveServiceId(id)}
      />
    </section>
  )
}
