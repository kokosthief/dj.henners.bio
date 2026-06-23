'use client';

import React, { useState } from 'react';

const track = {
  title: "Friday Ecstatic Dance w/ Mozes' Soundbath @ Odessa 14-12-25",
  artistUrl: 'https://soundcloud.com/hennerrsss',
  trackUrl: 'https://soundcloud.com/hennerrsss/friday-ecstatic-dance-odessa-14-12-25',
  embedUrl:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2213010161&color=%23d8a94f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
};

const SoundCloudWidget: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="listen" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-amber-200/15 bg-white/[0.06] shadow-2xl shadow-cyan-950/20 backdrop-blur">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 bg-gradient-to-br from-amber-300/15 via-cyan-300/10 to-transparent p-8 lg:border-b-0 lg:border-r">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Listen</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">A recorded ecstatic dance journey</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              A taste of the arc: grounded arrival, rhythmic build, spacious release, and a soft landing back into the body.
            </p>
            <a
              href={track.trackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full border border-amber-200/40 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:bg-amber-200/10"
            >
              Open on SoundCloud
            </a>
          </div>

          <div className="p-5 sm:p-8">
            {!loaded ? (
              <button
                type="button"
                onClick={() => setLoaded(true)}
                className="group flex min-h-[220px] w-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0b1220] p-8 text-center transition hover:border-amber-200/40 hover:bg-[#101a2d]"
              >
                <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-200 text-2xl text-slate-950 shadow-lg shadow-amber-500/20 transition group-hover:scale-105">▶</span>
                <span className="text-lg font-semibold text-white">Load SoundCloud player</span>
                <span className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                  Kept unloaded until you click, so the page stays faster and cleaner for visitors and search crawlers.
                </span>
              </button>
            ) : (
              <div>
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
        </div>
      </div>
    </section>
  );
};

export default SoundCloudWidget;
