import { Metadata } from 'next';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';
import HennersJungle from '../../public/images/henners-jungle.jpg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          <Image
            className=' fade-up	 w-screen opacity-80 md:w-[400px] md:rounded-xl dark:opacity-100 '
            src={HennersJungle}
            alt='DJ Henners'
          ></Image>
          <a href='/'>Back to home</a>
        </div>
      </section>
    </main>
  );
}
