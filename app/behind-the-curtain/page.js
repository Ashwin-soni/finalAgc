import Image from "next/image";
import { Sparkles, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Behind the Curtain | Awanish Gupta Classes",
  description:
    "Meet the team behind Awanish Gupta Classes — the people who keep everything running, on and off stage.",
};

/**
 * Behind the Curtain page — /behind-the-curtain
 *
 * Same visual language as About Us / Convener's Desk: blue-700 accents,
 * slate-900 headings, font-serif for display text, rounded-2xl cards
 * with soft slate borders.
 *
 * Photos already placed in /public as staff-<firstname>.jpg, cropped
 * from the original composite photo.
 */

const TEAM = [
  {
    name: "Arnav Anuj Kasar",
    role: "Founder's Office",
    photo: "/staff-arnav.jpg",
    featured: true,
  },
  { name: "Rohit Patel", role: "Secretary", photo: "/staff-rohit.jpg" },
  {
    name: "Deepak Das",
    role: "Computer Administrator",
    photo: "/staff-deepak.jpg",
  },
  {
    name: "Sanjay Upadhyay",
    role: "Computer Administrator",
    photo: "/staff-sanjay.jpg",
  },
  { name: "Aditya Jharia", role: "Manager", photo: "/staff-aditya.jpg" },
  { name: "Ankur Tiwari", role: "Receptionist", photo: "/staff-ankur.jpg" },
  { name: "Vipin Soni", role: "Receptionist", photo: "/staff-vipin.jpg" },
  { name: "Vikas Patel", role: "Office Boy", photo: "/staff-vikas.jpg" },
  { name: "Sachin Jharia", role: "Office Boy", photo: "/staff-sachin.jpg" },
];

export default function BehindTheCurtainPage() {
  const [featured, ...rest] = TEAM;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fdfdfc] text-[#1e293b] antialiased">
        {/* Section header, same pattern as About Us / Convener's Desk */}
        <header className="border-b border-slate-200/80 bg-white/60 px-6 py-10 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                <Sparkles className="h-3 w-3 text-blue-600" />
                <span>Our People</span>
              </h2>
            </div>
            <h1 className="mt-2 text-4xl font-serif leading-tight tracking-tight text-[#0f172a] sm:text-5xl">
              Behind the Curtain
            </h1>
          </div>
        </header>

        {/* Why they matter — intro copy */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-12 lg:px-16">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-7 sm:p-10">
            <div className="mb-3 flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-700" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                Why They Matter
              </span>
            </div>
            <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              <p>
                A coaching center is never just its teachers and its
                results. Behind every batch that runs on time, every doubt
                that gets resolved without a wait, and every parent who gets
                a clear answer on the phone, there is a team working quietly
                in the background.
              </p>
              <p>
                Our administrators keep attendance, records, and systems
                running so faculty can focus on teaching. Our receptionists
                are often the first voice a worried parent hears, and the
                first face a nervous new student meets. Our office staff
                make sure classrooms are ready, materials reach students on
                time, and the small things that could go wrong, don&apos;t.
              </p>
              <p>
                None of this shows up on a results banner — but none of the
                results happen without it. This page is our way of putting
                names and faces to the people who make Awanish Gupta Classes
                work, every single day.
              </p>
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Featured / larger card for the first person */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-blue-200 hover:shadow-md sm:col-span-2 sm:row-span-2">
              <div className="relative aspect-[4/5] w-full sm:aspect-[4/4.2]">
                <Image
                  src={featured.photo}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-5 text-center sm:p-6">
                <h3 className="font-serif text-xl font-semibold text-[#0f172a]">
                  {featured.name}
                </h3>
                <span className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {featured.role}
                </span>
              </div>
            </div>

            {/* Remaining team members */}
            {rest.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-blue-200 hover:shadow-md"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-sm font-semibold text-[#0f172a] sm:text-base">
                    {member.name}
                  </h3>
                  <span className="mt-2 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
