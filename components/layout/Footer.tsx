'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Zap, MessageSquare, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

// Icon map - use safe icons that exist in lucide-react
const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Code2 size={20} />,
  LinkedIn: <Zap size={20} />,
  Instagram: <MessageSquare size={20} />,
  Mail: <Mail size={20} />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="border-t border-neon-cyan/20 bg-[#050711]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-2 text-lg font-bold text-neon-green">
              {'<'} Abhay.Tech {'/>'}
            </h3>
            <p className="text-sm text-slate-400">
              Crafting fast, expressive digital experiences with code, motion, and intent.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-slate-100 mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-slate-400 transition-colors duration-300 hover:text-neon-green"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-slate-100 mb-4">Connect</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-slate-400 transition-colors duration-300 hover:text-neon-green"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {iconMap[link.icon]}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neon-green text-[#0a0e27] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="mb-6 border-t border-neon-cyan/20" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-slate-500">
            © {currentYear} AbhayTech. Designed with ❤️ & a cup of coffee ☕️.
          </p>
        </motion.div>

        {/* Neon line effect */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent" />
      </div>
    </footer>
  );
}
