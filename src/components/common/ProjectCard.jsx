import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex flex-col h-full rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400/80 transition-all duration-300 overflow-hidden text-left"
    >
      {/* 16:9 Large Project Preview Image */}
      <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-900 border-b border-slate-100 rounded-t-2xl">
        <div className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-105">
          <ProjectVisual visualType={project.visualType} title={project.title} />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:border-blue-200 group-hover:bg-blue-50/40 group-hover:text-blue-800 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Buttons: Live Demo & GitHub */}
        <div className="grid grid-cols-2 gap-2.5 pt-3.5 border-t border-slate-100">
          <a
            href={project.liveDemo || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors duration-200 cursor-pointer"
            aria-label={`Live demo for ${project.title}`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>

          <a
            href={project.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-2xs transition-colors duration-200 cursor-pointer"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
