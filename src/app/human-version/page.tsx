import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/app/components/ContactForm';
import { gigs } from '@/app/gigsData';
import { testimonials } from '@/app/testimonialsData';
import { siteConfig } from '@/constant/config';

const photoNotes = [
  {
    src: '/images/gallery/edfh-basement-bw.jpg',
    alt: 'Henners DJing at Ecstatic Dance Festival Holland',
    caption: 'EDFH · basement room',
    className: 'rotate-[-1.5deg] md:col-span-5',
  },
  {
    src: '/images/gallery/ambrosia-het-sieraad-floor.jpg',
    alt: 'Ambrosia dance floor at Het Sieraad',
    caption: 'Ambrosia · Het Sieraad',
    className: 'rotate-[1deg] md:col-span-4 md:translate-y-10',
  },
  {
    src: '/images/rijksmuseum-dj-booth.jpg',
    alt: 'Henners DJing at Rijksmuseum Amsterdam',
    caption: 'Rijksmuseum · Amsterdam',
    className: 'rotate-[-0.5deg] md:col-span-3 md:-translate-y-8',
  },
];

const recentRooms = gigs
  .filter((gig) => new Date(gig.date) < new Date())
  .slice(-7)
  .reverse();

export const metadata = {
  title: 'Human version preview | Henners',
  description: 'A more human, field-notes style alternate version of the Henners ecstatic dance site.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function HumanVersionPage() {
  return (
    <main className="min-h-screen bg-[#efe4cf] text-[#211a12] selection:bg-[#211a12] selection:text-[#f5ead6]">
      <div className="mx-auto max-w-[1500px] border-x border-[#2d2418]/15 bg-[#f4ead8] shadow-[0_0_80px_rgba(41,31,19,0.18)]">
        <header className="sticky top-0 z-40 border-b border-[#2d2418]/20 bg-[#f4ead8]/90 px-4 py-3 backdrop-blur-sm sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="font-mono text-xs uppercase tracking-[0.45em] text-[#5c4630]">
              Henners
            </Link>
            <nav aria-label="Preview navigation" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-[#6b543b] md:flex">
              <a href="#notes" className="hover:text-[#20160e]">notes</a>
              <a href="#sound" className="hover:text-[#20160e]">sound</a>
              <a href="#rooms" className="hover:text-[#20160e]">rooms</a>
              <a href="#contact" className="hover:text-[#20160e]">contact</a>
            </nav>
            <Link href="/" className="border border-[#2d2418]/25 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#211a12] hover:text-[#f4ead8]">
              current site
            </Link>
          </div>
        </header>

        <section className="grid min-h-[calc(100vh-57px)] border-b border-[#2d2418]/20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between border-b border-[#2d2418]/20 p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8a623d]">Amsterdam · ecstatic dance · field notes</p>
              <h1 className="mt-8 max-w-4xl text-[clamp(3.2rem,10vw,9.2rem)] font-black leading-[0.84] tracking-[-0.08em] text-[#24170e]">
                dance first. website second.
              </h1>
              <p className="mt-8 max-w-xl text-xl leading-8 text-[#4b3726] sm:text-2xl sm:leading-10">
                Henners makes full-arc ecstatic dance journeys: prepared with care, loose enough to listen, rooted in rhythm, sweat, silence, and the room that is actually there.
              </p>
            </div>

            <div className="mt-12 grid gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#60482e] sm:grid-cols-3">
              <div className="border-t border-[#2d2418]/25 pt-3">Odessa roots</div>
              <div className="border-t border-[#2d2418]/25 pt-3">Rijksmuseum floor</div>
              <div className="border-t border-[#2d2418]/25 pt-3">EDFH basement next</div>
            </div>
          </div>

          <div className="relative overflow-hidden p-4 sm:p-8">
            <div className="absolute left-6 top-8 hidden h-[82%] border-l border-dashed border-[#2d2418]/25 md:block" />
            <div className="grid h-full auto-rows-min gap-5 md:grid-cols-12 md:items-start">
              {photoNotes.map((photo) => (
                <figure key={photo.src} className={`${photo.className} bg-[#fffaf0] p-3 shadow-[8px_10px_0_rgba(45,36,24,0.14)]`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#dac9ae]">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 90vw, 40vw" className="object-cover grayscale-[15%] contrast-[1.03]" />
                  </div>
                  <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-[#6b543b]">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="notes" className="grid border-b border-[#2d2418]/20 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="border-b border-[#2d2418]/20 p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8a623d]">instead of a pitch</p>
            <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">notes from people who danced.</h2>
            <p className="mt-6 max-w-sm text-lg leading-8 text-[#5c4630]">
              Less testimonial carousel, more scraps from the floor. Keep it imperfect. Let the people say it.
            </p>
          </aside>
          <div className="grid gap-px bg-[#2d2418]/20 md:grid-cols-2">
            {testimonials.map((note, index) => (
              <article key={`${note.person}-${note.date}`} className="bg-[#f4ead8] p-5 sm:p-8">
                <p className="font-mono text-xs text-[#8a623d]">0{index + 1} · {note.date}</p>
                <blockquote className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.03em] text-[#24170e]">“{note.quote}”</blockquote>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-[#6b543b]">{note.person} · {note.event}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sound" className="grid border-b border-[#2d2418]/20 lg:grid-cols-2">
          <div className="border-b border-[#2d2418]/20 p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8a623d]">sound</p>
            <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">a journey, not a playlist.</h2>
          </div>
          <div className="p-5 sm:p-8">
            <p className="max-w-2xl text-xl leading-9 text-[#4b3726]">
              The arc is built before the room opens: arrival, flow, rhythm, chaos and release, integration and play, grounding, then stillness. But the floor is not a spreadsheet. If the room turns, the music can turn with it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="bg-[#24170e] px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#f4ead8] hover:bg-[#5c321d]">
                open SoundCloud
              </a>
              <Link href="/media-package" className="border border-[#2d2418]/25 px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#fffaf0]">
                plain press kit
              </Link>
            </div>
          </div>
        </section>

        <section id="rooms" className="grid border-b border-[#2d2418]/20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-5 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8a623d]">recent rooms</p>
            <div className="mt-6 divide-y divide-[#2d2418]/20 border-y border-[#2d2418]/20">
              {recentRooms.map((gig) => (
                <div key={`${gig.date}-${gig.event}-${gig.venue}`} className="grid gap-2 py-4 font-mono text-sm sm:grid-cols-[120px_1fr_1fr]">
                  <span className="text-[#8a623d]">{gig.date}</span>
                  <span className="font-semibold text-[#24170e]">{gig.event}</span>
                  <span className="text-[#5c4630]">{gig.venue}</span>
                </div>
              ))}
            </div>
            <Link href="/events" className="mt-6 inline-block border border-[#2d2418]/25 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#211a12] hover:text-[#f4ead8]">
              full event archive
            </Link>
          </div>
          <div className="border-t border-[#2d2418]/20 p-5 sm:p-8 lg:border-l lg:border-t-0">
            <div className="sticky top-24">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8a623d]">what this version changes</p>
              <ul className="mt-6 space-y-5 text-lg leading-7 text-[#4b3726]">
                <li>• no hero-card polish</li>
                <li>• fewer rounded SaaS blocks</li>
                <li>• reviews become the texture of the page</li>
                <li>• photos feel like physical artifacts</li>
                <li>• the copy sounds like someone who was actually there</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-[#2d2418]/20 p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8a623d]">contact</p>
            <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">if the room fits, write.</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#5c4630]">
              Ecstatic dance, ceremonies, retreats, festivals, community floors. Send the shape of the room, not a perfect brief.
            </p>
          </div>
          <div className="bg-[#fffaf0] p-5 sm:p-8">
            <ContactForm mode="light" />
          </div>
        </section>

        <footer className="border-t border-[#2d2418]/20 p-5 font-mono text-xs uppercase tracking-[0.2em] text-[#6b543b] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>preview route · not indexed</p>
            <div className="flex flex-wrap gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#211a12]">instagram</a>
              <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-[#211a12]">soundcloud</a>
              <Link href="/photos" className="hover:text-[#211a12]">photos</Link>
              <Link href="/" className="hover:text-[#211a12]">current homepage</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
