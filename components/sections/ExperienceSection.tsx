'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-4">Experience</p>
        <h2 className="text-4xl font-bold tracking-tight text-[#080503] md:text-5xl lg:text-6xl">
          Work{' '}
          <span className="font-serif italic font-normal text-[#5e534a]">history</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#7b6f66]">
          2 years building production systems across enterprise, AI, and web platforms.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#dad7d0] via-[#dad7d0] to-transparent md:left-1/2" />

        {PORTFOLIO_DATA?.experience?.map((exp, index) => (
          <motion.div
            key={exp?.id}
            className={`relative mb-10 flex gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Timeline dot */}
            <div className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2">
              <motion.div
                className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#dad7d0] bg-white shadow-sm"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="h-2 w-2 rounded-full bg-[#080503]" />
              </motion.div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-1/2" />

            {/* Card */}
            <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
              <div className="group relative overflow-hidden rounded-xl border border-[#dad7d0] bg-white p-6 transition-all duration-200 hover:border-[#b8b4ad] hover:shadow-card-hover">
                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-[#080503] transition-colors duration-200 group-hover:text-[#433830]">
                        {exp?.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={12} className="text-[#7b6f66]" />
                        <span className="text-sm font-medium text-[#5e534a]">{exp?.company}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#dad7d0] bg-[#f3f2ee] px-3 py-1">
                      <Calendar size={10} className="text-[#7b6f66]" />
                      <span className="text-xs text-[#7b6f66]">{exp?.period}</span>
                    </div>
                  </div>

                  <ul className="mb-4 space-y-2">
                    {exp?.highlights?.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5e534a]">
                        <ChevronRight size={13} className="mt-0.5 shrink-0 text-[#b8b4ad]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp?.tech?.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#dad7d0] bg-[#f3f2ee] px-2.5 py-0.5 text-xs font-medium text-[#5e534a]"
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
    </section>
  );
}
