import React from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode } from 'react-icons/si'
import { CheckCircle2, ArrowRight, ExternalLink, Flame } from 'lucide-react'
import { codingJourneyData } from '../../data/github'

const difficultyStyleMap = {
  Easy: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200/80',
  },
  Medium: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200/80',
  },
  Hard: {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-200/80',
  },
}

export default function LeetCodeCard() {
  const { leetcode } = codingJourneyData

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group hover:border-amber-300/80"
    >
      <div>
        {/* Card Header: Profile Info + Follow Button */}
        <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            {/* LeetCode Amber Monogram */}
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 text-[#FFA116] flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300">
              <SiLeetcode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                  {leetcode.handle}
                </h3>
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100/70 text-amber-800">
                  <Flame className="w-2.5 h-2.5 text-amber-600 fill-amber-500" />
                  <span>Streak</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {leetcode.role}
              </p>
            </div>
          </div>

          <a
            href={leetcode.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 hover:bg-[#FFA116] hover:text-white hover:border-[#FFA116] transition-all duration-200 shrink-0"
          >
            <span>Follow</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* 4-Grid Key Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3.5">
          {leetcode.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-2 sm:p-2.5 rounded-xl bg-amber-50/40 border border-amber-100/70 text-center hover:bg-white hover:border-amber-200 hover:shadow-2xs transition-all duration-200"
            >
              <div className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 truncate">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Subheading: Recent Activity */}
        <div className="flex items-center justify-between mb-2 pt-1">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
            Recent Practice
          </h4>
          <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Verified Solved
          </span>
        </div>

        {/* Recent Solved Problems Stack */}
        <div className="space-y-2">
          {leetcode.recentActivity.map((activity) => {
            const style = difficultyStyleMap[activity.difficulty] || difficultyStyleMap.Easy

            return (
              <a
                key={activity.id}
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/act flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-amber-300 hover:shadow-2xs transition-all duration-200"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <div className="truncate">
                    <span className="font-semibold text-xs sm:text-sm text-slate-900 group-hover/act:text-amber-600 transition-colors block truncate">
                      {activity.title}
                    </span>
                    <span className="text-[10px] text-slate-500 truncate">
                      {activity.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${style.bg} ${style.text} ${style.border}`}
                  >
                    {activity.difficulty}
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Card Footer Full-Width CTA */}
      <div className="pt-3.5 mt-3.5 border-t border-slate-100">
        <a
          href={leetcode.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-xl bg-[#FFA116] hover:bg-[#e6900f] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow transition-all group/btn"
        >
          <SiLeetcode className="w-4 h-4" />
          <span>View LeetCode Profile</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}
