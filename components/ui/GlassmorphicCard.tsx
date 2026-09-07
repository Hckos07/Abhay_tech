'use client';

import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LightCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'dark';
  interactive?: boolean;
}

export function GlassmorphicCard({
  children,
  className,
  variant = 'default',
  interactive = true,
  ...motionProps
}: LightCardProps) {
  const variantClasses = {
    default: 'bg-white border border-[#dad7d0]',
    elevated: 'bg-white border border-[#dad7d0] shadow-card',
    bordered: 'bg-[#f3f2ee] border-2 border-[#dad7d0]',
    dark: 'bg-[#080503] border border-[#080503] text-[#fafaf9]',
  };

  return (
    <motion.div
      className={cn(
        'rounded-xl transition-all duration-200 overflow-hidden',
        variantClasses[variant],
        interactive && 'hover:border-[#b8b4ad] hover:shadow-card-hover',
        className
      )}
      {...motionProps}
      whileHover={
        interactive
          ? { y: -4, boxShadow: '0 8px 32px rgba(8, 5, 3, 0.08)' }
          : undefined
      }
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 35,
      }}
    >
      {children}
    </motion.div>
  );
}
