'use client'

import { useReportWebVitals } from 'next/web-vitals'

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      })
    }
    
    // Log for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', metric)
    }
  })

  return null
}