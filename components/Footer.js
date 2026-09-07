const FOOTER_COLUMNS = [
  {
    heading: "About",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Blog", href: "/blog" },
      { label: "Apex News", href: "/news" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Public notice", href: "/public-notice" },
      { label: "Careers", href: "/careers" },
      { label: "Dhoni Inspires NEET Aspirants", href: "/dhoni-neet" },
      { label: "Dhoni Inspires JEE Aspirants", href: "/dhoni-jee" },
    ],
  },
  {
    heading: "Help & Support",
    links: [
      { label: "Refund policy", href: "/refund-policy" },
      { label: "Transfer policy", href: "/transfer-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    heading: "Popular goals",
    links: [
      { label: "NEET Coaching", href: "/neet-coaching" },
      { label: "JEE Coaching", href: "/jee-coaching" },
      { label: "6th to 10th", href: "/foundation" },
    ],
  },
  {
    heading: "Courses",
    links: [
      { label: "Classroom Courses", href: "/classroom-courses" },
      { label: "Online Courses", href: "/online-courses" },
      { label: "Distance Learning", href: "/distance-learning" },
      { label: "Online Test Series", href: "/online-test-series" },
      { label: "International Olympiads Online Course", href: "/olympiads" },
      { label: "NEET Test Series", href: "/neet-test-series" },
      { label: "JEE Test Series", href: "/jee-test-series" },
      { label: "JEE Main Test Series", href: "/jee-main-test-series" },
    ],
  },
  {
    heading: "Centers",
    links: [
      { label: "Kota", href: "/centers/kota" },
      { label: "Bangalore", href: "/centers/bangalore" },
      { label: "Indore", href: "/centers/indore" },
      { label: "Delhi", href: "/centers/delhi" },
      { label: "More centres", href: "/centers" },
    ],
  },
  {
    heading: "Exam information",
    links: [
      { label: "JEE Main", href: "/jee-main" },
      { label: "JEE Advanced", href: "/jee-advanced" },
      { label: "NEET UG", href: "/neet-ug" },
      { label: "CBSE", href: "/cbse" },
      { label: "NIOS", href: "/nios" },
      { label: "NCERT Solutions", href: "/ncert-solutions" },
      { label: "Olympiad", href: "/olympiad" },
      { label: "NEET Mock Test", href: "/neet-mock-test" },
      { label: "NEET Past Years Papers", href: "/neet-past-papers" },
      { label: "NEET Sample Papers", href: "/neet-sample-papers" },
      { label: "NEET Answer Key 2026", href: "/neet-answer-key" },
      { label: "NEET College Predictor 2026", href: "/neet-college-predictor" },
      { label: "NEET Rank Predictor 2026", href: "/neet-rank-predictor" },
      { label: "NEET Cutoff", href: "/neet-cutoff" },
      { label: "NEET Exam Analysis", href: "/neet-exam-analysis" },
      { label: "NEET Revision Notes", href: "/neet-revision-notes" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@agcjabalpur2334", icon: <YouTubeIcon /> },
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
  { label: "Facebook", href: "https://facebook.com", icon: <FacebookIcon /> },
  { label: "X", href: "https://x.com", icon: <XIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedInIcon /> },
];

export default function Footer() {
  return (
    <footer className="bg-[#edf2fa] border-t border-gray-300 pt-12 pb-12">
      <div className="mx-auto max-w-container px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-bold text-gray-900">{col.heading}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-blue transition-colors hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-10 border-gray-300" />

        <div className="mt-6 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* socials + copyright */}
          <div>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center text-gray-800 transition-colors hover:text-brand-blue"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Awanish Gupta Classes Pvt. Ltd. © All Rights Reserved.
            </p>
          </div>

          {/* ISO badge */}
          <ISOBadge />
        </div>
      </div>
    </footer>
  );
}

function ISOBadge() {
  return (
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-blue-900 text-center">
      <div className="leading-tight">
        <p className="text-[7px] font-semibold text-blue-900">
          International
          <br />
          Organization for
          <br />
          Standardization
        </p>
        <p className="mt-0.5 text-[9px] font-extrabold text-blue-900">ISO</p>
        <p className="text-[8px] font-bold text-blue-900">27001:2022</p>
      </div>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
      <path d="M10 9l6 3-6 3V9Z" fill="white" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M13.5 8.5h1.5V6h-1.7c-1.9 0-3 1.1-3 3v1.5H9v2.5h1.3V18h2.6v-5h1.9l.4-2.5h-2.3V9c0-.4.2-.5.6-.5Z"
        fill="white"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4l7 8.5L4.3 20H6l5-5.7 4 5.7h4.7l-7.3-9 6.4-7.3h-1.7L12.4 9 8.7 4H4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
      <rect x="6" y="10" width="2.5" height="8" fill="white" />
      <circle cx="7.2" cy="6.8" r="1.4" fill="white" />
      <path
        d="M11 10h2.4v1.2c.4-.7 1.3-1.4 2.7-1.4 2 0 3 1.3 3 3.7V18h-2.5v-3.9c0-1-.4-1.7-1.4-1.7-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8V18H11v-8Z"
        fill="white"
      />
    </svg>
  );
}
