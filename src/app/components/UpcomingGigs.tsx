import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

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
            Hey! I'm currently on a hiatus from gigging.
          </p>
          <p className='text-lg mb-4'>
            But if you've ever wanted to learn to DJ, I'm now accepting students for my 6-month personal mentorship program.
          </p>
          <ul className='text-left max-w-md mx-auto mb-6 space-y-2'>
            <li className='flex items-start gap-2'>
              <span className='text-emerald-400 mt-1'>&#10003;</span>
              <span>In-person lessons tailored to your level</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-emerald-400 mt-1'>&#10003;</span>
              <span>Mid-month online check-ins</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-emerald-400 mt-1'>&#10003;</span>
              <span>Curated curriculum matched to your goals</span>
            </li>
          </ul>
          <a
            href='https://api.whatsapp.com/send?phone=31683421604&text=Hi%20Henners!%20I%27m%20interested%20in%20your%20DJ%20mentorship%20program'
            className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp className='w-5 h-5' />
            <span className='font-medium'>Let's chat about the program</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default UpcomingGigs;
