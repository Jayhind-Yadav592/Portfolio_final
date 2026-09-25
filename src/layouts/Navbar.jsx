import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Sparkles, 
  GitCommit, 
  Mail 
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { navLinks } from '../data/navigation'
import { profileData } from '../data/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { cn } from '../utils/cn'

// Nav icon mapping for mobile drawer
const navIcons = {
  '#hero': Home,
  '#about': User,
  '#skills': Code2,
  '#experience': Briefcase,
  '#projects': FolderGit2,
  '#education': GraduationCap,
  '#certificates': Award,
  '#services': Sparkles,
  '#coding-journey': GitCommit,
  '#contact': Mail,
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Track active section using useScrollSpy
  const sectionIds = navLinks.map((link) => link.href.replace('#', ''))
  const activeSection = useScrollSpy(sectionIds, 100)

  // Track scroll position for dynamic glass navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  // Listen for custom open-mobile-nav event from phone mockup
  useEffect(() => {
    const handleOpen = () => setMobileMenuOpen(true)
    const handleToggle = () => setMobileMenuOpen((prev) => !prev)
    window.addEventListener('open-mobile-nav', handleOpen)
    window.addEventListener('toggle-mobile-nav', handleToggle)
    return () => {
      window.removeEventListener('open-mobile-nav', handleOpen)
      window.removeEventListener('toggle-mobile-nav', handleToggle)
    }
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent background scroll when mobile menu is open on small screens
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const phoneNumber = '916393496909'
  const defaultMessage = 'Hi Jayhind, I would like to discuss a project with you!'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled
          ? 'glass-nav py-2.5 shadow-soft'
          : 'bg-white/70 backdrop-blur-xs py-3 sm:py-3.5 border-b border-transparent'
      )}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Left: Brand Monogram & Name */}
          <a
            href="#hero"
            aria-label={`${profileData.name} - Home`}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-xl shrink-0"
          >
            {/* Monogram "JY" */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-primary-600 via-indigo-600 to-accent-600 flex items-center justify-center text-white font-mono text-xs sm:text-sm font-bold shadow-xs group-hover:shadow-glow-sm group-hover:scale-105 transition-all duration-200 shrink-0">
              JY
            </div>
            
            {/* Name & Title */}
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-primary-600 transition-colors truncate">
                {profileData.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 font-mono tracking-tight truncate">
                Full Stack Python Dev
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200/80 shadow-xs"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = (activeSection === sectionId) || (sectionId === 'hero' && !activeSection)

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                    isActive
                      ? 'text-primary-700 font-semibold bg-primary-50/90 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-primary-100/50 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right: "Let's Talk" CTA Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-xs hover:shadow-glow-sm py-1.5 px-3.5 text-xs"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Let's Talk
            </Button>

            {/* Mobile Hamburger Toggle Button (Dedicated Easy-Touch Target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-navigation"
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-100/90 hover:bg-slate-200/90 active:scale-95 border border-slate-200/90 text-slate-800 flex items-center justify-center transition-all duration-200 shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-800 stroke-[2.2]" />
              ) : (
                <Menu className="w-5 h-5 text-slate-800 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide Down Panel */}
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-2xl z-50 lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            >
              <Container size="lg" className="py-3 sm:py-4 px-4">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const sectionId = link.href.replace('#', '')
                    const isActive = (activeSection === sectionId) || (sectionId === 'hero' && !activeSection)
                    const IconComponent = navIcons[link.href] || Sparkles

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-150',
                          isActive
                            ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs'
                            : 'text-slate-700 hover:bg-slate-100/90 hover:text-slate-900 active:bg-slate-100'
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComponent className={cn('w-4 h-4 shrink-0', isActive ? 'text-blue-600' : 'text-slate-500')} />
                          <span>{link.name}</span>
                        </div>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-blue-600 ring-2 ring-blue-200" />
                        )}
                      </a>
                    )
                  })}

                  {/* Action Buttons in Mobile Drawer */}
                  <div className="pt-2.5 mt-2 border-t border-slate-200/80 grid grid-cols-2 gap-2">
                    <Button
                      href="#contact"
                      variant="primary"
                      size="sm"
                      className="w-full justify-center shadow-xs py-2 text-xs font-semibold rounded-xl"
                      onClick={() => setMobileMenuOpen(false)}
                      rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      Let's Talk
                    </Button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 text-xs font-semibold shadow-2xs transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </nav>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
