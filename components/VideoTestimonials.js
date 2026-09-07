"use client";

import { useRef, useState } from "react";

// Replace `youtubeId` with the real YouTube Shorts video ID
// (the part after /shorts/ in the URL, e.g. https://youtube.com/shorts/XXXXXXXXXXX)
const TESTIMONIALS = [
  {
    quote: "The study schedule was perfect",
    name: "Yogita Goyal's Father",
    location: "Kaithal, Haryana",
    badge: "AIR 1697",
    examTag: "JEE Adv. 2024",
    thumbnail: "https://picsum.photos/id/1012/400/500",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    quote: "The quality of tests was top-notch!",
    name: "Simran Goyal's Father",
    location: "Jaipur, Rajasthan",
    badge: "527/720",
    examTag: "NEET 2025",
    thumbnail: "https://picsum.photos/id/1027/400/500",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    quote: "Her mental ability improved a lot",
    name: "Inchara Shasti's Mother",
    location: "Bengaluru, Karnataka",
    badge: "Class 6",
    examTag: "2025",
    thumbnail: "https://picsum.photos/id/1011/400/500",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    quote: "My child was WITH me all the time",
    name: "Suchi Jain's Father",
    location: "Udham Singh Nagar, Uttarakhand",
    badge: "695/720",
    examTag: "NEET 2024",
    thumbnail: "https://picsum.photos/id/1005/400/500",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    quote: "Best decision we ever made",
    name: "Aditya Rao's Mother",
    location: "Pune, Maharashtra",
    badge: "AIR 980",
    examTag: "JEE Adv. 2024",
    thumbnail: "https://picsum.photos/id/1025/400/500",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export default function VideoTestimonials() {
  const scrollerRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-container px-4 py-12 lg:px-8">
      {/* Heading */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            AGC se,{" "}
            <span className="text-brand-blue">success MUMKIN hai!</span>
          </h2>
          <p className="mt-1 text-gray-500">What our parents say about us</p>
        </div>

        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            onClick={() => scrollByAmount(-360)}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            ‹
          </button>
          <button
            onClick={() => scrollByAmount(360)}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            ›
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollerRef}
        className="mt-7 flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TESTIMONIALS.map((item, i) => (
          <TestimonialCard key={item.name} item={item} accent={i % 3} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ item, accent }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-[260px] shrink-0 snap-start sm:w-[280px]">
      {/* quote header */}
      <div className="rounded-t-2xl bg-blue-50 px-4 py-3">
        <p className="text-sm font-semibold text-gray-800">{item.quote}</p>
      </div>

      {/* media */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-b-2xl bg-gray-200">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
            title={item.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group relative h-full w-full"
            aria-label={`Play video testimonial from ${item.name}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.thumbnail}
              alt={item.name}
              className="h-full w-full object-cover"
              draggable={false}
            />

            {/* decorative sparkle */}
            <span
              className={`absolute right-3 top-3 text-lg ${
                accent === 0
                  ? "text-emerald-400"
                  : accent === 1
                  ? "text-sky-400"
                  : "text-pink-400"
              }`}
            >
              ✦
            </span>

            {/* watch now pill */}
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white transition-transform group-hover:scale-105">
              <PlayIcon />
              Watch Now
            </span>
          </button>
        )}
      </div>

      {/* meta */}
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-bold text-gray-900">{item.name}</p>
          <p className="text-xs text-gray-400">{item.location}</p>
        </div>
        <span className="shrink-0 rounded-full bg-brand-blue px-3 py-1 text-xs font-bold text-white">
          {item.badge}
        </span>
      </div>
      <p className="mt-1 text-xs font-semibold text-gray-500">
        {item.examTag}
      </p>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="white" />
    </svg>
  );
}
