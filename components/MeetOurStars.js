// components/MeetOurStars.js
"use client";

import { useState } from "react";

const FILTERS = ["ALL", "NEET", "JEE", "CLASSES 9-12"];

// Replace `photo` with real image paths when available; using
// placeholder portraits + fictional names here.
const STARS = [
  { name: "Shreshtha Singh", exam: "JEE", course: "Online Classroom Course", College: "IIT Bombay", photo: "/shrestha singh.jpeg" },
  { name: "Mihir Gupta", exam: "JEE", course: "Online Classroom Course", College: "IIT Bombay", photo: "/IIT Mumbai MIhir Gupta.PNG" },
  { name: "Prakhar Patel", exam: "JEE", course: "Online Classroom Course", College: "IIT Bombay",photo: "/IIT Mumbai Prakhar Patel.PNG" },
  { name: "Ashutosh Mulchandani", exam: "JEE", course: "Online Classroom Course", College: "IIT Bombay",photo: "/IIT Mumbai Ashutosh Mulchandani.PNG" },
  { name: "Kirti Agarwal", exam: "", course: "Online Classroom Course", College: "IIT Bombay",photo: "/IIT Mumbai Kriti Agrawal.PNG" },
  { name: "Anubhav Yadav", exam: "JEE", course: "Online Classroom Course", College: "IIT Bombay", photo: "/IIT Mumbai Anubhav Yadav.PNG" },
  { name: "Priyansh Seth", exam: "JEE", course: "Online Classroom Course", College: "IIT Kharagpur", photo: "/IIT Kharagpur Priyansh Seth.PNG" },
];

export default function MeetOurStars() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    activeFilter === "ALL"
      ? STARS
      : STARS.filter((s) => s.category === activeFilter);

  // duplicate the list so the marquee loop is seamless
  const loopItems = [...filtered, ...filtered];

  return (
    <section className="mx-auto max-w-container py-10">
      <div className="px-4 lg:px-8">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Meet our stars
          <span className="text-xl">✨</span>
        </h2>

        {/* Filter tabs */}
        <div className="mt-5 flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md border px-5 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? "border-brand-blue bg-blue-50 text-brand-blue"
                  : "border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="group mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 px-4 group-hover:[animation-play-state:paused] lg:px-8">
          {loopItems.map((star, i) => (
            <StarCard key={`${star.name}-${i}`} star={star} />
          ))}
        </div>
      </div>

      {/* Local styles for the marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}

function StarCard({ star }) {
  return (
    <div className="w-[260px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
      {/* photo + exam tag */}
      <div className="relative aspect-square bg-blue-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={star.photo}
          alt={star.name}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <span className="absolute bottom-0 left-0 right-0 bg-gray-900/85 px-3 py-1.5 text-xs font-semibold text-white">
          {star.exam}
        </span>
      </div>

      {/* details */}
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900">{star.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{star.course}</p>
        <p className="text-sm text-gray-500">{star.exam}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-extrabold text-brand-blue">
            {star.score}
          </span>
          <button
            aria-label={`View ${star.name}'s profile`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-blue text-brand-blue transition-colors hover:bg-blue-50"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
