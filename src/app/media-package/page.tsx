'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaDownload, FaFilePdf, FaFileZipper, FaImage, FaVideo } from 'react-icons/fa6';

import ImageSlideshow from '@/app/components/ImageSlideshow';
import { siteConfig } from '@/constant/config';

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
    'Henners is an Amsterdam-based ecstatic dance facilitator and DJ creating grounded, emotionally intelligent music journeys for conscious dance floors, retreats, ceremonies, and festivals.',
  medium:
    'Henners guides ecstatic dance journeys that move from grounding into rhythm, release, joy, stillness, and integration. Shaped by Amsterdam’s conscious dance scene and years of sets at Odessa and community gatherings, his work is not only musical but relational: reading the floor, protecting the arc, and giving the body permission to feel.',
  long:
    'Henners is an Amsterdam-based ecstatic dance facilitator and DJ creating conscious dance journeys for movement communities, ceremonies, retreats, and festivals. His sets are designed as held arcs: a grounded arrival, a rhythmic build, space for release and play, and a soft landing back into the body.\n\nHis work grew through Amsterdam’s ecstatic dance scene, including years of community floors, Odessa gatherings, cacao ceremonies, festivals, and intimate movement spaces. Rather than treating a set as a playlist, Henners works with the emotional field of the room — tracking energy, protecting transitions, and supporting both joy and tenderness when they arise.\n\nMusically, his sound draws from global rhythms, earthy grooves, deep percussion, warm melodic textures, and spacious integration tracks. The aim is simple: help people move honestly, feel safely, and reconnect with themselves and each other through dance.',
};

const mediaFiles = {
  images: [
    { name: 'Rijksmuseum DJ Booth', format: 'PNG', size: '1.0 MB', downloadUrl: '/downloads/high-res/rijksmuseum-dj-booth.png', description: 'DJing at Rijksmuseum in Amsterdam' },
    { name: 'Rijksmuseum Dancefloor', format: 'PNG', size: '1.4 MB', downloadUrl: '/downloads/high-res/rijksmuseum-dancefloor.png', description: 'Rijksmuseum dancefloor from the DJ booth' },
    { name: 'Rijksmuseum Close Up', format: 'PNG', size: '2.1 MB', downloadUrl: '/downloads/high-res/rijksmuseum-close-up.png', description: 'Close-up DJing at Rijksmuseum in Amsterdam' },
    { name: 'Black Abyss', format: 'JPG', size: '4.5 MB', downloadUrl: '/downloads/high-res/black abyss.jpg', description: 'Mystical black abyss portrait' },
    { name: 'Cacao Ceremony', format: 'JPG', size: '104 KB', downloadUrl: '/downloads/high-res/cacao.jpg', description: 'Sacred cacao ceremony moment' },
    { name: 'Ceremony Space', format: 'JPG', size: '756 KB', downloadUrl: '/downloads/high-res/ceremony.jpg', description: 'Holding ceremony space' },
    { name: 'Groove Session', format: 'JPG', size: '4.4 MB', downloadUrl: '/downloads/high-res/groove.jpg', description: 'Deep in the groove' },
    { name: 'Lava Stoic', format: 'JPG', size: '3.9 MB', downloadUrl: '/downloads/high-res/lava stoic.jpg', description: 'Stoic presence with lava backdrop' },
    { name: 'Ocean Split Mist', format: 'JPG', size: '4.0 MB', downloadUrl: '/downloads/high-res/ocean split mist.jpg', description: 'Mystical ocean mist portrait' },
    { name: 'Road Sit', format: 'JPG', size: '5.0 MB', downloadUrl: '/downloads/high-res/road sit.jpg', description: 'Contemplative road sitting' },
    { name: 'Rose Wall', format: 'JPG', size: '4.6 MB', downloadUrl: '/downloads/high-res/rose wall.jpg', description: 'Portrait against rose wall' },
    { name: 'Smelling', format: 'JPG', size: '2.8 MB', downloadUrl: '/downloads/high-res/smelling.jpg', description: 'Sensory exploration moment' },
    { name: 'Where', format: 'JPG', size: '7.7 MB', downloadUrl: '/downloads/high-res/where.jpg', description: 'Contemplative portrait' },
    { name: 'Wonder', format: 'JPG', size: '5.5 MB', downloadUrl: '/downloads/high-res/wonder.jpg', description: 'Sense of wonder captured' },
  ],
  videos: [
    { name: 'Ambrosia at Het Sieraad', format: 'MP4', size: '1.9 MB', duration: '0:07', downloadUrl: '/downloads/videos/ambrosia-het-sieraad.mp4', posterUrl: '/images/video-posters/ambrosia-het-sieraad.jpg', description: 'DJing for Ambrosia at Het Sieraad' },
    { name: 'Lundjuweel 2025', format: 'MP4', size: '6.5 MB', duration: '0:15', downloadUrl: '/downloads/videos/lundjuweel-2025.mp4', posterUrl: '/images/video-posters/lundjuweel-2025.jpg', description: 'DJing at Lundjuweel 2025' },
    { name: 'Ambrosia at Rijksmuseum', format: 'MP4', size: '9.8 MB', duration: '0:48', downloadUrl: '/downloads/videos/ambrosia-rijksmuseum.mp4', posterUrl: '/images/video-posters/ambrosia-rijksmuseum.jpg', description: 'DJing for Ambrosia at Rijksmuseum' },
    { name: 'EDFH Basement Session', format: 'MP4', size: '2.2 MB', duration: '~1 min', downloadUrl: '/downloads/videos/edfh basement.mp4', description: 'Ecstatic Dance basement session' },
    { name: 'Movement Journey', format: 'MOV', size: '17 MB', duration: '~3 min', downloadUrl: '/downloads/videos/movement journey.mov', description: 'Movement journey footage' },
    { name: 'New Years Eve', format: 'MP4', size: '2.0 MB', duration: '~1 min', downloadUrl: '/downloads/videos/new years eve.mp4', description: 'New Year’s Eve celebration' },
    { name: 'New Years Eve Extended', format: 'MP4', size: '7.7 MB', duration: '~2 min', downloadUrl: '/downloads/videos/new years evee.mp4', description: 'Extended New Year’s Eve footage' },
    { name: 'This Is What We Do', format: 'MP4', size: '23 MB', duration: '~5 min', downloadUrl: '/downloads/videos/this is what we do.mp4', description: 'Ecstatic dance showcase footage' },
  ],
  documents: [
    { name: 'Technical Rider - DJ Henners', format: 'PDF', size: '108 KB', downloadUrl: '/downloads/documents/technical-rider.pdf', description: 'Technical requirements and equipment specifications' },
    { name: 'Artist Biography', format: 'PDF', size: '120 KB', downloadUrl: '/downloads/documents/artist-biography.pdf', description: 'Artist biography in multiple lengths' },
    { name: 'Complete Press Kit', format: 'PDF', size: '160 KB', downloadUrl: '/downloads/documents/complete-press-kit.pdf', description: 'Bio, technical specs, booking context, and media assets' },
  ],
};

const bioOptions = [
  { key: 'short', label: 'Short', copy: artistInfo.short },
  { key: 'medium', label: 'Medium', copy: artistInfo.medium },
  { key: 'long', label: 'Long', copy: artistInfo.long },
] as const;

type BioKey = (typeof bioOptions)[number]['key'];

function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

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
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl border border-amber-200/20 bg-amber-200/10 p-3 text-amber-200">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      <div className="space-y-3">
        {files.map((file) => (
          <a
            key={`${title}-${file.name}`}
            href={file.downloadUrl}
            download
            className="group flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0b1220]/85 p-4 transition hover:border-amber-200/35 hover:bg-white/[0.07]"
          >
            <span className="min-w-0">
              <span className="block truncate font-semibold text-white">{file.name}</span>
              <span className="mt-1 block truncate text-xs text-slate-400">
                {file.format} · {file.size}{file.duration ? ` · ${file.duration}` : ''}
              </span>
            </span>
            <FaDownload className="h-4 w-4 shrink-0 text-amber-200 transition group-hover:translate-y-0.5" />
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

  const handlePackageDownload = () => {
    const packageContent = `HENNERS — PRESS KIT\n\nOfficial website: ${siteConfig.url}\nSoundCloud: https://soundcloud.com/srenneh\nContact: ${siteConfig.url}/#contact\nLocation: Amsterdam, Netherlands\n\nBIO — SHORT\n${artistInfo.short}\n\nBIO — MEDIUM\n${artistInfo.medium}\n\nBIO — LONG\n${artistInfo.long}\n\nPHOTOS\n${mediaFiles.images.map((file) => `• ${file.name} (${file.size}) — ${siteConfig.url}${file.downloadUrl}`).join('\n')}\n\nVIDEOS\n${mediaFiles.videos.map((file) => `• ${file.name} (${file.size}) — ${siteConfig.url}${file.downloadUrl}`).join('\n')}\n\nDOCUMENTS\n${mediaFiles.documents.map((file) => `• ${file.name} (${file.size}) — ${siteConfig.url}${file.downloadUrl}`).join('\n')}\n`;

    trackEvent('press_kit_links_download', {
      event_label: 'complete_press_kit_links',
    });
    downloadTextFile('Henners-Press-Kit-Links.txt', packageContent);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30rem),radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_32rem),linear-gradient(180deg,#070b12_0%,#0a1220_52%,#05070b_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:px-8">
        <Link href="/" className="font-secondary text-2xl tracking-wide text-white">
          HENNERS
        </Link>
        <Link href="/" className="rounded-full border border-amber-200/40 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-200 hover:text-slate-950">
          Back home
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-8 sm:px-6 md:pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            Press kit · organizer resources
          </p>
          <h1 className="max-w-4xl font-primary text-3xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Henners press kit
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-xl sm:leading-9">
            Bio, photos, videos, tech rider, and download links for organizers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handlePackageDownload}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-200 px-6 py-4 font-semibold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-100"
            >
              <FaFileZipper className="h-5 w-5" />
              Download links package
            </button>
            <Link href="/#contact" className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/10">
              Request something specific
            </Link>
          </div>
        </div>

        <div className="hidden min-w-0 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/40 sm:p-6 md:block">
          <ImageSlideshow autoPlay={false} showControls className="w-full" />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 sm:p-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Bio copy</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Use the length that fits.</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {bioOptions.map((bio) => (
                <button
                  key={bio.key}
                  type="button"
                  onClick={() => setActiveBio(bio.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeBio === bio.key ? 'bg-amber-200 text-slate-950' : 'border border-white/15 text-slate-200 hover:bg-white/10'}`}
                >
                  {bio.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleCopyBio}
              className="mt-5 rounded-full border border-cyan-200/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-200/10"
            >
              {copied ? 'Copied' : 'Copy bio'}
            </button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0b1220]/85 p-5 sm:p-6">
            <p className="whitespace-pre-line text-base leading-8 text-slate-300">{selectedBio.copy}</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Recent footage</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Dance floor proof.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Short clips for organizers who want a quick feel for the room: Ambrosia at Het Sieraad, Lundjuweel, and Ambrosia at Rijksmuseum.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {mediaFiles.videos.slice(0, 3).map((video) => (
            <article key={`preview-${video.name}`} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/25">
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
                      alt=""
                      fill
                      className="object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
                      sizes="(max-width: 1024px) calc(100vw - 2.5rem), 350px"
                      loading="lazy"
                      quality={60}
                    />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-black/45 text-white shadow-2xl backdrop-blur transition group-hover:scale-105 group-hover:bg-amber-200 group-hover:text-slate-950">
                    <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{video.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{video.description}</p>
                <a href={video.downloadUrl} download className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-amber-100">
                  <FaDownload className="h-3.5 w-3.5" />
                  Download clip
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-5 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <AssetList title="Photos" icon={FaImage} files={mediaFiles.images} />
        <AssetList title="Videos" icon={FaVideo} files={mediaFiles.videos} />
        <AssetList title="Documents" icon={FaFilePdf} files={mediaFiles.documents} />
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Technical rider</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Simple setup context.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              For public DJ sets, please provide a professional sound system, engineer or stage contact, booth monitoring, and enough setup time for a calm soundcheck.
            </p>
            <a href="/downloads/documents/technical-rider.pdf" download className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100">
              <FaDownload className="h-4 w-4" />
              Download technical rider
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Audio', 'Pioneer DJM-900NXS2 or newer, 3× CDJ-3000 / CDJ-2000NXS2, stereo booth monitors.'],
              ['Support', 'Sound engineer or stage contact available before and during the set.'],
              ['Setup', 'Allow roughly 30 minutes for setup, linking players, and soundcheck.'],
              ['Hospitality', 'Water, tea, fruit, and a clean towel in or near the booth.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-[#0b1220]/85 p-5">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-amber-200/15 bg-amber-200/[0.06] p-8 text-center shadow-2xl shadow-black/20">
          <h2 className="text-3xl font-semibold text-white">Need a different crop, bio, or format?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Send the event context and what you need. I’ll share the most suitable material for the floor, ceremony, retreat, or publication.
          </p>
          <Link href="/#contact" className="mt-7 inline-flex rounded-full bg-amber-200 px-6 py-4 font-semibold text-slate-950 transition hover:bg-amber-100">
            Contact for materials
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Henners · Press kit · Amsterdam</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-amber-200">Home</Link>
            <a href="https://soundcloud.com/srenneh" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">SoundCloud</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
