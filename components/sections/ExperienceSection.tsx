'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id="experience"
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
          Work <span className="text-neon-green">Experience</span>
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-slate-400">
          2 years building production systems across enterprise, AI, and web platforms.
        </p>
        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-neon-green to-cyan-400" />
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green/60 via-cyan-400/40 to-transparent md:left-1/2" />

        {PORTFOLIO_DATA?.experience?.map((exp, index) => (
          <motion.div
            key={exp?.id}
            className={`relative mb-12 flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-6 z-10 -translate-x-1/2 md:left-1/2">
              <motion.div
                className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-neon-green bg-[#0a0e27]"
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="h-2 w-2 rounded-full bg-neon-green" />
              </motion.div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-1/2" />

            {/* Card */}
            <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1331]/60 p-6 backdrop-blur-sm transition-all duration-500 hover:border-neon-green/40 hover:bg-[#0c1331]/80">
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-green/5 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors duration-300">
                        {exp?.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-neon-green" />
                        <span className="text-sm font-medium text-neon-green/80">{exp?.company}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <Calendar size={11} className="text-slate-400" />
                      <span className="text-xs text-slate-400">{exp?.period}</span>
                    </div>
                  </div>

                  <ul className="mb-4 space-y-2">
                    {exp?.highlights?.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight size={14} className="mt-0.5 shrink-0 text-neon-green/60" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp?.tech?.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neon-green/20 bg-neon-green/5 px-2.5 py-0.5 text-xs text-neon-green/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
    </section>
  );
}
