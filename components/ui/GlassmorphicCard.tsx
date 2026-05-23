'use client';

import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'green' | 'cyan' | 'magenta';
  interactive?: boolean;
  variant?: 'default' | 'dark' | 'bordered';
}

export function GlassmorphicCard({
  children,
  className,
  glowColor = 'green',
  interactive = true,
  variant = 'default',
  ...motionProps
}: GlassmorphicCardProps) {
  const glowMap = {
    green: 'hover:shadow-glow-green-lg hover:border-neon-green/60',
    cyan: 'hover:shadow-glow-cyan hover:border-cyan-400/60',
    magenta: 'hover:shadow-glow-magenta hover:border-magenta-500/60',
  };

  const variantClasses = {
    default:
      'bg-gradient-to-br from-[#0f1535]/50 via-[#1a1f3a]/30 to-[#0a0e27]/50 backdrop-blur-xl border border-neon-green/20',
    dark: 'bg-[#1a1f3a]/40 backdrop-blur-md border border-slate-700/40',
    bordered: 'bg-transparent backdrop-blur-sm border-2 border-neon-green/30',
  };

  return (
    <motion.div
      className={cn(
        'rounded-lg transition-all duration-300 overflow-hidden',
        variantClasses[variant],
        interactive && glowMap[glowColor],
        className
      )}
      {...motionProps}
      whileHover={
        interactive
          ? { y: -8, boxShadow: '0 20px 40px rgba(0, 255, 0, 0.2)' }
          : undefined
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
}
