'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

import AmbrosiaHetSieraadDjJpg from '../../../public/images/gallery/ambrosia-het-sieraad-dj.jpg';
import AmbrosiaHetSieraadFloorJpg from '../../../public/images/gallery/ambrosia-het-sieraad-floor.jpg';
import BalconyMoroccoJpg from '../../../public/images/gallery/balcony-morocco.jpg';
import CoffeeOutsideJpg from '../../../public/images/gallery/coffee-outside.jpg';
import EdfhBasementBwJpg from '../../../public/images/gallery/edfh-basement-bw.jpg';
import ForestListeningJpg from '../../../public/images/gallery/forest-listening.jpg';
import ForestLookingUpJpg from '../../../public/images/gallery/forest-looking-up.jpg';
import ForestSittingJpg from '../../../public/images/gallery/forest-sitting.jpg';
import PortraitSmileBwJpg from '../../../public/images/gallery/portrait-smile-bw.jpg';
import SilentDanceWaterJpg from '../../../public/images/gallery/silent-dance-water.jpg';
import UnderTheSunCircleJpg from '../../../public/images/gallery/under-the-sun-circle.jpg';
import UnderTheSunDjJpg from '../../../public/images/gallery/under-the-sun-dj.jpg';
import WaterReflectionJpg from '../../../public/images/gallery/water-reflection.jpg';
// Import JPG images (WebP served via Next.js optimization in production)
import HennersCeremonyJpg from '../../../public/images/henners-ceremony.jpg';
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
  objectPosition?: string;
}

const images: ImageData[] = [
  {
    src: RijksmuseumDjBoothJpg,
    alt: 'Henners DJing at Rijksmuseum in Amsterdam',
    title: 'Rijksmuseum · Amsterdam',
    caption: 'Ambrosia special at one of a kind location.'
  },
  {
    src: RijksmuseumDancefloorJpg,
    alt: 'Rijksmuseum dancefloor from the DJ booth',
    title: 'Ambrosia at Rijksmuseum'
  },
  {
    src: RijksmuseumCloseUpJpg,
    alt: 'Close-up of Henners DJing at Rijksmuseum',
    title: 'Rijksmuseum DJ set'
  },
  {
    src: EdfhBasementBwJpg,
    alt: 'Henners DJing at Ecstatic Dance Festival Holland',
    title: 'In the mix at EDFH',
    caption: 'Black and white floor moment at Ecstatic Dance Festival Holland.',
    objectPosition: '50% center'
  },
  {
    src: SilentDanceWaterJpg,
    alt: 'Henners DJing a silent dance by the water',
    title: 'Silent dance by the water',
    caption: 'Headphones on. Water close. A different kind of floor.',
    objectPosition: 'center center'
  },
  {
    src: UnderTheSunDjJpg,
    alt: 'Henners DJing outside at Under the Sun',
    title: 'Under the Sun',
    caption: 'Outdoor dance floor, late light, hands still on the decks.',
    objectPosition: '50% 42%'
  },
  {
    src: UnderTheSunCircleJpg,
    alt: 'Henners facilitating a circle outdoors',
    title: 'Circle before the dance',
    caption: 'A moment before the music takes over.',
    objectPosition: '65% 38%'
  },
  {
    src: AmbrosiaHetSieraadFloorJpg,
    alt: 'Ambrosia dance floor at Het Sieraad in Amsterdam',
    title: 'Ambrosia at Het Sieraad',
    caption: 'Hands up in the old courtyard.',
    objectPosition: '50% center'
  },
  {
    src: AmbrosiaHetSieraadDjJpg,
    alt: 'Henners DJing for Ambrosia at Het Sieraad',
    title: 'Ambrosia · Het Sieraad',
    caption: 'Close to the dancers, tucked into the room.',
    objectPosition: '50% 38%'
  },
  {
    src: HennersCeremonyJpg,
    alt: 'DJ Henners at ceremony',
    title: 'Ceremony',
    caption: 'Opening ceremony at Ecstatic Dance Festival Holland'
  },
  {
    src: ForestListeningJpg,
    alt: 'Henners sitting in the forest listening',
    title: 'Listening',
    caption: 'Sometimes the set starts here.',
    objectPosition: '50% 45%'
  },
  {
    src: ForestLookingUpJpg,
    alt: 'Henners lying under trees and looking up',
    title: 'Looking up',
    caption: 'Ground first. Music after.',
    objectPosition: '55% 65%'
  },
  {
    src: ForestSittingJpg,
    alt: 'Henners sitting among trees in dappled light',
    title: 'Forest pause',
    caption: 'Quiet is part of the work too.',
    objectPosition: '60% 45%'
  },
  {
    src: WaterReflectionJpg,
    alt: 'Henners reflected in water while holding a branch',
    title: 'Reflection',
    caption: 'A bit upside down, probably accurate.',
    objectPosition: '55% 45%'
  },
  {
    src: HennersPfpJpg,
    alt: 'DJ Henners portrait',
    title: 'Henners',
    caption: 'Pls smile'
  },
  {
    src: PortraitSmileBwJpg,
    alt: 'Black and white smiling portrait of Henners',
    title: 'Pls smile',
    caption: 'There it is.',
    objectPosition: 'center center'
  },
  {
    src: CoffeeOutsideJpg,
    alt: 'Henners sitting outside with a cup',
    title: 'Pause',
    caption: 'A small coffee. A bit of field research.',
    objectPosition: '55% center'
  },
  {
    src: BalconyMoroccoJpg,
    alt: 'Henners on a balcony in evening light',
    title: 'Elsewhere',
    caption: 'Another leg of the journey.',
    objectPosition: '65% center'
  },
  {
    src: HennersSpaceholdingJpg,
    alt: 'DJ Henners space holding',
    title: 'Holding space',
    caption: 'Feeling into, holding space.'
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
      <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-700/70 md:rounded-xl">
        <div className={`relative w-full overflow-hidden bg-[#080d16] ${imageClassName}`}>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover opacity-90 transition-transform duration-700 ease-in-out  dark:opacity-100"
            style={{
              objectPosition: images[currentIndex].objectPosition,
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
            loading={priority ? undefined : 'lazy'}
            priority={priority}
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 520px, 520px"
            placeholder="blur"
            quality={80}
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
                <p className="mt-2 max-w-xl text-base leading-6 text-stone-50 sm:text-lg">
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
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-stone-50 opacity-0 transition-all duration-300 hover:bg-black/50 group-hover:opacity-100 md:left-4 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous image"
              type="button"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-stone-50 opacity-0 transition-all duration-300 hover:bg-black/50 group-hover:opacity-100 md:right-4 focus:outline-none focus:ring-2 focus:ring-white/50"
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
              className="absolute right-2 top-2 rounded-full bg-black/30 p-2 text-stone-50 opacity-0 transition-all duration-300 hover:bg-black/50 group-hover:opacity-100 md:right-4 md:top-4 focus:outline-none focus:ring-2 focus:ring-white/50"
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
              className={`h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-200 transition-transform duration-300 ${index === currentIndex
                  ? 'w-8 bg-amber-300 transform scale-110'
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