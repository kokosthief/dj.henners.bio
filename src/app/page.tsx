import Link from 'next/link';

import ContactForm from '@/app/components/ContactForm';
import ContactQueryScroll from '@/app/components/ContactQueryScroll';
import ImageSlideshow from '@/app/components/ImageSlideshow';
import PastGigs from '@/app/components/PastGigs';
import SoundCloudWidget from '@/app/components/SoundCloudWidget';
import Testimonials from '@/app/components/Testimonials';
import UpcomingGigs from '@/app/components/UpcomingGigs';
import { siteConfig } from '@/constant/config';

import { gigs } from './gigsData';

const facilitationCards = [
  {
    title: 'Rooted and cosmic',
    body: 'Whether the room wants earth, fire, softness, or lift-off, the music follows the full spectrum of the floor.',
  },
  {
    title: 'Joy and introspection',
    body: 'Global rhythms, African-inspired grooves, melody, silence, and space for both elation and reflection.',
  },
  {
    title: 'Born from the scene',
    body: 'Shaped through Amsterdam’s ecstatic dance scene, Odessa ship gatherings, ceremonies, festivals, and community floors.',
  },
];

const stats = [
  { value: 'Amsterdam', label: 'rooted in the scene' },
  { value: 'Odessa', label: 'ship-born community roots' },
  { value: `${gigs.filter((gig) => new Date(gig.date) < new Date()).length}+`, label: 'rooms danced through' },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#100d0a] text-[#f8f1e7]">
      <ContactQueryScroll />
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(120,72,38,0.20),transparent_34rem),radial-gradient(circle_at_bottom_right,rgba(242,192,120,0.10),transparent_32rem),linear-gradient(180deg,#100d0a_0%,#17110d_52%,#0b0907_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:px-8">
        <Link href="/" className="font-secondary text-2xl tracking-wide text-stone-50">
          HENNERS
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-stone-300 md:flex">
          <Link href="#facilitation" className="hover:text-amber-200">Facilitation</Link>
          <Link href="#listen" className="hover:text-amber-200">Listen</Link>
          <Link href="#upcoming" className="hover:text-amber-200">Gigs</Link>
          <Link href="#reviews" className="hover:text-amber-200">Reviews</Link>
          <Link href="/photos" className="hover:text-amber-200">Photos</Link>
          <Link href="/events" className="hover:text-amber-200">Events</Link>
          <Link href="/media-package" className="hover:text-amber-200">Press kit</Link>
        </nav>
        <Link href="#contact" className="rounded-full border border-stone-500/50 px-4 py-2 text-sm font-semibold text-stone-100 transition hover:border-amber-200 hover:bg-amber-100 hover:text-stone-950">
          Contact
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-amber-200/25 bg-[#21160f] px-4 py-2 text-sm font-semibold text-amber-100">
            Upcoming: EDFH Basement Set
          </p>
          <h1 className="max-w-4xl font-primary text-3xl font-semibold tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
            Ecstatic Dance Facilitator & DJ in Amsterdam
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:mt-7 sm:text-xl sm:leading-9">
            Soul-stirring dance journeys through earth, rhythm, emotion, connection, and the occasional trip through the cosmos.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="#listen" className="rounded-full bg-[#e7c083] px-6 py-4 text-center font-semibold text-stone-950 shadow-lg shadow-black/20 transition hover:bg-[#f1d29d]">
              Listen to a journey
            </Link>
            <Link href="/media-package" className="rounded-full border border-stone-500/50 px-6 py-4 text-center font-semibold text-stone-100 transition hover:border-amber-200/60 hover:bg-stone-100/10">
              Press Kit
            </Link>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-stone-700/70 bg-[#17110d]/80 p-4">
                <dt className="text-2xl font-semibold text-stone-50">{stat.value}</dt>
                <dd className="mt-1 text-sm text-stone-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[1.35rem] bg-amber-900/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-stone-700/70 bg-[#1a130e] p-2 shadow-2xl shadow-black/35 sm:p-3">
            <ImageSlideshow
              autoPlay
              interval={3600}
              showControls={false}
              priority
              imageClassName="aspect-[4/5]"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section id="facilitation" className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Vibes first</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Rooted in the floor. Open to the cosmos.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            I craft each journey with a clear arc in mind, while keeping enough space to respond to the room. Global rhythms, earthy grooves, and spacious moments carry the floor through joy, introspection, chaos, connection, and stillness.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {facilitationCards.map((card) => (
            <article key={card.title} className="rounded-[1.7rem] border border-stone-700/70 bg-[#17110d]/85 p-6 shadow-2xl shadow-black/10 transition hover:border-amber-200/30 hover:bg-[#21170f]">
              <h3 className="text-2xl font-semibold text-stone-50">{card.title}</h3>
              <p className="mt-4 leading-7 text-stone-400">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <SoundCloudWidget />
      <UpcomingGigs gigs={gigs} />
      <Testimonials />
      <PastGigs gigs={gigs} />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-0 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 border-y border-stone-700/70 bg-[#17110d]/80 px-4 py-8 sm:rounded-[1.35rem] sm:border sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div className="max-w-3xl px-2 sm:px-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">For organizers</p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-50">Press kit, context & future invitations</h2>
            <p className="mt-5 leading-8 text-stone-300">
              If you are holding an ecstatic dance, retreat, ceremony, festival, or community floor, the press kit has photos, music, bio material, and technical context.
            </p>
            <Link href="/media-package" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-100">
              View press kit
            </Link>
          </div>
          <div id="contact" className="rounded-[1.5rem] bg-[#120d09] p-4 sm:p-6">
            <ContactForm mode="dark" />
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-stone-700/70 px-5 py-10 text-sm text-stone-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Henners · Ecstatic Dance Facilitator & DJ · Amsterdam</p>
          <div className="flex gap-4">
            <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">SoundCloud</a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">Instagram</a>
            <Link href="/photos" className="hover:text-amber-200">Photos</Link>
            <Link href="/events" className="hover:text-amber-200">Events</Link>
            <Link href="/about" className="hover:text-amber-200">About</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
