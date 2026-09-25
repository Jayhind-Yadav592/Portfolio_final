import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaStar } from 'react-icons/fa6'
import { GitFork, FolderGit2, ArrowRight, ExternalLink } from 'lucide-react'
import { codingJourneyData } from '../../data/github'

const languageColorMap = {
  Python: 'bg-emerald-500',
  Django: 'bg-emerald-600',
  React: 'bg-sky-500',
  JavaScript: 'bg-amber-400',
  'Node.js': 'bg-green-500',
  HTML: 'bg-orange-500',
}

export default function GithubCard() {
  const { github } = codingJourneyData

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group hover:border-slate-400/80"
    >
      <div>
        {/* Card Header: Profile Info + Follow Button */}
        <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            {/* Dark GitHub Monogram */}
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300">
              <FaGithub className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                  {github.handle}
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active Contributor" />
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {github.role}
              </p>
            </div>
          </div>

          <a
            href={github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 shrink-0"
          >
            <span>Follow</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* 4-Grid Key Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3.5">
          {github.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-50/80 border border-slate-100/90 text-center hover:bg-white hover:border-slate-200 hover:shadow-2xs transition-all duration-200"
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

        {/* Section Subheading: Top Repository */}
        <div className="flex items-center justify-between mb-2 pt-1">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
            Featured Repository
          </h4>
          <span className="text-[10px] font-medium text-slate-400">
            Open Source
          </span>
        </div>

        {/* Repository Item */}
        <div className="space-y-2">
          {github.topRepositories.map((repo) => {
            const dotColor = languageColorMap[repo.language] || 'bg-blue-500'
            return (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/repo block p-3 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-blue-300 hover:shadow-2xs transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <FolderGit2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover/repo:text-blue-600 transition-colors truncate">
                      {repo.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 shrink-0 font-medium">
                    <span className="inline-flex items-center gap-1 hover:text-amber-500 transition-colors">
                      <FaStar className="w-3 h-3 text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1 hover:text-slate-700 transition-colors">
                      <GitFork className="w-3 h-3 text-slate-400" />
                      {repo.forks}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-2.5 line-clamp-2 font-normal">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                    <span>{repo.language}</span>
                  </div>

                  <span className="text-[10px] font-medium text-slate-500 bg-white border border-slate-200/90 px-1.5 py-0.5 rounded">
                    {repo.techStack}
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
          href={github.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow transition-all group/btn"
        >
          <FaGithub className="w-4 h-4" />
          <span>View GitHub Profile</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}
