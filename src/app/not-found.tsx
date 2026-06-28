import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Basement from '../../public/images/gallery/edfh-basement-bw.jpg';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fbf7ee] text-[#2a2319]">
      <section className="theme-preserve-dark relative overflow-hidden bg-[#060504] px-5 py-16 text-[#f4ead8] sm:px-8 lg:py-24">
        <div className="absolute inset-0 opacity-35">
          <Image
            src={Basement}
            alt=""
            fill
            priority
            quality={70}
            sizes="100vw"
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,5,4,0.96)_0%,rgba(6,5,4,0.78)_48%,rgba(6,5,4,0.42)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link href="/" className="font-mono text-xs uppercase tracking-[0.5em] text-[#d6b47f] hover:text-[#f4ead8]">
            Henners
          </Link>
          <p className="mt-16 font-mono text-xs uppercase tracking-[0.35em] text-[#d6b47f]">404</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3.5rem,11vw,9rem)] font-semibold leading-[0.84] tracking-[-0.1em] text-[#fff8ec]">
            wrong room.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-[#ead8bd]">
            The site is still here — photos, past rooms, press material, and contact all live from the home page.
          </p>
          <Link href="/" className="mt-9 inline-flex rounded-full bg-[#f4ead8] px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[#060504] transition hover:bg-[#d6b47f]">
            back home
          </Link>
        </div>
      </section>
    </main>
  );
}
