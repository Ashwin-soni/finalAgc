"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { ChevronRight, Check, Video, PlayCircle } from "lucide-react";

/* ============================================================
   Announcement Bar
============================================================ */
function AnnouncementBar() {
  return (
    <div className="w-full bg-[#0E8A6D] py-2.5">
      <div className="flex items-center justify-center gap-3 px-4">
        <span className="text-sm md:text-base">
          <span className="mr-1">📣</span>
          <span className="text-yellow-300 font-bold">
            LEADER BATCH STARTS JUN 6!
          </span>{" "}
          <span className="mr-1">✨</span>
          <span className="text-white font-medium">
            Give 20 minute test and get upto 90% scholarship
          </span>
        </span>
        <ChevronRight className="text-white" size={18} />
      </div>
    </div>
  );
}

/* ============================================================
   Hero
============================================================ */
function Hero() {
  return (
    <section className="w-full bg-[#EBEEF6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-10 py-16 items-center max-w-7xl mx-auto">
        {/* Left copy */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Coaching for <span className="text-[#1453B8]"> JEE/NEET </span>
          </h1>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="text-2xl">🏆</span>
              <p className="text-gray-700 text-lg">
                JEE/NEET Online Coaching by AGC helps you secure{" "}
                <a href="#" className="text-[#1453B8] font-semibold">
                  Top ranks.
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🥇</span>
              <p className="text-gray-700 text-lg">
                With 36 years of expertise, live classes from AGC Jabalpur
                faculty, and the best study materials, AGC Online sets you
                up for{" "}
                <a href="#" className="text-[#0E8A6D] font-semibold">
                  JEE/NEET success.
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a href="https://play.google.com/store/apps/details?id=co.jarvis.agcl">
              <button className="px-6 py-3 rounded-full border-2 border-[#1453B8] text-[#1453B8] font-bold">
                Download App
              </button>
            </a>
            <a href="https://calendly.com/your-team/callback">
              <button className="px-6 py-3 rounded-full bg-[#1453B8] text-white font-bold">
                Contact Us
              </button>
            </a>
          </div>
        </div>

        {/* Right image card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#F2EFE9]">
          <div className="relative aspect-16/10">
            <Image src="/resultimg.jpg" alt="AGC students" fill className="object-cover" />

            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold"></p>
              <p className="text-sm">📍 Jabalpur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Stats Section
============================================================ */
const statsToppers = [
  { name: "Anubhav Yadav", air: "IITB", img: "/IIT Mumbai Anubhav Yadav.PNG" },
  { name: "Kriti Agrawal", air: "IITB", img: "/IIT Mumbai Kriti Agrawal.PNG" },
  { name: "Priyansh Seth", air: "IITKGP", img: "/IIT Kharagpur Priyansh Seth.PNG" },
];

const results = [
  {
    value: "400",
    label: "Eligible in JEE Main",
    barColor: "bg-[#0E8A6D]",
    valueColor: "text-[#0E8A6D]",
  },
  {
    value: "200",
    label: "Qualified in JEE Main",
    barColor: "bg-[#1453B8]",
    valueColor: "text-[#1453B8]",
  },
  {
    value: "45",
    label: "Eligible in NEET",
    barColor: "bg-[#1453B8]",
    valueColor: "text-[#1453B8]",
  },
  {
    value: "80",
    label: "Qualified in NEET",
    barColor: "bg-[#0E8A6D]",
    valueColor: "text-[#0E8A6D]",
  },
];

function StatsSection() {
  return (
    <section className="w-full bg-[#EBEEF6] py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 max-w-7xl mx-auto items-start">
        {/* Toppers card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            Toppers choose <span className="text-[#0E8A6D]">AGC</span> Online
          </h2>

          <div className="flex gap-8 mb-10">
            {statsToppers.map((t) => (
              <div key={t.name} className="relative flex flex-col items-center w-1/3">
                <span className="relative z-10 bg-[#3B5BDB] text-white text-xs font-bold px-3 py-1 rounded-md mb-[-10px]">
                  {t.air}
                </span>
                <div className="w-20 h-20 rounded-full bg-yellow-400 overflow-hidden border-4 border-white shadow">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 text-center font-bold text-gray-900 text-base leading-snug">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
          <a href="/Results">
          <button className="mt-auto w-full py-3 rounded-full border-2 border-[#1453B8] text-[#1453B8] font-bold">
            See JEE Results
          </button>
          </a>
        </div>

        {/* Results card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            Outstanding <span className="text-[#0E8A6D]">IIT JEE results</span>{" "}
            consistently
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {results.map((r) => (
              <div
                key={r.label}
                className="relative pl-5 py-2 border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${r.barColor}`} />
                <p className={`text-3xl font-extrabold ${r.valueColor}`}>{r.value}</p>
                <p className="text-gray-700 mt-1 leading-snug">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Results Carousel
============================================================ */
const slides = [
  {
    id: 1,
    badgeText: "Results are LIVE!",
    heading1: "Hum sirf padhate nahi,",
    heading2: "champions banaate hain.",
    ctaLabel: "Check Results",
    ctaHref: "/Results",
    // toppers: [
      // { name: "Arunav V. Agrahari", location: "Uttar Pradesh", air: "223", img: "/resultimg1.PNG" },
      // { name: "Yashwardhan", location: "Rajasthan", air: "52", img: "/resultimg1.PNG" },
      // { name: "Peeyush R. Panda", location: "Odisha", air: "297", img: "/resultimg1.PNG" },
    // ],
  },
  {
    id: 2,
    badgeText: "Admissions Open!",
    heading1: "Hum sirf padhate nahi,",
    heading2: "IIT ko possible banaate hain.",
    ctaLabel: "Enroll Now",
    ctaHref: "https://calendly.com/your-team/callback",
    // toppers: [
      // { name: "Riya Sharma", location: "Delhi", air: "18", img: "/resultimg1.PNG" },
      // { name: "Kabir Mehta", location: "Maharashtra", air: "91", img: "/resultimg1.PNG" },
      // { name: "Saanvi Iyer", location: "Karnataka", air: "134", img: "/resultimg1.PNG" },
    // ],
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

function ResultsCarousel() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((index) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#EBEEF6] pb-12">
      <div className="max-w-7xl mx-auto px-10">
        {/* Slide viewport */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className="relative aspect-[16/7]">
                  <Image
                    src="/agc-building-carousel.png"
                    alt="Awanish Gupta Classes building"
                    fill
                    priority={slide.id === 1}
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                  <div className="absolute inset-0 bg-[#061a32]/55" />

                  {/* Logo badge */}
                  <div className="absolute top-6 left-8 z-10 flex items-center gap-2 bg-[#0B1F4D] text-white text-xs font-bold px-3 py-1.5 rounded">
                    <span>AGC ONLINE</span>
                    <span className="font-normal opacity-80">JEE ADV. 2026</span>
                  </div>

                  {/* Result-card chip top right */}
                  {/* <div className="absolute top-6 right-8 bg-[#0B1F4D] text-white text-[10px] text-center px-3 py-2 rounded leading-tight">
                    Official Results
                    <br />
                    Validated by EY
                  </div> */}

                  {/* Main copy */}
                  <div className="absolute top-24 left-8 z-10 max-w-md">
                    <span className="inline-block bg-lime-300 text-[#0B1F4D] font-extrabold text-lg px-4 py-1.5 rounded mb-5">
                      {slide.badgeText}
                    </span>
                    <p className="text-xl text-white">{slide.heading1}</p>
                    <p className="text-3xl font-extrabold text-white leading-snug mb-6">
                      {slide.heading2}
                    </p>
                    <a
                      href={slide.ctaHref}
                      target={slide.ctaHref.startsWith("http") ? "_blank" : undefined}
                      rel={slide.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-block px-6 py-3 rounded-full bg-[#1453B8] text-white font-bold"
                    >
                      {slide.ctaLabel}
                    </a>
                  </div>

                  {/* Topper photo cards */}
                  {/* <div className="absolute bottom-0 right-8 flex gap-2 items-end">
                    {slide.toppers.map((t) => (
                      <div
                        key={t.name}
                        className="relative w-32 h-44 bg-white rounded-t-md shadow-md overflow-hidden"
                      >
                        <img src={t.img} alt={t.name} className="w-full h-28 object-cover" />
                        <span className="absolute top-2 right-2 bg-lime-300 text-[#0B1F4D] text-xs font-extrabold text-center px-2 py-0.5 rounded leading-tight">
                          AIR
                          <br />
                          {t.air}
                        </span>
                        <div className="px-2 py-1">
                          <p className="text-[11px] font-bold text-gray-900 leading-tight">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1" />
                            {t.name}
                          </p>
                          <p className="text-[10px] text-gray-500">📍 {t.location}</p>
                        </div>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`rounded-full transition-all duration-300 ${index === active ? "w-3 h-3 bg-gray-900" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Courses Section
   NOTE: Course content below comes from the brochure
   "__OUR_COURSES_for_broshar.docx". The brochure lists one
   course per class with a tagline + feature list, and does not
   specify LIVE/RECORDED variants or fees. Mode is set to "LIVE"
   for all, and price shows a "Contact for Fees" placeholder —
   swap in real pricing whenever you have it.
============================================================ */
const allTabs = [
  {
    id: "class-9",
    label: "Class 9",
    courses: [
      {
        id: "c9-foundation",
        mode: "LIVE",
        tag: "ADMISSIONS OPEN",
        title: "Class 9th — Foundation Course",
        target: "Strong Foundation • Better Concepts • Brighter Future",
        features: [
          "Complete School Syllabus",
          "Maths & Science Concept Building",
          "Olympiad & Foundation Preparation",
          "Regular Tests & Performance Analysis",
          "Doubt Solving Sessions",
        ],
        price: "Contact for Fees",
      },
    ],
  },
  {
    id: "class-10",
    label: "Class 10",
    courses: [
      {
        id: "c10-board-excellence",
        mode: "LIVE",
        tag: "ADMISSIONS OPEN",
        title: "Class 10th — Board Excellence Course",
        target: "Board Mein Excellence, Future Mein Confidence",
        features: [
          "Complete CBSE/Board Syllabus",
          "Maths & Science Special Classes",
          "Chapter-wise Revision",
          "Board Pattern Test Series",
          "Previous Year Questions & Practice",
          "Regular Doubt Classes",
        ],
        price: "Contact for Fees",
      },
    ],
  },
  {
    id: "class-11",
    label: "Class 11",
    courses: [
      {
        id: "c11-science",
        mode: "LIVE",
        tag: "ADMISSIONS OPEN",
        title: "Class 11th — Science Course",
        target: "Concepts Strong Karo, Competition Ki Taiyari Shuru Karo",
        features: [
          "Physics • Chemistry • Mathematics/Biology",
          "NCERT + Advanced Concepts",
          "School + Competitive Exam Preparation",
          "DPP & Chapter-wise Practice",
          "Weekly Tests & Doubt Sessions",
        ],
        price: "Contact for Fees",
      },
    ],
  },
  {
    id: "class-12",
    label: "Class 12",
    courses: [
      {
        id: "c12-board-competitive",
        mode: "LIVE",
        tag: "ADMISSIONS OPEN",
        title: "Class 12th — Board + Competitive Course",
        target: "Boards Ke Saath JEE/NEET Ki Smart Preparation",
        features: [
          "Complete Class 12th Syllabus",
          "Physics • Chemistry • Mathematics/Biology",
          "Board Exam Preparation",
          "JEE/NEET Oriented Practice",
          "PYQs + Mock Tests",
          "Complete Revision Program",
        ],
        price: "Contact for Fees",
      },
    ],
  },
  {
    id: "jee",
    label: "JEE",
    courses: [
      {
        id: "jee-main-advance",
        mode: "LIVE",
        tag: "ADMISSIONS OPEN",
        title: "JEE — Main & Advance",
        target: "Target IITs • Crack JEE With Confidence",
        features: [
          "Physics • Chemistry • Mathematics",
          "Concept + Problem Solving",
          "Daily Practice Problems (DPP)",
          "JEE Main & Advanced PYQs",
          "Full-Length Mock Tests",
          "Performance Analysis & Doubt Support",
        ],
        price: "Contact for Fees",
      },
    ],
  },
  {
    id: "neet",
    label: "NEET",
    courses: [
      {
        id: "neet-ug",
        mode: "LIVE",
        tag: "ADMISSIONS OPEN",
        title: "NEET — UG",
        target: "Target Medical College • Make Your NEET Dream A Reality",
        features: [
          "Physics • Chemistry • Biology",
          "NCERT-Focused Preparation",
          "Chapter-wise MCQ Practice",
          "NEET Previous Year Questions",
          "Regular Test Series",
          "Full-Length Mock Tests & Analysis",
        ],
        price: "Contact for Fees",
      },
    ],
  },
];

const tabs = ["jee", "neet", "class-9", "class-10", "class-11", "class-12"].map((id) =>
  allTabs.find((tab) => tab.id === id)
);

function CourseCard({ course }) {
  const isLive = course.mode === "LIVE";
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full min-h-[320px]">
      <div className="flex items-start justify-between gap-2 px-4 pt-4">
        <span className="flex items-center gap-1.5 bg-gray-900 text-white text-[11px] font-bold px-2.5 py-1.5 rounded">
          {isLive ? <Video size={12} /> : <PlayCircle size={12} />}
          {course.mode}
        </span>
        <span className="bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded text-center max-w-[140px]">
          {course.tag}
        </span>
      </div>

      <div className="px-4 pt-3">
        <h3 className="text-base font-bold text-gray-900 leading-snug">{course.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{course.target}</p>
      </div>

      <ul className="px-4 pt-3 space-y-2 flex-1">
        {course.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
            <Check size={14} className="text-gray-900 mt-0.5 flex-shrink-0" />
            <span className="leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between px-4 py-4 mt-2 border-t border-gray-100">
        <span className="text-lg font-extrabold text-gray-900">{course.price}</span>
        <a
          href="https://calendly.com/your-team/callback"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#1453B8] font-bold text-sm"
        >
          Know More
          <ChevronRight size={15} />
        </a>
      </div>
    </div>
  );
}

function CoursesSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // default JEE

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="w-full bg-[#EBEEF6] py-16">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our courses</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm border transition-colors ${isActive
                  ? "border-[#1453B8] bg-blue-50 text-[#1453B8]"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Course grid */}
        <div className="flex flex-wrap items-stretch gap-6">
          {currentTab.courses.map((course) => (
            <div key={course.id} className="w-full md:w-[calc(50%-0.75rem)]">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Testimonials
============================================================ */
const TESTIMONIALS = [
  {
    quote:
      "The LIVE classes were so engaging that it was super easy to always stay focused. The teachers were always there to resolve my doubts in no time! I felt empowered & confident.",
    name: "Anubha Yadav",
    meta: "IIT Bombay",
    photo: "https://picsum.photos/id/1012/100/100",
  },
  {
    quote:
      "I got to stay home with my family & aced my JEE prep with AGC. My favourite feature was the Improvement Book, which helped track & fix all my mistakes.",
    name: "Priyansh Seth",
    meta: "IIT Kharagpur",
    photo: "https://picsum.photos/id/1027/100/100",
  },
  {
    quote:
      "I wanted to stay close to family & avoid travel. AGC LIVE classes, NCERT-based study material & quick doubt-solving helped me crack NEET with AIR 74. Best decision ever!",
    name: "Nishant Jain",
    meta: "IIT Kanpur",
    photo: "https://picsum.photos/id/1005/100/100",
  },
  {
    quote:
      "AGC track record gave me confidence. The LIVE online classes, regular tests with analysis & strong support helped me stay focused & improve steadily. It was the discipline I needed.",
    name: "Kavya Sahu",
    meta: "IIT BHU",
    photo: "https://picsum.photos/id/1011/100/100",
  },
  {
    quote:
      "The structured schedule and doubt sessions kept me on track even during my toughest weeks. I couldn't have scored this without AGC.",
    name: "Paresh Agrawal",
    meta: "IIT Dhanbad",
    photo: "https://picsum.photos/id/1025/100/100",
  },
];

function QuoteIcon() {
  return (
    <svg width="44" height="34" viewBox="0 0 44 34" fill="none">
      <path
        d="M0 34V20.4C0 14.1 1.5 9 4.6 5.2 7.6 1.4 11.9 0 16.5 0v7.4c-2.9 0-5 .8-6.5 2.6-1.5 1.7-2.2 4.1-2.2 7.1H16v17H0Z"
        fill="#1456E8"
      />
      <path
        d="M23.5 34V20.4c0-6.3 1.5-11.4 4.6-15.2C31.1 1.4 35.4 0 40 0v7.4c-2.9 0-5 .8-6.5 2.6-1.5 1.7-2.2 4.1-2.2 7.1H39.5v17h-16Z"
        fill="#1456E8"
      />
    </svg>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex w-[320px] shrink-0 snap-start flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
      <QuoteIcon />

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700">{testimonial.quote}</p>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.meta}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const scrollerRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-container px-4 py-14 lg:px-8">
      {/* Heading + arrows */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Testimonials from our students
        </h2>

        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => scrollByAmount(-360)}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
          >
            ‹
          </button>
          <button
            onClick={() => scrollByAmount(360)}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow-sm hover:bg-blue-700"
          >
            ›
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollerRef}
        className="mt-8 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Why Choose Allen
============================================================ */
const features = [
  {
    id: "faculty",
    emoji: "👩‍🏫",
    title: "Study with AGC's top faculty from Kota",
    description:
      "Daily live interactive classes led by AGC's national-level faculty, who have mentored countless AIR #1 and thousands of students who have made it to India's top IITs.",
  },
  {
    id: "rank",
    emoji: "📊",
    title: "Know where you stand against competition",
    description:
      "Get detailed test insights and see how you compare with AGC'S students across India through national-level benchmarking.",
  },
  {
    id: "practice",
    emoji: "📝",
    title: "Practice and revise anytime",
    description:
      "Create quizzes from 15,000+ teacher-certified questions using Custom Practice—choose topics, difficulty, and duration to suit your needs.",
  },
  {
    id: "doubt",
    emoji: "🔔",
    title: "Instant doubt resolution",
    description:
      "Get your doubts cleared instantly on the ALLEN app. Whether it's a tricky question or you need help at any time, you'll always find a solution or get support from our expert faculty right on the app.",
  },
];

function WhyChooseAllen() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
          Discover why toppers trust{" "}
          <span className="text-[#1453B8]">AGC Online for JEE success</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-16 gap-y-14">
          {features.map((feature) => (
            <div key={feature.id} className="max-w-md">
              <div className="w-16 h-16 flex items-center justify-center text-4xl mb-5 leading-none select-none">
                {feature.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   App Download Card
============================================================ */
function PlayStoreIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <defs>
        <linearGradient id="psBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00C6FF" />
          <stop offset="1" stopColor="#0072FF" />
        </linearGradient>
        <linearGradient id="psGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00F260" />
          <stop offset="1" stopColor="#0575E6" />
        </linearGradient>
      </defs>
      <path d="M4 3.4v17.2c0 .3.15.5.4.6l10-9.2-10-9.2c-.25.1-.4.3-.4.6Z" fill="url(#psBlue)" />
      <path d="M14.4 12l3.2-2.9-9.4-5.4a.6.6 0 00-.6 0L14.4 12Z" fill="#32BBFF" />
      <path d="M14.4 12l-6.8 8.3c.2.1.4.1.6 0l9.4-5.4-3.2-2.9Z" fill="url(#psGreen)" />
      <path d="M17.6 9.1L14.4 12l3.2 2.9 3.7-2.1a.8.8 0 000-1.5l-3.7-2.2Z" fill="#FFCC00" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M16.5 12.3c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.5 2 1-.1 1.4-.6 2.6-.6 1.2 0 1.6.6 2.7.6 1.1 0 1.8-1 2.5-2 .7-1 1-2 1-2.1-.1 0-2-.7-2-3.1Z"
        fill="#111"
      />
      <path
        d="M14.3 6c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-1 1.5-.8 2.4.9.1 1.8-.4 2.3-1.1Z"
        fill="#111"
      />
    </svg>
  );
}

function StoreTile({ label, rating, reviews, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 items-center justify-between gap-4 rounded-xl bg-[#eef2fb] px-6 py-4 transition-transform hover:scale-[1.02] sm:min-w-[220px]"
    >
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="mt-1 flex items-baseline gap-1.5">
          <span className="text-3xl font-extrabold text-brand-blue">{rating}</span>
          <span className="text-xs font-medium text-gray-400">{reviews}</span>
        </p>
      </div>
      {icon}
    </a>
  );
}

function AppDownloadCard({
  appName = "AGC",
  qrCodeImage = "/appqr.jpeg",
  playStore = {
    url: "https://play.google.com/store/apps/details?id=co.jarvis.agcl",
    rating: "4.8✨",
    // reviews: "9k+ Reviews",
  },
  appStore = {
    url: "https://apps.apple.com/app/idXXXXXXXXX",
    rating: "4.3",
    // reviews: "308 Reviews",
  },
}) {
  return (
    <section className="bg-[#edf2fa] px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl">
          Download the <span className="text-brand-blue">{appName} app</span> now!
        </h2>

        <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:items-stretch sm:justify-center">
          {/* QR code */}
          <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
            <img
              src={qrCodeImage}
              alt={`Scan to download the ${appName} app`}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Playstore rating */}
          <StoreTile
            label="Playstore"
            rating={playStore.rating}
            // reviews={playStore.reviews}
            href={playStore.url}
            icon={<PlayStoreIcon />}
          />

          {/* Appstore rating */}
          {/* <StoreTile
            label="Appstore"
            rating={appStore.rating}
            // reviews={appStore.reviews}
            href={appStore.url}
            icon={<AppStoreIcon />}
          /> */}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Page
============================================================ */
export default function JeeOnlinePage() {
  return (
    <main className="min-h-screen bg-[#EBEEF6]">
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <StatsSection />
      <ResultsCarousel />
      <CoursesSection />
      <Testimonials />
      <WhyChooseAllen />
      <AppDownloadCard />
      <Footer />
    </main>
  );
}
