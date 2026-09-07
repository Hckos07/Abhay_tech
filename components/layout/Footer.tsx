'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/brand-icons';
import { SOCIAL_LINKS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <GithubIcon size={16} />,
  LinkedIn: <LinkedinIcon size={16} />,
  Mail: <Mail size={16} />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dad7d0] bg-[#f3f2ee]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-base font-bold text-[#080503]">
              Abhay.dev
            </h3>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-[#5e534a]">
              AI-focused Software Engineer building production web apps, RAG pipelines, and real-time systems.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#dad7d0] bg-white text-[#5e534a] transition-all duration-200 hover:border-[#080503] hover:bg-[#080503] hover:text-[#fafaf9]"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {iconMap[link.icon]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#7b6f66]">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-[#5e534a] transition-colors duration-200 hover:text-[#080503]"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#7b6f66]">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:abhaypal1298@gmail.com"
                className="flex items-center gap-2 text-sm text-[#5e534a] transition-colors hover:text-[#080503]"
              >
                <Mail size={13} />
                abhaypal1298@gmail.com
              </a>
              <a
                href="https://github.com/Hckos07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#5e534a] transition-colors hover:text-[#080503]"
              >
                <GithubIcon size={13} />
                github.com/Hckos07
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6 border-t border-[#dad7d0]" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#7b6f66]">
            &copy; {currentYear} Abhay Pal. Built with Next.js
          </p>
          <p className="flex items-center gap-1.5 text-xs text-[#7b6f66]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to full-time &amp; freelance opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
