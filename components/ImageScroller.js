// components/ImageScroller.js
"use client";

import { useRef } from "react";

// Replace these with your own image paths/URLs
const IMAGES = [
  "/resultimg.jpg",
  "/IIT Mumbai Shrestha Gupta.png",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1043/600/400",
];

export default function ImageScroller() {
  const scrollerRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Scrollable image strip */}
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="shrink-0 snap-start w-[280px] sm:w-[340px] aspect-[3/2] overflow-hidden rounded-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

      {/* Prev / Next buttons */}
      <button
        onClick={() => scrollByAmount(-340)}
        aria-label="Scroll left"
        className="absolute left-1 top-1/2 hidden -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50 sm:flex"
      >
        ‹
      </button>
      <button
        onClick={() => scrollByAmount(340)}
        aria-label="Scroll right"
        className="absolute right-1 top-1/2 hidden -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50 sm:flex"
      >
        ›
      </button>
    </div>
  );
}
