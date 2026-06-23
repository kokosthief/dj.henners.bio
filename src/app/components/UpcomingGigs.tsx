import Link from 'next/link';
import React from 'react';

import Gig from './Gig';
import { Gig as GigType } from '../gigsData';

interface UpcomingGigsProps {
  gigs: GigType[];
}

const UpcomingGigs: React.FC<UpcomingGigsProps> = ({ gigs }) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);

  const upcomingGigs = gigs
    .filter((gig) => new Date(gig.date) > currentDate)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <section id="upcoming" className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Next</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {upcomingGigs.length > 0 ? 'Upcoming gatherings' : 'A small pause from DJing'}
          </h2>
        </div>
        <Link href="#contact" className="text-sm font-semibold text-amber-200 transition hover:text-amber-100">
          Contact for future invitations →
        </Link>
      </div>

      {upcomingGigs.length > 0 ? (
        <div className="grid gap-4">
          {upcomingGigs.map((gig) => (
            <Gig key={`${gig.date}-${gig.venue}-${gig.event}`} gig={gig} isUpcoming />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-cyan-200/15 bg-cyan-200/[0.06] p-8 text-slate-200 shadow-2xl shadow-cyan-950/20">
          <p className="max-w-3xl text-xl leading-9">
            After many beautiful dance floors, I’m taking space to rest, listen, and let the next chapter unfold naturally.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Thank you for the support, movement, and magic so far. New mixes, gatherings, and selected future invitations will appear here when the timing feels right.
          </p>
        </div>
      )}
    </section>
  );
};

export default UpcomingGigs;
