import { Variants } from 'framer-motion';

// Framer Motion Variants for smooth animations

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const glowHover: Variants = {
  initial: { boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)' },
  whileHover: {
    boxShadow: [
      '0 0 10px rgba(0, 255, 0, 0.3)',
      '0 0 20px rgba(0, 255, 0, 0.5)',
      '0 0 30px rgba(0, 255, 0, 0.8)',
    ],
    transition: { duration: 0.3 },
  },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const slideDown: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

// Hover animations
export const cardHover = {
  whileHover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 255, 0, 0.2)',
    transition: { duration: 0.3 },
  },
  whileTap: { scale: 0.98 },
};

export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
};

// Scroll animation triggers
export const scrollRevealConfig = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
};

// Animation timing constants
export const DURATION = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 0.8,
};

export const EASE = {
  SMOOTH: [0.22, 1, 0.36, 1],
  BOUNCE: [0.68, -0.55, 0.265, 1.55],
  EASE_IN_OUT: [0.4, 0, 0.2, 1],
};
