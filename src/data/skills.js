import {
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBootstrap,
  FaDocker,
} from 'react-icons/fa6'
import {
  SiDjango,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiTailwindcss,
  SiPostman,
  SiRedis,
  SiCelery,
  SiPytest,
  SiVercel,
  SiRender,
  SiN8N,
  SiJsonwebtokens,
} from 'react-icons/si'
import { TbApi, TbBrandSocketIo } from 'react-icons/tb'
import { Server, Layout, Database, Cloud, Braces, Binary, CheckCheck, Layers } from 'lucide-react'

export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Core application logic, microservices & testing',
    icon: Server,
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
    iconColor: 'text-blue-600 bg-blue-50',
    skills: [
      { id: 'python', name: 'Python', icon: FaPython, color: '#3776AB', level: 'Advanced' },
      { id: 'django', name: 'Django', icon: SiDjango, color: '#092E20', level: 'Advanced' },
      { id: 'drf', name: 'DRF', fullName: 'Django REST Framework', icon: SiDjango, color: '#A30000', level: 'Advanced' },
      { id: 'fastapi', name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 'Proficient' },
      { id: 'jwt', name: 'JWT Auth', fullName: 'JWT Authentication', icon: SiJsonwebtokens, color: '#D63AFF', level: 'Advanced' },
      { id: 'celery', name: 'Celery', fullName: 'Celery Task Queue', icon: SiCelery, color: '#37814A', level: 'Advanced' },
      { id: 'pytest', name: 'Pytest', fullName: 'Pytest Test Framework', icon: SiPytest, color: '#0A9EDC', level: 'Advanced' },
      { id: 'api-testing', name: 'API Testing', fullName: 'Automated API Testing', icon: CheckCheck, color: '#2563EB', level: 'Advanced' },
      { id: 'rest-api', name: 'REST APIs', icon: TbApi, color: '#2563EB', level: 'Advanced' },
      { id: 'websockets', name: 'WebSockets', icon: TbBrandSocketIo, color: '#0284C7', level: 'Intermediate' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & CS Fundamentals',
    subtitle: 'Interactive client views, OOP principles & algorithms',
    icon: Layout,
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    iconColor: 'text-emerald-600 bg-emerald-50',
    skills: [
      { id: 'react', name: 'React', icon: FaReact, color: '#61DAFB', level: 'Proficient' },
      { id: 'javascript', name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 'Advanced' },
      { id: 'oop', name: 'OOP', fullName: 'Object-Oriented Programming', icon: Braces, color: '#4F46E5', level: 'Advanced' },
      { id: 'dsa', name: 'DSA', fullName: 'Data Structures & Algorithms', icon: Binary, color: '#059669', level: 'Proficient' },
      { id: 'tailwind', name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 'Advanced' },
      { id: 'bootstrap', name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', level: 'Proficient' },
      { id: 'html5', name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 'Expert' },
      { id: 'css3', name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 'Advanced' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    subtitle: 'Schema design, caching, querying & data persistence',
    icon: Database,
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/80',
    iconColor: 'text-amber-600 bg-amber-50',
    skills: [
      { id: 'postgresql', name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 'Advanced' },
      { id: 'mysql', name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 'Advanced' },
      { id: 'redis', name: 'Redis', fullName: 'Redis In-Memory Cache', icon: SiRedis, color: '#DC382D', level: 'Advanced' },
      { id: 'db-design', name: 'Database Design', fullName: 'Relational Schema Design', icon: Layers, color: '#0284C7', level: 'Advanced' },
      { id: 'mongodb', name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 'Proficient' },
      { id: 'sqlite', name: 'SQLite', icon: SiSqlite, color: '#003B57', level: 'Advanced' },
    ],
  },
  {
    id: 'devops-tools',
    title: 'Cloud, DevOps & Tools',
    subtitle: 'Deployment, containers, orchestration & CI/CD workflows',
    icon: Cloud,
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
    iconColor: 'text-purple-600 bg-purple-50',
    skills: [
      { id: 'docker', name: 'Docker', icon: FaDocker, color: '#2496ED', level: 'Proficient' },
      { id: 'docker-compose', name: 'Docker Compose', fullName: 'Multi-Container Orchestration', icon: FaDocker, color: '#2496ED', level: 'Proficient' },
      { id: 'vercel', name: 'Vercel', fullName: 'Vercel Deployment', icon: SiVercel, color: '#000000', level: 'Advanced' },
      { id: 'render', name: 'Render', fullName: 'Render Cloud Platform', icon: SiRender, color: '#46E3B7', level: 'Proficient' },
      { id: 'n8n', name: 'n8n', fullName: 'n8n Workflow Automation', icon: SiN8N, color: '#EA4B71', level: 'Proficient' },
      { id: 'aws', name: 'AWS (EC2, S3)', icon: FaAws, color: '#FF9900', level: 'Proficient' },
      { id: 'git', name: 'Git', icon: FaGitAlt, color: '#F05032', level: 'Advanced' },
      { id: 'github', name: 'GitHub', icon: FaGithub, color: '#181717', level: 'Advanced' },
      { id: 'linux', name: 'Linux', icon: FaLinux, color: '#FCC624', level: 'Proficient' },
      { id: 'postman', name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 'Advanced' },
    ],
  },
]

// Flat list for backwards compatibility
export const skillsList = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.title }))
)
