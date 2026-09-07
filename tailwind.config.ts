import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-instrument)', 'Instrument Sans', 'Arial', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Instrument Serif', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      colors: {
        // Optimus-inspired light palette
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          150: '#f3f2ee',
          200: '#ecebe7',
          300: '#e7e4dd',
          400: '#dad7d0',
          500: '#b8b4ad',
          600: '#7b6f66',
          700: '#5e534a',
          800: '#433830',
          900: '#080503',
        },
        // Portfolio accent colors for light mode
        accent: {
          blue: '#1a56db',
          'blue-light': '#eff6ff',
          'blue-border': '#bfdbfe',
          emerald: '#059669',
          'emerald-light': '#ecfdf5',
          'emerald-border': '#a7f3d0',
          violet: '#7c3aed',
          'violet-light': '#f5f3ff',
          'violet-border': '#ddd6fe',
          amber: '#d97706',
          'amber-light': '#fffbeb',
          'amber-border': '#fde68a',
          rose: '#e11d48',
          'rose-light': '#fff1f2',
          'rose-border': '#fecdd3',
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(8, 5, 3, 0.06), 0 1px 2px rgba(8, 5, 3, 0.04)',
        'card-hover': '0 4px 24px rgba(8, 5, 3, 0.08), 0 2px 8px rgba(8, 5, 3, 0.04)',
        'card-lg': '0 8px 40px rgba(8, 5, 3, 0.1)',
        'input-focus': '0 0 0 3px rgba(8, 5, 3, 0.08)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-x-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-in-left': 'slide-in-left 0.5s ease-out both',
        'slide-in-right': 'slide-in-right 0.5s ease-out both',
        shimmer: 'shimmer 2s infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
        'scroll-x-reverse': 'scroll-x-reverse 30s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        '3xl': '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
