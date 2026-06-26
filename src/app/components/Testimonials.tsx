import Image from 'next/image';

import { testimonials } from '@/app/testimonialsData';

const featuredTestimonials = testimonials.slice(0, 4);

export default function Testimonials() {
  return (
    <section id="reviews" className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#101923]/90 p-6 shadow-2xl shadow-black/20 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Hipsy reviews</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">A few words from the floor.</h2>
          <p className="mt-5 leading-8 text-slate-300">
            Not polished testimonials. Just real notes people left after events connected to my Hipsy profile.
          </p>
          <a
            href="https://hipsy.nl/henners"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-4 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-4 transition hover:border-emerald-200/60 hover:bg-emerald-300/15"
          >
            <Image
              src="/images/badges/hipsy-review-badge-green.png"
              alt="Hipsy reviews for Henners"
              width={112}
              height={151}
              className="h-auto w-20 rounded-2xl"
            />
            <span className="max-w-44 text-sm font-semibold leading-6 text-emerald-50">
              See the source profile on Hipsy
            </span>
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredTestimonials.map((item) => (
            <figure key={`${item.person}-${item.event}`} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
              <blockquote className="text-lg leading-8 text-slate-100">“{item.quote}”</blockquote>
              <figcaption className="mt-5 text-sm leading-6 text-slate-400">
                <span className="font-semibold text-white">{item.person}</span>
                <br />
                {item.event} · {item.date}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
