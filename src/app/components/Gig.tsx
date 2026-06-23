import React from 'react';

import { Gig as GigType } from '@/app/gigsData';

interface GigProps {
  gig: GigType;
  isUpcoming?: boolean;
}

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

const Gig: React.FC<GigProps> = ({ gig, isUpcoming }) => {
  if (isUpcoming) {
    return (
      <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-cyan-200/40 hover:bg-white/[0.08]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">{formatDate(gig.date)}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{gig.event}</h3>
            <p className="mt-2 text-slate-400">{gig.venue} · {gig.location}</p>
          </div>
          <p className="rounded-full border border-amber-200/30 px-3 py-1 text-sm font-semibold text-amber-100">
            Upcoming
          </p>
        </div>
      </article>
    );
  }

  return (
    <div>
      <h3>{formatDate(gig.date)}</h3>
      <h4>
        {gig.event} @ {gig.venue}, {gig.location}
      </h4>
    </div>
  );
};

export default Gig;
