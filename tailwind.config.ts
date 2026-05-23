import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Neon Palette
        matrix: {
          50: '#f0ffee',
          100: '#dcffdb',
          200: '#b8ffb3',
          300: '#88ff7a',
          400: '#54ff41',
          500: '#00ff00', // Primary neon green
          600: '#00dd00',
          700: '#00bb00',
          800: '#008800',
          900: '#005500',
        },
        cyber: {
          black: '#0a0e27', // Deep space black
          dark: '#0f1535', // Dark blue-black
          card: 'rgba(15, 21, 53, 0.7)', // Semi-transparent card bg
          border: '#1a3d4d', // Subtle cyan-ish border
          glow: '#00ff88', // Softer neon green
        },
        neon: {
          green: '#00ff00',
          cyan: '#00ffff',
          magenta: '#ff00ff',
          pink: '#ff1493',
        },
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.4)',
      },
      borderColor: {
        glass: 'rgba(255, 255, 255, 0.1)',
        'glass-strong': 'rgba(255, 255, 255, 0.2)',
      },
      textColor: {
        glow: '#00ff88',
        neon: '#00ff00',
      },
      boxShadow: {
        'glow-green': '0 0 10px rgba(0, 255, 0, 0.3), 0 0 20px rgba(0, 255, 0, 0.1)',
        'glow-green-lg': '0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.2)',
        'glow-cyan': '0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.1)',
        'glow-magenta': '0 0 10px rgba(255, 0, 255, 0.3), 0 0 20px rgba(255, 0, 255, 0.1)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'neon-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-box': {
          '0%, 100%': { borderColor: 'rgba(0, 255, 0, 0.3)' },
          '50%': { borderColor: 'rgba(0, 255, 0, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'neon-flicker': 'neon-flicker 0.15s infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'glow-box': 'glow-box 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
      backdropBlur: {
        glass: '10px',
      },
      opacity: {
        glass: '0.05',
        'glass-light': '0.1',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
