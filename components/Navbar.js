"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  //{ label: "Online Courses", href: "#online-courses" },
  { label: "Test Series", href: "https://classplusapp.com/" },
  { label: "Results", href: "/Results" },
  { label: "Our Socials", href: "/socials" },
  // { label: "Study Materials", href: "#study-materials" },
];

const MORE_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Director's Message", href: "/directors-message" },
  { label: "Convener Desk", href: "/convener-desk" },
  { label: "Behind the Curtain", href: "/behind-the-curtain" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-1">
          <span className="text-2xl font-extrabold tracking-tight text-brand-blue">
            AWANISH GUPTA
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            CLASSES
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative whitespace-nowrap text-[15px] font-medium text-gray-800 transition-colors hover:text-brand-blue"
            >
              {link.label}
              {link.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-1.5 py-[1px] text-[9px] font-bold text-gray-900">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 whitespace-nowrap text-[15px] font-medium text-gray-800 transition-colors group-hover:text-brand-blue focus:text-brand-blue"
              aria-haspopup="true"
            >
              More
              <ChevronDownIcon />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                {MORE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-brand-blue focus:bg-blue-50 focus:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://calendly.com/your-team/callback"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a callback"
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-white sm:flex"
          >
            <PhoneIcon />
          </a>
          {/* <button className="rounded-full border border-gray-300 px-5 py-1.5 text-sm font-semibold text-gray-900 transition-colors hover:border-brand-blue hover:text-brand-blue">
            Login
          </button> */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 lg:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-100 px-4 py-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              {link.label}
              {link.badge && (
                <span className="rounded-full bg-brand-yellow px-1.5 py-[1px] text-[9px] font-bold text-gray-900">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <div className="mt-1 border-t border-gray-100 pt-2">
            <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              More
            </p>
            {MORE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8c1.3 2.7 3.6 5 6.4 6.4l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5.6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.3 1.7Z"
        fill="white"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
