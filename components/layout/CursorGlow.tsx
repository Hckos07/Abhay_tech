'use client';

import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const isMouseDevice = useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
      mediaQuery.addEventListener('change', onStoreChange);
      return () => {
        mediaQuery.removeEventListener('change', onStoreChange);
      };
    },
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    () => false
  );
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 300, damping: 28, mass: 0.8 });
  const glowY = useSpring(pointerY, { stiffness: 300, damping: 28, mass: 0.8 });
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(() => {
        pointerX.set(pendingRef.current.x);
        pointerY.set(pendingRef.current.y);
        rafRef.current = null;
      });

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('blur', handleMouseLeave);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('blur', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pointerX, pointerY]);

  if (!isMouseDevice) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-[999] mix-blend-screen"
      style={{ x: glowX, y: glowY, opacity: isVisible && isMouseDevice ? 1 : 0 }}
      transition={{ opacity: { duration: 0.18, ease: 'easeOut' } }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -inset-7 rounded-full bg-neon-green/20 blur-2xl" />
        <div className="absolute -inset-3 rounded-full border border-neon-green/80 bg-neon-green/20 blur-[2px]" />
        <div
          className="relative h-4 w-4 rounded-full bg-neon-green"
          style={{
            boxShadow:
              '0 0 12px rgba(0, 255, 0, 0.95), 0 0 24px rgba(0, 255, 0, 0.7), 0 0 42px rgba(0, 255, 0, 0.35)',
          }}
        />
      </div>
    </motion.div>
  );
}
