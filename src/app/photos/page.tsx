import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/constant/config';

import { photos } from './photosData';

export const metadata: Metadata = {
  title: 'Photos',
  description:
    'Photos of Henners DJing and facilitating ecstatic dance floors, ceremonies, festivals, and community gatherings in Amsterdam and the Netherlands.',
  alternates: { canonical: `${siteConfig.url}/photos` },
  openGraph: {
    url: `${siteConfig.url}/photos`,
    title: 'Photos — Henners',
    description: 'Photos of Henners at ecstatic dance floors, ceremonies, festivals, and community gatherings.',
    images: [
      {
        url: `${siteConfig.url}/images/rijksmuseum-dj-booth.jpg`,
        width: 1200,
        height: 1600,
        alt: 'Henners DJing for Ambrosia at Rijksmuseum Amsterdam',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photos — Henners',
    description: 'Photos of Henners at ecstatic dance floors, ceremonies, festivals, and community gatherings.',
    images: [`${siteConfig.url}/images/rijksmuseum-dj-booth.jpg`],
  },
};

const featuredClasses = [
  'lg:col-span-2 lg:row-span-2',
  '',
  '',
  'lg:col-span-2',
  '',
  '',
  'lg:col-span-2',
  '',
  '',
  '',
  'lg:col-span-2',
];

export default function PhotosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100d0a] text-[#f4ead8]">
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.22em] text-[#d6b47f] hover:text-[#f4ead8]">← Back home</Link>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_0.18fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#d6b47f]">Photos</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-[#fff8ec] md:text-7xl">
              visual notes from the rooms.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d9c6a6]">
              A small record of dance floors, ceremonies, and in-between moments. Same archive, tighter edit.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-[#f4ead8]/15 bg-[#1b160f] p-5 text-right">
            <p className="text-4xl font-semibold tracking-[-0.08em] text-[#fff8ec]">{photos.length}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[#d6b47f]">selected photos</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/media-package" className="rounded-full bg-[#f4ead8] px-5 py-3 text-sm font-semibold text-[#100d0a] hover:bg-[#d6b47f]">
            Press kit downloads
          </Link>
          <Link href="/events" className="rounded-full border border-[#f4ead8]/20 px-5 py-3 text-sm font-semibold text-[#f4ead8] hover:border-[#f4ead8]">
            Event archive
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[14rem] gap-3 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[13rem]">
          {photos.map((photo, index) => (
            <figure key={photo.src} className={`group relative overflow-hidden border border-[#f4ead8]/12 bg-[#1b160f] ${featuredClasses[index] ?? ''}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={75}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-90 saturate-[0.9] transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,13,10,0.02),rgba(16,13,10,0.28)_52%,rgba(16,13,10,0.86))]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <h2 className="text-lg font-semibold tracking-[-0.04em] text-[#fff8ec]">{photo.title}</h2>
                <p className="mt-1 max-w-sm text-sm leading-5 text-[#ead8bd]">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
