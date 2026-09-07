'use client';

import { useEffect } from 'react';

export function OpeningTheme() {
  useEffect(() => {
    // In light mode, skip the opening animation and immediately signal done
    const timer = setTimeout(() => {
      document.documentElement.dataset.introDone = 'true';
      window.dispatchEvent(new Event('opening-theme:done'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
