'use client';

import { useEffect } from 'react';

export default function ContactQueryScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new window.URLSearchParams(window.location.search);
    const shouldScrollToContact = params.get('contact') === '1' || window.location.hash === '#contact';
    if (!shouldScrollToContact) return;

    const scrollToContact = () => {
      const contact = document.getElementById('contact');
      if (!contact) return;

      contact.scrollIntoView({ behavior: 'smooth', block: 'center' });

      const firstField = contact.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
      window.setTimeout(() => firstField?.focus({ preventScroll: true }), 450);
    };

    window.requestAnimationFrame(() => window.setTimeout(scrollToContact, 120));
  }, []);

  return null;
}
