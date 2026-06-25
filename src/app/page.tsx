import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/app/components/ContactForm';
import ContactQueryScroll from '@/app/components/ContactQueryScroll';
import PastGigs from '@/app/components/PastGigs';
import SoundCloudWidget from '@/app/components/SoundCloudWidget';
import UpcomingGigs from '@/app/components/UpcomingGigs';
import { siteConfig } from '@/constant/config';

import { gigs } from './gigsData';
import RijksmuseumCloseUp from '../../public/images/rijksmuseum-close-up.jpg';

const facilitationCards = [
  {
    title: 'Ecstatic dance journeys',
    body: 'A carefully paced arc from arrival and grounding into rhythm, release, play, stillness, and integration.',
  },
  {
    title: 'Ceremony & space-holding',
    body: 'Music selected for emotional safety and depth — supportive when joy rises, tender when tears come.',
  },
  {
    title: 'Retreats, festivals & communities',
    body: 'Professional conscious dance sets for intimate rooms, festival stages, cacao ceremonies, and movement communities.',
  },
];

const stats = [
  { value: 'Amsterdam', label: 'based, travelling outward' },
  { value: '2021', label: 'facilitating since' },
  { value: `${gigs.filter((gig) => new Date(gig.date) < new Date()).length}+`, label: 'documented dance floors' },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#070b12] text-white">
      <ContactQueryScroll />
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32rem),radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_30rem),linear-gradient(180deg,#070b12_0%,#0a1220_48%,#05070b_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:px-8">
        <Link href="/" className="font-secondary text-2xl tracking-wide text-white">
          HENNERS
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
          <Link href="#facilitation" className="hover:text-amber-200">Facilitation</Link>
          <Link href="#listen" className="hover:text-amber-200">Listen</Link>
          <Link href="#upcoming" className="hover:text-amber-200">Gigs</Link>
          <Link href="/events" className="hover:text-amber-200">Events</Link>
          <Link href="/media-package" className="hover:text-amber-200">Press kit</Link>
        </nav>
        <Link href="#contact" className="rounded-full border border-amber-200/40 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-200 hover:text-slate-950">
          Contact
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            Currently taking a pause from DJing and gigging
          </p>
          <h1 className="max-w-4xl font-primary text-3xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ecstatic Dance Facilitator & DJ in Amsterdam
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-xl sm:leading-9">
            Grounded ecstatic dance journeys for conscious floors, ceremonies, retreats, and festivals.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="#listen" className="rounded-full bg-amber-200 px-6 py-4 text-center font-semibold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-100">
              Listen to a journey
            </Link>
            <Link href="#facilitation" className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/10">
              Explore facilitation
            </Link>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <dt className="text-2xl font-semibold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
            <Image
              src={RijksmuseumCloseUp}
              alt="Henners DJing at Rijksmuseum in Amsterdam"
              className="aspect-[4/5] w-full object-cover object-[58%_center]"
              loading="lazy"
              sizes="(max-width: 1024px) calc(100vw - 2.5rem), 46vw"
              placeholder="blur"
              quality={70}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Rijksmuseum · Amsterdam</p>
              <p className="mt-2 text-lg text-white">Warm rooms, big energy, and a dance floor that can travel.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="facilitation" className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">What I facilitate</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Not just tracks. A held journey.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Ecstatic dance works when the room feels safe enough to move honestly. My work is musical, but it is also relational: reading the floor, protecting the arc, and giving the body permission to feel.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {facilitationCards.map((card) => (
            <article key={card.title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 transition hover:border-amber-200/30 hover:bg-white/[0.08]">
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <SoundCloudWidget />
      <UpcomingGigs gigs={gigs} />
      <PastGigs gigs={gigs} />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-0 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 border-y border-white/10 bg-white/[0.05] px-4 py-8 sm:rounded-[2rem] sm:border sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div className="max-w-3xl px-2 sm:px-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">For organizers</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Press kit, context & future invitations</h2>
            <p className="mt-5 leading-8 text-slate-300">
              If you are holding an ecstatic dance, retreat, ceremony, or festival floor, the press kit has photos, music, bio material, and technical context.
            </p>
            <Link href="/media-package" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100">
              View press kit
            </Link>
          </div>
          <div id="contact" className="rounded-[1.5rem] bg-[#080d16] p-4 sm:p-6">
            <ContactForm mode="dark" />
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Henners · Ecstatic Dance Facilitator & DJ · Amsterdam</p>
          <div className="flex gap-4">
            <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">SoundCloud</a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">Instagram</a>
            <Link href="/events" className="hover:text-amber-200">Events</Link>
            <Link href="/about" className="hover:text-amber-200">About</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
