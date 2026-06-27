import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/app/components/ContactForm';
import { gigs } from '@/app/gigsData';
import { testimonials } from '@/app/testimonialsData';
import { siteConfig } from '@/constant/config';

const proofPhotos = [
  {
    src: '/images/gallery/ambrosia-het-sieraad-dj.jpg',
    alt: 'Henners DJing for Ambrosia at Het Sieraad',
    note: 'Ambrosia · Het Sieraad',
  },
  {
    src: '/images/rijksmuseum-dancefloor.jpg',
    alt: 'Dance floor at Rijksmuseum Amsterdam',
    note: 'Rijksmuseum · Amsterdam',
  },
  {
    src: '/images/gallery/under-the-sun-dj.jpg',
    alt: 'Henners DJing outside at Under the Sun',
    note: 'Under the Sun · outdoor floor',
  },
];

const moments = [
  'arrival',
  'flow',
  'rhythm',
  'release',
  'play',
  'grounding',
  'stillness',
];

const recentGigs = gigs
  .filter((gig) => new Date(gig.date) < new Date())
  .slice(-5)
  .reverse();

export const metadata = {
  title: 'Human version 2 preview | Henners',
  description: 'A soft community-noticeboard alternate version of the Henners ecstatic dance site.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function HumanVersionTwoPage() {
  return (
    <main className="min-h-screen bg-[#fbf7ee] text-[#2a2319] selection:bg-[#2a2319] selection:text-[#fbf7ee]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-7 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[-0.04em] text-[#2a2319]">
          Henners
        </Link>
        <nav aria-label="Soft preview navigation" className="hidden gap-7 text-sm text-[#5f4a32] md:flex">
          <a href="#journey" className="hover:text-[#2a2319]">journey</a>
          <a href="#floor" className="hover:text-[#2a2319]">floor notes</a>
          <a href="#rooms" className="hover:text-[#2a2319]">rooms</a>
          <a href="#contact" className="hover:text-[#2a2319]">write</a>
        </nav>
        <Link href="/human-version" className="rounded-full border border-[#d6c6aa] px-4 py-2 text-sm text-[#6b573c] hover:border-[#2a2319] hover:text-[#2a2319]">
          version 1
        </Link>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pt-16">
        <div>
          <p className="max-w-sm text-sm leading-6 text-[#6f5639]">
            Amsterdam ecstatic dance facilitator and DJ. Ship-born roots, festival floors, quiet ceremonies, sweaty rooms.
          </p>
          <h1 className="mt-8 max-w-4xl text-[clamp(3.7rem,11vw,9.5rem)] font-medium leading-[0.9] tracking-[-0.09em] text-[#2a2319]">
            music for rooms that want to move.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-[#5e4a33]">
            A prepared journey with enough room to breathe. Earthy rhythm, melody, silence, chaos, softness, and the simple joy of a floor becoming one body for a while.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#2a2319] px-6 py-4 text-center text-sm font-semibold text-[#fbf7ee] hover:bg-[#55391f]">
              listen on SoundCloud
            </a>
            <Link href="/photos" className="rounded-full border border-[#d6c6aa] px-6 py-4 text-center text-sm font-semibold text-[#5e4a33] hover:border-[#2a2319] hover:text-[#2a2319]">
              look at the floors
            </Link>
          </div>
        </div>

        <div className="relative lg:pl-10">
          <div className="absolute -left-4 top-10 hidden h-28 w-28 rounded-full border border-[#d6c6aa] lg:block" />
          <figure className="relative overflow-hidden rounded-[2rem] bg-[#eadfc9] p-3 shadow-[0_22px_70px_rgba(42,35,25,0.16)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/gallery/ambrosia-het-sieraad-floor.jpg"
                alt="Ambrosia dance floor at Het Sieraad in Amsterdam"
                fill
                priority
                quality={75}
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover saturate-[0.9]"
              />
            </div>
            <figcaption className="px-2 pb-1 pt-4 text-sm italic text-[#5f4a32]">
              Het Sieraad, Amsterdam — the room already in motion.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="journey" className="border-y border-[#e0d2b9] bg-[#f4ecdd] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#725332]">the arc</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#2a2319] sm:text-6xl">
              crafted, but not stiff.
            </h2>
          </div>
          <div>
            <p className="text-2xl leading-10 tracking-[-0.03em] text-[#493925]">
              I’m less interested in playing a fixed set and more interested in holding a real arc: Five Rhythms, hero’s journey, nervous system, and old-fashioned dance-floor intuition all meeting in the same room.
            </p>
            <div className="mt-9 flex flex-wrap gap-2">
              {moments.map((moment) => (
                <span key={moment} className="rounded-full border border-[#ccb792] bg-[#fbf7ee] px-4 py-2 text-sm text-[#5e4a33]">
                  {moment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="floor" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#725332]">floor notes</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.06em] text-[#2a2319] sm:text-6xl">
              people remember the journey, not the sales copy.
            </h2>
          </div>
          <Link href="/media-package" className="w-fit rounded-full border border-[#d6c6aa] px-5 py-3 text-sm font-semibold text-[#5e4a33] hover:border-[#2a2319] hover:text-[#2a2319]">
            plain press kit
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((note) => (
            <article key={`${note.person}-${note.date}`} className="rounded-[1.5rem] border border-[#e0d2b9] bg-white/55 p-6">
              <blockquote className="text-2xl leading-snug tracking-[-0.04em] text-[#2a2319]">“{note.quote}”</blockquote>
              <p className="mt-6 text-sm text-[#5f4a32]">{note.person} · {note.event}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#e0d2b9] bg-[#2a2319] py-6 text-[#fbf7ee]">
        <div className="flex min-w-max gap-8 whitespace-nowrap px-5 text-2xl tracking-[-0.04em] opacity-90 sm:justify-center">
          <span>Odessa roots</span><span>·</span><span>Amsterdam floors</span><span>·</span><span>global rhythm</span><span>·</span><span>earth and cosmos</span><span>·</span><span>joy and introspection</span><span>·</span><span>prepared arc</span><span>·</span><span>room-first listening</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-3">
        {proofPhotos.map((photo, index) => (
          <figure key={photo.src} className={index === 1 ? 'lg:pt-14' : ''}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#eadfc9]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={75}
                sizes="(max-width: 1024px) 90vw, 30vw"
                className="object-cover"
                loading="eager"
              />
            </div>
            <figcaption className="mt-3 text-sm italic text-[#5f4a32]">{photo.note}</figcaption>
          </figure>
        ))}
      </section>

      <section id="rooms" className="border-t border-[#e0d2b9] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#725332]">recent rooms</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#2a2319] sm:text-5xl">
              not a brand story. a trail.
            </h2>
          </div>
          <div className="divide-y divide-[#e0d2b9] border-y border-[#e0d2b9]">
            {recentGigs.map((gig) => (
              <div key={`${gig.date}-${gig.event}-${gig.venue}`} className="grid gap-2 py-4 text-sm sm:grid-cols-[105px_1fr_1fr]">
                <span className="text-[#725332]">{gig.date}</span>
                <span className="font-semibold text-[#2a2319]">{gig.event}</span>
                <span className="text-[#6b573c]">{gig.venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] bg-[#eadfc9] p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-[#725332]">write</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#2a2319] sm:text-6xl">
            send the room, not a perfect brief.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5e4a33]">
            Best useful details: city, date, floor size, sound system, whether there is a DDJ/controller available, and what kind of journey the group needs.
          </p>
        </div>
        <div className="rounded-[2rem] border border-[#e0d2b9] bg-white/65 p-5 sm:p-8">
          <ContactForm mode="light" />
        </div>
      </section>

      <footer className="border-t border-[#e0d2b9] px-5 py-8 text-sm text-[#5f4a32] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>preview route · not indexed · soft noticeboard version</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/human-version" className="hover:text-[#2a2319]">version 1</Link>
            <Link href="/" className="hover:text-[#2a2319]">current homepage</Link>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#2a2319]">instagram</a>
            <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-[#2a2319]">soundcloud</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
