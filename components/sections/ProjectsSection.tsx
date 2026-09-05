'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { ExternalLink, Code2, Sparkles } from 'lucide-react';

const colorMap = {
  green: { badge: 'bg-neon-green/10 text-neon-green border-neon-green/30', glow: 'green' as const },
  cyan: { badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30', glow: 'cyan' as const },
  magenta: { badge: 'bg-fuchsia-400/10 text-fuchsia-400 border-fuchsia-400/30', glow: 'magenta' as const },
};

export function ProjectsSection() {
  const featured = PORTFOLIO_DATA.projects.filter((p) => p.featured);
  const others = PORTFOLIO_DATA.projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="projects"
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
          Featured <span className="text-neon-green">Projects</span>
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-slate-400">
          Production-grade systems, AI pipelines, and real-world web platforms.
        </p>
        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-neon-green to-cyan-400" />
      </motion.div>

      {/* Featured Projects — Bento-style asymmetric grid */}
      <motion.div
        className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {featured.map((project, index) => {
          const colors = colorMap[project.color] || colorMap.green;
          const isWide = index === 0;
          return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={isWide ? 'lg:col-span-3' : 'lg:col-span-2'}
            >
              <GlassmorphicCard
                className="group relative flex h-full flex-col overflow-hidden p-7"
                glowColor={colors.glow}
                interactive
              >
                {/* Featured badge */}
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-neon-green" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-neon-green/70">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-1 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-neon-green">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-slate-400">{project.subtitle}</p>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-xs ${colors.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-white/10 pt-4">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neon-green hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={15} />
                      Live Site
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neon-green hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <Code2 size={15} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </GlassmorphicCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Other Projects — 3-col grid */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {others.map((project) => {
          const colors = colorMap[project.color] || colorMap.green;
          return (
            <motion.div key={project.id} variants={itemVariants}>
              <GlassmorphicCard
                className="group flex h-full flex-col overflow-hidden p-6"
                glowColor={colors.glow}
                interactive
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-bold text-slate-100 transition-colors duration-300 group-hover:text-neon-green">
                  {project.title}
                </h3>
                <p className="mb-2 text-xs font-medium text-slate-500">{project.subtitle}</p>
                <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-2.5 py-0.5 text-xs ${colors.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-white/10 pt-4">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neon-green hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neon-green hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <Code2 size={14} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </GlassmorphicCard>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
    </section>
  );
}
