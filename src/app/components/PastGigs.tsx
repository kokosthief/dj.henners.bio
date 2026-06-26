import React from 'react';

import { Gig as GigType } from '../gigsData';

interface PastGigsProps {
  gigs: GigType[];
}

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

const PastGigs: React.FC<PastGigsProps> = ({ gigs }) => {
  const pastGigs = gigs
    .filter((gig) => new Date(gig.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const gigMap = pastGigs.reduce<Record<string, GigType[]>>((acc, gig) => {
    acc[gig.venue] = acc[gig.venue] || [];
    acc[gig.venue].push(gig);
    return acc;
  }, {});

  const venues = Object.entries(gigMap)
    .map(([venue, venueGigs]) => ({
      venue,
      location: venueGigs[0]?.location ?? '',
      count: venueGigs.length,
      gigs: venueGigs,
    }))
    .sort((a, b) => b.count - a.count || a.venue.localeCompare(b.venue));

  const countries = new Set(pastGigs.map((gig) => gig.country)).size;
  const years = new Set(pastGigs.map((gig) => gig.date.slice(0, 4))).size;

  return (
    <section id="past-gigs" className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Past rooms</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">Past gigs & dance floors</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-stone-300">
          Past record of where I’ve gigged and how often.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-stone-700/70 bg-[#17110d]/80 p-6">
          <p className="text-4xl font-semibold text-stone-50">{pastGigs.length}+</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">gigs</p>
        </div>
        <div className="rounded-2xl border border-stone-700/70 bg-[#17110d]/80 p-6">
          <p className="text-4xl font-semibold text-stone-50">{years}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">years active</p>
        </div>
        <div className="rounded-2xl border border-stone-700/70 bg-[#17110d]/80 p-6">
          <p className="text-4xl font-semibold text-stone-50">{countries}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">countries</p>
        </div>
      </div>

      <div className="grid gap-3">
        {venues.map(({ venue, location, count, gigs: venueGigs }) => (
          <details
            key={venue}
            className="group rounded-2xl border border-stone-700/70 bg-[#120d09]/90 p-1 shadow-lg shadow-black/10 open:border-amber-200/35"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.3rem] px-5 py-4 transition hover:bg-stone-100/[0.05]">
              <span>
                <span className="block text-lg font-semibold text-stone-50">{venue}</span>
                <span className="text-sm text-stone-400">{location}</span>
              </span>
              <span className="rounded-full border border-amber-200/30 px-3 py-1 text-sm font-semibold text-amber-100">
                {count} {count === 1 ? 'set' : 'sets'}
              </span>
            </summary>
            <ul className="px-5 pb-5">
              {venueGigs.map((gig) => (
                <li key={`${gig.date}-${gig.event}`} className="grid gap-1 border-t border-stone-700/70 py-3 text-sm sm:grid-cols-[1fr_auto] sm:items-center">
                  <span className="font-medium text-stone-200">{gig.event}</span>
                  <span className="text-stone-500">{formatDate(gig.date)}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
};

export default PastGigs;
