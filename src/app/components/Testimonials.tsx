import Image from 'next/image';

import { testimonials } from '@/app/testimonialsData';

export default function Testimonials() {
  return (
    <section id="reviews" className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="border-y border-stone-700/70 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d7b56d]">Hipsy reviews</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 md:text-5xl">
              Notes from people who danced.
            </h2>
            <p className="mt-5 max-w-md leading-8 text-stone-300">
              A few real notes left after Hipsy events. Scroll sideways for more.
            </p>
            <a
              href="https://hipsy.nl/henners"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block"
              aria-label="View Henners on Hipsy"
            >
              <Image
                src="/images/badges/hipsy-review-badge-green.png"
                alt="Hipsy reviews for Henners"
                width={112}
                height={151}
                unoptimized
                className="h-auto w-24"
              />
            </a>
          </div>

          <div className="min-w-0">
            <div className="flex snap-x gap-5 overflow-x-auto pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Scrollable Hipsy reviews">
              {testimonials.map((item) => (
                <figure
                  key={`${item.person}-${item.event}`}
                  className="w-[82vw] max-w-[420px] shrink-0 snap-start border-t border-stone-700/70 pt-5 sm:w-[360px]"
                >
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
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-400">
              {testimonials.length} notes · swipe / scroll
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
