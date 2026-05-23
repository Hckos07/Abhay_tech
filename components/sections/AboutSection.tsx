'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function AboutSection() {
  const [photoError, setPhotoError] = React.useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Section heading */}
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          About Me
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-slate-400">
          I build polished products with clear UX, strong performance, and reliable systems.
        </p>
        <div className="mx-auto h-px w-20 bg-white/30" />
      </motion.div>

      {/* Content grid */}
      <motion.div
        className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left side - Photo */}
        <motion.div
          className="mx-auto w-full max-w-md"
          variants={itemVariants}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/50 p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#111831]">
              {!photoError ? (
                <Image
                  src={PORTFOLIO_DATA.about.photo.src}
                  alt={PORTFOLIO_DATA.about.photo.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center">
                  <p className="text-sm text-slate-300">
                    Add your photo at <span className="font-semibold text-white">`public/profile-photo.jpg`</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          className="space-y-6 lg:pl-2"
          variants={itemVariants}
        >
          <p className="text-lg leading-relaxed text-slate-300">
            {PORTFOLIO_DATA.about.description}
          </p>

          <p className="leading-relaxed text-slate-400">
            Skilled in React.js, Next.js, Node.js, MongoDB, and Redis, I focus on creating performant systems, clean architecture, and intuitive user experiences that deliver measurable impact.
          </p>

          <motion.div
            className="pt-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Let&apos;s Collaborate
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Highlights */}
      <motion.div
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PORTFOLIO_DATA.about.highlights.map((highlight, index) => (
          <GlassmorphicCard
            key={index}
            variant="bordered"
            glowColor={index === 0 ? 'green' : index === 1 ? 'cyan' : 'magenta'}
            className="p-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                {highlight.value}
              </h3>
              <p className="text-sm text-slate-400">{highlight.label}</p>
            </motion.div>
          </GlassmorphicCard>
        ))}
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-neon-green/10 rounded-full blur-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </section>
  );
}
