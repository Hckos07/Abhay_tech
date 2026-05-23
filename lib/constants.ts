// Color palette constants
export const COLORS = {
  // Primary cyberpunk colors
  primary: '#00ff00', // Neon green
  secondary: '#00ff88', // Softer green
  accent: '#00ffff', // Cyan
  dark: '#ff00ff', // Magenta

  // Background colors
  bg: {
    primary: '#0a0e27', // Deep space black
    secondary: '#0f1535', // Dark blue-black
    tertiary: '#1a1f3a', // Card background
    glass: 'rgba(15, 21, 53, 0.7)', // Semi-transparent
  },

  // Text colors
  text: {
    primary: '#e2e8f0', // Light gray
    secondary: '#cbd5e1', // Medium gray
    muted: '#94a3b8', // Muted gray
    accent: '#00ff00', // Neon green
  },

  // Glow colors
  glow: {
    green: 'rgba(0, 255, 0, 0.3)',
    cyan: 'rgba(0, 255, 255, 0.3)',
    magenta: 'rgba(255, 0, 255, 0.3)',
  },

  // Neon palette
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
  { name: 'Contact', href: '#contact' },
];

// Social links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/your-username', icon: 'GitHub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-handle', icon: 'LinkedIn' },
  { name: 'Instagram', url: 'https://instagram.com/your-handle', icon: 'Instagram' },
  { name: 'Email', url: 'mailto:abhaypal1298@gmail.com', icon: 'Mail' },
];

// Portfolio content structure (user fills in later)
export const PORTFOLIO_DATA = {
  hero: {
    title: 'Full Stack Developer',
    subtitle: 'I design and ship sleek web products that feel fast, useful, and memorable.',
    cta: 'See Featured Work',
  },

  about: {
    title: 'About Me',
    description: `Full-Stack Software Engineer with 2+ years of experience building scalable web applications that transform ideas into reliable digital products.`,
    photo: {
      src: '/profile.PNG',
      alt: 'Portrait photo',
    },
    highlights: [
      { label: 'Projects Completed', value: '10+' },
      { label: 'Years Experience', value: '2+' },
      { label: 'Happy Clients', value: '10+' },
    ],
  },

  projects: [
    {
      id: '1',
      title: 'FloDMS - Dealer Management System',
      description: 'Built an enterprise DMS platform end-to-end using Next.js, Payload CMS, MongoDB, and Redis. Implemented role-based ticket routing with least-load auto-assignment, SLA lifecycle automation, Redis Pub/Sub + BullMQ + SSE real-time notifications, MFA/OTP security flows, bulk Excel user imports, and analytics with pivot reports, charts, filters, and CSV export.',
      technologies: ['Next.js', 'Payload CMS', 'MongoDB', 'Redis', 'BullMQ', 'SSE'],
      links: {
        demo: '',
        github: '',
      },
    },
    {
      id: '2',
      title: 'Orangutan Technologies - Corporate AI Platform',
      description: 'Built and structured the corporate platform to clearly present AI offerings like Man Friday Framework, FLO DMS, Shopify apps, and Agentic AI. Developed responsive solution sections, trust/case-study blocks, conversion-focused CTA flows, and SEO-friendly page architecture to improve discoverability and lead generation.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'SSR', 'SEO', 'Responsive UI'],
      links: {
        demo: 'https://www.orangutantechnologies.com',
        github: '',
      },
    },
    {
      id: '3',
      title: 'Software House World - Cloud Services Website',
      description: 'Developed a scalable corporate website experience for cloud services with productized service cards, pricing/plan visibility, CTA-driven inquiry funnels, and trust/testimonial sections. Optimized performance, information hierarchy, and reusable UI components so content updates and service expansion remain easy to manage.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Performance Optimization', 'Component Architecture'],
      links: {
        demo: 'https://www.softwarehouseworld.com',
        github: '',
      },
    },
  ],

  skills: {
    'programming languages': ['JavaScript', 'TypeScript'],
    frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'SSR'],
    'databases & caching': ['MongoDB', 'Redis'],
    'authentication & security': ['MFA/OTP', 'RBAC', 'Session Security'],
    'real-time systems': ['SSE', 'Redis Pub/Sub', 'BullMQ Workers'],
    cms: ['Payload CMS'],
    'data processing': ['Excel Parsing', 'CSV Export', 'Analytics Dashboards'],
    'performance optimization': ['Lazy Loading', 'Code Splitting', 'Retry Logic'],
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'JIRA'],
    'engineering practices': ['API Design', 'Scalable Architecture', 'Debugging'],
  },

  contact: {
    title: 'Get In Touch',
    subtitle: 'Have a product idea or need help building one? Let’s talk and shape it into something users love.',
    email: 'abhaypal1298@gmail.com',
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
