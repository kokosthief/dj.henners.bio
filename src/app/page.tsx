import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/app/components/ContactForm';
import PastGigs from '@/app/components/PastGigs';
import SoundCloudWidget from '@/app/components/SoundCloudWidget';
import UpcomingGigs from '@/app/components/UpcomingGigs';
import { faqItems } from '@/app/structured-data';
import { siteConfig } from '@/constant/config';

import { gigs } from './gigsData';
import HennersCeremony from '../../public/images/henners-ceremony.jpg';
import HennersDj from '../../public/images/henners-dj.jpg';
import HennersPfp from '../../public/images/henners-pfp.jpg';
import HennersSpaceholding from '../../public/images/henners-spaceholding.jpg';

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
  { value: 'Amsterdam', label: 'based in the Netherlands' },
  { value: '2021', label: 'facilitating since' },
  { value: `${gigs.filter((gig) => new Date(gig.date) < new Date()).length}+`, label: 'documented dance floors' },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#070b12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32rem),radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_30rem),linear-gradient(180deg,#070b12_0%,#0a1220_48%,#05070b_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-6 lg:px-8">
        <Link href="/" className="font-secondary text-2xl tracking-wide text-white">
          HENNERS
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
          <Link href="#facilitation" className="hover:text-amber-200">Facilitation</Link>
          <Link href="#listen" className="hover:text-amber-200">Listen</Link>
          <Link href="#upcoming" className="hover:text-amber-200">Gigs</Link>
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
          <h1 className="max-w-4xl font-primary text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ecstatic Dance Facilitator & DJ in Amsterdam
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300">
            I guide conscious dance journeys that move from grounding to release, joy, stillness, and connection — for ecstatic dance floors, ceremonies, retreats, and festivals across the Netherlands.
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
              src={HennersSpaceholding}
              alt="Henners holding space as an ecstatic dance facilitator"
              className="aspect-[4/5] w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              placeholder="blur"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Movement · ceremony · music</p>
              <p className="mt-2 text-lg text-white">When joy is evoked, I support that. When tears come, I nurture them.</p>
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

      <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          { image: HennersCeremony, alt: 'Ceremony music facilitation with Henners', title: 'Ceremony-aware' },
          { image: HennersDj, alt: 'Henners DJing an ecstatic dance journey', title: 'Rhythm-led' },
          { image: HennersPfp, alt: 'Portrait of Henners', title: 'Human, warm, present' },
        ].map((item) => (
          <figure key={item.title} className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04]">
            <Image src={item.image} alt={item.alt} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" placeholder="blur" />
            <figcaption className="p-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">{item.title}</figcaption>
          </figure>
        ))}
      </section>

      <SoundCloudWidget />
      <UpcomingGigs gigs={gigs} />
      <PastGigs gigs={gigs} />

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">For organizers</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Press kit, context & future invitations</h2>
            <p className="mt-5 leading-8 text-slate-300">
              If you are holding an ecstatic dance, retreat, ceremony, or festival floor, the press kit has photos, music, bio material, and technical context.
            </p>
            <Link href="/media-package" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100">
              View press kit
            </Link>
          </div>
          <div id="contact" className="rounded-[1.5rem] bg-[#080d16] p-5 md:p-6">
            <ContactForm mode="dark" />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Quick answers for dancers, organizers, and AI search</h2>
        <div className="mt-8 grid gap-4">
          {faqItems.map((item) => (
            <details key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 open:border-amber-200/30">
              <summary className="cursor-pointer text-lg font-semibold text-white">{item.question}</summary>
              <p className="mt-4 leading-8 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Henners · Ecstatic Dance Facilitator & DJ · Amsterdam</p>
          <div className="flex gap-4">
            <a href={siteConfig.social.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">SoundCloud</a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">Instagram</a>
            <Link href="/faq" className="hover:text-amber-200">FAQ</Link>
            <Link href="/about" className="hover:text-amber-200">About</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
