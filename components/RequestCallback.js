"use client";

// Replace with your real Calendly (or any scheduling) link
const CALENDLY_URL = "https://calendly.com/your-team/callback";

const BENEFITS = [
  {
    title: "Talk to a counsellor",
    desc: "Get matched with someone who knows your exam inside out.",
    icon: <PhoneIcon />,
  },
  {
    title: "Pick a slot that suits you",
    desc: "Choose a day and time that works for your schedule.",
    icon: <CalendarIcon />,
  },
  {
    title: "No pressure, just guidance",
    desc: "A quick 10-minute call to plan your next steps.",
    icon: <SparkIcon />,
  },
];

export default function RequestCallback() {
  const handleSchedule = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto max-w-container px-4 py-14 lg:px-8">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-4">
        {/* Left: illustration / pitch, same as the reference design */}
        <div
          className="relative overflow-hidden rounded-3xl border border-gray-100 px-8 py-10 sm:px-12 sm:py-14"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #f3f5f9 1px, transparent 1px), linear-gradient(180deg, #f3f5f9 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-2xl">
            🚀
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Request a callback
          </h2>

          <p className="mt-4 text-base text-gray-500">
            Or call{" "}
            <a
              href="tel:+91 9406761800"
              className="font-semibold text-gray-700 hover:text-brand-blue"
            >
              +91 9406761800
            </a>
          </p>

          <div className="mt-10 max-w-xs">
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              <div className="h-1.5 w-1/2 rounded-full bg-emerald-400" />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              Step 1 of 2 · pick a time that works for you
            </p>
          </div>
        </div>

        {/* Right: attracting callback card, no form -> redirects to Calendly */}
        <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-brand-blue to-[#0B2A6B] px-8 py-10 text-white sm:px-12 sm:py-14">
          <h3 className="text-2xl font-extrabold sm:text-3xl">
            Let&apos;s find the right course for you
          </h3>
          <p className="mt-3 text-blue-100">
            Skip the form. Grab a slot directly on our calendar and we&apos;ll
            call you at a time that works for you.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  {b.icon}
                </span>
                <div>
                  <p className="font-semibold">{b.title}</p>
                  <p className="text-sm text-blue-100/80">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleSchedule}
            className="mt-9 flex items-center justify-center gap-2 rounded-xl bg-brand-yellow px-6 py-4 text-base font-bold text-gray-900 transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            Request a Callback
            <ArrowIcon />
          </button>

          <p className="mt-3 text-center text-xs text-blue-100/70">
            Opens our scheduling page in a new tab
          </p>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8c1.3 2.7 3.6 5 6.4 6.4l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5.6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.3 1.7Z"
        fill="white"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="white" strokeWidth="1.6" />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
        fill="white"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
