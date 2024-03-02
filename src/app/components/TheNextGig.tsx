import React from 'react';

import { Gig as GigType } from '../gigsData';

interface TheNextGigProps {
  gigs: GigType[];
}

const formatDate = (dateString: string) => {
  // Same formatDate function as before
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const TheNextGig: React.FC<TheNextGigProps> = ({ gigs }) => {
  const currentDate = new Date();
  const nextGig = gigs
    .filter((gig) => new Date(gig.date) > currentDate)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]; // Get the closest upcoming gig

  return (
    <div className='nextGig'>
      <div>
        <p className=' fade-up mt-5 text-xl font-medium delay-150 ease-in md:text-2xl'>
          My next event is:
        </p>
        <p className=' fade-up mt-2 text-2xl font-medium delay-150 ease-in md:text-3xl'>
          {formatDate(nextGig.date)}{' '}
        </p>
        <p className=' fade-up mt-2 text-xl font-medium delay-150 ease-in md:text-2xl'>
          {nextGig.description}{' '}
        </p>
        <p className=' fade-up mt-2 text-lg font-medium delay-150 ease-in md:text-xl'>
          {nextGig.location}
        </p>
      </div>
    </div>
  );
};

export default TheNextGig;
