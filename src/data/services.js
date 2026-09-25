import webDevBanner from '../assets/services/service-web-development.jpg'
import backendBanner from '../assets/services/service-backend-development.jpg'
import frontendBanner from '../assets/services/service-frontend-development.jpg'
import databaseBanner from '../assets/services/service-database-design.jpg'
import cloudBanner from '../assets/services/service-cloud-deployment.jpg'
import consultationBanner from '../assets/services/service-consultation-support.jpg'

export const servicesData = [
  {
    id: 'web-development',
    title: 'Full Stack Web Development',
    shortTitle: 'Web Development',
    shortDescription: 'Custom, responsive and high-performance full-stack web applications built for scale and security.',
    bannerImage: webDevBanner,
    badge: 'End-to-End',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
    accentColor: 'text-blue-600',
    themeBorder: 'hover:border-blue-300',
    tagline: 'Transforming ideas into modern, scalable, and responsive digital products.',
    overview: 'I provide complete full-lifecycle web application engineering from initial conceptualization and wireframing to frontend implementation, robust backend development, database structuring, and production deployment.',
    
    // As an Individual Task / Role breakdown
    individualRole: {
      summary: 'As an independent full-stack developer, I take 100% personal ownership of your project from the first line of code to the final live production release. You work directly with me with zero middlemen or communication lag.',
      responsibilities: [
        'Direct Client Collaboration: Gathering technical requirements and translating business needs into clean technical blueprints.',
        'Full Architecture Execution: Designing both the frontend UI and backend API architecture independently.',
        'End-to-End Coding: Writing clean, modular React frontend and Python (Django/FastAPI) backend code.',
        'Database & Security: Setting up relational schemas, JWT authentication, and protecting against OWASP vulnerabilities.',
        'Milestone-Based Delivery: Regular sprint updates with live preview staging links and transparent Git commits.',
        'Deployment & Handover: Deploying to AWS/Vercel with SSL, domain setup, and complete documentation handover.'
      ],
      advantages: [
        'Single Point of Accountability - No finger-pointing between separate frontend & backend teams',
        'Faster Turnaround Time - Swift iterations and agile feature additions',
        'Cost-Effective - Top agency-grade quality at independent developer rates',
        'Direct & Transparent Updates - Daily/weekly progress demos on staging'
      ]
    },

    // How it is built step-by-step
    buildSteps: [
      {
        step: '01',
        phase: 'Requirement Analysis & Wireframing',
        title: 'Planning & UX Blueprint',
        desc: 'Analyzing client vision, defining user flows, selecting the optimal tech stack, and mapping database entities with component hierarchy wireframes.'
      },
      {
        step: '02',
        phase: 'Database & Backend API Engineering',
        title: 'Core Engine & APIs',
        desc: 'Designing normalized PostgreSQL schemas, configuring Django/FastAPI REST APIs, implementing JWT authentication, and writing core business logic.'
      },
      {
        step: '03',
        phase: 'Interactive UI & Frontend Integration',
        title: 'Frontend Development',
        desc: 'Crafting responsive, pixel-perfect user interfaces using React, Tailwind CSS, and Framer Motion, seamlessly connecting backend endpoints.'
      },
      {
        step: '04',
        phase: 'Quality Assurance & Security Audits',
        title: 'Testing & Optimization',
        desc: 'Testing across mobile, tablet, and desktop devices, benchmarking API response times, running Lighthouse speed audits, and security vulnerability scans.'
      },
      {
        step: '05',
        phase: 'Production Launch & Handover',
        title: 'Cloud Deployment & Support',
        desc: 'Dockerizing the application, setting up CI/CD automation, configuring Nginx & SSL on AWS/Vercel, and providing a clean repository with documentation.'
      }
    ],

    deliverables: [
      'Production-ready Full-Stack Web Application (React + Django/FastAPI)',
      '100% Mobile-Responsive & Accessible UI matching all screen sizes',
      'Secure User Authentication (JWT / OAuth2 / Role-Based Access Control)',
      'REST API architecture with automated Swagger/OpenAPI documentation',
      'Relational Database setup (PostgreSQL / SQLite) with migrations',
      'Lighthouse 95+ performance scores and SEO optimization',
      'Clean Git repository with complete setup & deployment documentation',
      '14-day post-launch bug fixing & maintenance support'
    ],
    techStack: ['Python', 'Django', 'FastAPI', 'React', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'AWS'],
    timeline: '2 to 4 Weeks (depending on project scope & complexity)',
    idealFor: 'Startups, Businesses, E-commerce, SaaS MVPs & Custom Web Portals',
  },
  {
    id: 'backend-development',
    title: 'Backend & API Engineering',
    shortTitle: 'Backend Development',
    shortDescription: 'Robust backend systems, microservices, and high-throughput REST APIs using Django and FastAPI.',
    bannerImage: backendBanner,
    badge: 'High Performance',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    accentColor: 'text-emerald-600',
    themeBorder: 'hover:border-emerald-300',
    tagline: 'Powering web applications with resilient, scalable, and secure backend systems.',
    overview: 'Specializing in Python-powered backend engineering, I design and construct reliable server-side architectures, RESTful APIs, database layers, and asynchronous task queues capable of handling complex business logic with sub-millisecond response times.',
    
    // Individual role
    individualRole: {
      summary: 'As an individual backend engineer, I personally construct your application’s core computational engine, database relationships, security perimeter, and API endpoints for seamless frontend/mobile consumption.',
      responsibilities: [
        'API Contract Design: Establishing clear JSON payload schemas and HTTP status conventions.',
        'Business Logic Implementation: Writing modular, maintainable Python code with Django ORM or SQLAlchemy.',
        'Authentication & Authorization: Implementing secure JWT tokens, OAuth, password hashing, and role checks.',
        'Performance Tuning: Query profiling, database indexing, and Redis caching for ultra-low latency.',
        'Third-Party Integrations: Connecting payment gateways (Stripe/Razorpay), SMS, email, and cloud storage.',
        'API Documentation: Generating interactive Swagger UI / ReDoc for client & frontend team use.'
      ],
      advantages: [
        'Zero Bloat Code - Lean, purpose-built architecture tailored strictly to your data model',
        'Bank-Grade Security - Built-in protection against SQL injection, CSRF, and CORS vulnerabilities',
        'High Scalability - Asynchronous architecture ready to scale from 10 to 100k+ users'
      ]
    },

    // How it is built
    buildSteps: [
      {
        step: '01',
        phase: 'Data Modeling & Contract Specs',
        title: 'Schema & Endpoint Blueprint',
        desc: 'Defining normalized database entity relations, ER diagrams, endpoint routes, request/response models, and error handling standards.'
      },
      {
        step: '02',
        phase: 'Core API & Logic Engineering',
        title: 'API Development with DRF / FastAPI',
        desc: 'Writing serializers, viewsets, CRUD operations, database queries, and custom business rules in Python.'
      },
      {
        step: '03',
        phase: 'Auth, Security & Integrations',
        title: 'Security & Third-Party Services',
        desc: 'Implementing JWT token refresh mechanics, rate limiters, payment webhooks, and asynchronous email/SMS notifications.'
      },
      {
        step: '04',
        phase: 'Caching & Background Task Queues',
        title: 'Redis & Celery Optimization',
        desc: 'Configuring Redis for fast in-memory query caching and Celery workers for heavy background task execution.'
      },
      {
        step: '05',
        phase: 'Dockerization & Cloud Deploy',
        title: 'Container & Server Launch',
        desc: 'Wrapping backend in Docker containers, setting up Gunicorn/Uvicorn behind Nginx, and deploying to AWS EC2 or Railway.'
      }
    ],

    deliverables: [
      'Production-grade RESTful APIs with Django REST Framework or FastAPI',
      'Asynchronous task processing and background queues using Celery & Redis',
      'Secure JWT/OAuth2 authentication, API rate limiting, and CORS security',
      'Optimized PostgreSQL / MySQL database models with indexing & migrations',
      'Third-party payment gateways (Stripe, Razorpay) & external API webhooks',
      'Interactive Swagger / Postman API collection for testing',
      'Docker container files (Dockerfile & docker-compose.yml)',
      'Complete deployment setup guide & post-launch developer support'
    ],
    techStack: ['Python', 'Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    timeline: '1 to 3 Weeks',
    idealFor: 'SaaS Platforms, Mobile App Backends, FinTech APIs, Custom CMS & Automation Systems',
  },
  {
    id: 'frontend-development',
    title: 'Frontend & Interactive UI',
    shortTitle: 'Frontend Development',
    shortDescription: 'Modern, accessible and interactive user interfaces crafted with React, JavaScript and Tailwind CSS.',
    bannerImage: frontendBanner,
    badge: 'Modern UI/UX',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
    accentColor: 'text-purple-600',
    themeBorder: 'hover:border-purple-300',
    tagline: 'Creating engaging, pixel-perfect user experiences that captivate and convert.',
    overview: 'I turn designs and wireframes into highly responsive, interactive, and aesthetically pleasing client-side web interfaces. Leveraging modern React, clean component architectures, Tailwind CSS, and Framer Motion micro-animations.',
    
    // Individual role
    individualRole: {
      summary: 'As an individual frontend specialist, I craft every UI component, screen transition, and responsive layout with obsessive attention to detail, typography, and speed.',
      responsibilities: [
        'Pixel-Perfect Conversion: Converting Figma / Adobe XD UI mockups into live React components.',
        'Component Architecture: Building reusable, atomic design system components with clean props.',
        'State & API Handling: Managing state, asynchronous API data fetching, loading skeletons, and error boundaries.',
        'Smooth Micro-interactions: Integrating fluid Framer Motion animations that feel natural and premium.',
        'Cross-Browser & Device Polish: Ensuring smooth 60fps operation on iPhone, Android, tablets, and 4K displays.'
      ],
      advantages: [
        'Ultra Fast Load Times - Minimal bundle size, code splitting, and asset optimization',
        'Clean, Readable Code - Modular component structure that is easy to extend',
        'Interactive & Engaging - Polished user experience that elevates your brand credibility'
      ]
    },

    // How it is built
    buildSteps: [
      {
        step: '01',
        phase: 'Design System & Component Tokenization',
        title: 'Design Review & Theme Setup',
        desc: 'Analyzing UI mockups, setting up color palettes, font scales, spacing tokens, and base Tailwind CSS design configuration.'
      },
      {
        step: '02',
        phase: 'Component-Driven Development',
        title: 'Building UI Components',
        desc: 'Coding buttons, cards, modals, navigation bars, form inputs, and interactive data visualizations in React.'
      },
      {
        step: '03',
        phase: 'State Flow & Backend Integration',
        title: 'Data Binding & API Calls',
        desc: 'Wiring REST APIs, managing global/local state, handling form submissions, validation feedback, and empty states.'
      },
      {
        step: '04',
        phase: 'Animations & Micro-interactions',
        title: 'Framer Motion & UX Polish',
        desc: 'Adding smooth page transitions, hover effects, modal animations, and interactive scroll triggers.'
      },
      {
        step: '05',
        phase: 'Performance & Accessibility Audit',
        title: 'Lighthouse 95+ & Mobile Testing',
        desc: 'Optimizing image assets, verifying WCAG accessibility standards, and conducting real-device testing across resolutions.'
      }
    ],

    deliverables: [
      'Interactive Single Page Application (SPA) with modern React 19',
      'Fully responsive UI matching Figma designs down to the pixel',
      'Framer Motion smooth scroll animations and micro-interactions',
      'Clean state management and asynchronous API integration',
      'Custom form validation with error feedback and loading states',
      'Lighthouse 95+ performance, accessibility, and best practices scores',
      'Cross-browser tested (Chrome, Safari, Firefox, Edge, iOS & Android)'
    ],
    techStack: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3', 'Vite'],
    timeline: '1 to 2 Weeks',
    idealFor: 'Web Dashboards, Admin Panels, Customer Portals, Landing Pages & Brand Websites',
  },
  {
    id: 'database-design',
    title: 'Database Design & Optimization',
    shortTitle: 'Database Solutions',
    shortDescription: 'Structured relational schema design, query tuning, indexing, and high-integrity data persistence.',
    bannerImage: databaseBanner,
    badge: 'Data Integrity',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/80',
    accentColor: 'text-amber-600',
    themeBorder: 'hover:border-amber-300',
    tagline: 'Architecting robust, organized, and lightning-fast database structures for your data.',
    overview: 'A solid database is the backbone of any reliable application. I design normalized relational schemas, write optimized SQL queries, implement indexing strategies, and configure caching to ensure zero data loss and ultra-fast query execution under heavy load.',
    
    // Individual role
    individualRole: {
      summary: 'As an individual database designer, I eliminate data redundancy, prevent race conditions, and architect high-speed relational storage so your application never slows down as your data grows.',
      responsibilities: [
        'Entity Relationship Modeling: Mapping complex business relations into clean 3NF schemas.',
        'Query Performance Tuning: Profiling slow queries with EXPLAIN ANALYZE and removing N+1 query bottlenecks.',
        'Index Architecture: Designing B-Tree, GIN, and Composite indexes for sub-millisecond lookups.',
        'Data Migration Strategies: Planning safe, zero-downtime database migrations and versioning.',
        'Caching Layers: Integrating Redis in-memory caching for high-frequency read operations.'
      ],
      advantages: [
        'Zero Data Loss - Enforced relational integrity constraints and foreign keys',
        '10x Faster Query Speeds - Eliminating costly table scans with smart indexing',
        'Scalable Schema - Designed to grow seamlessly from thousands to millions of records'
      ]
    },

    // How it is built
    buildSteps: [
      {
        step: '01',
        phase: 'Data Requirement Mapping',
        title: 'Entity & Cardinality Analysis',
        desc: 'Analyzing data flow, defining entities, primary/foreign keys, uniqueness constraints, and data type specifications.'
      },
      {
        step: '02',
        phase: 'Relational Schema Normalization',
        title: '3NF Database Architecture',
        desc: 'Structuring tables up to Third Normal Form (3NF) to eliminate anomalies, duplicated data, and referential errors.'
      },
      {
        step: '03',
        phase: 'Query Optimization & Indexing',
        title: 'SQL Tuning & Index Strategy',
        desc: 'Writing optimized SQL queries, analyzing query execution plans, and placing targeted indexes on high-traffic columns.'
      },
      {
        step: '04',
        phase: 'Redis In-Memory Caching',
        title: 'High-Speed Caching Layer',
        desc: 'Configuring Redis cache keys and invalidation logic to handle heavy read operations with instant responses.'
      },
      {
        step: '05',
        phase: 'Migration Scripts & Backups',
        title: 'Migration & Backup Automation',
        desc: 'Creating automated migration scripts, integrity verification tests, and automated backup schedules.'
      }
    ],

    deliverables: [
      'Entity-Relationship (ER) diagram and relational schema documentation',
      'PostgreSQL, MySQL, or SQLite schema setup with normalized tables (3NF)',
      'Optimized SQL queries and index strategies for high-traffic workloads',
      'Redis in-memory caching setup and invalidation architecture',
      'Database migration scripts with zero-downtime version control',
      'Automated backup configuration and data recovery procedures'
    ],
    techStack: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'SQLAlchemy', 'Django ORM', 'MongoDB'],
    timeline: '3 to 7 Days',
    idealFor: 'Complex SaaS Databases, High-Traffic Apps, E-commerce Inventories & Analytics',
  },
  {
    id: 'deployment-cloud',
    title: 'Cloud Deployment & DevOps',
    shortTitle: 'Cloud & Deployment',
    shortDescription: 'Production containerization with Docker, CI/CD pipelines, and cloud setup on AWS & Vercel.',
    bannerImage: cloudBanner,
    badge: 'Cloud Ready',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200/80',
    accentColor: 'text-sky-600',
    themeBorder: 'hover:border-sky-300',
    tagline: 'Automating your deployment pipeline with secure, containerized cloud infrastructure.',
    overview: 'Taking web applications from localhost to production seamlessly. I configure multi-stage Docker containerization, set up continuous integration & continuous deployment (CI/CD) pipelines with GitHub Actions, and deploy services on AWS (EC2, S3), Railway, and Vercel with SSL security.',
    
    // Individual role
    individualRole: {
      summary: 'As an individual DevOps engineer, I transform your raw code into an automated, highly available, and secure production deployment that runs 24/7 with zero manual maintenance.',
      responsibilities: [
        'Containerization: Writing clean, multi-stage Dockerfiles for frontend and backend services.',
        'CI/CD Pipeline Automation: Setting up GitHub Actions workflows to auto-test and auto-deploy on git push.',
        'Cloud Server Setup: Provisioning Linux EC2 instances, security firewalls, and IAM access controls.',
        'Reverse Proxy & SSL: Configuring Nginx reverse proxy, Gunicorn daemon, and free auto-renewing Let’s Encrypt SSL.',
        'Domain & DNS: Connecting custom domains, DNS records, and Cloudflare CDN caching.'
      ],
      advantages: [
        'Automated Deployments - Simply push code to GitHub and your live site updates automatically',
        'Production Hardening - Strict firewall rules, non-root Docker execution, and SSL encryption',
        'Zero-Downtime Releases - Seamless updates without taking your application offline'
      ]
    },

    // How it is built
    buildSteps: [
      {
        step: '01',
        phase: 'Containerization & Docker Orchestration',
        title: 'Multi-Stage Docker Setup',
        desc: 'Writing optimized Dockerfiles, reducing image sizes with multi-stage builds, and configuring docker-compose for local and production parity.'
      },
      {
        step: '02',
        phase: 'CI/CD Workflow Engineering',
        title: 'GitHub Actions Automation',
        desc: 'Creating automated CI/CD pipeline scripts to run tests, build artifacts, and securely SSH into cloud servers on push.'
      },
      {
        step: '03',
        phase: 'Cloud Infrastructure Provisioning',
        title: 'AWS Server & Security Setup',
        desc: 'Configuring Ubuntu EC2 instances, setting up SSH key pairs, security groups, environment secrets, and S3 media storage.'
      },
      {
        step: '04',
        phase: 'Nginx, Gunicorn & SSL Security',
        title: 'Web Server & SSL Encryption',
        desc: 'Configuring Nginx reverse proxy, Gunicorn WSGI workers, HTTP-to-HTTPS redirects, and automated Let’s Encrypt SSL certificates.'
      },
      {
        step: '05',
        phase: 'DNS Routing & Monitoring',
        title: 'Domain Connection & Live Launch',
        desc: 'Routing custom domain DNS, verifying uptime monitoring, setting up log rotation, and delivering handover credentials.'
      }
    ],

    deliverables: [
      'Multi-stage Docker containerization (Dockerfile & docker-compose.yml)',
      'Automated CI/CD deployment pipeline with GitHub Actions',
      'AWS EC2 / S3 / RDS cloud infrastructure configuration',
      'Nginx reverse proxy setup with Gunicorn and HTTPS SSL certificates',
      'Custom domain DNS routing and Cloudflare CDN caching',
      'Environment variables security management and server restart policies',
      'Comprehensive DevOps deployment handbook and server access guide'
    ],
    techStack: ['Docker', 'AWS (EC2, S3)', 'GitHub Actions', 'Nginx', 'Gunicorn', 'Vercel', 'Linux / Ubuntu'],
    timeline: '3 to 7 Days',
    idealFor: 'Production Releases, SaaS Cloud Launches, Automated Deployments & Cloud Migration',
  },
  {
    id: 'consultation-support',
    title: 'Technical Consultation & Support',
    shortTitle: 'Consultation & Support',
    shortDescription: 'Architecture consultation, code reviews, performance tuning, and ongoing technical support.',
    bannerImage: consultationBanner,
    badge: 'Expert Guidance',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200/80',
    accentColor: 'text-rose-600',
    themeBorder: 'hover:border-rose-300',
    tagline: 'Expert architectural advice, rapid bug resolution, and dedicated technical maintenance.',
    overview: 'Whether you need a comprehensive code audit, guidance on technology selection, legacy code refactoring, critical bug resolution, or long-term application maintenance, I provide dependable technical advisory to keep your web software running smoothly.',
    
    // Individual role
    individualRole: {
      summary: 'As an independent technical consultant, I analyze your codebase, uncover hidden bottlenecks, and provide clear actionable solutions with direct hands-on code refactoring.',
      responsibilities: [
        'Codebase Audit: Inspecting repository architecture, code quality, dependencies, and antipatterns.',
        'Performance Diagnosis: Identifying memory leaks, slow backend queries, and UI rendering lag.',
        'Bug Fixing & Refactoring: Resolving critical bugs and rewriting fragile code paths with unit test coverage.',
        'Tech Stack Advisory: Helping you choose the right framework, database, and cloud provider for your scale.',
        'Ongoing Maintenance: Security patch updates, framework upgrades, and feature maintenance.'
      ],
      advantages: [
        'Honest Technical Feedback - Unbiased recommendations focused on your real business needs',
        'Hands-on Implementation - Not just theory; I write the code and implement the fixes',
        'Direct Developer Access - Fast communication via Slack, Discord, or Email'
      ]
    },

    // How it is built
    buildSteps: [
      {
        step: '01',
        phase: 'Codebase & Diagnostic Assessment',
        title: 'Initial Audit & Problem Discovery',
        desc: 'Reviewing your GitHub repository, error logs, architecture bottlenecks, and project requirements.'
      },
      {
        step: '02',
        phase: 'Actionable Solution Roadmap',
        title: 'Diagnostic Report & Priority Plan',
        desc: 'Delivering a prioritized roadmap detailing immediate fixes, performance optimizations, and architectural refactoring.'
      },
      {
        step: '03',
        phase: 'Hands-on Refactoring & Bug Fixing',
        title: 'Execution & Code Remediation',
        desc: 'Fixing critical bugs, rewriting slow algorithms, resolving database bottlenecks, and adding test suites.'
      },
      {
        step: '04',
        phase: 'Verification & Performance Benchmarking',
        title: 'Testing & Speed Verification',
        desc: 'Running load tests, verifying bug fixes across scenarios, and ensuring system stability.'
      },
      {
        step: '05',
        phase: 'Documentation & Ongoing Care',
        title: 'Handover & Dedicated Support',
        desc: 'Providing detailed architecture notes, best practice guidelines, and ongoing maintenance support.'
      }
    ],

    deliverables: [
      'Comprehensive Codebase & Architecture Audit Report',
      'Hands-on bug fixes and legacy code refactoring with Git PRs',
      'Performance optimization for slow database queries and APIs',
      'Tech stack selection and system design recommendations',
      'API documentation, onboarding guides, and engineering standards',
      'Dedicated technical support and ongoing software maintenance'
    ],
    techStack: ['Code Audits', 'Architecture Review', 'Python / Django', 'React', 'Git', 'System Design'],
    timeline: 'Flexible (Hourly / Weekly / Project-based)',
    idealFor: 'Bug Fixing, Code Audits, Tech Debt Reduction, Architecture Planning & Long-term Support',
  },
]
