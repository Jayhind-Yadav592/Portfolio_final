import React from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  ShieldCheck, 
  Cpu, 
  Server,
  MapPin,
  Briefcase
} from 'lucide-react'
import { FaPython, FaDocker, FaAws } from 'react-icons/fa6'
import { SiDjango, SiFastapi, SiPostgresql, SiRedis, SiCelery } from 'react-icons/si'
import GlassCard from '../ui/GlassCard'
import { profileData } from '../../data/profile'
import jayhindAvatar from '../../assets/jayhind-avatar.png'

export default function AboutVisual() {
  const chips = [
    { name: 'Python', icon: FaPython, color: 'text-primary-700 bg-primary-50 border-primary-100' },
    { name: 'Django / DRF', icon: SiDjango, color: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-700 bg-teal-50 border-teal-100' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700 bg-blue-50 border-blue-100' },
    { name: 'Redis / Celery', icon: SiRedis, color: 'text-rose-700 bg-rose-50 border-rose-100' },
    { name: 'Docker / AWS', icon: FaDocker, color: 'text-sky-700 bg-sky-50 border-sky-100' },
    { name: 'REST & WebSockets', icon: Server, color: 'text-indigo-700 bg-indigo-50 border-indigo-100' },
  ]

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      {/* Background Ambient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-400/20 via-accent-400/15 to-sky-400/20 blur-2xl rounded-3xl transform scale-95"
        aria-hidden="true"
      />

      {/* Developer ID Card Container */}
      <GlassCard
        variant="elevated"
        padding="p-0"
        className="border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden bg-white/95"
      >
        {/* ID Card Top Clip Slot */}
        <div className="flex justify-center pt-2.5 pb-1 bg-slate-50/80 border-b border-slate-100">
          <div className="w-14 h-1.5 rounded-full bg-slate-300/80 shadow-inner" />
        </div>

        {/* ID Card Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center text-[10px] font-mono font-bold shadow-xs">
              JY
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold font-mono tracking-wider uppercase text-slate-100">
                DEVELOPER PASS
              </span>
              <span className="text-[9px] font-mono text-indigo-300">
                LIONIX LLP // BANGALORE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 rounded-full">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-mono font-semibold text-emerald-300 tracking-wide">
              VERIFIED
            </span>
          </div>
        </div>

        {/* ID Card Body */}
        <div className="p-4 sm:p-5 space-y-4 text-left">
          
          {/* Photo & Identity Details */}
          <div className="flex items-center gap-3.5 pb-3.5 border-b border-slate-100">
            {/* Compact ID Photo Box */}
            <div className="relative shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-tr from-sky-100 to-indigo-100 p-0.5 border-2 border-primary-100 shadow-soft overflow-hidden flex items-end justify-center">
                <img
                  src={jayhindAvatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top scale-105 select-none"
                  loading="lazy"
                />
              </div>
              {/* Hologram security mini chip */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-900 border border-white flex items-center justify-center text-[8px] text-amber-300 shadow-2xs">
                <Cpu className="w-2.5 h-2.5 text-amber-300" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight truncate">
                {profileData.name}
              </h3>
              
              <div className="flex items-center gap-1 text-xs font-semibold text-primary-600 mt-0.5 mb-0.5">
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Full Stack Python Dev @ LionIX LLP</span>
              </div>

              <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">Kasireddy Narayanreddy College ('26)</span>
              </div>
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                Location
              </span>
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                Hyderabad, India
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                Current Status
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block shrink-0" />
                Production Dev
              </span>
            </div>
          </div>

          {/* Technology Skills Chips */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
              Authorized Backend Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {chips.map((chip) => {
                const IconComponent = chip.icon
                return (
                  <motion.span
                    key={chip.name}
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all ${chip.color}`}
                  >
                    <IconComponent className="w-3 h-3 shrink-0" />
                    <span>{chip.name}</span>
                  </motion.span>
                )
              })}
            </div>
          </div>

          {/* Barcode & Security Stripe Footer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            {/* Barcode simulation */}
            <div className="flex items-center gap-0.5">
              {[4, 2, 6, 3, 5, 2, 4, 3, 6, 2, 5, 3, 4, 2, 5, 2, 6, 3, 4].map((h, i) => (
                <span
                  key={i}
                  className="bg-slate-800 inline-block rounded-2xs"
                  style={{ width: i % 3 === 0 ? '2px' : '1px', height: `${h * 2.8}px` }}
                />
              ))}
            </div>

            <span className="text-[9px] font-mono text-slate-400 font-semibold tracking-wider">
              JY // HYD // 2026 // LIONIX
            </span>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
