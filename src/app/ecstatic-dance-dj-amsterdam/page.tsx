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
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30rem),radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_28rem),linear-gradient(180deg,#070b12_0%,#0a1220_52%,#05070b_100%)]" />
      <section className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <Link href="/" className="text-sm font-semibold text-amber-200 hover:text-amber-100">← Back home</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Amsterdam ecstatic dance DJ</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Ecstatic Dance DJ in Amsterdam</h1>
          <p className="mt-7 text-xl leading-9 text-slate-300">
            Henners is an Amsterdam-based ecstatic dance facilitator and DJ weaving global rhythms into soul-stirring journeys for ecstatic dance floors, ceremonies, retreats, and festivals.
          </p>
          <p className="mt-6 leading-8 text-slate-400">
            The work is not only a DJ set. It is a room being listened into: earth, rhythm, elation, introspection, release, play, connection, grounding, then stillness. Amsterdam is the home base; the dance floor can travel when the room and invitation feel aligned.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/media-package" className="rounded-full bg-amber-200 px-6 py-4 text-center font-semibold text-slate-950 hover:bg-amber-100">Open press kit</Link>
            <Link href="/#contact" className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold text-white hover:border-cyan-200/50 hover:bg-white/10">Contact Henners</Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/40">
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
            ['For organizers', 'Photos, video clips, bio copy, and technical notes are in the press kit.'],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-4 leading-7 text-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-amber-200/15 bg-amber-200/[0.06] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Listing copy</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Henners — Ecstatic Dance Facilitator & DJ, Amsterdam</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            For listings, social profiles, lineups, and organizer copy, the clearest public wording is: Henners is an Amsterdam-based ecstatic dance facilitator and DJ.
          </p>
        </div>
      </section>
    </main>
  );
}
