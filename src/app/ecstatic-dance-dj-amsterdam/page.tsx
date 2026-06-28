import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/constant/config';

import RijksmuseumBooth from '../../../public/images/rijksmuseum-dj-booth.jpg';

export const metadata: Metadata = {
  title: 'Ecstatic Dance DJ Amsterdam',
  description:
    'Henners is an Amsterdam-based ecstatic dance DJ and facilitator creating grounded conscious dance journeys for ceremonies, retreats, festivals, and movement communities.',
  alternates: { canonical: `${siteConfig.url}/ecstatic-dance-dj-amsterdam` },
  openGraph: {
    url: `${siteConfig.url}/ecstatic-dance-dj-amsterdam`,
    title: 'Ecstatic Dance DJ Amsterdam — Henners',
    description:
      'Amsterdam-based ecstatic dance DJ and facilitator for conscious dance floors, ceremonies, retreats, and festivals.',
    images: [
      {
        url: `${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`,
        width: 1200,
        height: 630,
        alt: 'Henners — ecstatic dance DJ Amsterdam',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecstatic Dance DJ Amsterdam — Henners',
    description: 'Amsterdam-based ecstatic dance DJ and facilitator for conscious dance floors.',
    images: [`${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`],
  },
};

export default function EcstaticDanceDjAmsterdamPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ee] text-[#2a2319]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[#fbf7ee]" />
      <section className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <Link href="/" className="text-sm font-semibold text-[#725332] hover:text-[#5e4a33]">← Back home</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Amsterdam ecstatic dance DJ</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Ecstatic Dance DJ in Amsterdam</h1>
          <p className="mt-7 text-xl leading-9 text-[#493925]">
            Henners is an Amsterdam-based ecstatic dance facilitator and DJ crafting full-arc journeys for ecstatic dance floors, ceremonies, retreats, and festivals.
          </p>
          <p className="mt-6 leading-8 text-[#5f4a32]">
            The set is prepared as a full arc: rhythm, elation, introspection, release, play, connection, grounding, then stillness. Amsterdam is the home base, with travel possible for the right floor, retreat, festival, or community gathering.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/media-package" className="rounded-full bg-[#2a2319] px-6 py-4 text-center font-semibold text-[#fbf7ee] hover:bg-[#55391f]">Open press kit</Link>
            <Link href="/#contact" className="rounded-full border border-[#d6c6aa] px-6 py-4 text-center font-semibold text-[#2a2319] hover:border-[#2a2319] hover:bg-[#eadfc9]">Contact Henners</Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-4 ">
          <Image
            src={RijksmuseumBooth}
            alt="Henners DJing an ecstatic dance floor in Amsterdam"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            placeholder="blur"
            sizes="(max-width: 1024px) calc(100vw - 2.5rem), 46vw"
            quality={70}
          />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Amsterdam rooms', 'Past and recent material includes Odessa, Ambrosia, Het Sieraad, and Rijksmuseum.'],
            ['Music with a shape', 'The sets are not background music. They move through arrival, flow, rhythm, chaos and release, integration and play, grounding, then stillness.'],
            ['For organisers', 'Photos, video clips, bio copy, and technical notes are in the press kit.'],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6">
              <h2 className="text-2xl font-semibold text-[#2a2319]">{title}</h2>
              <p className="mt-4 leading-7 text-[#5f4a32]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-[#2a2319]/[0.06] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Listing copy</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2a2319]">Henners — Ecstatic Dance Facilitator & DJ, Amsterdam</h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#493925]">
            For listings, social profiles, lineups, and organiser copy, the clearest public wording is: Henners is an Amsterdam-based ecstatic dance facilitator and DJ.
          </p>
        </div>
      </section>
    </main>
  );
}
