'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { MapPin, Mail, ArrowRight } from 'lucide-react';

export function AboutSection() {
  const [photoError, setPhotoError] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Section label */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-4">About</p>
        <h2 className="text-4xl font-bold tracking-tight text-[#080503] md:text-5xl lg:text-6xl">
          Engineer, builder,{' '}
          <span className="font-serif italic font-normal text-[#5e534a]">& AI enthusiast</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Left — Photo */}
        <motion.div className="mx-auto w-full max-w-md" variants={itemVariants}>
          <div className="relative">
            {/* Photo frame */}
            <div className="relative overflow-hidden rounded-2xl border border-[#dad7d0] bg-[#f3f2ee]">
              <div className="relative aspect-[4/5] overflow-hidden">
                {!photoError ? (
                  <Image
                    src={PORTFOLIO_DATA.about.photo.src}
                    alt={PORTFOLIO_DATA.about.photo.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#ecebe7] px-6 text-center">
                    <div>
                      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#dad7d0]">
                        <span className="text-2xl font-bold text-[#5e534a]">AP</span>
                      </div>
                      <p className="text-sm text-[#5e534a]">
                        Add photo at <span className="font-semibold text-[#080503]">public/profile.PNG</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating badge — location */}
            <motion.div
              className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-[#dad7d0] bg-white px-4 py-2.5 shadow-card"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <MapPin size={13} className="text-[#5e534a]" />
              <span className="text-xs font-medium text-[#5e534a]">Uttar Pradesh, India</span>
            </motion.div>

            {/* Floating badge — open to work */}
            <motion.div
              className="absolute -top-4 -right-4 flex items-center gap-2 rounded-xl border border-[#dad7d0] bg-white px-4 py-2.5 shadow-card"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span className="text-xs font-semibold text-[#080503]">Open to Work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div className="space-y-6 lg:pl-4" variants={itemVariants}>
          <div>
            <h3 className="mb-1 text-2xl font-bold text-[#080503]">Abhay Pal</h3>
            <p className="text-sm font-medium text-[#5e534a]">AI-Focused Software Engineer · 2 Years Experience</p>
          </div>

          <p className="text-base leading-relaxed text-[#433830]">
            {PORTFOLIO_DATA.about.description}
          </p>

          <p className="text-sm leading-relaxed text-[#5e534a]">
            {PORTFOLIO_DATA.about.bio2}
          </p>

          {/* Contact chip */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="mailto:abhaypal1298@gmail.com"
              className="flex items-center gap-2 rounded-full border border-[#dad7d0] bg-[#f3f2ee] px-4 py-2 text-xs font-medium text-[#5e534a] transition-all hover:border-[#080503] hover:text-[#080503]"
            >
              <Mail size={12} />
              abhaypal1298@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#080503] px-6 py-3 text-sm font-semibold text-[#fafaf9] transition-all duration-200 hover:bg-[#2a2520]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let&apos;s Collaborate
              <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#dad7d0] bg-white px-6 py-3 text-sm font-semibold text-[#080503] transition-all duration-200 hover:bg-[#f3f2ee]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Highlights */}
      <motion.div
        className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PORTFOLIO_DATA.about.highlights.map((highlight, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group rounded-xl border border-[#dad7d0] bg-white p-6 text-center transition-all duration-200 hover:border-[#b8b4ad] hover:shadow-card-hover"
            whileHover={{ y: -4 }}
          >
            <h3 className="mb-2 text-4xl font-bold tracking-tight text-[#080503]">
              {highlight.value}
            </h3>
            <p className="text-sm text-[#5e534a]">{highlight.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
