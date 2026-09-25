import resumeforge1 from '../assets/projects/resumeforge-1-landing.png'
import resumeforge2 from '../assets/projects/resumeforge-2-dashboard.png'
import resumeforge3 from '../assets/projects/resumeforge-3-analyzing.png'
import resumeforge4 from '../assets/projects/resumeforge-4-scorecard.png'
import resumeforge5 from '../assets/projects/resumeforge-5-mock-interview.png'
import resumeforge6 from '../assets/projects/resumeforge-6-live-interview.png'
import resumeforge7 from '../assets/projects/resumeforge-7-latex-builder.png'
import resumeforge8 from '../assets/projects/resumeforge-8-question-bank.png'
import resumeforge9 from '../assets/projects/resumeforge-9-mcq-arena.png'
import resumeforge10 from '../assets/projects/resumeforge-10-compiler.png'

export const projectsData = [
  {
    id: 'resumeforge-ai',
    title: 'ResumeForge AI — ATS Scanner & Mock Interview SaaS',
    description: 'An AI-powered SaaS platform featuring instant ATS resume score analysis, keyword matching, interactive 3D mock interview simulator, and professional multi-template PDF generation.',
    technologies: ['Django 5', 'DRF', 'Groq AI', 'PostgreSQL', 'Three.js', 'JavaScript'],
    visualType: 'resumeforge',
    featured: true,
    slides: [
      {
        id: 'landing',
        image: resumeforge1,
        badge: 'Slide 1: Landing & Hero',
        title: 'AI Resume & Practice Prep Landing',
        caption: 'Instant ATS resume scoring, single-column LaTeX builder, timed MCQs & speech AI mock interview.',
      },
      {
        id: 'dashboard',
        image: resumeforge2,
        badge: 'Slide 2: Trajectory Dashboard',
        title: 'ATS Score & Analytics Dashboard',
        caption: 'Real-time score progress across analyzed resume versions, baseline vs latest score trajectory.',
      },
      {
        id: 'analyzing',
        image: resumeforge3,
        badge: 'Slide 3: Real-Time Parser',
        title: 'Semantic Parsing & Extraction Engine',
        caption: 'Extracting text structure, measuring semantic keyword match & formatting scores with polling async worker.',
      },
      {
        id: 'scorecard',
        image: resumeforge4,
        badge: 'Slide 4: Detailed Scorecard',
        title: 'Target Position Match & Skill Gaps',
        caption: 'Detailed breakdown of Keyword Overlap, LaTeX Structure, and 1-click free courses for missing skills.',
      },
      {
        id: 'mock-interview',
        image: resumeforge5,
        badge: 'Slide 5: 3D Mock Interview',
        title: 'Google Meet Style AI Mock Session',
        caption: 'Camera & mic check, role configuration for Fullstack Python Dev, live speech subtitles & instant scoring.',
      },
      {
        id: 'live-interview',
        image: resumeforge6,
        badge: 'Slide 6: Live Interview Room',
        title: 'Live AI Technical Interview Room',
        caption: 'Speech-to-text candidate transcription, AI interviewer speaking, WPM pacing & filler word tracking.',
      },
      {
        id: 'latex-builder',
        image: resumeforge7,
        badge: 'Slide 7: LaTeX Resume Studio',
        title: 'ATS Resume Studio (LaTeX Engine)',
        caption: 'Interactive single-column LaTeX editor, Auto-Tailor with JD, live A4 rendered document & instant PDF export.',
      },
      {
        id: 'question-bank',
        image: resumeforge8,
        badge: 'Slide 8: Question Bank',
        title: 'Top Tech Company Question Bank',
        caption: 'High-yield technical & system design questions categorized for Google, Amazon, TCS, Infosys, Meta, and Wipro.',
      },
      {
        id: 'mcq-arena',
        image: resumeforge9,
        badge: 'Slide 9: MCQ Assessment',
        title: 'Topic-Wise Technical MCQ Assessments',
        caption: '15-question timed assessments across Python, JavaScript, Django & DRF, DSA, SQL, and DevOps.',
      },
      {
        id: 'compiler',
        image: resumeforge10,
        badge: 'Slide 10: Online Compiler',
        title: 'Freeform Online Compiler & Code Arena',
        caption: 'Multi-language code editor with live execution console, test case validation & AI coding assistant.',
      },
    ],
    github: 'https://github.com/Jayhind-Yadav592/resume',
    liveDemo: 'https://resume-qvj4xiilu-jayhind-yadavs-projects.vercel.app/',
  },
  {
    id: 'ecommerce-web-app',
    title: 'E-commerce Web App',
    description: 'A full-featured e-commerce platform with product listing, cart, payment and order management.',
    technologies: ['Django', 'MySQL', 'Bootstrap', 'JavaScript'],
    visualType: 'ecommerce',
    github: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'A responsive Netflix-inspired streaming interface with movie discovery, search and category browsing.',
    technologies: ['React', 'TMDB API', 'Tailwind CSS'],
    visualType: 'netflix',
    github: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    id: 'placement-portal',
    title: 'Placement Portal',
    description: 'A college placement management platform with student, recruiter and admin modules.',
    technologies: ['Django', 'MySQL', 'Bootstrap', 'JavaScript'],
    visualType: 'placement',
    github: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    id: 'passport-tracking-system',
    title: 'Passport Tracking System',
    description: 'A web application for tracking passport application status and managing application information.',
    technologies: ['Django', 'MySQL', 'Bootstrap'],
    visualType: 'passport',
    github: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    id: 'finance-backend',
    title: 'Finance Backend',
    description: 'A REST API backend for finance management with authentication, transactions and analytics.',
    technologies: ['Django REST Framework', 'MySQL', 'Postman'],
    visualType: 'finance',
    github: 'https://github.com',
    liveDemo: 'https://github.com',
  },
  {
    id: 'car-service-booking',
    title: 'Car Service Booking',
    description: 'An online car service booking platform with customer and admin management features.',
    technologies: ['Django', 'MySQL', 'JavaScript', 'Bootstrap'],
    visualType: 'carservice',
    github: 'https://github.com',
    liveDemo: 'https://github.com',
  },
]
