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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Past rooms</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2a2319] md:text-5xl">Past gigs & dance floors</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[#493925]">
          Past record of where I’ve gigged and how often.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6">
          <p className="text-4xl font-semibold text-[#2a2319]">{pastGigs.length}+</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#5f4a32]">gigs</p>
        </div>
        <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6">
          <p className="text-4xl font-semibold text-[#2a2319]">{years}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#5f4a32]">years active</p>
        </div>
        <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6">
          <p className="text-4xl font-semibold text-[#2a2319]">{countries}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#5f4a32]">countries</p>
        </div>
      </div>

      <div className="grid gap-3">
        {venues.map(({ venue, location, count, gigs: venueGigs }) => (
          <details
            key={venue}
            className="group rounded-[1.5rem] border border-[#e0d2b9] bg-[#f4ecdd] p-1  open:border-[#2a2319]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.3rem] px-5 py-4 transition hover:bg-[#eadfc9]">
              <span>
                <span className="block text-lg font-semibold text-[#2a2319]">{venue}</span>
                <span className="text-sm text-[#5f4a32]">{location}</span>
              </span>
              <span className="rounded-full border border-[#d6c6aa] px-3 py-1 text-sm font-semibold text-[#725332]">
                {count} {count === 1 ? 'set' : 'sets'}
              </span>
            </summary>
            <ul className="px-5 pb-5">
              {venueGigs.map((gig) => (
                <li key={`${gig.date}-${gig.event}`} className="grid gap-1 border-t border-[#e0d2b9] py-3 text-sm sm:grid-cols-[1fr_auto] sm:items-center">
                  <span className="font-medium text-[#493925]">{gig.event}</span>
                  <span className="text-[#725332]">{formatDate(gig.date)}</span>
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
