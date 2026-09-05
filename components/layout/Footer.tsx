'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, ExternalLink as LinkedinIcon, Mail, Code } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Code size={18} />,
  LinkedIn: <LinkedinIcon size={18} />,
  Mail: <Mail size={18} />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050711]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h3 className="mb-3 font-mono text-lg font-bold text-neon-green">
              {'<'} Abhay.dev {'/>'}
            </h3>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-slate-400">
              AI-focused Software Engineer building production web apps, RAG pipelines, and real-time systems.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-neon-green/40 hover:bg-neon-green/10 hover:text-neon-green"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {iconMap[link.icon]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-100">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-neon-green"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-100">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:abhaypal1298@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-neon-green"
              >
                <Mail size={14} />
                abhaypal1298@gmail.com
              </a>
              <a
                href="https://github.com/Hckos07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-neon-green"
              >
                <Code size={14} />
                github.com/Hckos07
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6 border-t border-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {currentYear} Abhay Pal. Built with Next.js & ❤️
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            <Code2 size={12} className="text-neon-green" />
            Open to full-time & freelance opportunities
          </p>
        </div>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
      </div>
    </footer>
  );
}
