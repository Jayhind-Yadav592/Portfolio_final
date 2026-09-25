# Jayhind Yadav - Portfolio Website

Premium light-themed personal portfolio website for **Jayhind Yadav**, Full Stack Python Developer.

## 🚀 Tech Stack

- **Frontend:** React.js, JavaScript ES6+
- **Styling & Design System:** Tailwind CSS, PostCSS, Custom Design Tokens
- **Animations & Micro-interactions:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Build Tool:** Vite
- **Future Integration:** Python / Django REST Framework, MySQL

## 📁 Project Architecture

```
src/
├── assets/         # Static assets and icons
├── components/
│   ├── common/     # Global visual helpers (GlowEffect, PlaceholderCard)
│   └── ui/         # Reusable design system primitives (Button, GlassCard, SectionHeading, Badge, SocialIcon, Container)
├── data/           # Configurable data models (profile, navigation, socialLinks)
├── hooks/          # Custom hooks (useScrollSpy, useMediaQuery)
├── layouts/        # Layout wrappers (MainLayout, Navbar, Footer)
├── sections/       # Modular portfolio sections:
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── ExperienceSection.jsx
│   ├── ProjectsSection.jsx
│   ├── EducationSection.jsx
│   ├── ServicesSection.jsx
│   ├── GithubSection.jsx
│   └── ContactSection.jsx
├── utils/          # Class merging utility (cn)
├── App.jsx         # Main application composition
├── index.css       # Tailwind directives & glass utilities
└── main.jsx        # DOM entry point
```

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```
