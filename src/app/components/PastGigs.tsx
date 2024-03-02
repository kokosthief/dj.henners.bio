import React, { useState } from 'react';

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
  // Filter out future gigs
  const pastGigs = gigs.filter((gig) => new Date(gig.date) < new Date());

  // Group past gigs by location and count the occurrences
  const gigCounts: { [key: string]: number } = {};
  const gigList: { [key: string]: Gig[] } = {};
  pastGigs.forEach((gig) => {
    gigCounts[gig.venueEvent] = (gigCounts[gig.venueEvent] || 0) + 1;
    if (!gigList[gig.venueEvent]) {
      gigList[gig.venueEvent] = [];
    }
    gigList[gig.venueEvent].push(gig);
  });

  // Convert gigCounts object into an array of objects
  const gigArray = Object.keys(gigCounts).map((venueEvent) => ({
    venueEvent,
    count: gigCounts[venueEvent],
  }));

  // Sort the array by count in descending order
  gigArray.sort((a, b) => b.count - a.count);

  // Calculate total count of past gigs
  const totalCount = pastGigs.length;

  // State to track the expanded state of each venue
  const [expandedVenue, setExpandedVenue] = useState<string | null>(null);

  // Function to handle click event and toggle expansion
  const handleVenueClick = (venue: string) => {
    setExpandedVenue((prev) => (prev === venue ? null : venue));
  };

  return (
    <div className='pastGigs mb-10'>
      <h1 className='mb-3 mt-5'>{totalCount} edances & counting</h1>
      <ul className='list-none'>
        {gigArray.map(({ venueEvent, count }) => (
          <li
            key={venueEvent}
            className='mb-3'
            onClick={() => handleVenueClick(venueEvent)}
            style={{ cursor: 'pointer' }}
          >
            <div className='flex items-center justify-between'>
              <p className='mx-2 text-lg font-semibold'>{venueEvent}</p>
              <span className='mx-2'>{count}</span>
            </div>
            {expandedVenue === venueEvent && (
              <ul className='list-none'>
                {gigList[venueEvent].map((gig, index) => (
                  <li
                    key={index}
                    className='ml-6 flex items-center justify-between'
                  >
                    <p className='mx-2 text-lg font-semibold'>
                      {' '}
                      {gig.description}
                    </p>
                    <span className='mx-2'>{gig.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastGigs;
