'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function SkillsSection() {
  const skillCategories = Object.entries(PORTFOLIO_DATA.skills).map(
    ([category, items]) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      items,
    })
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Section heading */}
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
          Tools and technologies I use to design, build, and ship robust web products.
        </p>
        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-neon-green to-cyan-400" />
      </motion.div>

      {/* Skills Categories */}
      <motion.div
        className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0c1331]/45 p-4 backdrop-blur-md sm:p-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className={`py-4 ${categoryIndex !== skillCategories.length - 1 ? 'border-b border-white/10' : ''}`}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start">
              <h3 className="w-full text-sm font-semibold tracking-wide text-neon-green md:w-64 md:shrink-0">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.08,
                      duration: 0.62,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative line */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
    </section>
  );
}
