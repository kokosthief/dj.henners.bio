'use client';

type GtagEventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params: GtagEventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, {
    event_category: 'site_engagement',
    ...params,
  });
}
