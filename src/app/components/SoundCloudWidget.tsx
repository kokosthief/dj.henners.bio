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
      <div className="grid min-w-0 gap-6 overflow-hidden border-y border-stone-700/70 bg-[#17110d]/90 px-4 py-7 shadow-2xl shadow-black/20 sm:rounded-[1.5rem] sm:border sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="min-w-0 px-1 sm:px-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Listen</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-50 md:text-4xl">A recorded ecstatic dance journey</h2>
          <p className="mt-4 text-base leading-8 text-stone-300">
            A taste of the arc: arrival, flow, rhythm, chaos and release, integration and play, grounding, then stillness.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-400">
            This is the kind of musical container I bring to ecstatic dance floors, retreats, ceremonies, and communities that want movement with depth.
          </p>
        </div>

        {!loaded ? (
          <div className="min-w-0 rounded-2xl border border-stone-700/70 bg-[#120d09] p-4 sm:p-6">
            <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h3 className="break-words text-lg font-semibold text-stone-50">{track.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-400">
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
                  className="rounded-full bg-[#e7c083] px-5 py-3 text-sm font-semibold text-stone-950 shadow-lg shadow-black/20 transition hover:bg-amber-100"
                >
                  Load player
                </button>
                <a
                  href={track.trackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-stone-500/60 px-5 py-3 text-center text-sm font-semibold text-stone-100 transition hover:border-amber-200/60 hover:bg-stone-100/10"
                >
                  Open on SoundCloud
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-w-0 overflow-hidden rounded-2xl border border-stone-700/70 bg-[#120d09] p-4 sm:p-6">
            <h3 className="mb-4 break-words text-lg font-semibold text-stone-50">{track.title}</h3>
            <div className="max-w-full overflow-hidden rounded-2xl bg-white">
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
            <p className="mt-3 max-w-full overflow-hidden text-ellipsis whitespace-nowrap break-normal text-[10px] font-light leading-5 text-stone-500 [line-break:anywhere]">
              <a href={track.artistUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">HENNERS / SRENNEH</a>
              {' · '}
              <a href={track.trackUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">{track.title}</a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SoundCloudWidget;
