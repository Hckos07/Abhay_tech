'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function OpeningTheme() {
  const [startSplit, setStartSplit] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const splitTimer = window.setTimeout(() => setStartSplit(true), 1000);
    const doneTimer = window.setTimeout(() => setIsDone(true), 1300);

    return () => {
      window.clearTimeout(splitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDone ? '' : 'hidden';
    if (isDone) {
      document.documentElement.dataset.introDone = 'true';
      window.dispatchEvent(new Event('opening-theme:done'));
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDone]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#070c1f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="ambient-aurora" />
            <div className="ambient-orb ambient-orb-green" />
            <div className="ambient-orb ambient-orb-cyan" />
            <div className="ambient-grid opacity-25" />
          </div>
          <div className="relative flex items-center text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            <motion.span
              initial={{ x: 0 }}
              animate={startSplit ? { x: '-120vw' } : { x: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              Abhay
            </motion.span>

            <motion.span
              className="text-neon-green"
              initial={{ scale: 1, opacity: 1 }}
              animate={
                startSplit
                  ? {
                      scale: 16,
                      opacity: 0,
                      filter: 'blur(5px)',
                    }
                  : { scale: 1, opacity: 1, filter: 'blur(0px)' }
              }
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            >
              .
            </motion.span>

            <motion.span
              initial={{ x: 0 }}
              animate={startSplit ? { x: '120vw' } : { x: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              Tech
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
