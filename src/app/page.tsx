'use client';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { PiSoundcloudLogoFill } from 'react-icons/pi';
import { TbMailFilled } from 'react-icons/tb';

import { getFromLocalStorage } from '@/lib/helper';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import UnderlineLink from '@/components/links/UnderlineLink';

import ImageSlideshow from '@/app/components/ImageSlideshow';
import PastGigs from '@/app/components/PastGigs';
import SoundCloudWidget from '@/app/components/SoundCloudWidget';
import UpcomingGigs from '@/app/components/UpcomingGigs';
import GoogleAnalytics from '@/app/google-analytics';
import { WebVitals } from '@/app/web-vitals';

import { gigs } from '../app/gigsData';

export default function HomePage() {
  const [phoneLink, setPhoneLink] = useState('tel:+31683421604');

  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  function toggleMode() {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', newMode);
    }
  }
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const userAgent = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    if (!isMobile) {
      setPhoneLink(
        'https://api.whatsapp.com/send?phone=31683421604&_ga=2.113846863.934298603.1704190840-536151416.1704190839'
      );
    }

    // Check for saved theme preference first
    const savedTheme = getFromLocalStorage('theme-mode');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setMode(savedTheme);
    } else {
      // Fall back to system preference if no saved theme
      const handleChange = (e?: MediaQueryListEvent) => {
        const matches = e ? e.matches : mediaQuery.matches;
        const systemTheme = matches ? 'dark' : 'light';
        setMode(systemTheme);
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme-mode', systemTheme);
        }
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
      } else {
        mediaQuery.addListener(handleChange);
      }
      handleChange();

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleChange);
        } else {
          mediaQuery.removeListener(handleChange);
        }
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const newAngle = 135 + scrollPosition * 0.1;
      document.body.style.background = `linear-gradient(${newAngle}deg, #0a0a0a 0%, #0d324d 100%)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Head>
        <title>DJ Henners | #1 Ecstatic Dance DJ Amsterdam & Netherlands</title>
        <meta name="description" content="Ecstatic Dance DJ in Amsterdam & Netherlands. DJ Henners creates transformative musical journeys with global rhythms, African beats & conscious dance. Book the best ecstatic dance DJ for festivals, events & ceremonies across Holland." />
        <meta name="keywords" content="ecstatic dance dj nederland, ecstatic dance dj amsterdam, beste ecstatic dance dj holland, bewuste dans dj nederland, dj henners amsterdam, best ecstatic dance dj netherlands, conscious dance dj amsterdam" />
        <link rel="canonical" href="https://dj.henners.bio" />
      </Head>
      <GoogleAnalytics />
      <WebVitals />

      <main className={clsx(mode === 'dark' ? 'bg-gradient-dark' : 'bg-white')}>
        <div
          className={clsx(
            'layout min-h-screen',
            mode === 'dark' ? 'text-white' : 'text-black'
          )}
        >
          <div className=' flex min-h-screen flex-col items-center justify-center pb-6 text-center md:pt-6'>
            <div className='fade-up fixed right-10 top-6 hidden md:block'>
              <IconButton
                onClick={toggleMode}
                variant={mode === 'dark' ? 'light' : 'dark'}
                className='animate-gentle-pulse focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                icon={mode === 'dark' ? IoMdSunny : IoMdMoon} // Switching Icons Here
                aria-label={
                  mode === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              />
            </div>

            {/* Enhanced Hero Section */}
            <div className='fade-up relative mb-8'>
              {/* Dynamic Image Slideshow */}
              <div className='relative mx-auto mb-6 w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
                <ImageSlideshow
                  autoPlay={true}
                  interval={6000}
                  showControls={true}
                  className="fade-up w-full h-auto"
                />
              </div>

              {/* Enhanced Branding */}
              <header className='mb-6 px-2 text-center'>
                <h1 className='fade-up group relative mx-auto mt-8 w-fit text-5xl font-bold ease-in md:text-6xl lg:text-7xl'>
                  <span className='bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent'>
                    HENNERS
                  </span>
                  <div className='absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-300 via-cyan-400 to-yellow-300 transition-all duration-300 group-hover:h-2'></div>
                  {/* Glowing effect */}
                  <div className='absolute -inset-4 -z-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl transition-all duration-300 group-hover:blur-2xl'></div>
                </h1>

                <p className='fade-up mt-6 text-lg font-medium text-gray-600 delay-75 md:text-xl dark:text-gray-300'>
                  Ecstatic Dance DJ • Amsterdam • Netherlands
                </p>

                <div className='fade-up mt-8 space-y-4 delay-100'>
                  <p className='text-xl font-semibold md:text-2xl lg:text-3xl'>
                    Amsterdam based ecstatic dance DJ creating transformative musical journeys.
                  </p>
                  <p className='text-xl font-semibold md:text-2xl lg:text-3xl'>
                    When joy is evoked, I support that. When tears come, I nurture them.
                  </p>
                  <p className='text-xl font-semibold md:text-2xl lg:text-3xl'>
                    Specializing in conscious dance journeys, transformative experiences & ceremonies across the Netherlands.
                  </p>
                </div>
              </header>
            </div>

            {/* Enhanced Contact Section with Better Mobile Touch Targets */}
            <section className='mt-8 pb-8 pt-6'>
              <div className='flex flex-wrap items-center justify-center gap-4 md:gap-6'>
                <a
                  href='mailto:dj@henners.bio'
                  className='fade-up group'
                  aria-label='Email DJ Henners'
                  target='_blank'
                >
                  <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 focus:ring-4 focus:ring-blue-300/50 md:h-20 md:w-20'>
                    <TbMailFilled className='h-8 w-8 text-white md:h-10 md:w-10' />
                  </div>
                </a>

                <a
                  href={phoneLink}
                  className='fade-up group'
                  aria-label="Call or WhatsApp DJ Henners"
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 focus:ring-4 focus:ring-green-300/50 md:h-20 md:w-20'>
                    <FaPhoneFlip className='h-7 w-7 text-white md:h-9 md:w-9' />
                  </div>
                </a>

                <a
                  href='https://soundcloud.com/hennerrsss'
                  className='fade-up group'
                  aria-label='Listen to DJ Henners on SoundCloud'
                  target='_blank'
                >
                  <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 focus:ring-4 focus:ring-orange-300/50 md:h-20 md:w-20'>
                    <PiSoundcloudLogoFill className='h-8 w-8 text-white md:h-10 md:w-10' />
                  </div>
                </a>
              </div>
            </section>

            {/* Music Player Section */}
            <section className='mt-12 mb-8'>
              <SoundCloudWidget />
            </section>

            {/* Upcoming Gigs Section */}
            <section className='mb-12'>
              <UpcomingGigs gigs={gigs} />
            </section>

            {/* Mission Statement Section */}
            <section className='my-16 px-6 sm:px-8 lg:px-0 lg:w-2/3 mx-auto'>
              <div className='text-center'>
                <div className='mb-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600'></div>
                <p className='fade-up text-xl font-medium leading-relaxed delay-150 ease-in md:text-2xl lg:text-3xl'>
                  I yearn to move your soul through music, to take you on a
                  journey that awakens the spirit and connects the tribe.
                </p>
                <div className='mt-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600'></div>
              </div>
            </section>

            {/* Past Gigs Section */}
            <section className='mt-16'>
              <PastGigs gigs={gigs} />
            </section>
            {/* Media Package Link */}
            <section className='mt-16 text-center'>
              <div className='mb-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600'></div>
              <div className='mb-8'>
                <h3 className='text-2xl font-semibold mb-4'>For Event Organizers</h3>
                <p className='text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto'>
                  Access high-resolution photos, technical rider, artist bios, and all professional materials needed for bookings and promotions.
                </p>
                <Link href='/media-package'>
                  <Button
                    variant={mode === 'dark' ? 'light' : 'dark'}
                    className='px-8 py-3 text-lg hover:scale-105 transition-transform duration-300'
                  >
                    View Press Kit
                  </Button>
                </Link>
              </div>
            </section>

            {/* Footer */}
            <footer className='mt-12 pb-8 pt-8'>
              <div className='text-center text-sm text-gray-500 dark:text-gray-400'>
                <div className='mb-4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600'></div>
                <p>
                  © {new Date().getFullYear()} DJ Henners • Built by{' '}
                  <UnderlineLink href='https://dev.hrwillmott.com' className='text-blue-500 hover:text-blue-600'>
                    HRWILLMOTT
                  </UnderlineLink>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </main>
  );
}
