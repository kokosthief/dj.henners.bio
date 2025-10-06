'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX' // Replace with actual ID
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'dj_service_type',
              'custom_parameter_2': 'event_location'
            }
          });
          
          // Enhanced ecommerce tracking for contact form submissions
          gtag('config', '${GA_MEASUREMENT_ID}', {
            custom_map: {'custom_parameter_1': 'booking_inquiry'}
          });
          
          // Track DJ service interests
          function trackDJServiceInterest(serviceType) {
            gtag('event', 'dj_service_interest', {
              'custom_parameter_1': serviceType,
              'event_category': 'engagement',
              'event_label': 'dj_service_inquiry'
            });
          }
          
          // Make function globally available
          window.trackDJServiceInterest = trackDJServiceInterest;
        `}
      </Script>
      
      {/* Google Tag Manager for additional tracking */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX'); // Replace with actual GTM ID
        `}
      </Script>
    </>
  )
}