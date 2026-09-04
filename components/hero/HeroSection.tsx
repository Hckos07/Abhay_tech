'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/constants';

const MatrixRain = dynamic(() =>
  import('./MatrixRain').then((mod) => mod.MatrixRain),
  { ssr: false }
);

export function HeroSection() {
  const [isIntroDone, setIsIntroDone] = React.useState(
    () => typeof window !== 'undefined' && document.documentElement.dataset.introDone === 'true'
  );

  React.useEffect(() => {
    const handleIntroDone = () => {
      setIsIntroDone(true);
    };

    window.addEventListener('opening-theme:done', handleIntroDone);
    return () => {
      window.removeEventListener('opening-theme:done', handleIntroDone);
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    }),
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.9,
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.95 },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.2, duration: 0.8 },
    },
    animate: {
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent pb-16 pt-24"
    >
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-25">
        <MatrixRain />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="mb-6">
          <motion.h1 className="mb-3 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl" custom={0} variants={titleVariants} initial="hidden" animate={isIntroDone ? 'visible' : 'hidden'}>
            Full Stack Developer
          </motion.h1>
          <motion.p className="mx-auto mb-2 inline-block rounded-full border border-white/15 px-4 py-1 text-xs tracking-[0.2em] uppercase text-slate-300" custom={1} variants={titleVariants} initial="hidden" animate={isIntroDone ? 'visible' : 'hidden'}>
            Building clean digital products
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          variants={subtitleVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.hero.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={buttonVariants}
          initial="hidden"
          animate={isIntroDone ? 'visible' : 'hidden'}
        >
          <motion.a
            href="#projects"
            className="rounded-lg bg-white px-7 py-3 text-base font-semibold text-[#0a0e27] shadow-sm"
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <span className="relative z-10">{PORTFOLIO_DATA.hero.cta}</span>
          </motion.a>

          <motion.a
            href="#about"
            className="rounded-lg border border-white/30 bg-white/5 px-7 py-3 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate={isIntroDone ? ['visible', 'animate'] : 'hidden'}
      >
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span>Scroll to explore</span>
          <ChevronDown className="text-slate-200" size={18} />
        </div>
      </motion.a>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 h-px w-full bg-white/10" />
    </section>
  );
}
