import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/constant/config';

import HennersCeremony from '../../../public/images/henners-ceremony.jpg';
import HennersSpaceholding from '../../../public/images/henners-spaceholding.jpg';

export const metadata: Metadata = {
  title: 'About Henners',
  description:
    'About Henners, an Amsterdam-based ecstatic dance facilitator and DJ crafting full-arc dance journeys through rhythm, release, play, grounding, and stillness.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    url: `${siteConfig.url}/about`,
    title: 'About Henners',
    description:
      'Amsterdam-based ecstatic dance facilitator and DJ building full-arc journeys through global rhythms, joy, introspection, and connection.',
    images: [
      {
        url: `${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`,
        width: 1200,
        height: 630,
        alt: 'Henners — ecstatic dance facilitator and DJ in Amsterdam',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Henners',
    description:
      'Amsterdam-based ecstatic dance facilitator and DJ building full-arc journeys through global rhythms, joy, introspection, and connection.',
    images: [`${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbf7ee] text-[#2a2319]">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Link href="/" className="text-sm font-semibold text-[#725332] hover:text-[#5e4a33]">← Back home</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">About</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Henners — ecstatic dance facilitator & DJ</h1>
          <p className="mt-7 text-xl leading-9 text-[#493925]">
            Henners is an Amsterdam-based ecstatic dance facilitator and DJ shaped by Amsterdam’s conscious dance scene and years around the Odessa ship.
          </p>
          <p className="mt-6 leading-8 text-[#5f4a32]">
            Rooted in his time aboard the Odessa ship and Amsterdam’s wider conscious dance community, he builds full-arc journeys through global rhythms, African-inspired grooves, percussion, melody, silence, and the quiet landing after the peak.
          </p>
          <p className="mt-6 leading-8 text-[#5f4a32]">
            The work is straightforward: prepare the arc, listen closely, follow the energy, and give people room to dance the full spectrum without forcing the floor into a script.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/events" className="rounded-full border border-[#d6c6aa] px-5 py-3 text-center font-semibold text-[#2a2319] hover:border-[#2a2319] hover:bg-[#eadfc9]">View event history</Link>
            <Link href="/media-package" className="rounded-full bg-[#2a2319] px-5 py-3 text-center font-semibold text-[#fbf7ee] hover:bg-[#55391f]">Open press kit</Link>
          </div>
        </div>
        <div className="grid gap-5">
          <Image src={HennersSpaceholding} alt="Henners holding space during an ecstatic dance journey" className="rounded-[1.5rem] border border-[#e0d2b9] object-cover " placeholder="blur" />
          <Image src={HennersCeremony} alt="Ceremony music and conscious dance facilitation by Henners" className="rounded-[1.5rem] border border-[#e0d2b9] object-cover " placeholder="blur" />
        </div>
      </section>
    </main>
  );
}
