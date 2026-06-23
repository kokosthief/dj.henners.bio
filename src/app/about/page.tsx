import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/constant/config';

import HennersCeremony from '../../../public/images/henners-ceremony.jpg';
import HennersSpaceholding from '../../../public/images/henners-spaceholding.jpg';

export const metadata: Metadata = {
  title: 'About Henners — Ecstatic Dance Facilitator in Amsterdam',
  description:
    'About Henners, an Amsterdam-based ecstatic dance facilitator and DJ creating conscious dance journeys, ceremony music, and movement spaces across the Netherlands.',
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Link href="/" className="text-sm font-semibold text-amber-200 hover:text-amber-100">← Back home</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">About</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Henners — ecstatic dance facilitator & DJ</h1>
          <p className="mt-7 text-xl leading-9 text-slate-300">
            Henners is an Amsterdam-based ecstatic dance facilitator and DJ. His work sits between music curation and space-holding: guiding rooms through rhythm, emotion, release, softness, and connection.
          </p>
          <p className="mt-6 leading-8 text-slate-400">
            Since 2021, Henners has played and facilitated ecstatic dance floors, ceremonies, community gatherings, retreats, and festivals across the Netherlands and Europe. His sets draw on global rhythms, organic percussion, melodic electronic music, African-inspired grooves, and spacious integration textures.
          </p>
          <p className="mt-6 leading-8 text-slate-400">
            He is currently taking a pause from DJing and gigging. New mixes, gatherings, or selected future invitations will be shared when the timing feels right.
          </p>
        </div>
        <div className="grid gap-5">
          <Image src={HennersSpaceholding} alt="Henners holding space during an ecstatic dance journey" className="rounded-[2rem] border border-white/10 object-cover shadow-2xl" placeholder="blur" />
          <Image src={HennersCeremony} alt="Ceremony music and conscious dance facilitation by Henners" className="rounded-[2rem] border border-white/10 object-cover shadow-2xl" placeholder="blur" />
        </div>
      </section>
    </main>
  );
}
