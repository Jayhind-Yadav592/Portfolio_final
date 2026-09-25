import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Sparkles, Terminal, GitCommit, ArrowUpRight, Cpu, Layers } from 'lucide-react'
import { FaPython, FaReact, FaGitAlt } from 'react-icons/fa6'
import { SiDjango, SiFastapi, SiMysql } from 'react-icons/si'
import { githubData } from '../../data/github'

export default function CodingActivity() {
  const techIcons = {
    Python: FaPython,
    Django: SiDjango,
    React: FaReact,
    FastAPI: SiFastapi,
    'REST APIs': Layers,
    MySQL: SiMysql,
    Git: FaGitAlt,
  }

  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 text-left">
      <div>
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-slate-600 font-semibold ml-1.5">
              activity_stream.py
            </span>
          </div>

          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active
          </span>
        </div>

        {/* 3 Activity Pillars: Building, Learning, Creating */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {githubData.activityThemes.map((theme) => (
            <div
              key={theme.title}
              className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/90 text-left hover:bg-white hover:border-primary-300 hover:shadow-2xs transition-all duration-200"
            >
              <div className="flex items-center gap-1.5 text-primary-600 mb-1 font-mono text-xs font-bold uppercase tracking-wider">
                <GitCommit className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                <span>{theme.title}</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                {theme.description}
              </p>
            </div>
          ))}
        </div>

        {/* Active Technologies Visual Chips */}
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
            Technologies in Active Use
          </span>
          <div className="flex flex-wrap gap-2">
            {githubData.activeTechnologies.map((tech) => {
              const IconComponent = techIcons[tech] || Code2
              return (
                <motion.div
                  key={tech}
                  whileHover={{ y: -1, scale: 1.03 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50/90 border border-slate-200/90 text-slate-800 text-xs font-bold shadow-2xs hover:bg-white hover:border-primary-400 hover:text-primary-600 transition-all"
                >
                  <IconComponent className="w-3.5 h-3.5 text-primary-500" />
                  <span>{tech}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
        <span>Workflow: Git Version Control</span>
        <span className="text-primary-600 font-bold">Continuous Dev</span>
      </div>
    </div>
  )
}
