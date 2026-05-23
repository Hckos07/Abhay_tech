'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { ExternalLink, Code2 } from 'lucide-react';

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
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
          A mix of production-ready builds, playful experiments, and fast MVPs.
        </p>
        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-neon-green to-cyan-400" />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants}>
            <GlassmorphicCard
              className="group flex h-full flex-col overflow-hidden p-6"
              glowColor={index % 3 === 0 ? 'green' : index % 3 === 1 ? 'cyan' : 'magenta'}
              interactive
            >
              {/* Project Info */}
              <h3 className="mb-2 text-xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-neon-green">
                {project.title}
              </h3>

              <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-400">{project.description}</p>

              {/* Technologies */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-neon-green/10 text-neon-green rounded-full border border-neon-green/30 hover:border-neon-green/60 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 border-t border-neon-green/20 pt-4">
                {project.links.demo && (
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neon-green hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <ExternalLink size={16} />
                    Website
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
                    <Code2 size={16} />
                    Code
                  </motion.a>
                )}
              </div>
            </GlassmorphicCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative line */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
    </section>
  );
}
