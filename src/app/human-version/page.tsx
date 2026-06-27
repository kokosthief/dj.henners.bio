import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/app/components/ContactForm';
import { gigs } from '@/app/gigsData';
import { testimonials } from '@/app/testimonialsData';
import { siteConfig } from '@/constant/config';

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
    <main className="min-h-screen bg-[#060504] text-[#f4ead8] selection:bg-[#f4ead8] selection:text-[#060504]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f4ead8]/10 bg-[#060504]/82 px-5 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <Link href="/" className="font-mono text-xs uppercase tracking-[0.5em] text-[#f4ead8]">
            Henners
          </Link>
          <nav aria-label="Preview navigation" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-[#d6b47f] md:flex">
            <a href="#notes" className="hover:text-[#f4ead8]">notes</a>
            <a href="#sound" className="hover:text-[#f4ead8]">sound</a>
            <a href="#rooms" className="hover:text-[#f4ead8]">rooms</a>
            <a href="#contact" className="hover:text-[#f4ead8]">contact</a>
          </nav>
          <Link href="/" className="border border-[#f4ead8]/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#d6b47f] hover:border-[#f4ead8] hover:text-[#f4ead8]">
            current site
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

        <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-[1500px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
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

      <div className="mx-auto max-w-[1500px] border-x border-[#2d2418]/15 bg-[#f4ead8] text-[#211a12] shadow-[0_0_80px_rgba(0,0,0,0.28)]">
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
                <li>• dark room energy up top</li>
                <li>• paper archive underneath</li>
                <li>• reviews become the texture of the page</li>
                <li>• fewer rounded SaaS blocks</li>
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
