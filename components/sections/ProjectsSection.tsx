'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/brand-icons';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  links: { demo: string; github: string };
  featured: boolean;
  category: string;
  color: 'green' | 'cyan' | 'magenta';
}

const colorMap: Record<string, { badge: string; dot: string; number: string }> = {
  green: {
    badge: 'bg-[#ecfdf5] text-[#059669] border-[#a7f3d0]',
    dot: 'bg-emerald-500',
    number: 'text-[#059669]',
  },
  cyan: {
    badge: 'bg-[#eff6ff] text-[#1a56db] border-[#bfdbfe]',
    dot: 'bg-blue-500',
    number: 'text-[#1a56db]',
  },
  magenta: {
    badge: 'bg-[#f5f3ff] text-[#7c3aed] border-[#ddd6fe]',
    dot: 'bg-violet-500',
    number: 'text-[#7c3aed]',
  },
};

export function ProjectsSection() {
  const featured = PORTFOLIO_DATA.projects.filter((p) => p.featured);
  const others = PORTFOLIO_DATA.projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Section heading */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-4">Projects</p>
        <h2 className="text-4xl font-bold tracking-tight text-[#080503] md:text-5xl lg:text-6xl">
          Production-grade{' '}
          <span className="font-serif italic font-normal text-[#5e534a]">work</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#7b6f66]">
          AI pipelines, enterprise systems, and real-world web platforms.
        </p>
      </motion.div>

      {/* Featured Projects — Bento-style asymmetric grid */}
      <motion.div
        className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-5"
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
              <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#dad7d0] bg-white p-7 transition-all duration-200 hover:border-[#b8b4ad] hover:shadow-card-hover">
                {/* Number */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-[#b8b4ad]" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#b8b4ad]">
                      {project.category}
                    </span>
                  </div>
                  <span className={`text-xs font-mono font-bold ${colors.number}`}>
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-1 text-xl font-bold text-[#080503] transition-colors duration-200 group-hover:text-[#433830]">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-[#7b6f66]">{project.subtitle}</p>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-[#5e534a]">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-[#ecebe7] pt-4">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-[#5e534a] transition-colors hover:text-[#080503]"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={13} />
                      Live Site
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-[#5e534a] transition-colors hover:text-[#080503]"
                      whileHover={{ x: 2 }}
                    >
                      <GithubIcon size={13} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Other Projects — 3-col grid */}
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {others.map((project, index) => {
          const colors = colorMap[project.color] || colorMap.green;
          return (
            <motion.div key={project.id} variants={itemVariants}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#dad7d0] bg-white p-6 transition-all duration-200 hover:border-[#b8b4ad] hover:shadow-card-hover">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#b8b4ad]">
                    {project.category}
                  </span>
                  <span className={`text-xs font-mono font-bold ${colors.number}`}>
                    0{featured.length + index + 1}
                  </span>
                </div>

                <h3 className="mb-1 text-base font-bold text-[#080503] transition-colors duration-200 group-hover:text-[#433830]">
                  {project.title}
                </h3>
                <p className="mb-2 text-xs font-medium text-[#7b6f66]">{project.subtitle}</p>
                <p className="mb-5 flex-grow text-sm leading-relaxed text-[#5e534a]">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${colors.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-[#ecebe7] pt-4">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-[#5e534a] transition-colors hover:text-[#080503]"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={12} />
                      Live Site
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-[#5e534a] transition-colors hover:text-[#080503]"
                      whileHover={{ x: 2 }}
                    >
                      <GithubIcon size={12} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
