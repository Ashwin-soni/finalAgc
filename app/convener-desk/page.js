import Image from "next/image";
import { Sparkles, Quote, GraduationCap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Convener's Desk | Awanish Gupta Classes",
  description:
    "A message from our convener, and the faculty team behind Awanish Gupta Classes.",
};

/**
 * Convener's Desk page — /conveners-desk
 *
 * Same visual language as the About Us page: blue-700 accents,
 * slate-900 headings, font-serif for display text, rounded-2xl cards
 * with soft slate borders. Two sections:
 *   1. Convener's message (photo + text card)
 *   2. Faculty team grid
 *
 * Photos already placed in /public:
 *   - convener-shilpa-gupta.jpg
 *   - faculty-prashant-hedaoo.jpg
 *   - faculty-shivanand-tiwari.jpg
 *   - faculty-nishant-singh-chouhan.jpg
 */

const MESSAGE_PARAGRAPHS = [
  "It gives me immense pleasure to introduce you to our newly established batches for class IX and X. We are all well aware of the legacy of Awanish Gupta Classes, and its evolution, in terms of advanced methodology of learning Mathematics.",
  "With this improved set of skills, we have started new batches for students of class IX and X, to help them gain a better understanding of the basics of Science and Mathematics, so that they are able to appreciate the applications of the subjects in the courses of further study.",
  "On behalf of Awanish Gupta Classes, I urge you to be a part of our family and benefit from our experience and expertise.",
];

const FACULTY = [
  {
    name: "Prashant Hedaoo",
    qualification: "B.E. (Electronics)",
    experience: "12 Years Teaching Experience",
    photo: "/faculty-prashant-hedaoo.jpg",
  },
  {
    name: "Shivanand Tiwari",
    qualification: "M.Sc. (Physics)",
    experience: "17 Years Teaching Experience",
    photo: "/faculty-shivanand-tiwari.jpg",
  },
  {
    name: "Nishant Singh Chouhan",
    qualification: "M.Sc. (Physics)",
    experience: "11 Years Teaching Experience",
    photo: "/faculty-nishant-singh-chouhan.jpg",
  },
];

export default function ConvenersDeskPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fdfdfc] text-[#1e293b] antialiased">
        {/* Section header, same pattern as About Us */}
        <header className="border-b border-slate-200/80 bg-white/60 px-6 py-10 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                <Sparkles className="h-3 w-3 text-blue-600" />
                <span>Leadership</span>
              </h2>
            </div>
            <h1 className="mt-2 text-4xl font-serif leading-tight tracking-tight text-[#0f172a] sm:text-5xl">
              Convener&apos;s Desk
            </h1>
          </div>
        </header>

        {/* Convener message: photo + text */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            {/* Photo */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:h-full lg:aspect-auto">
                <Image
                  src="/convener-shilpa-gupta.jpg"
                  alt="Shilpa Gupta, Convener at Awanish Gupta Classes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Message card */}
            <div className="flex flex-col justify-center rounded-2xl border border-blue-100 bg-blue-50/70 p-7 sm:p-10">
              <div className="mb-4 flex items-center gap-2">
                <Quote className="h-4 w-4 text-blue-700" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                  My Dear Students
                </span>
              </div>

              <div className="space-y-4 text-[15px] leading-relaxed text-slate-700">
                {MESSAGE_PARAGRAPHS.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-6 border-t border-blue-100 pt-5">
                <p className="font-serif text-lg font-semibold text-[#0f172a]">
                  Shilpa Gupta
                </p>
                <p className="text-xs text-slate-500">
                  Convener, Awanish Gupta Classes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty team */}
        <section className="border-t border-slate-200/80 bg-[#f8fafc]">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div className="max-w-2xl">
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                <GraduationCap className="h-3 w-3 text-blue-600" />
                <span>Our Team</span>
              </span>
              <h2 className="mt-2 text-2xl font-serif tracking-tight text-[#0f172a] sm:text-3xl">
                Meet our faculty
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Experienced educators dedicated to building strong
                fundamentals in Mathematics and Physics.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FACULTY.map((member) => (
                <div
                  key={member.name}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-serif text-lg font-semibold text-[#0f172a]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {member.qualification}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {member.experience}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
