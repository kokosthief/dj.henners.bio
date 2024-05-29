'use client';
import clsx from 'clsx';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaPhoneFlip } from 'react-icons/fa6';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { PiSoundcloudLogoFill } from 'react-icons/pi';
import { TbMailFilled } from 'react-icons/tb';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import UnderlineLink from '@/components/links/UnderlineLink';

import PastGigs from '@/app/components/PastGigs';
import SoundCloudWidget from '@/app/components/SoundCloudWidget';
import UpcomingGigs from '@/app/components/UpcomingGigs';

import { gigs } from '../app/gigsData';
import Henners from '../../public/images/henners-dj.jpg';

export default function HomePage() {
  const [phoneLink, setPhoneLink] = useState('tel:+31683421604');

  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
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

    const handleChange = (e?: MediaQueryListEvent) => {
      const matches = e ? e.matches : mediaQuery.matches;
      setMode(matches ? 'dark' : 'light');
    };

    mediaQuery.addListener(handleChange);
    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const newAngle = 135 + scrollPosition * 0.1;
      document.body.style.background = `linear-gradient(${newAngle}deg, #0a0a0a 0%, #0d324d 100%)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Head>
        <title>Henners Ecstatic Dance</title>
      </Head>

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

            <Image
              className=' fade-up	 w-screen opacity-80 md:w-[400px] md:rounded-xl dark:opacity-100 '
              src={Henners}
              alt='DJ Henners'
            ></Image>

            <header className='mb-3 px-2 text-center md:mb-0 md:pt-6'>
              <h1 className=' fade-up mx-auto mt-5 w-fit text-4xl font-medium ease-in md:text-5xl'>
                Henners
                <span className='absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-blue-300 to-yellow-300'></span>
              </h1>
              <span className='fade-up mt-4 block text-2xl font-bold delay-100 ease-in md:text-3xl'>
                I want to make you cry
              </span>
            </header>

            <section className=' scale-150 pb-7 pt-5 delay-100 md:scale-125 md:pb-5 md:pt-8'>
              <a
                href='mailto:dj@henners.bio'
                className='fade-up m-2 '
                aria-label='Email Me'
                target='_blank'
              >
                <IconButton
                  className='transform transition duration-150 ease-in-out hover:scale-105 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  variant={mode === 'dark' ? 'light' : 'dark'}
                  isLoading={false}
                  icon={TbMailFilled}
                  aria-label='Email Henners'
                />
              </a>
              <a
                href={phoneLink}
                className='fade-up m-2 '
                aria-label="Let's connect"
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconButton
                  className='transform transition duration-150 ease-in-out hover:scale-105 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  variant={mode === 'dark' ? 'light' : 'dark'}
                  isLoading={false}
                  icon={FaPhoneFlip}
                  aria-label='Connect with Henners'
                />
              </a>
              <a
                href='https://soundcloud.com/dj_henners'
                className='fade-up m-2 '
                aria-label='Listen to my sets on Soundcloud'
                target='_blank'
              >
                <IconButton
                  className='transform transition duration-150 ease-in-out hover:scale-105 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  variant={mode === 'dark' ? 'light' : 'dark'}
                  isLoading={false}
                  icon={PiSoundcloudLogoFill}
                  aria-label='Listen to DJ Henners'
                />
              </a>
            </section>

            <SoundCloudWidget />
            <UpcomingGigs gigs={gigs} />

            <section className='my-5 px-5 sm:w-4/12'>
              <p className='fade-up mb-3  text-xl font-medium delay-150 ease-in md:text-2xl'>
                I yearn to move your soul through music, to evoke both joy and
                tears, on a journey that awakens the spirit and connects the
                tribe.
              </p>
            </section>
            <PastGigs gigs={gigs} />
            <section className='px-4 pb-12 pt-4 '>
              <a
                href='mailto:dj@henners.bio'
                className='m-1'
                aria-label='Email Me'
                target='_blank'
              >
                <Button
                  className='transform transition duration-150 ease-in-out hover:scale-105 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  variant={mode === 'dark' ? 'light' : 'dark'}
                  rightIcon={TbMailFilled}
                >
                  <p className='px-2 py-1 text-xl'>Bookings</p>
                </Button>
              </a>
            </section>
            <footer className='relative flex'>
              © {new Date().getFullYear()} &nbsp;
              <UnderlineLink href='https://dev.hrwillmott.com'>
                HRWILLMOTT
              </UnderlineLink>
            </footer>
          </div>
        </div>
      </main>
    </main>
  );
}
