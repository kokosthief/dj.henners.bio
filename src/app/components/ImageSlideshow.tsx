'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

// Import JPG images (WebP served via Next.js optimization in production)
import HennersCeremonyJpg from '../../../public/images/henners-ceremony.jpg';
import HennersDjJpg from '../../../public/images/henners-dj.jpg';
import HennersPfpJpg from '../../../public/images/henners-pfp.jpg';
import HennersSpaceholdingJpg from '../../../public/images/henners-spaceholding.jpg';
import RijksmuseumCloseUpJpg from '../../../public/images/rijksmuseum-close-up.jpg';
import RijksmuseumDancefloorJpg from '../../../public/images/rijksmuseum-dancefloor.jpg';
import RijksmuseumDjBoothJpg from '../../../public/images/rijksmuseum-dj-booth.jpg';

interface ImageData {
  src: StaticImageData;
  alt: string;
  title?: string;
  caption?: string;
}

const images: ImageData[] = [
  {
    src: RijksmuseumDjBoothJpg,
    alt: 'Henners DJing at Rijksmuseum in Amsterdam',
    title: 'Rijksmuseum · Amsterdam',
    caption: 'DJing for Ambrosia inside one of Amsterdam’s wildest rooms.'
  },
  {
    src: RijksmuseumDancefloorJpg,
    alt: 'Rijksmuseum dancefloor from the DJ booth',
    title: 'Ambrosia at Rijksmuseum',
    caption: 'The view from the booth: bodies moving under the museum lights.'
  },
  {
    src: RijksmuseumCloseUpJpg,
    alt: 'Close-up of Henners DJing at Rijksmuseum',
    title: 'Rijksmuseum DJ set',
    caption: 'A rare, beautiful floor. Big space, close attention.'
  },
  {
    src: HennersDjJpg,
    alt: 'DJ Henners performing',
    title: 'In the mix',
    caption: 'Following the room rather than forcing a fixed playlist.'
  },
  {
    src: HennersCeremonyJpg,
    alt: 'DJ Henners at ceremony',
    title: 'Ceremony',
    caption: 'Warm music for the quieter, more ritual parts of the night.'
  },
  {
    src: HennersPfpJpg,
    alt: 'DJ Henners portrait',
    title: 'Henners',
    caption: 'Amsterdam-based ecstatic dance DJ and facilitator.'
  },
  {
    src: HennersSpaceholdingJpg,
    alt: 'DJ Henners space holding',
    title: 'Holding space',
    caption: 'Enough rhythm to move. Enough space to feel what is there.'
  }
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

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image Display */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/20 md:rounded-3xl">
        <div className={`relative w-full overflow-hidden bg-[#080d16] ${imageClassName}`}>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover opacity-90 transition-transform duration-700 ease-in-out hover:scale-105 dark:opacity-100"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
            loading={priority ? undefined : 'lazy'}
            priority={priority}
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 520px, 520px"
            placeholder="blur"
            quality={60}
          />
          {/* Subtle overlay for better text contrast */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

          {/* Image Title Overlay */}
          {images[currentIndex].title && (
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200 sm:text-sm">
                {images[currentIndex].title}
              </p>
              {images[currentIndex].caption && (
                <p className="mt-2 max-w-xl text-base leading-6 text-white sm:text-lg">
                  {images[currentIndex].caption}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Navigation Controls */}
        {showControls && (
          <>
            {/* Previous/Next Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white opacity-0 transition-all duration-300 hover:bg-black/50 group-hover:opacity-100 md:left-4 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous image"
              type="button"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white opacity-0 transition-all duration-300 hover:bg-black/50 group-hover:opacity-100 md:right-4 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next image"
              type="button"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute right-2 top-2 rounded-full bg-black/30 p-2 text-white opacity-0 transition-all duration-300 hover:bg-black/50 group-hover:opacity-100 md:right-4 md:top-4 focus:outline-none focus:ring-2 focus:ring-white/50"
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

      {/* Dot Indicators */}
      {showControls && (
        <div className="mt-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-300 ${index === currentIndex
                  ? 'w-8 bg-blue-500 transform scale-110'
                  : 'w-4 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 transform scale-100'
                }`}
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              aria-label={`Go to image ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ImageSlideshow;