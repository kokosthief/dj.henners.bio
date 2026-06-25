'use client';

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    __hennersAnalyticsEvents?: Array<{ eventName: string; params: AnalyticsEventParams }>;
  }
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const cleanParams = Object.fromEntries(
    Object.entries({
      page_path: window.location.pathname,
      page_location: window.location.href,
      event_category: 'site_engagement',
      ...params,
    }).filter(([, value]) => value !== undefined)
  ) as AnalyticsEventParams;

  window.__hennersAnalyticsEvents = window.__hennersAnalyticsEvents ?? [];
  window.__hennersAnalyticsEvents.push({ eventName, params: cleanParams });

  if (typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, cleanParams);
}
