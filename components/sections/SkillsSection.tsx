'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';

const categoryConfig: Record<string, { dot: string; label: string }> = {
  'Languages': { dot: 'bg-emerald-500', label: 'text-[#059669]' },
  'Frontend': { dot: 'bg-blue-500', label: 'text-[#1a56db]' },
  'Backend': { dot: 'bg-violet-500', label: 'text-[#7c3aed]' },
  'AI / LLM': { dot: 'bg-amber-500', label: 'text-[#d97706]' },
  'Databases & Caching': { dot: 'bg-rose-500', label: 'text-[#e11d48]' },
  'Auth & Real-Time': { dot: 'bg-cyan-500', label: 'text-[#0891b2]' },
  'DevOps & Tools': { dot: 'bg-stone-500', label: 'text-[#5e534a]' },
  'CMS & Practices': { dot: 'bg-indigo-500', label: 'text-[#4338ca]' },
};

export function SkillsSection() {
  const skillCategories = Object.entries(PORTFOLIO_DATA.skills).map(([category, items]) => ({
    category,
    items,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-4">Skills</p>
        <h2 className="text-4xl font-bold tracking-tight text-[#080503] md:text-5xl lg:text-6xl">
          Technical{' '}
          <span className="font-serif italic font-normal text-[#5e534a]">expertise</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#7b6f66]">
          Full-stack to AI pipelines — the tools I use to build and ship.
        </p>
      </motion.div>

      {/* Skills table — Optimus-style clean list */}
      <motion.div
        className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-[#dad7d0] bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skillCategories.map((category, categoryIndex) => {
          const config = categoryConfig[category.category] || { dot: 'bg-stone-400', label: 'text-[#5e534a]' };
          return (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className={`px-6 py-5 ${
                categoryIndex !== skillCategories.length - 1 ? 'border-b border-[#ecebe7]' : ''
              }`}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start">
                {/* Category label */}
                <div className="flex items-center gap-2 md:w-52 md:shrink-0">
                  <div className={`h-2 w-2 rounded-full ${config.dot}`} />
                  <h3 className={`text-sm font-semibold ${config.label}`}>
                    {category.category}
                  </h3>
                </div>
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: categoryIndex * 0.04 + skillIndex * 0.04,
                        duration: 0.3,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="rounded-full border border-[#dad7d0] bg-[#f3f2ee] px-3 py-1 text-xs font-medium text-[#433830] transition-all duration-150 hover:border-[#080503] hover:bg-[#080503] hover:text-[#fafaf9] cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Scrolling skills ticker — Optimus-style */}
      <div className="mt-16 overflow-hidden">
        <div className="flex">
          <div className="ticker-track">
            {[...Object.values(PORTFOLIO_DATA.skills).flat(), ...Object.values(PORTFOLIO_DATA.skills).flat()].map((skill, i) => (
              <span
                key={i}
                className="mx-3 inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-[#b8b4ad]"
              >
                <span className="h-1 w-1 rounded-full bg-[#dad7d0]" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
