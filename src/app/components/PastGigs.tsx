import React from 'react';

interface PastGigsProps {
  gigs: Gig[];
}

interface Gig {
  date: string;
  description: string;
  location: string;
  venueEvent: string;
}

const PastGigs: React.FC<PastGigsProps> = ({ gigs }) => {
  // Group gigs by location and count the occurrences
  const gigCounts: { [key: string]: number } = {};
  gigs.forEach((gig) => {
    gigCounts[gig.venueEvent] = (gigCounts[gig.venueEvent] || 0) + 1;
  });

  // Convert gigCounts object into an array of objects
  const gigArray = Object.keys(gigCounts).map((venueEvent) => ({
    venueEvent,
    count: gigCounts[venueEvent],
  }));

  // Sort the array by count in descending order
  gigArray.sort((a, b) => b.count - a.count);

  return (
    <div className='pastGigs mb-10 px-4'>
      <h1 className='my-6'>Past Ecstatic Dances</h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {gigArray.map(({ venueEvent, count }) => (
          <div
            key={venueEvent}
            className='rounded-lg bg-gray-100 p-4 dark:bg-indigo-900'
          >
            <p className='text-md font-secondary md:text-xl'>{venueEvent}</p>
            <p className='mt-1 text-gray-700 md:text-lg dark:text-gray-100'>
              {count} Ecstatic Dances
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastGigs;
