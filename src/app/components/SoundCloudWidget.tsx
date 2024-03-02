import React from 'react';

const SoundCloudWidget: React.FC = () => {
  return (
    <>
      <iframe
        className='mb-6 mt-8 h-[166px] md:h-[200px] md:w-[600px]'
        width='100%'
        height='100%'
        scrolling='no'
        frameBorder='yes'
        allow='autoplay'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1762056042&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        title='SoundCloud Player'
      ></iframe>
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          lineHeight: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontFamily:
            'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
          fontWeight: '100',
        }}
      ></div>
    </>
  );
};

export default SoundCloudWidget;
