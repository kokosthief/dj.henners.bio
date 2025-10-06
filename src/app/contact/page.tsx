'use client';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaEnvelope, FaMusic, FaPhoneFlip } from 'react-icons/fa6';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { PiSoundcloudLogoFill } from 'react-icons/pi';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import ContactForm from '@/app/components/ContactForm';

export default function ContactPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e?: MediaQueryListEvent) => {
      const matches = e ? e.matches : mediaQuery.matches;
      setMode(matches ? 'dark' : 'light');
    };

    mediaQuery.addListener(handleChange);
    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <main className={clsx(mode === 'dark' ? 'bg-gradient-dark min-h-screen' : 'bg-gray-50 min-h-screen')}>
      <div className={clsx(
        'layout py-12',
        mode === 'dark' ? 'text-white' : 'text-black'
      )}>
        
        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/">
            <Button
              variant={mode === 'dark' ? 'light' : 'dark'}
              leftIcon={FaArrowLeft}
              className="hover:scale-105 transition-transform duration-300"
            >
              Back to Home
            </Button>
          </Link>
          
          <IconButton
            onClick={toggleMode}
            variant={mode === 'dark' ? 'light' : 'dark'}
            className='animate-gentle-pulse focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            icon={mode === 'dark' ? IoMdSunny : IoMdMoon}
            aria-label={
              mode === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          />
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg">
            <FaMusic className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Let's Create Magic Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring ecstatic dance to your event? I'm here to guide your community through 
            a transformative musical journey that awakens the spirit and connects hearts.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <a
            href="mailto:dj@henners.bio"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            target="_blank"
          >
            <FaEnvelope className="w-5 h-5" />
            <span className="font-medium">dj@henners.bio</span>
          </a>
          
          <a
            href="https://api.whatsapp.com/send?phone=31683421604"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneFlip className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
          
          <a
            href="https://soundcloud.com/hennerrsss"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            target="_blank"
          >
            <PiSoundcloudLogoFill className="w-5 h-5" />
            <span className="font-medium">SoundCloud</span>
          </a>
        </div>

        {/* Main Contact Form */}
        <ContactForm mode={mode} className="mb-16" />

        {/* Additional Information */}
        <div className={`
          max-w-4xl mx-auto p-8 rounded-xl shadow-lg border
          ${mode === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
          }
        `}>
          <h3 className="text-2xl font-bold mb-6 text-center">
            What to Expect
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FaMusic className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Curated Journey</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Each set is thoughtfully crafted to take dancers through a complete emotional and energetic journey
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎯</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Professional Setup</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                High-quality sound equipment and technical requirements to ensure optimal audio experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">❤️</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Heart-Centered</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every performance is guided by presence, intuition, and deep connection to the dancing community
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            Based in Amsterdam • Available worldwide for festivals, retreats, and conscious events
          </p>
        </div>
      </div>
    </main>
  );
}