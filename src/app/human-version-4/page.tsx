import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/app/components/ContactForm';
import { gigs } from '@/app/gigsData';
import { testimonials } from '@/app/testimonialsData';
import { siteConfig } from '@/constant/config';

const fieldPhotos = [
  {
    src: '/images/gallery/edfh-basement-bw.jpg',
    alt: 'Henners DJing at Ecstatic Dance Festival Holland basement room',
    caption: 'EDFH · basement room',
    className: 'rotate-[-1.4deg] md:col-span-5',
  },
  {
    src: '/images/gallery/ambrosia-het-sieraad-floor.jpg',
    alt: 'Ambrosia dance floor at Het Sieraad in Amsterdam',
    caption: 'Ambrosia · Het Sieraad',
    className: 'rotate-[1deg] md:col-span-4 md:translate-y-10',
  },
  {
    src: '/images/rijksmuseum-dj-booth.jpg',
    alt: 'Henners DJing at Rijksmuseum Amsterdam',
    caption: 'Rijksmuseum · Amsterdam',
    className: 'rotate-[-0.6deg] md:col-span-3 md:-translate-y-7',
  },
];

const chapters = [
  ['01', 'enter', 'arrival, breath, the first trust in the room'],
  ['02', 'rise', 'global rhythm, sweat, play, bodies waking up'],
  ['03', 'break', 'chaos, release, not too neat, not too polite'],
  ['04', 'return', 'melody, ground, stillness, people landing again'],
];

const recentRooms = gigs
  .filter((gig) => new Date(gig.date) < new Date())
  .slice(-7)
  .reverse();

export const metadata = {
  title: 'Human version 4 preview | Henners',
  description: 'A hybrid dark-room and field-notes alternate version of the Henners ecstatic dance site.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function HumanVersionFourPage() {
  return (
    <main className="min-h-screen bg-[#070604] text-[#f4ead8] selection:bg-[#f4ead8] selection:text-[#070604]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f4ead8]/10 bg-[#070604]/82 px-5 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <Link href="/" className="font-mono text-xs uppercase tracking-[0.5em] text-[#f4ead8]">
            Henners
          </Link>
          <nav aria-label="Hybrid preview navigation" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-[#d6b47f] md:flex">
            <a href="#notes" className="hover:text-[#f4ead8]">notes</a>
            <a href="#arc" className="hover:text-[#f4ead8]">arc</a>
            <a href="#rooms" className="hover:text-[#f4ead8]">rooms</a>
            <a href="#contact" className="hover:text-[#f4ead8]">contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/human-version" className="hidden border border-[#f4ead8]/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#d6b47f] hover:border-[#f4ead8] hover:text-[#f4ead8] sm:inline-block">
              v1
            </Link>
            <Link href="/human-version-3" className="border border-[#f4ead8]/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#d6b47f] hover:border-[#f4ead8] hover:text-[#f4ead8]">
              v3
            </Link>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/edfh-basement-bw.jpg"
            alt=""
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,6,4,0.98)_0%,rgba(7,6,4,0.85)_44%,rgba(7,6,4,0.5)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(214,180,127,0.22),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1500px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="pb-8">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#d6b47f]">Amsterdam · ecstatic dance · field notes after dark</p>
            <h1 className="mt-8 max-w-5xl text-[clamp(4.1rem,12vw,12.5rem)] font-black leading-[0.78] tracking-[-0.105em] text-[#fff8ec]">
              dance first. hold the room.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#ead8bd] sm:text-2xl sm:leading-10">
              Full-arc ecstatic dance journeys: prepared with care, built around rhythm and release, loose enough to meet the floor that is actually there.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="bg-[#f4ead8] px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-[#070604] hover:bg-[#d6b47f]">
                listen
              </a>
              <Link href="/photos" className="border border-[#f4ead8]/25 px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-[#f4ead8] hover:border-[#f4ead8]">
                floor proof
              </Link>
            </div>
          </div>

          <aside className="grid gap-4 pb-8 lg:max-w-md lg:justify-self-end">
            <div className="bg-[#f4ead8] p-5 text-[#24170e] shadow-[10px_12px_0_rgba(0,0,0,0.28)] rotate-[1deg]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6b543b]">scrap from the floor</p>
              <p className="mt-5 text-2xl font-semibold leading-snug tracking-[-0.04em]">
                “People remember the journey, not the sales copy.”
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#f4ead8]/14 font-mono text-xs uppercase tracking-[0.18em] text-[#d6b47f]">
              <div className="bg-[#070604]/82 p-4">Odessa roots</div>
              <div className="bg-[#070604]/82 p-4">Five Rhythms</div>
              <div className="bg-[#070604]/82 p-4">hero journey</div>
              <div className="bg-[#070604]/82 p-4">room intuition</div>
            </div>
          </aside>
        </div>
      </section>

      <section id="notes" className="bg-[#efe4cf] px-4 py-16 text-[#211a12] sm:px-8">
        <div className="mx-auto max-w-[1500px] border border-[#2d2418]/18 bg-[#f4ead8] shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
          <div className="grid border-b border-[#2d2418]/20 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="border-b border-[#2d2418]/20 p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#75532f]">field notes</p>
              <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.06em] sm:text-7xl">
                the dark room, documented by hand.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-[#4b3726]">
                Keep the room dark, but let the proof stay tactile: archive, scraps, photos, notes, traces. Not a funnel. Not a glossy pitch.
              </p>
            </aside>
            <div className="relative overflow-hidden p-4 sm:p-8">
              <div className="absolute left-7 top-8 hidden h-[78%] border-l border-dashed border-[#2d2418]/25 md:block" />
              <div className="grid auto-rows-min gap-5 md:grid-cols-12 md:items-start">
                {fieldPhotos.map((photo, index) => (
                  <figure key={photo.src} className={`${photo.className} bg-[#fffaf0] p-3 shadow-[8px_10px_0_rgba(45,36,24,0.14)]`}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#dac9ae]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 90vw, 40vw"
                        className="object-cover grayscale-[10%] contrast-[1.04]"
                        priority={index === 0}
                        quality={75}
                      />
                    </div>
                    <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-[#5c4630]">{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-[#2d2418]/20 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((note, index) => (
              <article key={`${note.person}-${note.date}`} className="bg-[#f4ead8] p-5 sm:p-7">
                <p className="font-mono text-xs text-[#75532f]">0{index + 1} · {note.date}</p>
                <blockquote className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.035em] text-[#24170e]">“{note.quote}”</blockquote>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-[#5c4630]">{note.person} · {note.event}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="arc" className="border-y border-[#f4ead8]/10 bg-[#0d0a08] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d6b47f]">arc</p>
            <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.08em] text-[#fff8ec] sm:text-7xl">
              prepared, then alive.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#d8c5a9]">
              A real journey matters. So does the room. The plan is there to hold the floor, not to trap it.
            </p>
          </div>
          <div className="grid gap-px border border-[#f4ead8]/10 bg-[#f4ead8]/10 md:grid-cols-4">
            {chapters.map(([number, title, text]) => (
              <article key={number} className="bg-[#0d0a08] p-6 sm:p-8">
                <p className="font-mono text-xs text-[#d6b47f]">{number}</p>
                <h3 className="mt-8 text-4xl font-semibold tracking-[-0.08em] text-[#fff8ec]">{title}</h3>
                <p className="mt-5 text-base leading-7 text-[#d8c5a9]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="bg-[#070604] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#d6b47f]">rooms</p>
            <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.08em] text-[#fff8ec] sm:text-7xl">
              not a brand story. a trail.
            </h2>
          </div>
          <div className="divide-y divide-[#f4ead8]/10 border-y border-[#f4ead8]/10">
            {recentRooms.map((gig) => (
              <div key={`${gig.date}-${gig.event}-${gig.venue}`} className="grid gap-2 py-5 font-mono text-sm sm:grid-cols-[120px_1fr_1fr]">
                <span className="text-[#d6b47f]">{gig.date}</span>
                <span className="font-semibold text-[#fff8ec]">{gig.event}</span>
                <span className="text-[#d8c5a9]">{gig.venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="grid bg-[#efe4cf] text-[#211a12] lg:grid-cols-[0.78fr_1.22fr]">
        <div className="border-b border-[#2d2418]/20 p-5 sm:p-8 lg:border-b-0 lg:border-r">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#75532f]">contact</p>
          <h2 className="mt-5 max-w-xl text-5xl font-black leading-none tracking-[-0.06em] sm:text-7xl">
            if it needs a real journey, write.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#4b3726]">
            Send the room: date, city, floor size, sound setup, DDJ/controller availability, and what kind of energy the group needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/media-package" className="border border-[#2d2418]/25 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#211a12] hover:text-[#f4ead8]">plain press kit</Link>
            <Link href="/events" className="border border-[#2d2418]/25 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#211a12] hover:text-[#f4ead8]">event archive</Link>
          </div>
        </div>
        <div className="bg-[#fffaf0] p-5 sm:p-8">
          <ContactForm mode="light" />
        </div>
      </section>

      <footer className="border-t border-[#f4ead8]/10 px-5 py-8 font-mono text-xs uppercase tracking-[0.18em] text-[#d6b47f] sm:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>preview route · not indexed · v1/v3 hybrid</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/human-version" className="hover:text-[#f4ead8]">v1 zine</Link>
            <Link href="/human-version-2" className="hover:text-[#f4ead8]">v2 soft</Link>
            <Link href="/human-version-3" className="hover:text-[#f4ead8]">v3 night</Link>
            <Link href="/" className="hover:text-[#f4ead8]">current</Link>
            <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-[#f4ead8]">soundcloud</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
