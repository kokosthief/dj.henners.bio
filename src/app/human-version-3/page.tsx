import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/app/components/ContactForm';
import { gigs } from '@/app/gigsData';
import { testimonials } from '@/app/testimonialsData';
import { siteConfig } from '@/constant/config';

const setChapters = [
  ['01', 'enter', 'slow pulse, breath, feet finding the floor'],
  ['02', 'rise', 'rhythm opens, bodies start trusting the room'],
  ['03', 'break', 'chaos, sweat, release, not too clean'],
  ['04', 'return', 'melody, play, ground, stillness'],
];

const nightPhotos = [
  {
    src: '/images/rijksmuseum-dj-booth.jpg',
    alt: 'Henners DJing at Rijksmuseum Amsterdam',
    label: 'Rijksmuseum / Amsterdam',
  },
  {
    src: '/images/gallery/edfh-basement-bw.jpg',
    alt: 'Henners DJing at Ecstatic Dance Festival Holland basement room',
    label: 'EDFH / basement room',
  },
  {
    src: '/images/gallery/ambrosia-het-sieraad-dj.jpg',
    alt: 'Henners DJing for Ambrosia at Het Sieraad',
    label: 'Ambrosia / Het Sieraad',
  },
];

const recentRooms = gigs
  .filter((gig) => new Date(gig.date) < new Date())
  .slice(-6)
  .reverse();

export const metadata = {
  title: 'Human version 3 preview | Henners',
  description: 'A dark night-listening-room alternate version of the Henners ecstatic dance site.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function HumanVersionThreePage() {
  return (
    <main className="min-h-screen bg-[#060504] text-[#f4ead8] selection:bg-[#f4ead8] selection:text-[#060504]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f4ead8]/10 bg-[#060504]/80 px-5 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="font-mono text-xs uppercase tracking-[0.5em] text-[#f4ead8]">
            Henners
          </Link>
          <nav aria-label="Night preview navigation" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-[#c8aa7a] md:flex">
            <a href="#arc" className="hover:text-[#f4ead8]">arc</a>
            <a href="#proof" className="hover:text-[#f4ead8]">proof</a>
            <a href="#rooms" className="hover:text-[#f4ead8]">rooms</a>
            <a href="#contact" className="hover:text-[#f4ead8]">contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/human-version" className="hidden rounded-full border border-[#f4ead8]/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#c8aa7a] hover:border-[#f4ead8] hover:text-[#f4ead8] sm:inline-block">
              v1
            </Link>
            <Link href="/human-version-2" className="rounded-full border border-[#f4ead8]/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#c8aa7a] hover:border-[#f4ead8] hover:text-[#f4ead8]">
              v2
            </Link>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:pt-32">
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/images/gallery/edfh-basement-bw.jpg"
            alt=""
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,5,4,0.96)_0%,rgba(6,5,4,0.76)_40%,rgba(6,5,4,0.42)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(199,126,42,0.25),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="pb-6">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d6b47f]">Amsterdam · ecstatic dance · late room energy</p>
            <h1 className="mt-8 max-w-5xl text-[clamp(4.4rem,13vw,13rem)] font-semibold leading-[0.76] tracking-[-0.11em] text-[#fff8ec]">
              hold the room until it opens.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#ead8bd] sm:text-2xl sm:leading-10">
              Henners crafts full-arc ecstatic dance journeys from Amsterdam: rhythm first, ceremony without stiffness, and enough trust for the floor to become honest.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f4ead8] px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#060504] hover:bg-[#d6b47f]">
                listen
              </a>
              <Link href="/photos" className="rounded-full border border-[#f4ead8]/25 px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#f4ead8] hover:border-[#f4ead8]">
                see floors
              </Link>
            </div>
          </div>

          <aside className="grid gap-3 pb-6 lg:max-w-md lg:justify-self-end">
            <div className="border border-[#f4ead8]/15 bg-[#060504]/55 p-5 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#d6b47f]">not a fixed set</p>
              <p className="mt-4 text-lg leading-8 text-[#ead8bd]">
                Prepared around Five Rhythms and hero’s journey shape; flexible enough to turn when the room clearly needs another door.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#c8aa7a]">
              <div className="border border-[#f4ead8]/15 p-4">Odessa roots</div>
              <div className="border border-[#f4ead8]/15 p-4">global rhythm</div>
              <div className="border border-[#f4ead8]/15 p-4">ritual energy</div>
              <div className="border border-[#f4ead8]/15 p-4">grounded return</div>
            </div>
          </aside>
        </div>
      </section>

      <section id="arc" className="border-y border-[#f4ead8]/10 bg-[#0d0a08] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden border border-[#f4ead8]/10 bg-[#f4ead8]/10 md:grid-cols-4">
            {setChapters.map(([number, title, text]) => (
              <article key={number} className="bg-[#0d0a08] p-6 sm:p-8">
                <p className="font-mono text-xs text-[#d6b47f]">{number}</p>
                <h2 className="mt-8 text-4xl font-semibold tracking-[-0.08em] text-[#fff8ec]">{title}</h2>
                <p className="mt-5 text-base leading-7 text-[#d8c5a9]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d6b47f]">floor proof</p>
            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.08em] text-[#fff8ec] sm:text-7xl">
              less biography. more residue.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#d8c5a9]">
              Photos, names, rooms, and notes from people who were actually there. The site becomes a trail, not a pitch deck.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {nightPhotos.map((photo, index) => (
              <figure key={photo.src} className={index === 1 ? 'md:translate-y-10' : ''}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#19110c]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={75}
                    sizes="(max-width: 1024px) 90vw, 28vw"
                    className="object-cover grayscale-[8%] contrast-110"
                    loading="eager"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-[#c8aa7a]">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#f4ead8]/10 bg-[#f4ead8] px-5 py-16 text-[#060504] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((note) => (
            <article key={`${note.person}-${note.date}`} className="border-l border-[#060504]/20 pl-5">
              <blockquote className="text-2xl font-semibold leading-snug tracking-[-0.04em]">“{note.quote}”</blockquote>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-[#5c321d]">{note.person} · {note.event}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="rooms" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d6b47f]">rooms</p>
            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.08em] text-[#fff8ec] sm:text-7xl">
              a trail through real floors.
            </h2>
          </div>
          <div className="divide-y divide-[#f4ead8]/10 border-y border-[#f4ead8]/10">
            {recentRooms.map((gig) => (
              <div key={`${gig.date}-${gig.event}-${gig.venue}`} className="grid gap-2 py-5 font-mono text-sm sm:grid-cols-[115px_1fr_1fr]">
                <span className="text-[#d6b47f]">{gig.date}</span>
                <span className="font-semibold text-[#fff8ec]">{gig.event}</span>
                <span className="text-[#d8c5a9]">{gig.venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#f4ead8]/10 bg-[#0d0a08] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d6b47f]">contact</p>
            <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-none tracking-[-0.08em] text-[#fff8ec] sm:text-7xl">
              if it needs a real journey, write.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#d8c5a9]">
              Useful details: date, city, floor size, sound setup, whether a Pioneer DDJ/controller is already there, and what kind of room you’re trying to hold.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/media-package" className="rounded-full border border-[#f4ead8]/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#f4ead8] hover:border-[#f4ead8]">press kit</Link>
              <Link href="/events" className="rounded-full border border-[#f4ead8]/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#f4ead8] hover:border-[#f4ead8]">event archive</Link>
            </div>
          </div>
          <div className="bg-[#f4ead8] p-5 text-[#211a12] sm:p-8">
            <ContactForm mode="light" />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#f4ead8]/10 px-5 py-8 font-mono text-xs uppercase tracking-[0.18em] text-[#c8aa7a] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>preview route · not indexed · night listening room</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/human-version" className="hover:text-[#f4ead8]">v1 zine</Link>
            <Link href="/human-version-2" className="hover:text-[#f4ead8]">v2 soft</Link>
            <Link href="/" className="hover:text-[#f4ead8]">current</Link>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#f4ead8]">instagram</a>
            <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-[#f4ead8]">soundcloud</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
