import Image from 'next/image';

import { testimonials } from '@/app/testimonialsData';

const featuredTestimonials = testimonials.slice(0, 4);

export default function Testimonials() {
  return (
    <section id="reviews" className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="border-y border-stone-700/70 py-12 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d7b56d]">Hipsy reviews</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">
            Notes from people who danced.
          </h2>
          <p className="mt-5 max-w-md leading-8 text-stone-300">
            Real notes left after Hipsy events. Kept rough, because that feels more honest than polishing them into marketing lines.
          </p>
          <a
            href="https://hipsy.nl/henners"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-4 border border-stone-700/80 bg-[#15100c] px-4 py-3 transition hover:border-[#d7b56d]/70 hover:bg-[#1b130d]"
          >
            <Image
              src="/images/badges/hipsy-review-badge-green.png"
              alt="Hipsy reviews for Henners"
              width={82}
              height={111}
              unoptimized
              className="h-auto w-14"
            />
            <span className="text-sm font-semibold leading-6 text-stone-100">
              Source profile<br />on Hipsy
            </span>
          </a>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:mt-0">
          {featuredTestimonials.map((item) => (
            <figure key={`${item.person}-${item.event}`} className="border-t border-stone-700/70 pt-5">
              <blockquote className="text-xl leading-9 text-stone-100 md:text-2xl md:leading-10">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm leading-6 text-stone-400">
                <span className="font-semibold text-stone-50">{item.person}</span>
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
