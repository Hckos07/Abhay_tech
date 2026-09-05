'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import dynamic from 'next/dynamic';
import { ChevronDown, Zap, Brain, Code2 } from 'lucide-react';

const MatrixRain = dynamic(() =>
  import('./MatrixRain').then((mod) => mod.MatrixRain),
  { ssr: false }
);

const floatingBadges = [
  { icon: <Brain size={13} />, label: 'AI / RAG Systems', delay: 1.4, x: '-8%', y: '25%' },
  { icon: <Code2 size={13} />, label: 'Full-Stack Dev', delay: 1.6, x: '88%', y: '30%' },
  { icon: <Zap size={13} />, label: 'Real-Time Systems', delay: 1.8, x: '80%', y: '65%' },
];

export function HeroSection() {
  const [isIntroDone, setIsIntroDone] = React.useState(
    () => typeof window !== 'undefined' && document.documentElement.dataset.introDone === 'true'
  );

  React.useEffect(() => {
    const handleIntroDone = () => setIsIntroDone(true);
    window.addEventListener('opening-theme:done', handleIntroDone);
    return () => window.removeEventListener('opening-theme:done', handleIntroDone);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent pb-16 pt-24"
    >
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        <MatrixRain />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[600px] w-[600px] rounded-full bg-neon-green/5 blur-[120px]" />
      </div>

      {/* Floating skill badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0e27]/80 px-4 py-2 text-xs text-slate-300 backdrop-blur-sm"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isIntroDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: badge.delay, duration: 0.6 }}
        >
          <span className="text-neon-green">{badge.icon}</span>
          {badge.label}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-green/30 bg-neon-green/10 px-4 py-1.5"
          custom={0}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-green" />
          <span className="text-xs font-semibold tracking-widest text-neon-green uppercase">
            {PORTFOLIO_DATA.hero.badge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mb-3 text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
          custom={1}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.hero.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          className="mb-6 text-xl font-semibold text-neon-green sm:text-2xl"
          custom={2}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.hero.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          custom={3}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          custom={4}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          <motion.a
            href="#projects"
            className="group relative overflow-hidden rounded-lg bg-neon-green px-8 py-3.5 text-sm font-bold text-[#0a0e27] shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,255,0,0.5)]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="relative z-10">{PORTFOLIO_DATA.hero.cta}</span>
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </motion.a>

          <motion.a
            href="#about"
            className="rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-neon-green/40 hover:bg-white/10"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            About Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isIntroDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1 text-slate-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.a>

      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
    </section>
  );
}
