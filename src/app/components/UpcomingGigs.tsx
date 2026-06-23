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
    <section id="upcoming" className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-6 px-5 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-[2rem] border border-cyan-200/25 bg-[#101923] p-6 shadow-2xl shadow-cyan-950/20 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Current chapter</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A pause, with the door open.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I’m taking a pause from regular DJing and gigging, not closing the chapter. The intention is to return to DJing as a way to travel, connect, and bring ecstatic dance journeys across the Netherlands and the world.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="rounded-full bg-amber-200 px-5 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-100">
              Invite me later
            </Link>
            <a href="https://hipsy.nl/events?query=Henners" target="_blank" rel="noopener noreferrer" className="rounded-full border border-cyan-200/40 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-200/10">
              Check Hipsy listings
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0b1220]/85 p-5 sm:p-6">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                {upcomingGigs.length > 0 ? 'Next public listing' : 'No public dates right now'}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {upcomingGigs.length > 0 ? 'Future gigs' : 'Resting between chapters'}
              </h3>
            </div>
          </div>

          {upcomingGigs.length > 0 ? (
            <div className="grid gap-4">
              {upcomingGigs.map((gig) => (
                <Gig key={`${gig.date}-${gig.venue}-${gig.event}`} gig={gig} isUpcoming />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-200">
              <p className="text-lg leading-8">
                New mixes, gatherings, and selected invitations will appear here when the timing feels right.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingGigs;
