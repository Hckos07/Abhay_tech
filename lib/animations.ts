import { Variants } from 'motion/react';

// Framer Motion Variants - Light Mode

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const cardHover = {
  whileHover: {
    y: -4,
    boxShadow: '0 8px 32px rgba(8, 5, 3, 0.08)',
    transition: { duration: 0.2 },
  },
  whileTap: { scale: 0.99 },
};

export const buttonHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 20 },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const slideDown: Variants = {
  initial: { opacity: 0, y: -32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const scrollRevealConfig = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export const DURATION = {
  FAST: 0.2,
  NORMAL: 0.4,
  SLOW: 0.6,
};

export const EASE = {
  SMOOTH: [0.22, 1, 0.36, 1],
  BOUNCE: [0.68, -0.55, 0.265, 1.55],
  EASE_IN_OUT: [0.4, 0, 0.2, 1],
};
