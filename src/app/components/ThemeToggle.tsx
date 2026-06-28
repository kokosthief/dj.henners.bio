'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const activeTheme: Theme = root.dataset.theme === 'dark' ? 'dark' : 'light';
    setTheme(activeTheme);
  }, []);

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  const updateTheme = () => {
    const root = document.documentElement;
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    localStorage.setItem('henners-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={updateTheme}
      className="theme-toggle fixed bottom-4 right-4 z-[90] rounded-full border px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] shadow-xl backdrop-blur-md transition"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'dark'}
    >
      <span aria-hidden="true">{theme === 'dark' ? 'light' : 'dark'}</span>
    </button>
  );
}
