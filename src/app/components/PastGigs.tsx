import React, { useEffect, useRef, useState } from 'react';

interface PastGigsProps {
  gigs: Gig[];
}

interface Gig {
  date: string;
  event: string;
  location: string;
  venue: string;
  country: string;
}

const PastGigs: React.FC<PastGigsProps> = ({ gigs }) => {
  // Filter out future gigs
  const pastGigs = gigs.filter((gig) => new Date(gig.date) < new Date());

  // Group past gigs by location and count the occurrences
  const gigCounts: { [key: string]: number } = {};
  const gigList: { [key: string]: Gig[] } = {};
  pastGigs.forEach((gig) => {
    gigCounts[gig.venue] = (gigCounts[gig.venue] || 0) + 1;
    if (!gigList[gig.venue]) {
      gigList[gig.venue] = [];
    }
    gigList[gig.venue].push(gig);
  });

  // Convert gigCounts object into an array of objects
  const gigArray = Object.keys(gigCounts).map((venue) => ({
    venue,
    location: pastGigs.find((gig) => gig.venue === venue)?.location, // Find location corresponding to the venue
    count: gigCounts[venue],
  }));

  // Sort the array by count in descending order
  gigArray.sort((a, b) => b.count - a.count);

  // Sort the gig list for each venue by date in descending order
  Object.keys(gigList).forEach((venue) => {
    gigList[venue].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  });

  // State to track the expanded state of each venue
  const [expandedVenue, setExpandedVenue] = useState<string | null>(null);

  // Function to handle click event and toggle expansion
  const handleVenueClick = (venue: string) => {
    setExpandedVenue((prev) => (prev === venue ? null : venue));
  };

  // Function to format date string as "day/month/year"
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  // State to track the count for the number counter animation
  const [count, setCount] = useState(0);

  // Ref for the counter element
  const counterRef = useRef<HTMLSpanElement>(null);

  // State to track whether the animation has been triggered
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // UseEffect hook to trigger the number counter animation when the component mounts
  useEffect(() => {
    // Calculate total count of past gigs
    const totalCount = pastGigs.length;

    // Options for the IntersectionObserver
    const options = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    // Callback function for the IntersectionObserver
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationTriggered) {
          animateNumber(totalCount, 2000); // Change 2000 to specify duration of animation
          setAnimationTriggered(true);
        }
      });
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the counter element
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup function to disconnect the observer
    return () => {
      observer.disconnect();
    };
  }, [animationTriggered, pastGigs.length]);

  // Function to animate the number counter
  const animateNumber = (target: number, duration: number) => {
    let start = 0;
    const increment = 1;
    const stepTime = Math.abs(Math.floor(duration / (target - start)));
    const timer = setInterval(() => {
      start += increment;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <div className='pastGigs mb-10'>
      <h1 className='mb-6 mt-5 underline decoration-indigo-400 decoration-solid decoration-4 underline-offset-8'>
        Past Gigs
      </h1>

      <h2 className='mb-4 mt-5'>
        <span ref={counterRef}>{count}</span> & counting
      </h2>
      <ul className='list-none'>
        {gigArray.map(({ venue, location, count }) => (
          <li
            key={venue}
            className={` my-2 rounded-xl border-2 ${
              expandedVenue === venue
                ? 'border-cyan-700'
                : 'hover:border-cyan-700'
            }`}
            onClick={() => handleVenueClick(venue)}
            style={{ cursor: 'pointer' }}
          >
            <div className='mx-3 my-2 flex items-center justify-between'>
              <p className='mx-2 text-lg font-semibold'>
                {venue} - {location}
              </p>
              <span className='font-secondary mx-2 text-lg'>{count}</span>
            </div>
            {expandedVenue === venue && (
              <ul className='mx-3 mb-2 list-none'>
                {gigList[venue].map((gig, index) => (
                  <li key={index} className='flex items-center justify-between'>
                    <p
                      className='mx-2 truncate text-lg font-semibold'
                      style={{ maxWidth: 'calc(100% - 2rem)' }}
                    >
                      {gig.event}
                    </p>
                    <span className='mx-2'>{formatDate(gig.date)}</span>
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
