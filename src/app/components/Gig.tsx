import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

import { Gig as GigType } from '@/app/gigsData';

interface GigProps {
  gig: GigType;
  isUpcoming?: boolean; // Optional prop to determine if it's an upcoming gig
}

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  const date = new Date(`${year}-${month}-${day}`);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
  }).format(date);
};

const Gig: React.FC<GigProps> = ({ gig, isUpcoming }) => {
  const gigContent = (
    <div>
      <h3>{formatDate(gig.date)}</h3>
      <h4>
        {gig.description} @ {gig.venueEvent}, {gig.location}
      </h4>
    </div>
  );

  return isUpcoming ? (
    <div>
      <UnderlineLink href='https://hipsy.nl/events?query=Henners'>
        <p className='font-secondary text-2xl'>{formatDate(gig.date)}</p>
      </UnderlineLink>
      <p className='font-primary text-xl font-semibold'>
        {gig.venueEvent} - {gig.location}
      </p>
    </div>
  ) : (
    gigContent
  );
};

export default Gig;
