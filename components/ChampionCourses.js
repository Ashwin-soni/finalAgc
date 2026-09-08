"use client";

import { useState } from "react";

const FILTERS = ["JEE", "NEET", "Classes 9-12"];

// Course content sourced from "__OUR_COURSES_for_broshar.docx".
// The brochure lists one course per class (no live/recorded split,
// no fees/dates/language), so duration/language/startedFrom below
// are placeholders in the same style as before — swap in real
// values whenever you have them.
const COURSES = {
  JEE: [
    {
      badge: "Live Course",
      title: "JEE — Main & Advance",
      cls: "11-12",
      duration: "2 Years",
      language: "Hinglish, English",
      startedFrom: "15 Dec, 2025",
    },
  ],
  NEET: [
    {
      badge: "Live Course",
      title: "NEET — UG",
      cls: "11-12",
      duration: "2 Years",
      language: "Hinglish, English",
      startedFrom: "20 Dec, 2025",
    },
  ],
  "Classes 9-12": [
    {
      badge: "Live Course",
      title: "Class 9th — Foundation Course",
      cls: "9",
      duration: "1 Year",
      language: "Hinglish, English",
      startedFrom: "05 Jan, 2026",
    },
    {
      badge: "Live Course",
      title: "Class 10th — Board Excellence Course",
      cls: "10",
      duration: "1 Year",
      language: "Hinglish, English",
      startedFrom: "18 Jan, 2026",
    },
    {
      badge: "Live Course",
      title: "Class 11th — Science Course",
      cls: "11",
      duration: "1 Year",
      language: "Hinglish, English",
      startedFrom: "10 Jan, 2026",
    },
    {
      badge: "Live Course",
      title: "Class 12th — Board + Competitive Course",
      cls: "12",
      duration: "1 Year",
      language: "Hinglish, English",
      startedFrom: "22 Jan, 2026",
    },
  ],
};

export default function ChampionCourses() {
  const [activeFilter, setActiveFilter] = useState("JEE");
  const courses = COURSES[activeFilter];

  return (
    <section className="bg-[#edf2fa] py-12">
      <div className="mx-auto max-w-container px-4 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Courses chosen by{" "}
          <span className="text-brand-blue">our champions</span>
        </h2>

        {/* Filter tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md border px-6 py-2.5 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? "border-brand-blue bg-blue-50 text-brand-blue"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Course cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-9 flex justify-center">
          <a
            href="/courses"
            className="rounded-full border-2 border-brand-blue px-8 py-3 text-sm font-bold text-gray-900 transition-colors hover:bg-blue-50"
          >
            View all Courses
          </a>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
      {/* badge */}
      <span className="absolute left-6 top-5 flex -translate-y-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2.5 py-1 text-[11px] font-bold text-white">
        <PlayIcon />
        {course.badge}
      </span>

      <div className="px-6 pb-0 pt-9">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
          {course.title}
        </h3>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <Field label="Class:" value={course.cls} />
          <Field label="Duration:" value={course.duration} />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <Field label="Language:" value={course.language} />
          <Field label="Started from:" value={course.startedFrom} />
        </div>

        <button className="mt-6 w-full rounded-md bg-brand-blue py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:w-auto sm:px-10">
          Enroll now
        </button>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="3" fill="white" fillOpacity="0.25" />
      <path d="M10 9l6 3-6 3V9Z" fill="white" />
    </svg>
  );
}
