import React, { useEffect, useRef, useState } from 'react';
import { FaMusic } from 'react-icons/fa6';

const track = {
  title: 'Friday Ecstatic Dance Odessa — 14.12.25',
  description: 'The one available mix online right now — recorded for Friday Ecstatic Dance at Odessa.',
  url: 'https://soundcloud.com/hennerrsss/friday-ecstatic-dance-odessa-14-12-25',
  embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hennerrsss/friday-ecstatic-dance-odessa-14-12-25&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
};

const SoundCloudWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (widgetRef.current) {
      observer.observe(widgetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Available Mix
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">
          SoundCloud capped uploads for now, so this is the mix currently online.
        </p>
      </div>

      <div ref={widgetRef} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {track.title}
          </h3>
        </div>

        <div className="relative">
          {isVisible ? (
            <iframe
              className='w-full h-[166px] md:h-[200px] rounded-lg'
              width='100%'
              height='100%'
              scrolling='no'
              frameBorder='no'
              allow='autoplay; encrypted-media'
              sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
              src={track.embedUrl}
              title={`SoundCloud Player - ${track.title}`}
              loading='lazy'
            />
          ) : (
            <div className='w-full h-[166px] md:h-[200px] rounded-lg bg-gray-100 dark:bg-gray-700 animate-pulse flex items-center justify-center'>
              <FaMusic className='w-8 h-8 text-gray-400' />
            </div>
          )}
        </div>

        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            {track.description}
          </p>
          <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors font-medium"
          >
            <span>Open on SoundCloud</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoundCloudWidget;
