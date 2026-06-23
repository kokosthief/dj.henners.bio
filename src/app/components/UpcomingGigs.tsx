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
    <section id="upcoming" className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-6 px-5 py-6 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-cyan-200/25 bg-[#101923] p-6 shadow-2xl shadow-cyan-950/20 sm:p-8">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Next</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {upcomingGigs.length > 0 ? 'Upcoming gigs' : 'A small pause from DJing'}
          </h2>
        </div>

        {upcomingGigs.length > 0 ? (
          <div className="grid gap-4">
            {upcomingGigs.map((gig) => (
              <Gig key={`${gig.date}-${gig.venue}-${gig.event}`} gig={gig} isUpcoming />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-200">
            <p className="max-w-3xl text-lg leading-8">
              I’m taking a pause from regular DJing and gigging. New mixes, gatherings, and selected future dates will appear here when the timing feels right.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingGigs;
