'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-[300] w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#080d22]/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#home" className="relative group">
              <span className="text-slate-100 tracking-wide">Abhay.Tech</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-neon-green transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeLink === link.name.toLowerCase()
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
                onClick={() => setActiveLink(link.name.toLowerCase())}
                whileHover={{ y: -1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-6 h-0.5 bg-neon-green"
                animate={
                  isMobileMenuOpen
                    ? {
                        rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                        y: i === 0 ? 7 : i === 2 ? -7 : 0,
                        opacity: i === 1 ? 0 : 1,
                      }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className="mt-4 flex flex-col gap-4 rounded-xl border border-neon-cyan/20 bg-[#0a0e27]/80 p-4 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={
            isMobileMenuOpen
              ? { opacity: 1, height: 'auto' }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-neon-green"
              onClick={() => {
                setActiveLink(link.name.toLowerCase());
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
}
