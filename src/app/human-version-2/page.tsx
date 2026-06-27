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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f4ead8]/10 bg-[#060504]/82 px-5 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="font-mono text-xs uppercase tracking-[0.5em] text-[#f4ead8]">
            Henners
          </Link>
          <nav aria-label="Soft preview navigation" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-[#d6b47f] md:flex">
            <a href="#journey" className="hover:text-[#f4ead8]">journey</a>
            <a href="#floor" className="hover:text-[#f4ead8]">floor notes</a>
            <a href="#rooms" className="hover:text-[#f4ead8]">rooms</a>
            <a href="#contact" className="hover:text-[#f4ead8]">write</a>
          </nav>
          <Link href="/human-version-3" className="rounded-full border border-[#f4ead8]/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#d6b47f] hover:border-[#f4ead8] hover:text-[#f4ead8]">
            version 3
          </Link>
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

        <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-6xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
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
              the room knows when the DJ can hold it.
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
          <span>Odessa roots</span><span>·</span><span>Amsterdam floors</span><span>·</span><span>global rhythm</span><span>·</span><span>sweat and stillness</span><span>·</span><span>joy and introspection</span><span>·</span><span>prepared arc</span><span>·</span><span>room-first listening</span>
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
            need a qualified ecstatic dance DJ?
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
