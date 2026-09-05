'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { MapPin, Mail, Download } from 'lucide-react';

export function AboutSection() {
  const [photoError, setPhotoError] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          About <span className="text-neon-green">Me</span>
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-slate-400">
          Engineer, builder, and AI enthusiast — shipping real products since 2024.
        </p>
        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-neon-green to-cyan-400" />
      </motion.div>

      <motion.div
        className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left — Photo with floating badges */}
        <motion.div className="mx-auto w-full max-w-md" variants={itemVariants}>
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-green/30 via-cyan-400/20 to-fuchsia-500/20 blur-xl opacity-60" />
            <div className="relative overflow-hidden rounded-2xl border border-neon-green/20 bg-[#0c1331] p-3">
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
                      Add your photo at <span className="font-semibold text-white">`public/profile.PNG`</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Floating badge — location */}
            <motion.div
              className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a0e27]/90 px-4 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <MapPin size={13} className="text-neon-green" />
              <span className="text-xs text-slate-300">Uttar Pradesh, India</span>
            </motion.div>

            {/* Floating badge — open to work */}
            <motion.div
              className="absolute -top-4 -right-4 flex items-center gap-2 rounded-xl border border-neon-green/30 bg-neon-green/10 px-4 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-neon-green" />
              <span className="text-xs font-semibold text-neon-green">Open to Work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div className="space-y-5 lg:pl-2" variants={itemVariants}>
          <div>
            <h3 className="mb-1 text-2xl font-bold text-white">Abhay Pal</h3>
            <p className="text-sm font-medium text-neon-green/80">AI-Focused Software Engineer · 2 Years Experience</p>
          </div>

          <p className="text-base leading-relaxed text-slate-300">
            {PORTFOLIO_DATA.about.description}
          </p>

          <p className="text-sm leading-relaxed text-slate-400">
            {PORTFOLIO_DATA.about.bio2}
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="mailto:abhaypal1298@gmail.com"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 transition-all hover:border-neon-green/40 hover:text-neon-green"
            >
              <Mail size={12} />
              abhaypal1298@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-neon-green px-6 py-3 text-sm font-bold text-[#0a0e27] transition-all duration-300 hover:bg-neon-green/90 hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let&apos;s Collaborate
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={14} />
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Highlights */}
      <motion.div
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
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
    </section>
  );
}
