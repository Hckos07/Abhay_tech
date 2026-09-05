// Color palette constants
export const COLORS = {
  primary: '#00ff00',
  secondary: '#00ff88',
  accent: '#00ffff',
  dark: '#ff00ff',
  bg: {
    primary: '#0a0e27',
    secondary: '#0f1535',
    tertiary: '#1a1f3a',
    glass: 'rgba(15, 21, 53, 0.7)',
  },
  text: {
    primary: '#e2e8f0',
    secondary: '#cbd5e1',
    muted: '#94a3b8',
    accent: '#00ff00',
  },
  glow: {
    green: 'rgba(0, 255, 0, 0.3)',
    cyan: 'rgba(0, 255, 255, 0.3)',
    magenta: 'rgba(255, 0, 255, 0.3)',
  },
  neon: {
    green: '#00ff00',
    cyan: '#00ffff',
    magenta: '#ff00ff',
    pink: '#ff1493',
  },
};

// Animation timing
export const ANIMATION_TIMING = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
};

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

// Social links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/Hckos07', icon: 'GitHub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/abhay-pal', icon: 'LinkedIn' },
  { name: 'Email', url: 'mailto:abhaypal1298@gmail.com', icon: 'Mail' },
];

// Portfolio content structure (user fills in later)
export const PORTFOLIO_DATA = {
  hero: {
    name: 'Abhay Pal',
    title: 'AI-Focused Software Engineer',
    subtitle: 'Building production web apps & AI-powered systems — RAG pipelines, real-time backends, and clean frontend experiences.',
    cta: 'View My Work',
    badge: 'Open to Opportunities',
  },

  about: {
    title: 'About Me',
    description: `AI-focused Software Engineer with 2 years of experience shipping production web apps and AI-powered systems. I work across the full stack — from Next.js frontends and Node.js backends to RAG pipelines with LangChain, FastAPI, and Pinecone. I care deeply about clean architecture, real-time systems, and building things that actually work at scale.`,
    bio2: `Currently based in Uttar Pradesh, India. Previously built enterprise platforms at Orangutan Technologies and scalable business solutions at Software House. I thrive in Agile teams, love solving hard backend problems, and enjoy shipping products users love.`,
    photo: {
      src: '/profile.PNG',
      alt: 'Abhay Pal — AI-focused Software Engineer',
    },
    highlights: [
      { label: 'Years Experience', value: '2+' },
      { label: 'Projects Shipped', value: '10+' },
      { label: 'Concurrent Users Supported', value: '500+' },
    ],
  },

  experience: [
    {
      id: 'exp-1',
      role: 'Software Engineer',
      company: 'Orangutan Technologies Pvt. Ltd.',
      period: 'Aug 2025 – May 2026',
      type: 'Full-time',
      highlights: [
        'Built full-stack enterprise apps with Next.js, Payload CMS, MongoDB & Redis — schema to production.',
        'Engineered ticket lifecycle automation with category-based routing & SLA escalation — cut manual triage by ~30%.',
        'Built real-time notification system via Redis Pub/Sub + BullMQ + SSE supporting 500+ concurrent users.',
        'Implemented RBAC + MFA/OTP auth with session protection and expiry validation.',
        'Containerized services with Docker; set up CI/CD pipelines via GitHub Actions.',
        'Cut page load time ~30% via caching, code splitting, lazy loading & background job processing.',
      ],
      tech: ['Next.js', 'Payload CMS', 'MongoDB', 'Redis', 'BullMQ', 'SSE', 'Docker', 'GitHub Actions'],
    },
    {
      id: 'exp-2',
      role: 'Web Developer',
      company: 'Software House',
      period: 'June 2024 – July 2025',
      type: 'Full-time',
      highlights: [
        'Built responsive business platforms with React.js, Next.js, Node.js & MongoDB.',
        'Developed REST APIs for lead management, inquiry workflows & content automation.',
        'Improved SEO ~20% via SSR, metadata optimization, sitemap generation & semantic HTML.',
        'Created reusable component libraries — reduced new feature dev time by ~25%.',
        'Integrated form validation & secure submissions, improving lead conversion reliability.',
      ],
      tech: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'SSR', 'SEO'],
    },
  ],

  projects: [
    {
      id: '1',
      title: 'DocuMind AI',
      subtitle: 'RAG Document Q&A Chatbot',
      description: 'Full-stack AI chatbot where users upload PDFs and ask questions grounded in document content. Built with Next.js 15, FastAPI, LangChain, OpenAI embeddings, and Pinecone vector storage. Features real-time streaming responses via Server-Sent Events and a modular async backend.',
      technologies: ['Next.js 15', 'FastAPI', 'Python', 'LangChain', 'OpenAI', 'Pinecone', 'SSE'],
      links: {
        demo: '',
        github: 'https://github.com/Hckos07',
      },
      featured: true,
      category: 'AI / Full-Stack',
      color: 'green' as const,
    },
    {
      id: '2',
      title: 'FloDMS',
      subtitle: 'Enterprise Dealer Management System',
      description: 'Enterprise DMS platform built end-to-end with Next.js, Payload CMS, MongoDB & Redis. Features role-based ticket routing with least-load auto-assignment, SLA lifecycle automation, real-time notifications via Redis Pub/Sub + BullMQ + SSE, MFA/OTP security, bulk Excel imports, and analytics with pivot reports & CSV export.',
      technologies: ['Next.js', 'Payload CMS', 'MongoDB', 'Redis', 'BullMQ', 'SSE', 'Docker'],
      links: {
        demo: '',
        github: '',
      },
      featured: true,
      category: 'Enterprise',
      color: 'cyan' as const,
    },
    {
      id: '3',
      title: 'Ranmars.com',
      subtitle: 'Software Development Agency Website',
      description: 'Built and structured the corporate platform for a software development consultancy — presenting services like web dev, mobile apps, MVP builds, and dedicated teams. Developed responsive service sections, trust blocks, conversion-focused CTA flows, and SEO-friendly page architecture.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'SSR', 'SEO', 'Responsive UI'],
      links: {
        demo: 'https://ranmars.com',
        github: '',
      },
      featured: false,
      category: 'Web',
      color: 'magenta' as const,
    },
    {
      id: '4',
      title: 'Funded Tech Street',
      subtitle: 'FinTech Business Financing Platform',
      description: 'Contributed to a technology-driven small business financing platform — building responsive UI components, lead capture flows, and service presentation pages. Focused on conversion-optimized layouts, performance, and clean information hierarchy for a fintech audience.',
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Performance Optimization'],
      links: {
        demo: 'https://www.fundstreet.tech',
        github: '',
      },
      featured: false,
      category: 'FinTech',
      color: 'green' as const,
    },
    {
      id: '5',
      title: 'Orangutan Technologies',
      subtitle: 'Corporate AI Platform',
      description: 'Built the corporate platform to clearly present AI offerings — Man Friday Framework, FLO DMS, Shopify apps, and Agentic AI. Developed responsive solution sections, trust/case-study blocks, and SEO-friendly page architecture to improve discoverability and lead generation.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'SSR', 'SEO'],
      links: {
        demo: 'https://www.orangutantechnologies.com',
        github: '',
      },
      featured: false,
      category: 'Web',
      color: 'cyan' as const,
    },
  ],

  skills: {
    'Languages': ['JavaScript', 'TypeScript', 'Python'],
    'Frontend': ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'SSR'],
    'AI / LLM': ['OpenAI API', 'LangChain', 'Vector Embeddings', 'RAG Pipelines', 'Pinecone'],
    'Databases & Caching': ['MongoDB', 'Redis', 'SQL'],
    'Auth & Real-Time': ['JWT', 'RBAC', 'MFA/OTP', 'SSE', 'Redis Pub/Sub', 'BullMQ'],
    'DevOps & Tools': ['Docker', 'GitHub Actions', 'CI/CD', 'Git', 'Vercel', 'JIRA', 'Postman'],
    'CMS & Practices': ['Payload CMS', 'Agile/Scrum', 'API Design', 'Scalable Architecture'],
  },

  contact: {
    title: 'Get In Touch',
    subtitle: "Have a product idea, an AI project, or need a reliable engineer? Let's build something great together.",
    email: 'abhaypal1298@gmail.com',
    phone: '+91 9935900264',
    location: 'Uttar Pradesh, India',
  },
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};

// Z-index scale
export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 1000,
  tooltip: 1100,
};

// Matrix rain configuration
export const MATRIX_CONFIG = {
  particleCount: 100,
  fallDuration: 20,
  colors: ['#00ff00', '#00ff88', '#00ffff'],
  opacity: {
    min: 0.2,
    max: 0.8,
  },
};
