'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaDownload, FaFilePdf, FaImage, FaVideo } from 'react-icons/fa6';

import ImageSlideshow from '@/app/components/ImageSlideshow';

import { trackEvent } from '../analytics';

interface MediaFile {
  name: string;
  format: string;
  size: string;
  downloadUrl: string;
  description: string;
  duration?: string;
  posterUrl?: string;
}

const artistInfo = {
  short:
    'Henners is an Amsterdam-based ecstatic dance facilitator and DJ crafting full-arc dance journeys through rhythm, release, play, grounding, and stillness.',
  medium:
    'Shaped by Amsterdam’s conscious dance scene and years around the Odessa ship, Henners builds prepared dance journeys with 5Rhythms and the hero’s journey in mind: arrival, flow, rhythm, chaos and release, integration, play, grounding, then stillness.',
  long:
    'Henners is an Amsterdam-based ecstatic dance facilitator and DJ from the city’s conscious dance scene, rooted in years around the Odessa ship.\n\nHis sets are prepared as full journeys, with 5Rhythms and the hero’s journey in mind: arrival, flow, rhythm, chaos and release, integration and play, grounding, then stillness.\n\nThe music moves between global rhythms, African-inspired grooves, percussion, melody, silence, and the quiet landing after the peak. Sometimes it invites people to bounce, shake, and sweat. Sometimes it gives the room space to soften, feel, and come back to itself.\n\nThe journey is prepared with care, but never fixed shut. Henners holds the arc while staying responsive to the energy of the room.',
};

const mediaFiles = {
  images: [
    { name: 'Rijksmuseum DJ Booth', format: 'PNG', size: '1.0 MB', downloadUrl: '/downloads/high-res/rijksmuseum-dj-booth.png', description: 'DJing at Rijksmuseum in Amsterdam' },
    { name: 'Rijksmuseum Dancefloor', format: 'PNG', size: '1.4 MB', downloadUrl: '/downloads/high-res/rijksmuseum-dancefloor.png', description: 'Rijksmuseum dancefloor from the DJ booth' },
    { name: 'Rijksmuseum Close Up', format: 'PNG', size: '2.1 MB', downloadUrl: '/downloads/high-res/rijksmuseum-close-up.png', description: 'Close-up DJing at Rijksmuseum in Amsterdam' },
    { name: 'Under the Sun DJ', format: 'JPG', size: '496 KB', downloadUrl: '/images/gallery/under-the-sun-dj.jpg', description: 'Outdoor DJing at Under the Sun' },
    { name: 'Under the Sun Circle', format: 'JPG', size: '408 KB', downloadUrl: '/images/gallery/under-the-sun-circle.jpg', description: 'Facilitating a circle outdoors' },
    { name: 'EDFH Basement Black & White', format: 'JPG', size: '1.1 MB', downloadUrl: '/images/gallery/edfh-basement-bw.jpg', description: 'DJing at Ecstatic Dance Festival Holland' },
    { name: 'Ambrosia Het Sieraad Floor', format: 'JPG', size: '382 KB', downloadUrl: '/images/gallery/ambrosia-het-sieraad-floor.jpg', description: 'Ambrosia dance floor at Het Sieraad' },
    { name: 'Ambrosia Het Sieraad DJ', format: 'JPG', size: '189 KB', downloadUrl: '/images/gallery/ambrosia-het-sieraad-dj.jpg', description: 'DJing for Ambrosia at Het Sieraad' },
    { name: 'Silent Dance Water', format: 'JPG', size: '352 KB', downloadUrl: '/images/gallery/silent-dance-water.jpg', description: 'Silent dance by the water' },
    { name: 'Forest Listening', format: 'JPG', size: '896 KB', downloadUrl: '/images/gallery/forest-listening.jpg', description: 'Listening moment in the forest' },
    { name: 'Black Abyss', format: 'JPG', size: '4.5 MB', downloadUrl: '/downloads/high-res/black%20abyss.jpg', description: 'Mystical black abyss portrait' },
    { name: 'Cacao Ceremony', format: 'JPG', size: '104 KB', downloadUrl: '/downloads/high-res/cacao.jpg', description: 'Sacred cacao ceremony moment' },
    { name: 'Ceremony Space', format: 'JPG', size: '756 KB', downloadUrl: '/downloads/high-res/ceremony.jpg', description: 'Holding ceremony space' },
    { name: 'Groove Session', format: 'JPG', size: '4.4 MB', downloadUrl: '/downloads/high-res/groove.jpg', description: 'Deep in the groove' },
    { name: 'Lava Stoic', format: 'JPG', size: '3.9 MB', downloadUrl: '/downloads/high-res/lava%20stoic.jpg', description: 'Stoic presence with lava backdrop' },
    { name: 'Ocean Split Mist', format: 'JPG', size: '4.0 MB', downloadUrl: '/downloads/high-res/ocean%20split%20mist.jpg', description: 'Mystical ocean mist portrait' },
    { name: 'Road Sit', format: 'JPG', size: '5.0 MB', downloadUrl: '/downloads/high-res/road%20sit.jpg', description: 'Contemplative road sitting' },
    { name: 'Rose Wall', format: 'JPG', size: '4.6 MB', downloadUrl: '/downloads/high-res/rose%20wall.jpg', description: 'Portrait against rose wall' },
    { name: 'Smelling', format: 'JPG', size: '2.8 MB', downloadUrl: '/downloads/high-res/smelling.jpg', description: 'Sensory exploration moment' },
    { name: 'Where', format: 'JPG', size: '7.7 MB', downloadUrl: '/downloads/high-res/where.jpg', description: 'Contemplative portrait' },
    { name: 'Wonder', format: 'JPG', size: '5.5 MB', downloadUrl: '/downloads/high-res/wonder.jpg', description: 'Sense of wonder captured' },
  ],
  videos: [
    { name: 'Ambrosia at Het Sieraad', format: 'MP4', size: '1.9 MB', duration: '0:07', downloadUrl: '/downloads/videos/ambrosia-het-sieraad.mp4', posterUrl: '/images/video-posters/ambrosia-het-sieraad.jpg', description: 'DJing for Ambrosia at Het Sieraad' },
    { name: 'Lundjuweel 2025', format: 'MP4', size: '6.5 MB', duration: '0:15', downloadUrl: '/downloads/videos/lundjuweel-2025.mp4', posterUrl: '/images/video-posters/lundjuweel-2025.jpg', description: 'DJing at Lundjuweel 2025' },
    { name: 'Ambrosia at Rijksmuseum', format: 'MP4', size: '9.8 MB', duration: '0:48', downloadUrl: '/downloads/videos/ambrosia-rijksmuseum.mp4', posterUrl: '/images/video-posters/ambrosia-rijksmuseum.jpg', description: 'DJing for Ambrosia at Rijksmuseum' },
    { name: 'EDFH Basement Session', format: 'MP4', size: '2.2 MB', duration: '~1 min', downloadUrl: '/downloads/videos/edfh%20basement.mp4', description: 'Ecstatic Dance basement session' },
    { name: 'Movement Journey', format: 'MOV', size: '17 MB', duration: '~3 min', downloadUrl: '/downloads/videos/movement%20journey.mov', description: 'Movement journey footage' },
    { name: 'New Years Eve', format: 'MP4', size: '2.0 MB', duration: '~1 min', downloadUrl: '/downloads/videos/new%20years%20eve.mp4', description: 'New Year’s Eve celebration' },
    { name: 'New Years Eve Extended', format: 'MP4', size: '7.7 MB', duration: '~2 min', downloadUrl: '/downloads/videos/new%20years%20evee.mp4', description: 'Extended New Year’s Eve footage' },
    { name: 'This Is What We Do', format: 'MP4', size: '23 MB', duration: '~5 min', downloadUrl: '/downloads/videos/this%20is%20what%20we%20do.mp4', description: 'Ecstatic dance showcase footage' },
  ],
  documents: [
    { name: 'Technical Rider', format: 'PDF', size: '126 KB', downloadUrl: '/downloads/documents/technical-rider.pdf', description: 'Simple one-page setup note' },
    { name: 'Artist Biography', format: 'PDF', size: '101 KB', downloadUrl: '/downloads/documents/artist-biography.pdf', description: 'Plain bio copy in short, medium, and long versions' },
  ],
};

const bioOptions = [
  { key: 'short', label: 'Short', copy: artistInfo.short },
  { key: 'medium', label: 'Medium', copy: artistInfo.medium },
  { key: 'long', label: 'Long', copy: artistInfo.long },
] as const;

type BioKey = (typeof bioOptions)[number]['key'];


function AssetList({
  title,
  icon: Icon,
  files,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  files: MediaFile[];
}) {
  return (
    <section className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-5  sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-[1.5rem] border border-amber-200/20 bg-[#2a2319]/10 p-3 text-[#725332]">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-semibold text-[#2a2319]">{title}</h2>
      </div>
      <div className={`grid gap-3 ${files.length > 10 ? 'xl:grid-cols-2' : ''}`}>
        {files.map((file) => (
          <a
            key={`${title}-${file.name}`}
            href={file.downloadUrl}
            download
            className="group flex min-w-0 items-center justify-between gap-4 rounded-[1.5rem] border border-[#e0d2b9] bg-[#f4ecdd] p-4 transition hover:border-[#d6c6aa] hover:bg-[#eadfc9]"
          >
            <span className="min-w-0">
              <span className="block truncate font-semibold text-[#2a2319]">{file.name}</span>
              <span className="mt-1 block truncate text-xs text-[#5f4a32]">
                {file.format} · {file.size}{file.duration ? ` · ${file.duration}` : ''}
              </span>
            </span>
            <FaDownload className="h-4 w-4 shrink-0 text-[#725332] transition group-hover:translate-y-0.5" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default function MediaPackagePage() {
  const [activeBio, setActiveBio] = useState<BioKey>('medium');
  const [copied, setCopied] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const selectedBio = bioOptions.find((bio) => bio.key === activeBio) ?? bioOptions[1];

  const handleCopyBio = async () => {
    await navigator.clipboard.writeText(selectedBio.copy);
    trackEvent('press_kit_bio_copy', {
      event_label: selectedBio.label,
      bio_length: selectedBio.copy.length,
    });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ee] text-[#2a2319]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[#fbf7ee]" />

      <header className="relative z-20 border-b border-[#f4ead8]/10 bg-[#060504] px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="font-mono text-xs uppercase tracking-[0.5em] text-[#f4ead8]">
            Henners
          </Link>
          <nav aria-label="Press kit navigation" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-[#d6b47f] md:flex">
            <a href="#bio" className="hover:text-[#f4ead8]">bio</a>
            <a href="#footage" className="hover:text-[#f4ead8]">footage</a>
            <a href="#downloads" className="hover:text-[#f4ead8]">downloads</a>
            <a href="#rider" className="hover:text-[#f4ead8]">rider</a>
          </nav>
          <Link href="/" className="rounded-full border border-[#f4ead8]/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#d6b47f] hover:border-[#f4ead8] hover:text-[#f4ead8]">
            home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#060504] px-5 pb-20 pt-16 text-[#f4ead8] sm:px-8 lg:pt-20">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/gallery/edfh-basement-bw.jpg"
            alt=""
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,5,4,0.96)_0%,rgba(6,5,4,0.78)_45%,rgba(6,5,4,0.52)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#f4ead8]/20 bg-[#060504]/45 px-4 py-2 text-sm font-semibold text-[#d6b47f]">
              Press kit · organiser resources
            </p>
            <h1 className="max-w-4xl text-[clamp(3.8rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.1em] text-[#fff8ec]">
              bio, photos, footage, rider.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#ead8bd] sm:text-2xl sm:leading-10">
              Bio copy, photos, videos, and a simple one-page technical setup note. Direct links are easier than a big bundled press document.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#contact" className="rounded-full bg-[#f4ead8] px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#060504] transition hover:bg-[#d6b47f]">
                need another format?
              </Link>
              <a href="/downloads/documents/technical-rider.pdf" download className="rounded-full border border-[#f4ead8]/25 px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#f4ead8] transition hover:border-[#f4ead8]">
                Download simple rider
              </a>
            </div>
          </div>

          <div className="hidden min-w-0 rounded-[1.75rem] border border-[#f4ead8]/15 bg-[#060504]/50 p-4 sm:p-6 md:block">
            <ImageSlideshow autoPlay={false} showControls className="w-full" />
          </div>
        </div>
      </section>

      <section id="bio" className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-5 sm:p-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Bio copy</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2a2319]">Use the length that fits.</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {bioOptions.map((bio) => (
                <button
                  key={bio.key}
                  type="button"
                  onClick={() => setActiveBio(bio.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeBio === bio.key ? 'bg-[#2a2319] text-[#fbf7ee]' : 'border border-[#d6c6aa] text-[#493925] hover:bg-[#eadfc9]'}`}
                >
                  {bio.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleCopyBio}
              className="mt-5 rounded-full border border-[#d6c6aa] px-5 py-3 text-sm font-semibold text-[#5e4a33] transition hover:border-[#2a2319] hover:bg-[#eadfc9]"
            >
              {copied ? 'Copied' : 'Copy bio'}
            </button>
          </div>
          <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-[#f4ecdd] p-5 sm:p-6">
            <p className="whitespace-pre-line text-base leading-8 text-[#493925]">{selectedBio.copy}</p>
          </div>
        </div>
      </section>

      <section id="footage" className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Recent footage</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2a2319]">Dance floor proof.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#5f4a32]">
            Short clips so organisers can feel the room quickly: Ambrosia at Het Sieraad, Lundjuweel, and Ambrosia at Rijksmuseum.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {mediaFiles.videos.slice(0, 3).map((video) => (
            <article key={`preview-${video.name}`} className="overflow-hidden rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 ">
              {activeVideo === video.downloadUrl ? (
                <video
                  className="aspect-[9/12] w-full bg-black object-cover"
                  controls
                  autoPlay
                  preload="metadata"
                  playsInline
                  poster={video.posterUrl}
                  src={video.downloadUrl}
                  aria-label={video.description}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('press_kit_video_play', {
                      event_label: video.name,
                    });
                    setActiveVideo(video.downloadUrl);
                  }}
                  className="group relative block aspect-[9/12] w-full overflow-hidden bg-black text-left"
                  aria-label={`Play ${video.name}`}
                >
                  {video.posterUrl && (
                    <Image
                      src={video.posterUrl}
                      alt={`${video.name} video poster`}
                      fill
                      className="object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
                      sizes="(max-width: 1024px) calc(100vw - 2.5rem), 350px"
                      loading="lazy"
                      quality={60}
                    />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-stone-200/50 bg-black/45 text-[#f4ead8] shadow-lg transition group-hover:bg-[#f4ead8] group-hover:text-[#060504]">
                    <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2a2319]">{video.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f4a32]">{video.description}</p>
                <a href={video.downloadUrl} download className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#725332] hover:text-[#5e4a33]">
                  <FaDownload className="h-3.5 w-3.5" />
                  Download clip
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="downloads" className="relative z-10 mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-6 lg:grid-cols-[1.35fr_1fr_0.85fr] lg:px-8">
        <AssetList title="Photos" icon={FaImage} files={mediaFiles.images} />
        <AssetList title="Videos" icon={FaVideo} files={mediaFiles.videos} />
        <AssetList title="Documents" icon={FaFilePdf} files={mediaFiles.documents} />
      </section>

      <section id="rider" className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#725332]">Technical rider</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2a2319]">simple technical setup.</h2>
            <p className="mt-5 leading-8 text-[#493925]">
              Most ecstatic dance rooms do not need a complicated rider. I travel with my computer and prefer the lightest working setup: ideally a Pioneer DDJ controller ready to plug in.
            </p>
            <a href="/downloads/documents/technical-rider.pdf" download className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#2a2319] px-5 py-3 text-sm font-semibold text-[#fbf7ee] transition hover:bg-[#55391f]">
              <FaDownload className="h-4 w-4" />
              Download technical rider
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Club setup', 'CDJs and mixer are perfect when the venue already has a proper booth setup.'],
              ['Ecstatic dance setup', 'Please arrange a Pioneer DDJ controller for laptop plug-and-play where possible.'],
              ['Backup', 'If needed I can bring my own controller + computer; organiser provides RCA / correct cable into the sound system.'],
              ['Arrival', 'A stable table, power, line check, and someone who knows the sound system.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-[1.5rem] border border-[#e0d2b9] bg-[#f4ecdd] p-5">
                <h3 className="text-xl font-semibold text-[#2a2319]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f4a32]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-[#e0d2b9] bg-[#2a2319]/[0.06] p-8 text-center ">
          <h2 className="text-3xl font-semibold text-[#2a2319]">Need a different crop, bio, or format?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#493925]">
            Send the event context and what you need. I’ll share the most suitable material for the floor, ceremony, retreat, or publication.
          </p>
          <Link href="/#contact" className="mt-7 inline-flex rounded-full bg-[#2a2319] px-6 py-4 font-semibold text-[#fbf7ee] transition hover:bg-[#55391f]">
            ask for materials
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#e0d2b9] px-5 py-10 text-sm text-[#5f4a32] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Henners · Press kit · Amsterdam</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-[#725332]">Home</Link>
            <a href="https://soundcloud.com/srenneh" target="_blank" rel="noopener noreferrer" className="hover:text-[#725332]">SoundCloud</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
