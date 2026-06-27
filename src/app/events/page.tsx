import { Metadata } from 'next';
import Link from 'next/link';

import { gigs } from '@/app/gigsData';
import { siteConfig } from '@/constant/config';

const pastGigs = gigs
  .filter((gig) => new Date(gig.date) < new Date())
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const venueSummaries = Object.values(
  pastGigs.reduce<Record<string, { venue: string; location: string; country: string; count: number; latest: string }>>((acc, gig) => {
    const key = `${gig.venue}-${gig.location}`;
    if (!acc[key]) {
      acc[key] = {
        venue: gig.venue,
        location: gig.location,
        country: gig.country,
        count: 0,
        latest: gig.date,
      };
    }
    acc[key].count += 1;
    if (new Date(gig.date) > new Date(acc[key].latest)) {
      acc[key].latest = gig.date;
    }
    return acc;
  }, {})
).sort((a, b) => b.count - a.count || a.venue.localeCompare(b.venue));

const featuredProof = [
  {
    title: 'Ambrosia at Rijksmuseum',
    location: 'Rijksmuseum, Amsterdam',
    detail: 'Press-kit photos and video proof from a large Ambrosia dance floor in one of Amsterdam’s most recognizable cultural spaces.',
  },
  {
    title: 'Ambrosia at Het Sieraad',
    location: 'Het Sieraad, Amsterdam',
    detail: 'Recent video material for organizers who want to feel the room energy and stage presence quickly.',
  },
  {
    title: 'Odessa Amsterdam',
    location: 'Amsterdam, Netherlands',
    detail: 'A long-running base of community ecstatic dance, cacao, playground, Sunday, Wednesday, Friday, and Saturday floors.',
  },
  {
    title: 'Lundjuweel 2025',
    location: 'Netherlands',
    detail: 'Festival proof and short video material in the press kit.',
  },
];

const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
};

export const metadata: Metadata = {
  title: 'Event History',
  description:
    'Past record of where Henners has gigged and how often, including ecstatic dance floors, ceremonies, festivals, and community gatherings in Amsterdam, the Netherlands, and beyond.',
  alternates: { canonical: `${siteConfig.url}/events` },
  openGraph: {
    url: `${siteConfig.url}/events`,
    title: 'Henners Event History',
    description:
      'Past ecstatic dance, ceremony, festival, and community dance floors by Henners, Amsterdam-based ecstatic dance facilitator and DJ.',
    images: [
      {
        url: `${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`,
        width: 1200,
        height: 630,
        alt: 'Henners event history — ecstatic dance DJ Amsterdam',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henners Event History',
    description: 'Event history for Henners — ecstatic dance facilitator and DJ in Amsterdam.',
    images: [`${siteConfig.url}/images/og-henners-rijksmuseum-2026.jpg`],
  },
};

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ee] text-[#2a2319]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[#fbf7ee]" />
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-[#725332] hover:text-[#5e4a33]">← Back home</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Past rooms</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
          Event history for Henners — ecstatic dance DJ & facilitator
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-[#493925]">
          A record of dance floors, ceremonies, festivals, and community gatherings I have played or helped hold. Mostly for organizers who want to see where the work has lived before.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6">
            <p className="text-4xl font-semibold text-[#2a2319]">{pastGigs.length}+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#5f4a32]">gigs</p>
          </div>
          <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6">
            <p className="text-4xl font-semibold text-[#2a2319]">{venueSummaries.length}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#5f4a32]">venues / floors</p>
          </div>
          <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6">
            <p className="text-4xl font-semibold text-[#2a2319]">Amsterdam</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#5f4a32]">home base</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">A few rooms</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2a2319]">Named rooms organizers can recognize.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProof.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6 ">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#725332]">{item.location}</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2a2319]">{item.title}</h3>
              <p className="mt-4 leading-8 text-[#493925]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Archive by venue</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2a2319]">Past dance floors</h2>
          </div>
          <Link href="/media-package" className="inline-flex rounded-full border border-[#d6c6aa] px-5 py-3 text-sm font-semibold text-[#5e4a33] hover:bg-[#2a2319] hover:text-[#fbf7ee]">
            Open press kit
          </Link>
        </div>

        <div className="grid gap-3">
          {venueSummaries.map((venue) => (
            <details key={`${venue.venue}-${venue.location}`} className="group rounded-[1.5rem] border border-[#e0d2b9] bg-[#f4ecdd] p-1 open:border-[#d6c6aa]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.3rem] px-5 py-4 transition hover:bg-[#eadfc9]">
                <span>
                  <span className="block text-lg font-semibold text-[#2a2319]">{venue.venue}</span>
                  <span className="text-sm text-[#5f4a32]">{venue.location} · latest documented: {formatDate(venue.latest)}</span>
                </span>
                <span className="rounded-full border border-[#d6c6aa] px-3 py-1 text-sm font-semibold text-[#5e4a33]">
                  {venue.count} {venue.count === 1 ? 'set' : 'sets'}
                </span>
              </summary>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
