import React from 'react'
import MainLayout from './layouts/MainLayout'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import EducationSection from './sections/EducationSection'
import CertificatesSection from './sections/CertificatesSection'
import ServicesSection from './sections/ServicesSection'
import GithubSection from './sections/GithubSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <ServicesSection />
      <GithubSection />
      <ContactSection />
    </MainLayout>
  )
}
