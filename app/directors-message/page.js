import Image from "next/image";
import { Sparkles, Quote } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Director's Message | Awanish Gupta Classes",
  description:
    "A message from Awanish Gupta, founder and director of Awanish Gupta Classes.",
};

/**
 * Director's Message page — /directors-message
 *
 * Layout mirrors the reference design (photo of the director teaching,
 * with a message card overlaid top-left) but restyled with the same
 * palette and type used across the rest of the site: blue-700 accents,
 * slate-900 headings, font-serif for display text, rounded-2xl cards
 * with soft slate borders — matching the About Us page.
 *
 * The director photograph is stored at `/public/directorsMessage.png`.
 */

const MESSAGE_PARAGRAPHS = [
  "Since the establishment of Awanish Gupta Classes, it has been a long, exciting and enriching journey. We have learnt and evolved advanced methods of teaching mathematics.",
  "In this process of growth, many students have been benefitted, who are also equally responsible for our success. With the passage of time, we have become more committed towards serving our students by empowering them with a better understanding of the basics of Mathematics and enabling them to achieve their dreams of getting through various competitive examinations.",
  "I extend a warm invitation to all of you to become a part of our esteemed family and benefit from our expertise. Let us, together, learn and enable ourselves with knowledge, and work for the betterment of society…",
];

export default function DirectorsMessagePage() {
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
              Director&apos;s Message
            </h1>
          </div>
        </header>

        {/* Photo + overlaid message card */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            {/* Photo */}
            <div className="relative aspect-[64/65] w-full">
              <Image
                src="/directorsMessage.png"
                alt="Awanish Gupta teaching a class of students"
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-contain object-center"
                priority
              />
              {/* subtle darkening so the overlay card stays readable
                  on any photo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-transparent to-transparent"
              />
            </div>

            {/* Message card, overlaid top-left like the reference */}
            <div className="absolute left-4 top-4 max-w-md sm:left-8 sm:top-8 sm:max-w-lg lg:left-10 lg:top-10">
              <div className="rounded-xl bg-blue-50/95 p-5 shadow-lg backdrop-blur-sm sm:p-7">
                <div className="mb-3 flex items-center gap-2">
                  <Quote className="h-4 w-4 text-blue-700" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                    Dear Students
                  </span>
                </div>

                <div className="space-y-3 text-[13px] leading-relaxed text-slate-700 sm:text-sm">
                  {MESSAGE_PARAGRAPHS.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <p className="mt-4 font-serif text-base font-semibold text-[#0f172a]">
                  Awanish Gupta
                </p>
                <p className="text-xs text-slate-500">
                  Founder &amp; Director, Awanish Gupta Classes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing creed callout, same style as the About Us page */}
        <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-12 lg:px-16">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f1f5f9] p-8 text-slate-900 shadow-xs sm:p-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Our Commitment</span>
              </div>
              <blockquote className="max-w-2xl font-serif text-xl italic leading-relaxed text-[#0f172a] sm:text-2xl">
                &ldquo;Let us, together, learn and enable ourselves with{" "}
                <span className="not-italic font-semibold text-blue-700">
                  knowledge
                </span>
                , and work for the betterment of society.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
