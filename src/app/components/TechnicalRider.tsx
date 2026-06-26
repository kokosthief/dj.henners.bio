'use client';
import React from 'react';
import { FaDownload } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';

interface TechnicalRiderProps {
  mode?: 'dark' | 'light';
  showDownloadButton?: boolean;
}

const setupItems = [
  {
    title: 'Club / festival setup',
    body: 'If the venue already has CDJs and a mixer, great. A normal connected CDJ + mixer booth setup is enough.',
  },
  {
    title: 'Most ecstatic dance rooms',
    body: 'Please arrange a Pioneer DDJ controller for laptop plug-and-play where possible. I travel with my computer and prefer to keep the setup light.',
  },
  {
    title: 'Backup',
    body: 'If necessary, I can bring my own controller with my computer. The organizer then provides RCA cables or the correct connection into the stereo / PA system.',
  },
  {
    title: 'Arrival',
    body: 'A stable table, power, a quick line check, and someone present who knows the sound system.',
  },
];

const TechnicalRider: React.FC<TechnicalRiderProps> = ({
  mode = 'light',
  showDownloadButton = true,
}) => {
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/downloads/documents/technical-rider.pdf';
    a.download = 'Henners-Technical-Rider.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="w-full">
      <div className="mb-8 border-b border-stone-300 pb-5 dark:border-stone-700">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
          Henners · technical setup
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-stone-950 dark:text-stone-50">
          Simple technical rider
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-stone-700 dark:text-stone-300">
          No dramatic stage requirements. Just a clear way to plug in, soundcheck, and play.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {setupItems.map((item) => (
          <article key={item.title} className="border-t border-stone-300 pt-4 dark:border-stone-700">
            <h2 className="text-xl font-semibold text-stone-950 dark:text-stone-50">{item.title}</h2>
            <p className="mt-3 leading-7 text-stone-700 dark:text-stone-300">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-stone-300 pt-5 text-sm leading-7 text-stone-600 dark:border-stone-700 dark:text-stone-400">
        Please confirm the available setup before the event: CDJs + mixer, Pioneer DDJ controller, or whether I should bring my own controller.
      </div>

      {showDownloadButton && (
        <div className="mt-8">
          <Button
            variant={mode === 'dark' ? 'light' : 'dark'}
            leftIcon={FaDownload}
            onClick={handleDownload}
            className="px-6 py-3 text-base"
            aria-label="Download Technical Rider PDF"
          >
            Download technical rider
          </Button>
        </div>
      )}
    </div>
  );
};

export default TechnicalRider;
