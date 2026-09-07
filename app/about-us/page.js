import React from "react";
import Image from "next/image";
import { BookOpen, Brain, CheckCircle2, Sparkles, Target, Compass } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import OurLocationSection from "../../components/OurLocationSection";

export const metadata = {
  title: "About Us | Awanish Gupta Classes",
  description:
    "Why students fear mathematics, and how Awanish Gupta Classes teaches them to actually use it.",
};

const photos = {
  left: [
    {
      id: "photo-left-1",
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      alt: "Student smiling in a collaborative classroom environment",
      aspectClass: "aspect-square",
      label: "Classroom Insight I",
      caption: "Interactive classroom discussions",
    },
    {
      id: "photo-left-2",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      alt: "Student practicing mathematical derivations on a notebook",
      aspectClass: "aspect-[4/5]",
      label: "Concept-First Learning",
      caption: "Active problem solving",
    },
    {
      id: "photo-left-3",
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      alt: "Students actively engaged during a lecture",
      aspectClass: "aspect-square",
      label: "Student Success",
      caption: "Engaged mathematical reasoning",
    },
  ],
  right: [
    {
      id: "photo-right-1",
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
      alt: "Analytical reasoning and structured equation solving",
      aspectClass: "aspect-square",
      label: "Collaborative Study",
      caption: "Fundamental clarity",
    },
    {
      id: "photo-right-2",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      alt: "Peer problem-solving and group mathematical reasoning",
      aspectClass: "aspect-[4/5]",
      label: "Peer Discussion",
      caption: "Collaborative growth",
    },
    {
      id: "photo-right-3",
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      alt: "Focused student preparing for competitive examinations",
      aspectClass: "aspect-square",
      label: "Academic Mastery",
      caption: "Dedicated mentorship",
    },
  ],
  bottom: [
    {
      id: "photo-bottom-1",
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
      alt: "Student exploring advanced mathematical problem sets",
      aspectClass: "aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5]",
      label: "Disciplined Study",
      caption: "High-yield practice routines",
    },
    {
      id: "photo-bottom-2",
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
      alt: "A group of focused students in an active academic session",
      aspectClass: "aspect-[16/9]",
      label: "AGC Cohort",
      caption: "Awanish Gupta Classes learning cohort",
    },
  ],
};

function NaturalDuotonePhoto({ id, src, alt, aspectClass, caption, label }) {
  return (
    <figure
      id={id}
      tabIndex={0}
      className={`group relative w-full overflow-hidden rounded-2xl bg-blue-50/90 border border-blue-100/90 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${aspectClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
        className="object-cover scale-105 filter grayscale sepia-[15%] hue-rotate-[190deg] saturate-125 transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100"
        referrerPolicy="no-referrer"
      />
      {/* Natural Tones duotone multiply overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-blue-600/20 mix-blend-multiply transition-opacity duration-700 ease-out group-hover:opacity-0"
      />
      {/* Subtle top label tag */}
      {label && (
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-xs text-[10px] uppercase tracking-wider font-semibold text-blue-900 px-2.5 py-1 rounded-md border border-white/60 transition-opacity duration-500 group-hover:bg-slate-900/70 group-hover:text-white group-hover:border-transparent">
          {label}
        </div>
      )}
      {/* Soft gradient bottom scrim for caption visibility on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {caption && (
        <figcaption className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white opacity-0 transform translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main
        id="about-us-page"
        className="min-h-screen bg-[#fdfdfc] text-[#1e293b] antialiased"
      >
      {/* Header */}
      <header
        id="about-header"
        className="border-b border-slate-200/80 bg-white/60 backdrop-blur-xs px-6 py-10 sm:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-blue-600" />
                <span>Educational Excellence</span>
              </h2>
            </div>
            <h1 className="mt-2 text-4xl sm:text-5xl font-serif text-[#0f172a] leading-tight tracking-tight">
              Beyond Formulas:<br />
              <span className="italic text-blue-700 font-serif">Understanding Math.</span>
            </h1>
          </div>
          <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-100 pl-4 md:pl-0 md:pr-4">
            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-medium">
              Awanish Gupta Classes
            </p>
            <p className="text-xs font-semibold text-slate-800 mt-0.5">
              Est. 2008 • Academic Mastery
            </p>
          </div>
        </div>
      </header>

      {/* Main Narrative & Bento Photo Layout */}
      <section
        id="about-main-content"
        className="mx-auto max-w-6xl px-6 py-12 sm:px-12 lg:px-16 lg:py-16"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">

          {/* Left Column (3 cols) */}
          <aside
            id="photo-column-left"
            className="lg:col-span-3 flex flex-col gap-5 order-2 lg:order-1"
            aria-label="Classroom and student photo gallery left column"
          >
            <NaturalDuotonePhoto {...photos.left[0]} />
            <NaturalDuotonePhoto {...photos.left[1]} />
            <NaturalDuotonePhoto {...photos.left[2]} />
          </aside>

          {/* Central Editorial Narrative (6 cols) */}
          <article
            id="about-editorial-card"
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="border-l-2 border-blue-100 pl-6 sm:pl-8 space-y-6">

              {/* Primary Thesis */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold block mb-1">
                  The Core Problem
                </span>
                <p className="text-lg sm:text-xl leading-relaxed text-slate-800 font-normal">
                  Many students develop a fear of mathematics not because of the subject itself, but due to{" "}
                  <strong className="text-blue-700 font-semibold underline decoration-blue-200 decoration-2 underline-offset-4">
                    inefficient study habits
                  </strong>
                  . At Awanish Gupta Classes, we bridge the gap between lecture and logic.
                </p>
              </div>

              {/* Reasons Breakdown */}
              <div className="rounded-2xl bg-blue-50/60 border border-blue-100/70 p-6 space-y-4">
                <h3 className="font-serif italic text-base sm:text-lg text-[#0f172a]">
                  Why students struggle with mathematics:
                </h3>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-[11px]">
                    1
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">
                    <strong className="font-semibold text-slate-900">Inefficient study habits:</strong> Students who spend hours each day studying, but remain unable to perform effectively due to unstructured practice.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-[11px]">
                    2
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">
                    <strong className="font-semibold text-slate-900">Insufficient engagement:</strong> Not dedicating qualitative, focused problem-solving hours to deeply internalize core concepts.
                  </p>
                </div>
              </div>

              {/* Active Learning Narrative */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>
                  Different people learn differently. Mathematics, however, is one subject which is <strong className="text-slate-900 font-medium">best learnt by doing</strong>. It cannot be understood merely by attending lectures and memorizing sample problem sets. In order to master mathematics, one must be actively involved in the learning process.
                </p>

                <p>
                  Awanish Gupta Classes grooms students into understanding fundamental concepts from the very onset. We introduce <strong className="text-blue-700 font-semibold">innovative methods</strong> to cultivate genuine curiosity and love for the discipline, encouraging students to actively participate in class discussions.
                </p>
              </div>

              {/* Formula & Application Focus */}
              <div className="border-t border-slate-200/80 pt-6 space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                  In order to perform better in mathematics, one needs to do more than simply memorizing formulae. While memorization is foundational, true skill lies in understanding how to <strong className="text-[#0f172a] font-bold underline decoration-blue-600 decoration-2 underline-offset-2">USE</strong> different formulae in dynamic, unfamiliar situations and respecting their domain restrictions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                    <h4 className="font-serif italic text-base text-[#0f172a] mb-1">
                      Innovative Methods
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Grooming students to understand fundamental concepts from the very onset.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                    <h4 className="font-serif italic text-base text-[#0f172a] mb-1">
                      Active Participation
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Encouraging rigorous discussion and live derivations to build lasting intuition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion Callout */}
              <div className="rounded-xl bg-[#0f172a] p-5 text-white shadow-xs">
                <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-200">
                  We help students to <span className="text-blue-300 font-semibold">identify the situations</span> and <span className="text-blue-300 font-semibold">USE</span> the correct formulae as per the exact requirement of the problem.
                </p>
              </div>

            </div>
          </article>

          {/* Right Column (3 cols) */}
          <aside
            id="photo-column-right"
            className="lg:col-span-3 flex flex-col gap-5 order-3"
            aria-label="Classroom and student photo gallery right column"
          >
            <NaturalDuotonePhoto {...photos.right[0]} />
            <NaturalDuotonePhoto {...photos.right[1]} />
            <NaturalDuotonePhoto {...photos.right[2]} />
          </aside>

          {/* Bottom Photo Span (12 cols) */}
          <div
            id="photo-row-bottom"
            className="lg:col-span-12 grid grid-cols-1 md:grid-cols-[1fr_1.85fr] gap-6 order-4 pt-4"
          >
            <NaturalDuotonePhoto {...photos.bottom[0]} />
            <NaturalDuotonePhoto {...photos.bottom[1]} />
          </div>
        </div>
      </section>

      {/* Core Educational Pillars */}
      <section
        id="pedagogy-pillars"
        className="mx-auto max-w-6xl px-6 py-12 sm:px-12 lg:px-16"
      >
        <div className="border-t border-slate-200/80 pt-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold">
              Our Methodology
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-[#0f172a] tracking-tight">
              Building mathematical intuition step by step
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Replacing anxiety with structured methodology, contextual clarity, and disciplined practice.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div
              id="pillar-active-learning"
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#0f172a]">
                Active Learning by Doing
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Mathematics cannot be absorbed passively. Students build intuition by deriving formulas and solving problems directly with continuous feedback.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Hands-on practice sessions</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div
              id="pillar-contextual-formulae"
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#0f172a]">
                Contextual Formula Usage
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Beyond memorization, students master identifying exact constraints and boundary conditions under which formulas are applicable.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Condition & restriction mastery</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div
              id="pillar-study-habits"
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#0f172a]">
                Structured Study Habits
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Replacing unproductive hours with focused, high-yield study workflows that produce measurable academic confidence.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Structured problem roadmaps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creed Callout Section */}
      <section
        id="about-quote-callout"
        className="mx-auto max-w-6xl px-6 pb-20 sm:px-12 lg:px-16"
      >
        <div className="rounded-2xl bg-[#f1f5f9] border border-slate-200 p-8 sm:p-10 text-slate-900 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-blue-700 text-[10px] font-bold uppercase tracking-[0.2em]">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Teaching Creed</span>
              </div>
              <blockquote className="mt-3 font-serif italic text-xl sm:text-2xl font-normal leading-relaxed text-[#0f172a]">
                &ldquo;The best way to learn mathematics is to solve. One should understand how to <span className="text-blue-700 not-italic font-semibold">USE</span> different formulae in different situations.&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="w-10 h-[1px] bg-blue-600" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Faculty Lead</span>
                <span className="text-sm font-serif font-semibold text-[#0f172a]">Awanish Gupta Classes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <OurLocationSection />
      <Footer />
    </>
  );
}
