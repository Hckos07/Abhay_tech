'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, Send, CheckCircle, AlertCircle, Code2, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/brand-icons';

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
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { error?: string; message?: string };
      if (!response.ok) throw new Error(data.error ?? 'Failed to send message.');

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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const socialIconMap: Record<string, React.ReactNode> = {
    GitHub: <GithubIcon size={16} />,
    LinkedIn: <LinkedinIcon size={16} />,
    Mail: <Mail size={16} />,
  };

  return (
    <section
      id="contact"
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
        <p className="section-label mb-4">Contact</p>
        <h2 className="text-4xl font-bold tracking-tight text-[#080503] md:text-5xl lg:text-6xl">
          Let&apos;s build{' '}
          <span className="font-serif italic font-normal text-[#5e534a]">something great</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#7b6f66]">
          {PORTFOLIO_DATA.contact.subtitle}
        </p>
      </motion.div>

      {/* Content grid */}
      <motion.div
        className="grid grid-cols-1 gap-10 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Left side - Info */}
        <motion.div className="space-y-6" variants={itemVariants}>
          {/* Email card */}
          <div className="flex items-start gap-4 rounded-xl border border-[#dad7d0] bg-white p-6 transition-all duration-200 hover:border-[#b8b4ad] hover:shadow-card-hover">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#dad7d0] bg-[#f3f2ee]">
              <Mail className="text-[#5e534a]" size={18} />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-semibold text-[#080503]">Email</h3>
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="text-sm text-[#5e534a] transition-colors hover:text-[#080503]"
              >
                {PORTFOLIO_DATA.contact.email}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-[#080503]">Follow My Work</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-[#dad7d0] bg-white p-4 transition-all duration-200 hover:border-[#b8b4ad] hover:shadow-card-hover group"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#dad7d0] bg-[#f3f2ee] text-[#5e534a] transition-colors group-hover:bg-[#080503] group-hover:text-[#fafaf9] group-hover:border-[#080503]">
                    {socialIconMap[link.icon] ?? <Mail size={16} />}
                  </div>
                  <span className="text-sm font-semibold text-[#080503]">{link.name}</span>
                  <ArrowRight size={13} className="ml-auto text-[#b8b4ad] transition-transform group-hover:translate-x-1 group-hover:text-[#080503]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div className="rounded-xl border border-[#dad7d0] bg-[#080503] p-6 text-[#fafaf9]">
            <h3 className="mb-2 text-base font-bold">Open to opportunities</h3>
            <p className="mb-4 text-sm text-[#b8b4ad] leading-relaxed">
              Available for full-time roles, freelance projects, and AI/ML collaborations.
            </p>
            <a
              href="mailto:abhaypal1298@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#080503] transition-all hover:bg-[#f3f2ee]"
            >
              Get in touch
              <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div variants={itemVariants}>
          <div className="rounded-xl border border-[#dad7d0] bg-white p-8">
            <h3 className="mb-6 text-lg font-bold text-[#080503]">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#7b6f66] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#7b6f66] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#7b6f66] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#080503] px-6 py-3.5 text-sm font-semibold text-[#fafaf9] transition-all duration-200 hover:bg-[#2a2520] disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="h-4 w-4 rounded-full border-2 border-[#fafaf9]/30 border-t-[#fafaf9]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-[#a7f3d0] bg-[#ecfdf5] p-3 text-sm text-[#059669]"
                >
                  <CheckCircle size={16} />
                  {submitMessage}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-[#fecdd3] bg-[#fff1f2] p-3 text-sm text-[#e11d48]"
                >
                  <AlertCircle size={16} />
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
