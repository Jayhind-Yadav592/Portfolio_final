import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { openEmail } from '../../utils/contactUtils'
import SocialIcon from '../ui/SocialIcon'
import { cn } from '../../utils/cn'

export default function SocialLinks({ className, size = 'md', variant = 'default' }) {
  const links = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-4 h-4" />,
      url: 'https://github.com/Jayhind-Yadav592',
      label: 'GitHub Profile',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/jayhind-yadav-54ab3b33a',
      label: 'LinkedIn Profile',
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="w-4 h-4" />,
      url: 'https://leetcode.com/u/Jayhind592/',
      label: 'LeetCode Profile',
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="w-4 h-4" />,
      url: 'https://wa.me/916393496909',
      label: 'Chat on WhatsApp',
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-4 h-4" />,
      url: 'mailto:jayhind01022003@gmail.com',
      label: 'Send Email',
      onClick: (e) => {
        e.preventDefault()
        openEmail('jayhind01022003@gmail.com')
      },
    },
  ]

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {links.map((link) => (
        <SocialIcon
          key={link.name}
          icon={link.icon}
          href={link.url}
          label={link.label}
          variant={variant}
          size={size}
          onClick={link.onClick}
        />
      ))}
    </div>
  )
}
