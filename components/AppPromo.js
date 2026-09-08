"use client";

// Replace with your real store links
const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=co.jarvis.agcl";
const LEARN_MORE_URL = "/app";

// Real QR code image — place app-qr-code.jpg in your project's /public folder.
const QR_CODE_IMAGE = "/appqr.jpeg";

const FEATURES = [
  "Live & recorded classes, anywhere",
  "Daily practice tests with instant results",
  "Doubt-solving with expert mentors",
  "Track your progress in real time",
];

export default function AppPromo() {
  return (
    <section className="mx-auto max-w-container px-4 py-14 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1A3A] to-brand-blue">
        <div className="grid grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-6">
          {/* Left: copy + CTAs */}
          <div className="text-white">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-100">
              NOW ON MOBILE
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Your whole prep,
              <br />
              in one app
            </h2>

            <p className="mt-3 max-w-md text-blue-100">
              Classes, tests, doubt-solving and results — everything you need
              to crack your exam, right in your pocket.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-blue-50">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Store badges */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 transition-transform hover:scale-[1.03]"
              >
                <PlayStoreIcon />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-gray-500">
                    GET IT ON
                  </span>
                  <span className="block text-sm font-bold text-gray-900">
                    Google Play
                  </span>
                </span>
              </a>

              
            </div>

            {/* Learn more link */}
            <a
              href={LEARN_MORE_URL}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow hover:underline"
            >
              Learn more about our app
              <ArrowIcon />
            </a>
          </div>

          {/* Right: phone mockup + QR code, side by side in the open space */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-center lg:justify-end lg:gap-10">
            <PhoneMockup />

            {/* QR code card — standalone, fully visible, not overlapping the phone */}
            <div className="flex w-40 flex-col items-center gap-3 rounded-2xl bg-white p-4 text-center shadow-xl">
              <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={QR_CODE_IMAGE}
                  alt="Scan to download the app"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-xs font-semibold leading-snug text-gray-700">
                Scan to download the app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="#34D399" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 3.5v17a.5.5 0 00.8.4l13-8.5a.5.5 0 000-.8l-13-8.5a.5.5 0 00-.8.4Z" fill="#34A853" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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

function PhoneMockup() {
  return (
    <div className="relative h-[340px] w-[170px] rounded-[2rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl sm:h-[400px] sm:w-[200px]">
      <div className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-gray-900" />
      <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-blue-50 to-white">
        {/* fake app UI */}
        <div className="flex items-center justify-between bg-brand-blue px-4 py-3">
          <span className="text-xs font-bold text-white">My Courses</span>
          <span className="h-5 w-5 rounded-full bg-white/30" />
        </div>
        <div className="space-y-3 p-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
              <div className="h-2 w-2/3 rounded bg-gray-200" />
              <div className="mt-2 h-2 w-1/2 rounded bg-gray-100" />
              <div className="mt-3 h-6 w-16 rounded-full bg-blue-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
