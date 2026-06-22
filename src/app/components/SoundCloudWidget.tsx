import React from 'react';

const track = {
  title: "Friday Ecstatic Dance w/ Mozes' Soundbath @ Odessa 14-12-25",
  artistUrl: 'https://soundcloud.com/hennerrsss',
  trackUrl: 'https://soundcloud.com/hennerrsss/friday-ecstatic-dance-odessa-14-12-25',
  embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2213010161&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
};

const SoundCloudWidget: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Available Mix
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-4"></div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {track.title}
          </h3>
        </div>

        <iframe
          className='w-full h-[166px] rounded-lg'
          width='100%'
          height='166'
          scrolling='no'
          frameBorder='no'
          allow='autoplay; encrypted-media'
          sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
          src={track.embedUrl}
          title={`SoundCloud Player - ${track.title}`}
          loading='lazy'
        />
        <div className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap break-normal text-[10px] font-thin text-gray-400" style={{ lineBreak: 'anywhere' }}>
          <a href={track.artistUrl} title="HENNERS" target="_blank" rel="noopener noreferrer" className="text-gray-400 no-underline">
            HENNERS
          </a>{' '}
          ·{' '}
          <a href={track.trackUrl} title={track.title} target="_blank" rel="noopener noreferrer" className="text-gray-400 no-underline">
            {track.title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoundCloudWidget;
