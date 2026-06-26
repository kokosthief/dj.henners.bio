import { Metadata } from 'next';
import Link from 'next/link';

import { gigs } from '@/app/gigsData';
import { siteConfig } from '@/constant/config';

const dutchGigs = gigs.filter((gig) => gig.country === 'NL');
const dutchVenues = new Set(dutchGigs.map((gig) => gig.venue)).size;

export const metadata: Metadata = {
  title: 'Ecstatic Dance DJ Netherlands',
  description:
    'Henners is an Amsterdam-based ecstatic dance DJ and facilitator with a lived history across Dutch ecstatic dance floors, ceremonies, festivals, and movement communities.',
  alternates: { canonical: `${siteConfig.url}/ecstatic-dance-dj-netherlands` },
  openGraph: {
    url: `${siteConfig.url}/ecstatic-dance-dj-netherlands`,
    title: 'Ecstatic Dance DJ Netherlands — Henners',
    description:
      'Amsterdam-based ecstatic dance DJ and facilitator with a lived history across Dutch ecstatic dance floors.',
    images: [
      {
        url: `${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`,
        width: 1200,
        height: 630,
        alt: 'Henners — ecstatic dance DJ Netherlands',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecstatic Dance DJ Netherlands — Henners',
    description: 'Ecstatic dance DJ and facilitator based in Amsterdam, Netherlands.',
    images: [`${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`],
  },
};

export default function EcstaticDanceDjNetherlandsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100d0a] text-[#f8f1e7]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[#100d0a]" />
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-amber-200 hover:text-amber-100">← Back home</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Netherlands / Holland</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">Ecstatic Dance DJ in the Netherlands</h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-stone-300">
          Henners is an Amsterdam-based ecstatic dance facilitator and DJ with a track record across Dutch ecstatic dance floors, ceremonies, festivals, and community gatherings.
        </p>
        <p className="mt-6 max-w-3xl leading-8 text-stone-400">
          The work grew through Amsterdam and travels when the room, invitation, and timing feel aligned.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-stone-700/70 bg-[#17110d]/80 p-6">
            <p className="text-4xl font-semibold text-stone-50">{dutchGigs.length}+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">Dutch gigs</p>
          </div>
          <div className="rounded-xl border border-stone-700/70 bg-[#17110d]/80 p-6">
            <p className="text-4xl font-semibold text-stone-50">{dutchVenues}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">Dutch venues / floors</p>
          </div>
          <div className="rounded-xl border border-stone-700/70 bg-[#17110d]/80 p-6">
            <p className="text-4xl font-semibold text-stone-50">NL</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">home country</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-xl border border-stone-700/70 bg-[#17110d]/80 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">From Amsterdam outward</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-50">Amsterdam-based, with rooms across the Netherlands.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Amsterdam', 'Home base and the place most of the work grew from.'],
              ['Netherlands / Holland', 'For Dutch organizers looking beyond one city.'],
              ['Retreats & festivals', 'The right frame for travel-connected bookings.'],
              ['Photos & footage', 'Rijksmuseum, Ambrosia, Odessa, and other named floors are covered in the press kit.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-xl border border-stone-700/70 bg-[#120d09]/90 p-5">
                <h3 className="text-xl font-semibold text-stone-50">{title}</h3>
                <p className="mt-3 leading-7 text-stone-400">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 rounded-xl border border-amber-200/15 bg-amber-200/[0.06] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-stone-50">Need photos, footage, or dates?</h2>
            <p className="mt-3 max-w-2xl leading-8 text-stone-300">The event history and press kit are here if you need context before reaching out.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/events" className="rounded-full border border-white/15 px-5 py-3 text-center font-semibold text-stone-50 hover:bg-stone-100/10">Event history</Link>
            <Link href="/media-package" className="rounded-full bg-amber-200 px-5 py-3 text-center font-semibold text-stone-950 hover:bg-amber-100">Press kit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
