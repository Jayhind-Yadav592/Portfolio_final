import React from 'react'
import { 
  FileText, 
  CheckCircle2, 
  Server, 
  ShoppingBag, 
  Car, 
  Play, 
  Search, 
  Terminal, 
  Database,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Layers,
  Film
} from 'lucide-react'
import { FaPython, FaReact } from 'react-icons/fa6'
import { SiDjango, SiMysql, SiTailwindcss, SiPostman } from 'react-icons/si'

export default function ProjectVisual({ visualType, title }) {
  switch (visualType) {
    // 1. E-Commerce Web App (Storefront with sidebar & product cards)
    case 'ecommerce':
      return (
        <div className="w-full h-full bg-slate-900 text-slate-100 flex overflow-hidden font-sans select-none relative">
          {/* Mini Sidebar */}
          <div className="w-16 sm:w-20 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-3 space-y-3 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              <ShoppingBag className="w-3.5 h-3.5" />
            </div>
            <div className="w-8 h-1.5 bg-slate-800 rounded-full" />
            <div className="w-8 h-1.5 bg-slate-800 rounded-full" />
            <div className="w-8 h-1.5 bg-slate-800 rounded-full" />
          </div>

          {/* Main Store Content */}
          <div className="flex-1 bg-slate-900 p-3 flex flex-col justify-between">
            {/* Store Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-white font-mono">StoreFront</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">Django + MySQL</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[9px] text-slate-400">Cart (3)</span>
              </div>
            </div>

            {/* Product Cards Grid Mockup */}
            <div className="grid grid-cols-3 gap-2 my-1">
              {[
                { name: 'Air Mesh Pro', price: '$89', color: 'from-blue-600 to-indigo-700' },
                { name: 'Leather Jacket', price: '$149', color: 'from-amber-600 to-orange-700' },
                { name: 'Smart Watch', price: '$199', color: 'from-emerald-600 to-teal-700' },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-slate-800/90 border border-slate-700/80 p-1.5 flex flex-col justify-between">
                  <div className={`w-full h-8 rounded bg-gradient-to-tr ${item.color} flex items-center justify-center text-[10px] font-bold shadow-2xs`}>
                    ★
                  </div>
                  <div className="mt-1">
                    <div className="text-[9px] font-semibold text-slate-200 truncate">{item.name}</div>
                    <div className="text-[8px] font-mono text-emerald-400">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Bottom Banner */}
            <div className="p-1.5 rounded-md bg-slate-950/80 border border-slate-800 flex items-center justify-between text-[9px]">
              <span className="text-slate-400">Order Management & Stripe API</span>
              <span className="text-blue-400 font-semibold font-mono">Active 200 OK</span>
            </div>
          </div>
        </div>
      )

    // 2. Netflix Clone (Cinematic Streaming Interface)
    case 'netflix':
      return (
        <div className="w-full h-full bg-black text-white flex flex-col justify-between p-3.5 relative overflow-hidden font-sans select-none">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/80 to-transparent pointer-events-none" />
          
          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-widest text-red-600 font-mono">NETFLIX</span>
              <span className="text-[9px] text-zinc-400 hidden sm:inline">Movies · TV Shows · TMDB API</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-600 flex items-center justify-center text-[8px]">
                <Search className="w-2.5 h-2.5 text-white" />
              </div>
              <div className="w-4 h-4 rounded bg-blue-600" />
            </div>
          </div>

          {/* Hero Banner Text */}
          <div className="relative z-10 my-1">
            <div className="text-xs sm:text-sm font-black text-white tracking-tight leading-tight">
              Unlimited movies, TV shows and more.
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="px-2 py-0.5 rounded bg-white text-black text-[9px] font-bold flex items-center gap-1 shadow-2xs">
                <Play className="w-2.5 h-2.5 fill-black" /> Play
              </div>
              <div className="px-2 py-0.5 rounded bg-zinc-800/80 text-white text-[9px] font-medium border border-zinc-700">
                More Info
              </div>
            </div>
          </div>

          {/* Movie Thumbnail Strip */}
          <div className="relative z-10 grid grid-cols-4 gap-1.5 pt-1 border-t border-zinc-800/80">
            {[
              { title: 'Cyberpunk', color: 'from-violet-900 to-purple-600' },
              { title: 'Interstellar', color: 'from-blue-900 to-sky-600' },
              { title: 'Stranger Code', color: 'from-red-950 to-rose-700' },
              { title: 'The Matrix', color: 'from-emerald-950 to-teal-700' },
            ].map((movie, idx) => (
              <div key={idx} className={`h-8 sm:h-9 rounded bg-gradient-to-tr ${movie.color} border border-white/10 p-1 flex items-end shadow-2xs`}>
                <span className="text-[8px] font-bold text-white/90 truncate leading-none">{movie.title}</span>
              </div>
            ))}
          </div>
        </div>
      )

    // 3. Placement Portal (Enterprise College Placement Dashboard)
    case 'placement':
      return (
        <div className="w-full h-full bg-slate-900 text-slate-100 flex overflow-hidden font-sans select-none relative">
          {/* Mini Sidebar */}
          <div className="w-14 sm:w-16 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-2.5 space-y-2.5 shrink-0">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              <BarChart3 className="w-3.5 h-3.5" />
            </div>
            <div className="w-6 h-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-1 bg-slate-800 rounded-full" />
          </div>

          {/* Main Dashboard Content */}
          <div className="flex-1 p-3 flex flex-col justify-between bg-slate-900">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px]">
              <span className="font-bold text-slate-200">Placement Analytics</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">14 Pages · 11 Models</span>
            </div>

            {/* Metric KPI Cards */}
            <div className="grid grid-cols-3 gap-1.5 my-1">
              <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-[8px] text-slate-400">Total Placed</div>
                <div className="text-xs font-bold text-emerald-400 font-mono">88.4%</div>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-[8px] text-slate-400">Drives</div>
                <div className="text-xs font-bold text-blue-400 font-mono">42+</div>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-[8px] text-slate-400">Avg Package</div>
                <div className="text-xs font-bold text-purple-400 font-mono">7.2 LPA</div>
              </div>
            </div>

            {/* Visual Bar Chart Mockup */}
            <div className="p-2 rounded-lg bg-slate-950/90 border border-slate-800 flex items-end justify-between h-9 px-3 gap-2">
              <div className="w-4 bg-blue-500 rounded-t h-[60%]" />
              <div className="w-4 bg-indigo-500 rounded-t h-[85%]" />
              <div className="w-4 bg-emerald-500 rounded-t h-[100%]" />
              <div className="w-4 bg-purple-500 rounded-t h-[75%]" />
              <div className="w-4 bg-sky-500 rounded-t h-[90%]" />
            </div>
          </div>
        </div>
      )

    // 4. Passport Tracking System
    case 'passport':
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white p-3.5 flex flex-col justify-between font-sans select-none relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-100">Passport Application Portal</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
              Live Status: Active
            </span>
          </div>

          {/* Stepper Pipeline */}
          <div className="my-1.5 p-2 rounded-lg bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1 font-mono">
              <span>1. Application</span>
              <span>2. Police Verification</span>
              <span>3. Dispatch</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
              <div className="w-3/4 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 rounded-full" />
            </div>
          </div>

          {/* Bottom Specifications */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1.5 border-t border-slate-800/80 font-mono">
            <div className="flex items-center gap-1 text-blue-400">
              <SiDjango className="w-3 h-3" />
              <span>Django Backend</span>
            </div>
            <div className="flex items-center gap-1 text-sky-400">
              <SiMysql className="w-3 h-3" />
              <span>MySQL Relational DB</span>
            </div>
          </div>
        </div>
      )

    // 5. Finance Backend (REST API Console & Metrics)
    case 'finance':
      return (
        <div className="w-full h-full bg-slate-950 text-white p-3.5 flex flex-col justify-between font-mono select-none relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] text-slate-200 font-bold">POST /api/v1/transactions</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
              201 CREATED
            </span>
          </div>

          {/* JSON Payload Snippet */}
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-[10px] space-y-0.5 leading-snug">
            <div><span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"authorized"</span>,</div>
            <div><span className="text-purple-400">"amount"</span>: <span className="text-amber-400">12450.00</span>,</div>
            <div><span className="text-purple-400">"auth_type"</span>: <span className="text-sky-400">"JWT Bearer"</span></div>
          </div>

          {/* Bottom Deployment */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-800">
            <span className="flex items-center gap-1 text-indigo-400 font-semibold">
              <Server className="w-3 h-3" /> Django REST Framework
            </span>
            <span className="text-slate-400">MySQL · Postman Tested</span>
          </div>
        </div>
      )

    // 6. Car Service Booking (Online Booking & Schedule Portal)
    case 'carservice':
    default:
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-950 text-white p-3.5 flex flex-col justify-between font-sans select-none relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-amber-500 flex items-center justify-center text-black">
                <Car className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-100">Car Service Booking Hub</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
              Auto Schedule
            </span>
          </div>

          {/* Booking Slots Mockup */}
          <div className="grid grid-cols-3 gap-1.5 my-1 font-mono text-[9px]">
            <div className="p-1.5 rounded-md bg-slate-950 border border-slate-800 text-center">
              <div className="text-slate-400">Vehicle</div>
              <div className="text-amber-400 font-bold">SUV / Sedan</div>
            </div>
            <div className="p-1.5 rounded-md bg-slate-950 border border-slate-800 text-center">
              <div className="text-slate-400">Time Slot</div>
              <div className="text-blue-400 font-bold">10:00 AM</div>
            </div>
            <div className="p-1.5 rounded-md bg-slate-950 border border-slate-800 text-center">
              <div className="text-slate-400">Status</div>
              <div className="text-emerald-400 font-bold">Confirmed</div>
            </div>
          </div>

          {/* Bottom Engine Specs */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1.5 border-t border-slate-800 font-mono">
            <span className="text-emerald-400">Customer & Admin Module</span>
            <span className="text-slate-400">Django · Bootstrap · MySQL</span>
          </div>
        </div>
      )
  }
}
