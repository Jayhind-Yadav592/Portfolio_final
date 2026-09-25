import React from 'react'
import { motion } from 'framer-motion'
import { 
  Server, 
  Layout, 
  Database, 
  Code2, 
  Sparkles, 
  Cpu, 
  Check, 
  Terminal,
  Layers,
  Network
} from 'lucide-react'
import { FaPython, FaReact } from 'react-icons/fa6'
import { SiDjango, SiMysql } from 'react-icons/si'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'
import { profileData } from '../../data/profile'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center">
      {/* Background Soft Glow Aura */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary-400/20 via-accent-400/15 to-sky-400/20 blur-3xl rounded-full transform scale-90"
        aria-hidden="true" 
      />

      {/* Main Glass Architecture Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full relative z-10"
      >
        <GlassCard
          variant="elevated"
          padding="p-0"
          className="border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 backdrop-blur-xl bg-white/90"
          hoverEffect={false}
        >
          {/* Card Window Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400/90" />
              <div className="w-3 h-3 rounded-full bg-amber-400/90" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/90" />
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 font-medium">
              <Terminal className="w-3.5 h-3.5 text-primary-600" />
              <span>jayhind_stack.py</span>
            </div>

            <div className="w-9 flex justify-end">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Card Body - Developer Architecture Blueprint */}
          <div className="p-6 sm:p-7 space-y-5">
            {/* Top Monogram Banner */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-600 flex items-center justify-center text-white font-mono text-sm font-bold shadow-soft">
                  JY
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                    {profileData.name}
                  </h3>
                  <p className="text-xs font-mono text-primary-600 font-medium">
                    Full Stack Architecture
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
                v1.0.0
              </span>
            </div>

            {/* Architecture Flow Representation */}
            <div className="space-y-3 font-mono text-xs">
              {/* Layer 1: Client / Frontend */}
              <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/70 hover:border-primary-200 transition-colors">
                <div className="flex items-center justify-between text-slate-700 mb-1.5 font-semibold text-[11px] sm:text-xs">
                  <div className="flex items-center gap-1.5 text-accent-700">
                    <FaReact className="w-3.5 h-3.5 text-sky-500" />
                    <span>Frontend Layer</span>
                  </div>
                  <span className="text-[10px] text-slate-400">React.js • Tailwind CSS</span>
                </div>
                <p className="text-[11px] font-sans text-slate-500">
                  Responsive UI, state management & seamless client interactions.
                </p>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center -my-1 text-slate-400">
                <div className="h-2 w-px bg-slate-300" />
              </div>

              {/* Layer 2: API & Backend */}
              <div className="p-3 rounded-xl bg-primary-50/50 border border-primary-100 hover:border-primary-300 transition-colors">
                <div className="flex items-center justify-between text-slate-800 mb-1.5 font-semibold text-[11px] sm:text-xs">
                  <div className="flex items-center gap-1.5 text-primary-700">
                    <FaPython className="w-3.5 h-3.5 text-primary-600" />
                    <span>REST API & Backend</span>
                  </div>
                  <span className="text-[10px] text-primary-500">Django REST Framework</span>
                </div>
                <p className="text-[11px] font-sans text-slate-600">
                  Clean endpoints, JWT auth, business logic & serialized payloads.
                </p>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center -my-1 text-slate-400">
                <div className="h-2 w-px bg-slate-300" />
              </div>

              {/* Layer 3: Database & Storage */}
              <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/70 hover:border-sky-200 transition-colors">
                <div className="flex items-center justify-between text-slate-700 mb-1.5 font-semibold text-[11px] sm:text-xs">
                  <div className="flex items-center gap-1.5 text-sky-700">
                    <SiMysql className="w-4 h-4 text-sky-600" />
                    <span>Database & Storage</span>
                  </div>
                  <span className="text-[10px] text-slate-400">MySQL • Relational Schema</span>
                </div>
                <p className="text-[11px] font-sans text-slate-500">
                  Structured data models, migrations, indexes & optimized queries.
                </p>
              </div>
            </div>

            {/* Bottom Tech Pills */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 text-[10px] font-semibold text-primary-700 bg-primary-50 rounded-lg border border-primary-100 flex items-center gap-1">
                <FaPython className="w-3 h-3 text-primary-600" /> Python
              </span>
              <span className="px-2.5 py-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center gap-1">
                <SiDjango className="w-3 h-3 text-emerald-600" /> Django
              </span>
              <span className="px-2.5 py-1 text-[10px] font-semibold text-sky-700 bg-sky-50 rounded-lg border border-sky-100 flex items-center gap-1">
                <FaReact className="w-3 h-3 text-sky-500" /> React
              </span>
              <span className="px-2.5 py-1 text-[10px] font-semibold text-indigo-700 bg-indigo-50 rounded-lg border border-indigo-100 flex items-center gap-1">
                <SiMysql className="w-3 h-3 text-indigo-600" /> MySQL
              </span>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating Micro Card 1: Top Right - Django API Service */}
      <motion.div
        animate={{ y: [-4, 5, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-soft hover:shadow-card transition-shadow"
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs border border-emerald-100">
          <Server className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-slate-800 leading-tight">Django REST API</span>
          <span className="text-[9px] font-mono text-emerald-600 font-medium">Scalable Services</span>
        </div>
      </motion.div>

      {/* Floating Micro Card 2: Bottom Left - React UI Stack */}
      <motion.div
        animate={{ y: [4, -5, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-soft hover:shadow-card transition-shadow"
      >
        <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs border border-sky-100">
          <FaReact className="w-4 h-4 text-sky-500" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-slate-800 leading-tight">Modern React UI</span>
          <span className="text-[9px] font-mono text-sky-600 font-medium">Fluid & Responsive</span>
        </div>
      </motion.div>
    </div>
  )
}
