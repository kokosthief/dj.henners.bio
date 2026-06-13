import React from 'react';

import Gig from './Gig';
import { Gig as GigType } from '../gigsData';

interface UpcomingGigsProps {
  gigs: GigType[];
}
const UpcomingGigs: React.FC<UpcomingGigsProps> = ({ gigs }) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1); // Subtract one day from the current date

  const upcomingGigs = gigs.filter((gig) => new Date(gig.date) > currentDate);

  return (
    <div id='upcomingGigs' className='upcomingGigs'>
      <h1 className='mb-5 mt-5 underline decoration-indigo-400 decoration-solid decoration-4 underline-offset-8'>
        {upcomingGigs.length > 0 ? 'Upcoming' : "What's Next"}
      </h1>
      {upcomingGigs.length > 0 ? (
        upcomingGigs.map((gig) => (
          <div key={gig.date} style={{ marginBottom: '15px' }}>
            <Gig gig={gig} isUpcoming />
          </div>
        ))
      ) : (
        <div className='text-center py-8'>
          <p className='text-xl mb-4'>
            Hey! I'm currently taking a pause from DJing and gigging.
          </p>
          <p className='text-lg mb-4 max-w-2xl mx-auto'>
            After many beautiful dance floors, I'm giving myself some space to rest, listen, and let the next chapter unfold naturally.
          </p>
          <p className='text-lg max-w-2xl mx-auto'>
            Thank you for all the support, movement, and magic so far. I'll share new music and gatherings here when the time feels right.
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingGigs;
