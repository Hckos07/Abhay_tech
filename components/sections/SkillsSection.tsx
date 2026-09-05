'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';

const categoryColors: Record<string, string> = {
  'Languages': 'text-neon-green border-neon-green/30 bg-neon-green/5',
  'Frontend': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
  'Backend': 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  'AI / LLM': 'text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/5',
  'Databases & Caching': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
  'Auth & Real-Time': 'text-rose-400 border-rose-400/30 bg-rose-400/5',
  'DevOps & Tools': 'text-slate-300 border-slate-500/30 bg-slate-500/5',
  'CMS & Practices': 'text-violet-400 border-violet-400/30 bg-violet-400/5',
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
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Technical <span className="text-neon-green">Skills</span>
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-slate-400">
          Full-stack to AI pipelines — the tools I use to build and ship.
        </p>
        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-neon-green to-cyan-400" />
      </motion.div>

      <motion.div
        className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0c1331]/45 p-4 backdrop-blur-md sm:p-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillCategories.map((category, categoryIndex) => {
          const colorClass = categoryColors[category.category] || 'text-slate-300 border-slate-500/30 bg-slate-500/5';
          return (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className={`py-4 ${categoryIndex !== skillCategories.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start">
                <h3 className={`w-full text-sm font-semibold tracking-wide md:w-52 md:shrink-0 ${colorClass.split(' ')[0]}`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.05 + skillIndex * 0.05,
                        duration: 0.5,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className={`rounded-full border px-3 py-1 text-xs ${colorClass}`}
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

      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
    </section>
  );
}
