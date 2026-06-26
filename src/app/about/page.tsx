import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/constant/config';

import HennersCeremony from '../../../public/images/henners-ceremony.jpg';
import HennersSpaceholding from '../../../public/images/henners-spaceholding.jpg';

export const metadata: Metadata = {
  title: 'About Henners',
  description:
    'About Henners, an Amsterdam-based ecstatic dance facilitator and DJ weaving global rhythms into ecstatic dance journeys rooted in joy, introspection, connection, and the full spectrum of emotion.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    url: `${siteConfig.url}/about`,
    title: 'About Henners',
    description:
      'Amsterdam-based ecstatic dance facilitator and DJ weaving global rhythms into ecstatic dance journeys rooted in joy, introspection, and connection.',
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
      'Amsterdam-based ecstatic dance facilitator and DJ weaving global rhythms into ecstatic dance journeys rooted in joy, introspection, and connection.',
    images: [`${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#100d0a] text-[#f8f1e7]">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Link href="/" className="text-sm font-semibold text-amber-200 hover:text-amber-100">← Back home</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">About</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Henners — ecstatic dance facilitator & DJ</h1>
          <p className="mt-7 text-xl leading-9 text-stone-300">
            Henners is an Amsterdam-based ecstatic dance facilitator and DJ shaped by the city’s vibrant ecstatic dance scene and years of guiding dancers through soul-stirring journeys.
          </p>
          <p className="mt-6 leading-8 text-stone-400">
            Rooted in his time aboard the Odessa ship and Amsterdam’s wider conscious dance community, he weaves global rhythms, African-inspired grooves, melody, silence, and spacious integration into rooms where joy, introspection, and connection can flourish.
          </p>
          <p className="mt-6 leading-8 text-stone-400">
            Whether the room feels rooted in the earth or suddenly somewhere cosmic, the work is the same: listen closely, follow the energy, and let people dance the full spectrum of what is alive.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/events" className="rounded-full border border-stone-500/60 px-5 py-3 text-center font-semibold text-stone-100 hover:border-amber-200/60 hover:bg-stone-100/10">View event history</Link>
            <Link href="/media-package" className="rounded-full bg-[#e7c083] px-5 py-3 text-center font-semibold text-stone-950 hover:bg-[#f1d29d]">Open press kit</Link>
          </div>
        </div>
        <div className="grid gap-5">
          <Image src={HennersSpaceholding} alt="Henners holding space during an ecstatic dance journey" className="rounded-xl border border-stone-700/70 object-cover shadow-lg shadow-black/20" placeholder="blur" />
          <Image src={HennersCeremony} alt="Ceremony music and conscious dance facilitation by Henners" className="rounded-xl border border-stone-700/70 object-cover shadow-lg shadow-black/20" placeholder="blur" />
        </div>
      </section>
    </main>
  );
}
