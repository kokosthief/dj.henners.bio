'use client';

import React, { useState } from 'react';

import { trackEvent } from '../analytics';

const track = {
  title: "Friday Ecstatic Dance w/ Mozes' Soundbath @ Odessa 14-12-25",
  artistUrl: 'https://soundcloud.com/srenneh',
  trackUrl: 'https://soundcloud.com/srenneh/friday-ecstatic-dance-odessa-14-12-25',
  embedUrl:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2213010161&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
};

const SoundCloudWidget: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="listen" className="relative z-10 mx-auto w-full max-w-6xl px-0 py-6 sm:px-6 lg:px-8">
      <div className="grid min-w-0 gap-6 overflow-hidden border-y border-[#e0d2b9] bg-white/55 px-4 py-7  sm:rounded-[1.5rem] sm:border sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="min-w-0 px-1 sm:px-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Listen</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#2a2319] md:text-4xl">A recorded ecstatic dance journey</h2>
          <p className="mt-4 text-base leading-8 text-[#493925]">
            A taste of the arc: arrival, flow, rhythm, chaos and release, integration and play, grounding, then stillness.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#5f4a32]">
            This is the kind of musical container I bring to ecstatic dance floors, retreats, ceremonies, and communities that want movement with depth.
          </p>
        </div>

        {!loaded ? (
          <div className="min-w-0 rounded-[1.5rem] border border-[#e0d2b9] bg-[#f4ecdd] p-4 sm:p-6">
            <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h3 className="break-words text-lg font-semibold text-[#2a2319]">{track.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5f4a32]">
                  Player kept unloaded until you click, keeping the page fast while still making the mix easy to reach.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('soundcloud_player_load', {
                      event_label: track.title,
                      track_url: track.trackUrl,
                    });
                    setLoaded(true);
                  }}
                  className="rounded-full bg-[#2a2319] px-5 py-3 text-sm font-semibold text-[#fbf7ee]  transition hover:bg-[#55391f]"
                >
                  Load player
                </button>
                <a
                  href={track.trackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#d6c6aa] px-5 py-3 text-center text-sm font-semibold text-[#2a2319] transition hover:border-[#2a2319] hover:bg-[#eadfc9]"
                >
                  Open on SoundCloud
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-w-0 overflow-hidden rounded-[1.5rem] border border-[#e0d2b9] bg-[#f4ecdd] p-4 sm:p-6">
            <h3 className="mb-4 break-words text-lg font-semibold text-[#2a2319]">{track.title}</h3>
            <div className="max-w-full overflow-hidden rounded-[1.5rem] bg-white">
              <iframe
                className="block h-[300px] w-full max-w-full border-0"
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                src={track.embedUrl}
                title={`SoundCloud Player - ${track.title}`}
                loading="lazy"
              />
            </div>
            <p className="mt-3 max-w-full overflow-hidden text-ellipsis whitespace-nowrap break-normal text-[10px] font-light leading-5 text-[#725332] [line-break:anywhere]">
              <a href={track.artistUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#725332]">HENNERS / SRENNEH</a>
              {' · '}
              <a href={track.trackUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#725332]">{track.title}</a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SoundCloudWidget;
