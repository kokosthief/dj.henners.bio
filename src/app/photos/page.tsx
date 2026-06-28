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

export default function PhotosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ee] text-[#2a2319]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[#fbf7ee]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-[#725332] hover:text-[#5e4a33]">← Back home</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Photos</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
          Dance floors, ceremonies, and moments around the music.
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-[#493925]">
          A small visual record of rooms I have played or helped hold. For downloads and organiser material, use the press kit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/media-package" className="rounded-full bg-[#2a2319] px-5 py-3 text-sm font-semibold text-[#fbf7ee] hover:bg-[#55391f]">
            Press kit downloads
          </Link>
          <Link href="/events" className="rounded-full border border-[#d6c6aa] px-5 py-3 text-sm font-semibold text-[#2a2319] hover:bg-[#eadfc9]">
            Past gigs
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[18rem] gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className={`group relative overflow-hidden rounded-[1.5rem] border border-[#e0d2b9] bg-white/55  ${photo.className ?? ''}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16">
                <h2 className="text-xl font-semibold text-[#fff8ec]">{photo.title}</h2>
                <p className="mt-1 max-w-md text-sm leading-6 text-[#ead8bd]">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
