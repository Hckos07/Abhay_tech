'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-[300] w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[#dad7d0] bg-[#fafaf9]/95 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="#home" className="group flex items-center gap-0.5">
              <span className="text-lg font-bold tracking-tight text-[#080503]">
                Abhay
              </span>
              <span className="text-lg font-bold text-[#5e534a]">.</span>
              <span className="text-lg font-bold text-[#5e534a]">dev</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-[#dad7d0] bg-white/80 p-1 md:flex backdrop-blur-sm shadow-sm">
            {NAV_LINKS?.map((link) => (
              <motion.a
                key={link?.name}
                href={link?.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeLink === link?.name?.toLowerCase()
                    ? 'bg-[#080503] text-[#fafaf9]'
                    : 'text-[#5e534a] hover:text-[#080503] hover:bg-[#f3f2ee]'
                }`}
                onClick={() => setActiveLink(link?.name?.toLowerCase())}
                whileHover={{ y: -1 }}
              >
                {link?.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            href="mailto:abhaypal1298@gmail.com"
            className="hidden md:flex items-center gap-2 rounded-full bg-[#080503] px-5 py-2.5 text-sm font-semibold text-[#fafaf9] transition-all duration-200 hover:bg-[#2a2520]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[#dad7d0] bg-white text-[#080503] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="mt-3 flex flex-col gap-1 rounded-xl border border-[#dad7d0] bg-white p-3 md:hidden shadow-lg"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {NAV_LINKS?.map((link) => (
                <motion.a
                  key={link?.name}
                  href={link?.href}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-[#5e534a] transition-colors hover:bg-[#f3f2ee] hover:text-[#080503]"
                  onClick={() => {
                    setActiveLink(link?.name?.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link?.name}
                </motion.a>
              ))}
              <a
                href="mailto:abhaypal1298@gmail.com"
                className="mt-1 rounded-lg bg-[#080503] px-4 py-2.5 text-center text-sm font-semibold text-[#fafaf9]"
              >
                Hire Me
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
