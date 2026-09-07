'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { ArrowRight, Brain, Code2, Zap } from 'lucide-react';

const floatingBadges = [
  { icon: Brain, label: 'AI / RAG Systems', delay: 0.8, x: '-5%', y: '28%' },
  { icon: Code2, label: 'Full-Stack Dev', delay: 1.0, x: '87%', y: '32%' },
  { icon: Zap, label: 'Real-Time Systems', delay: 1.2, x: '82%', y: '62%' },
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
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fafaf9] pb-16 pt-24"
    >
      {/* Subtle grid background — Optimus style */}
      <div className="absolute inset-0 opacity-[0.035]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#080503" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Warm radial gradient center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="h-[700px] w-[700px] rounded-full bg-[#ecebe7]/60 blur-[120px]" />
      </div>

      {/* Floating skill badges */}
      {floatingBadges.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={i}
            className="absolute hidden lg:flex items-center gap-2 rounded-full border border-[#dad7d0] bg-white px-4 py-2 text-xs font-medium text-[#5e534a] shadow-card"
            style={{ left: badge.x, top: badge.y }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isIntroDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ delay: badge.delay, duration: 0.5 }}
          >
            <Icon size={13} className="text-[#080503]" />
            {badge.label}
          </motion.div>
        );
      })}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#dad7d0] bg-white px-4 py-1.5 shadow-sm"
          custom={0}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
          <span className="text-xs font-semibold tracking-widest text-[#5e534a] uppercase">
            {PORTFOLIO_DATA.hero.badge}
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="mb-4 section-label justify-center"
          custom={0.5}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          AI-Focused Software Engineer
        </motion.p>

        {/* Name — Optimus large editorial style */}
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tight text-[#080503] sm:text-7xl lg:text-8xl xl:text-9xl"
          custom={1}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.hero.name}
        </motion.h1>

        {/* Title — serif italic accent */}
        <motion.p
          className="mb-6 text-xl font-serif italic text-[#5e534a] sm:text-2xl"
          custom={2}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.hero.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#7b6f66] sm:text-lg"
          custom={3}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          custom={4}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          <motion.a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[#080503] px-7 py-3.5 text-sm font-semibold text-[#fafaf9] transition-all duration-200 hover:bg-[#2a2520]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {PORTFOLIO_DATA.hero.cta}
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-[#dad7d0] bg-white px-7 py-3.5 text-sm font-semibold text-[#080503] transition-all duration-200 hover:bg-[#f3f2ee]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            About Me
          </motion.a>
        </motion.div>

        {/* Stats row — Optimus-style metrics */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 border-t border-[#dad7d0] pt-10"
          custom={5}
          variants={titleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.about.highlights.map((h, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-[#080503]">{h.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#7b6f66]">{h.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isIntroDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5 text-[#b8b4ad]"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.a>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#dad7d0] to-transparent" />
    </section>
  );
}
