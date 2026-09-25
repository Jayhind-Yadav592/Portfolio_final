import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Terminal, GitBranch, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { githubData } from '../../data/github'

export default function GithubProfileCard() {
  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden text-left">
      {/* Background Soft Glow */}
      <div 
        className="absolute -top-8 -left-8 w-32 h-32 bg-slate-400/10 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div>
        {/* Header with Monogram & GitHub Badge */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md shrink-0">
              <FaGithub className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                {githubData.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-primary-600 mt-0.5">
                {githubData.role}
              </p>
            </div>
          </div>

          <Badge variant="secondary" size="sm" icon={<GitBranch className="w-3 h-3 text-slate-500" />} className="font-semibold bg-slate-100 text-slate-700 border-slate-200">
            Open Source
          </Badge>
        </div>

        {/* Bio / Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {githubData.description}
        </p>

        {/* Development Focus Note */}
        <div className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/90 mb-6 font-mono text-xs text-slate-700 font-medium flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary-600 shrink-0" />
          <span>Public Repositories & Full Stack Code</span>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-slate-100">
        <Button
          href={githubData.profileUrl}
          variant="secondary"
          size="md"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full justify-center shadow-sm bg-slate-900 text-white hover:bg-slate-800 font-semibold"
          leftIcon={<FaGithub className="w-4 h-4" />}
          rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
        >
          View GitHub Profile
        </Button>
      </div>
    </div>
  )
}
