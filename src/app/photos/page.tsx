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
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30rem),radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_28rem),linear-gradient(180deg,#070b12_0%,#0a1220_52%,#05070b_100%)]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-amber-200 hover:text-amber-100">← Back home</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Photos</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
          Dance floors, ceremonies, and moments around the music.
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
          A small visual record of rooms I have played or helped hold. For downloads and organizer material, use the press kit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/media-package" className="rounded-full bg-amber-200 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-100">
            Press kit downloads
          </Link>
          <Link href="/events" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Past gigs
          </Link>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="grid auto-rows-[18rem] gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 ${photo.className ?? ''}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16">
                <h2 className="text-xl font-semibold text-white">{photo.title}</h2>
                <p className="mt-1 max-w-md text-sm leading-6 text-slate-200">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
