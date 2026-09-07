"use client";

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';


// Swap these with your own banner images (keep similar aspect ratio ~16:7)
const SLIDES = [
  {
    src: "/PHOTO-2020-01-14-13-51-50.jpg",
    alt: "Promo banner 1",
  },
  {
    src: "/PHOTO-2020-01-14-13-51-44.jpg",
    alt: "Promo banner 2",
  },
  {
    src: "/PHOTO-2020-01-14-13-52-27.jpg",
    alt: "Promo banner 3",
  },
  {
    src: "/WhatsApp Image 2026-03-05 at 10.49.40 AM.jpeg",
    alt: "Promo banner 4",
  },
  {
    src: "/WhatsApp Image 2026-08-27 at 2.13.57 AM.jpeg",
    alt: "Promo banner 5",
  },
];

const AUTOPLAY_MS = 3000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const goTo = (index) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  };

  // autoplay every 3s, pauses while user hovers
  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  return (
    <section className="w-full bg-[#edf2fa] py-6 lg:py-8">
      <div className="mx-auto max-w-container px-4 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl bg-gray-100"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* Slides track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <div key={i} className="aspect-[16/7] w-full shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow transition hover:bg-white"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            onClick={() => goTo(active + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow transition hover:bg-white"
          >
            <ChevronIcon direction="right" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${active === i ? "w-5 bg-white" : "w-2 bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ direction }) {
  const d = direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
