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
      <article className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6 transition hover:border-[#2a2319] hover:bg-[#eadfc9]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#725332]">{formatDate(gig.date)}</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#2a2319]">{gig.event}</h3>
            <p className="mt-2 text-[#5f4a32]">{gig.venue} · {gig.location}</p>
          </div>
          <p className="rounded-full border border-[#d6c6aa] px-3 py-1 text-sm font-semibold text-[#725332]">
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
