import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from '../components/common/BackToTop'
import FloatingWhatsApp from '../components/common/FloatingWhatsApp'
import GlowEffect from '../components/common/GlowEffect'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-slate-800 relative selection:bg-primary-100 selection:text-primary-900 overflow-x-hidden w-full max-w-full">
      {/* Subtle ambient lighting glows - contained inside an overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
        <GlowEffect color="indigo" size="lg" className="top-10 left-1/4 -translate-x-1/2 opacity-70" />
        <GlowEffect color="purple" size="md" className="top-1/3 right-10 opacity-50" />
        <GlowEffect color="blue" size="lg" className="top-2/3 left-10 opacity-40" />
      </div>

      {/* Fixed/Sticky Navbar */}
      <Navbar />

      {/* Main Page Content - Comfortable top breathing space below navbar */}
      <main className="flex-1 w-full max-w-full pt-16 sm:pt-18 md:pt-20 overflow-x-hidden">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Chat (Bottom-Right) */}
      <FloatingWhatsApp />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  )
}
