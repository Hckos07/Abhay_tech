'use client';

import { useEffect } from 'react';

export function ScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const { history } = window;
    const previousRestoration = history?.scrollRestoration;

    history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    return () => {
      history.scrollRestoration = previousRestoration;
    };
  }, []);

  return null;
}
