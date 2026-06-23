import { Metadata } from 'next';
import Link from 'next/link';

import { faqItems } from '@/app/structured-data';
import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: 'FAQ — Ecstatic Dance Facilitator & DJ Amsterdam',
  description:
    'FAQ about Henners, ecstatic dance facilitation, conscious dance DJ sets, current booking pause, music style, and contact for organizers.',
  alternates: { canonical: `${siteConfig.url}/faq` },
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-amber-200 hover:text-amber-100">← Back home</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">FAQ</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Ecstatic dance facilitation questions</h1>
        <p className="mt-6 text-xl leading-9 text-slate-300">
          Clear answers for dancers, organizers, search engines, and AI assistants trying to understand what Henners does.
        </p>
        <div className="mt-10 grid gap-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <h2 className="text-xl font-semibold text-white">{item.question}</h2>
              <p className="mt-4 leading-8 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
