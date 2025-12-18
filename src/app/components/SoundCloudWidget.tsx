import React, { useEffect, useRef, useState } from 'react';
import { FaMusic, FaPlay } from 'react-icons/fa6';

interface Track {
  id: string;
  title: string;
  description: string;
  url: string;
  embedUrl: string;
}

const tracks: Track[] = [
  {
    id: '1818443574',
    title: 'Ecstatic Journey',
    description: 'A transformative musical journey through consciousness',
    url: 'https://soundcloud.com/hennerrsss/ecstatic-journey',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1818443574&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    id: 'ambrosia7',
    title: 'Ambrosia 7 - Richie Lee & Henners',
    description: '05.04.25 Ambrosia 7. First half by Richie Lee, second half by Henners. Filled with Afro, Tribal, Trance, Techno, UK Speed Garage & More',
    url: 'https://soundcloud.com/richieleemusic/liveset-ambrosia-7-richie-lee-henners',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/richieleemusic/liveset-ambrosia-7-richie-lee-henners&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    id: 'wedance-hawaii',
    title: 'WeDance Sundari - Hawaii',
    description: 'Ecstatic Dance @ WeDance, Sundari - Hawaii 12-02-25. Beautiful experience to return to WeDance faciliated by the wonderful community at Sundari Gardens. It was a pleasure to be joined by Rob and Seras during the set bringing their organic vibes and energy, and of course to close with Zee\'s wonderful sound bath bringing us to a close.',
    url: 'https://soundcloud.com/hennerrsss/ecstatic-dance-wedance-sundari-hawaii-12-02-25',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hennerrsss/ecstatic-dance-wedance-sundari-hawaii-12-02-25&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  }
];

const SoundCloudWidget: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track>(tracks[0]);
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
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Musical Journey
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">
          Experience the soundscapes that guide our ecstatic dance journeys
        </p>
      </div>

      {/* Track Selection */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300 text-left
                ${selectedTrack.id === track.id
                  ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 shadow-lg transform scale-105'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-orange-300 hover:shadow-md'
                }
              `}
            >
              <div className="flex items-start gap-3">
                <div className={`
                  flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                  ${selectedTrack.id === track.id
                    ? 'bg-orange-500'
                    : 'bg-gray-200 dark:bg-gray-700'
                  }
                `}>
                  {selectedTrack.id === track.id ? (
                    <FaPlay className="w-4 h-4 text-white ml-1" />
                  ) : (
                    <FaMusic className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`
                    font-semibold mb-1 truncate
                    ${selectedTrack.id === track.id
                      ? 'text-orange-700 dark:text-orange-300'
                      : 'text-gray-900 dark:text-white'
                    }
                  `}>
                    {track.title}
                  </h3>
                  <p className={`
                    text-sm line-clamp-2
                    ${selectedTrack.id === track.id
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-gray-600 dark:text-gray-400'
                    }
                  `}>
                    {track.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Current Track Display */}
      <div ref={widgetRef} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Now Playing: {selectedTrack.title}
          </h3>
        </div>
        
        {/* SoundCloud Player */}
        <div className="relative">
          {isVisible ? (
            <iframe
              key={selectedTrack.id}
              className='w-full h-[166px] md:h-[200px] rounded-lg'
              width='100%'
              height='100%'
              scrolling='no'
              frameBorder='no'
              allow='autoplay; encrypted-media'
              sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
              src={selectedTrack.embedUrl}
              title={`SoundCloud Player - ${selectedTrack.title}`}
              loading='lazy'
            />
          ) : (
            <div className='w-full h-[166px] md:h-[200px] rounded-lg bg-gray-100 dark:bg-gray-700 animate-pulse flex items-center justify-center'>
              <FaMusic className='w-8 h-8 text-gray-400' />
            </div>
          )}
        </div>
        
        {/* Track Info */}
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            {selectedTrack.description}
          </p>
          <a
            href={selectedTrack.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors font-medium"
          >
            <span>Listen on SoundCloud</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Want to experience this music live at your event?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <FaMusic className="w-4 h-4" />
          <span>Book DJ Henners</span>
        </a>
      </div>
    </div>
  );
};

export default SoundCloudWidget;
