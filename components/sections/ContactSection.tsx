'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, Send, CheckCircle, AlertCircle, Code2, Zap, MessageSquare } from 'lucide-react';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { error?: string; message?: string };
      if (!response.ok) {
        throw new Error(data.error ?? 'Failed to send message.');
      }

      setFormState({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      setSubmitMessage(data.message ?? 'Message sent successfully!');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error ? error.message : 'Failed to send. Please try again.'
      );
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const socialIconMap = {
    GitHub: Code2,
    LinkedIn: Zap,
    Instagram: MessageSquare,
    Mail: Mail,
  } as const;

  return (
    <section
      id="contact"
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
          Get In <span className="text-neon-green">Touch</span>
        </h2>
        <p className="mx-auto max-w-2xl text-slate-400">
          {PORTFOLIO_DATA.contact.subtitle}
        </p>
        <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-neon-green to-cyan-400" />
      </motion.div>

      {/* Content grid */}
      <motion.div
        className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left side - Info */}
        <motion.div className="space-y-8" variants={itemVariants}>
          {/* Email */}
          <GlassmorphicCard className="flex items-start gap-4 p-6" glowColor="green" interactive>
            <div className="p-3 bg-neon-green/20 rounded-lg">
              <Mail className="text-neon-green" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Email</h3>
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="text-neon-green hover:text-cyan-400 transition-colors"
              >
                {PORTFOLIO_DATA.contact.email}
              </a>
            </div>
          </GlassmorphicCard>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-100">
              Follow My Work
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIconMap[link.icon as keyof typeof socialIconMap] ?? Mail;
                return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-neon-green/20 bg-[#0f1535]/50 p-4 text-center transition-all duration-300 hover:border-neon-green/60"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                  }}
                >
                  <Icon size={16} className="text-neon-green" />
                  <span className="font-semibold text-neon-green">{link.name}</span>
                </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div variants={itemVariants}>
          <GlassmorphicCard className="p-8" glowColor="cyan">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1535]/50 border border-neon-green/20 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1535]/50 border border-neon-green/20 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0f1535]/50 border border-neon-green/20 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-neon-green/80 bg-neon-green px-6 py-3 font-bold text-white opacity-100 shadow-[0_0_18px_rgba(57,255,20,0.35)] transition-all duration-300 hover:bg-cyan-400 hover:text-[#0a0e27] hover:shadow-[0_0_22px_rgba(34,211,238,0.45)] disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="text-green-400">
                    {submitMessage || 'Message sent successfully!'}
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-red-400">
                    {submitMessage || 'Failed to send. Please try again.'}
                  </span>
                </motion.div>
              )}
            </form>
          </GlassmorphicCard>
        </motion.div>
      </motion.div>

      {/* Decorative line */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
    </section>
  );
}
