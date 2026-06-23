'use client';

import React, { useState } from 'react';

const track = {
  title: "Friday Ecstatic Dance w/ Mozes' Soundbath @ Odessa 14-12-25",
  artistUrl: 'https://soundcloud.com/srenneh',
  trackUrl: 'https://soundcloud.com/srenneh/friday-ecstatic-dance-odessa-14-12-25',
  embedUrl:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2213010161&color=%23d8a94f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
};

const SoundCloudWidget: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="listen" className="relative z-10 mx-auto w-full max-w-6xl px-5 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-[2rem] border border-amber-200/15 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Listen</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">A recorded ecstatic dance journey</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            A taste of the arc: grounded arrival, rhythmic build, spacious release, and a soft landing back into the body.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            This is the kind of musical container I bring to ecstatic dance floors, retreats, ceremonies, and communities that want movement with depth.
          </p>
        </div>

        {!loaded ? (
          <div className="rounded-3xl border border-white/10 bg-[#0b1220] p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{track.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Player kept unloaded until you click, keeping the page fast while still making the mix easy to reach.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setLoaded(true)}
                  className="rounded-full bg-amber-200 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-100"
                >
                  Load player
                </button>
                <a
                  href={track.trackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-amber-200/40 px-5 py-3 text-center text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:bg-amber-200/10"
                >
                  Open on SoundCloud
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#0b1220] p-5 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">{track.title}</h3>
            <iframe
              className="h-[166px] w-full rounded-2xl"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay; encrypted-media"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              src={track.embedUrl}
              title={`SoundCloud Player - ${track.title}`}
              loading="lazy"
            />
            <p className="mt-3 truncate text-xs text-slate-500">
              <a href={track.artistUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">HENNERS</a>
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
