'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  objectPosition?: string;
}

const images: ImageData[] = [
  {
    src: '/images/carousel/rijksmuseum-dj-booth.webp',
    alt: 'Henners DJing at Rijksmuseum in Amsterdam',
    title: 'Rijksmuseum · Amsterdam',
    caption: 'Ambrosia special at one of a kind location.',
  },
  {
    src: '/images/carousel/rijksmuseum-dancefloor.webp',
    alt: 'Rijksmuseum dancefloor from the DJ booth',
    title: 'Ambrosia at Rijksmuseum',
  },
  {
    src: '/images/carousel/rijksmuseum-close-up.webp',
    alt: 'Close-up of Henners DJing at Rijksmuseum',
    title: 'Rijksmuseum DJ set',
  },
  {
    src: '/images/carousel/edfh-basement-bw.webp',
    alt: 'Henners DJing at Ecstatic Dance Festival Holland',
    title: 'In the mix at EDFH',
    caption: 'Black and white floor moment at Ecstatic Dance Festival Holland.',
    objectPosition: '50% center',
  },
  {
    src: '/images/carousel/silent-dance-water.webp',
    alt: 'Henners DJing a silent dance by the water',
    title: 'Silent dance by the water',
    caption: 'Headphones on. Water close. A different kind of floor.',
    objectPosition: 'center center',
  },
  {
    src: '/images/carousel/under-the-sun-dj.webp',
    alt: 'Henners DJing outside at Under the Sun',
    title: 'Under the Sun',
    caption: 'Outdoor dance floor, late light, hands still on the decks.',
    objectPosition: '50% 42%',
  },
  {
    src: '/images/carousel/under-the-sun-circle.webp',
    alt: 'Henners facilitating a circle outdoors',
    title: 'Circle before the dance',
    caption: 'A moment before the music takes over.',
    objectPosition: '65% 38%',
  },
  {
    src: '/images/carousel/ambrosia-het-sieraad-floor.webp',
    alt: 'Ambrosia dance floor at Het Sieraad in Amsterdam',
    title: 'Ambrosia at Het Sieraad',
    caption: 'Hands up in the old courtyard.',
    objectPosition: '50% center',
  },
  {
    src: '/images/carousel/ambrosia-het-sieraad-dj.webp',
    alt: 'Henners DJing for Ambrosia at Het Sieraad',
    title: 'Ambrosia · Het Sieraad',
    caption: 'Close to the dancers, tucked into the room.',
    objectPosition: '50% 38%',
  },
  {
    src: '/images/carousel/henners-ceremony.webp',
    alt: 'DJ Henners at ceremony',
    title: 'Ceremony',
    caption: 'Opening ceremony at Ecstatic Dance Festival Holland',
  },
  {
    src: '/images/carousel/forest-listening.webp',
    alt: 'Henners sitting in the forest listening',
    title: 'Listening',
    caption: 'Sometimes the set starts here.',
    objectPosition: '50% 45%',
  },
  {
    src: '/images/carousel/forest-looking-up.webp',
    alt: 'Henners lying under trees and looking up',
    title: 'Looking up',
    caption: 'Ground first. Music after.',
    objectPosition: '55% 65%',
  },
  {
    src: '/images/carousel/forest-sitting.webp',
    alt: 'Henners sitting among trees in dappled light',
    title: 'Forest pause',
    caption: 'Quiet is part of the work too.',
    objectPosition: '60% 45%',
  },
  {
    src: '/images/carousel/water-reflection.webp',
    alt: 'Henners reflected in water while holding a branch',
    title: 'Reflection',
    caption: 'A bit upside down, probably accurate.',
    objectPosition: '55% 45%',
  },
  {
    src: '/images/carousel/henners-pfp.webp',
    alt: 'DJ Henners portrait',
    title: 'Henners',
    caption: 'Pls smile',
  },
  {
    src: '/images/carousel/portrait-smile-bw.webp',
    alt: 'Black and white smiling portrait of Henners',
    title: 'Pls smile',
    caption: 'There it is.',
    objectPosition: 'center center',
  },
  {
    src: '/images/carousel/coffee-outside.webp',
    alt: 'Henners sitting outside with a cup',
    title: 'Pause',
    caption: 'A small coffee. A bit of field research.',
    objectPosition: '55% center',
  },
  {
    src: '/images/carousel/balcony-morocco.webp',
    alt: 'Henners on a balcony in evening light',
    title: 'Elsewhere',
    caption: 'Another leg of the journey.',
    objectPosition: '65% center',
  },
  {
    src: '/images/carousel/henners-spaceholding.webp',
    alt: 'DJ Henners space holding',
    title: 'Holding space',
    caption: 'Feeling into, holding space.',
  },
];

interface ImageSlideshowProps {
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  autoPlay = true,
  interval = 5000,
  showControls = true,
  className = '',
  imageClassName = 'aspect-[4/5]',
  priority = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextIndex = useMemo(() => (currentIndex === images.length - 1 ? 0 : currentIndex + 1), [currentIndex]);
  const previousIndex = useMemo(() => (currentIndex === 0 ? images.length - 1 : currentIndex - 1), [currentIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((playing) => !playing);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [goToNext, interval, isPlaying]);

  useEffect(() => {
    if (!showControls) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      const target = event.target as { tagName?: string; isContentEditable?: boolean } | null;
      const tagName = target?.tagName?.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select' || target?.isContentEditable) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPrevious();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNext();
      }
      if (event.key === ' ') {
        event.preventDefault();
        togglePlayPause();
      }
      if (event.key === 'Home') {
        event.preventDefault();
        setCurrentIndex(0);
      }
      if (event.key === 'End') {
        event.preventDefault();
        setCurrentIndex(images.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, showControls, togglePlayPause]);

  const current = images[currentIndex];

  return (
    <div
      className={`group relative ${className}`}
      aria-label="Photo carousel. Use left and right arrow keys to change image, space to pause or play."
      tabIndex={0}
    >
      <div className="relative overflow-hidden rounded-[1.5rem] shadow-lg ring-1 ring-stone-700/70 md:rounded-[1.5rem]">
        <div className={`relative w-full overflow-hidden bg-[#080d16] ${imageClassName}`}>
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover opacity-90 transition-opacity duration-200 ease-out dark:opacity-100"
            style={{
              objectPosition: current.objectPosition,
              willChange: 'opacity',
              backfaceVisibility: 'hidden',
            }}
            loading={priority ? undefined : 'lazy'}
            priority={priority}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 520px, 520px"
            quality={72}
          />
          <Image
            src={images[nextIndex].src}
            alt=""
            fill
            aria-hidden="true"
            className="pointer-events-none invisible object-cover"
            sizes="1px"
            quality={60}
          />
          <Image
            src={images[previousIndex].src}
            alt=""
            fill
            aria-hidden="true"
            className="pointer-events-none invisible object-cover"
            sizes="1px"
            quality={60}
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

          {current.title && (
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4ead8] sm:text-sm">
                {current.title}
              </p>
              {current.caption && (
                <p className="mt-2 max-w-xl text-base leading-6 text-[#fff8ec] sm:text-lg">
                  {current.caption}
                </p>
              )}
            </div>
          )}
        </div>

        {showControls && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-[#fff8ec] opacity-100 transition-all duration-300 hover:bg-black/65 md:left-4 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Previous image"
              type="button"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-[#fff8ec] opacity-100 transition-all duration-300 hover:bg-black/65 md:right-4 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Next image"
              type="button"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={togglePlayPause}
              className="absolute right-2 top-2 rounded-full bg-black/45 p-2 text-[#fff8ec] opacity-100 transition-all duration-300 hover:bg-black/65 md:right-4 md:top-4 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              type="button"
            >
              {isPlaying ? (
                <svg className="h-3 w-3 md:h-4 md:w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="h-3 w-3 md:h-4 md:w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </>
        )}
      </div>

      {showControls && (
        <>
          <p className="mt-3 text-center text-xs text-[#d6c6aa]">← / → change image · space pauses</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-amber-200 ${index === currentIndex
                  ? 'w-7 scale-110 bg-amber-300'
                  : 'w-3 scale-100 bg-stone-400 hover:bg-stone-300'
                }`}
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                }}
                aria-label={`Go to image ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlideshow;
