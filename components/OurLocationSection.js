"use client";

import { useState } from "react";

/**
 * OurLocationSection
 * Two-column "Our Location" section on a brand-blue gradient, with a
 * card containing the same details plus an interactive map on the right.
 * The map starts grayscale and turns to full color on hover/focus;
 * clicking it opens the real Google Maps listing in a new tab.
 *
 * Usage:
 *   import OurLocationSection from "@/components/OurLocationSection";
 *   <OurLocationSection />
 */

const MAPS_LINK = "https://maps.app.goo.gl/mU6hFAdzM1hHYyiR9";
const LAT = 23.1715975;
const LNG = 79.9101523;
const EMBED_SRC = `https://www.google.com/maps?q=${LAT},${LNG}&z=15&output=embed`;

const DETAILS = {
  name: "Awanish Gupta Classes",
  line1: "Jabalpur, Madhya Pradesh",
  email: "agcjabalpur@gmail.com",
  phone: "+91 9406761800",
};

/* ---------------- Icons ---------------- */
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-7.05 7-12.5A7 7 0 0 0 5 9.5C5 14.95 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6.5 12 13l8-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C10.6 20.5 3.5 13.4 3.5 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AddressBlock() {
  const rows = [
    { icon: <PinIcon />, text: DETAILS.line1 },
    { icon: <MailIcon />, text: DETAILS.email },
    { icon: <PhoneIcon />, text: DETAILS.phone },
  ];
  return (
    <div className="ols-address">
      <p className="ols-name">{DETAILS.name}</p>
      {rows.map((row) => (
        <div
          className="ols-row"
          key={row.text}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: "0.7rem",
          }}
        >
          <span
            className="ols-row-icon"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              flex: "0 0 32px",
              lineHeight: 0,
            }}
          >
            {row.icon}
          </span>
          <span style={{ lineHeight: 1.4 }}>{row.text}</span>
        </div>
      ))}
    </div>
  );
}

export default function OurLocationSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="ols-section">
      <div className="ols-grid">
        {/* Left: plain text */}
        <div className="ols-copy">
          <span className="ols-eyebrow">Get in touch</span>
          <h2 className="ols-heading">
            Our <em>Location</em>
          </h2>
          <p className="ols-lead">
            Visit us in Jabalpur or join online from anywhere in India. We
            provide focused JEE &amp; NEET coaching tailored to every
            student&rsquo;s pace.
          </p>
          <AddressBlock />

          <a
            className="ols-cta"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
            <ArrowIcon />
          </a>
        </div>

        {/* Right: card with map */}
        <div
          className={`ols-card ${hovered ? "is-hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="ols-card-head">
            <p className="ols-card-title">Find us here</p>
            <p className="ols-card-sub">Jabalpur, Madhya Pradesh</p>
          </div>

          <div className="ols-map-frame">
            <iframe
              className="ols-map"
              src={EMBED_SRC}
              title="Map to Awanish Gupta Classes"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              tabIndex={-1}
              aria-hidden="true"
            />
            <div className="ols-map-shade" />
            <a
              className="ols-map-link"
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Awanish Gupta Classes location in Google Maps"
            >
              <span className="ols-map-pill">
                View larger map
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ols-section {
          --ink: #ffffff;
          --muted: #c7d7ff;
          --card: #ffffff;
          --map-fallback: #eef2fa;
          --accent: #ffb648;
          --brand: #1456e8;
          position: relative;
          background: radial-gradient(120% 140% at 0% 0%, #16296b 0%, #0b1a3a 42%, #1456e8 100%);
          padding: 5.5rem 1.5rem;
          font-family: "Inter", system-ui, -apple-system, sans-serif;
          color: var(--ink);
          overflow: hidden;
        }

        .ols-section::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -120px;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(255, 182, 72, 0.18) 0%, rgba(255, 182, 72, 0) 70%);
          pointer-events: none;
        }

        .ols-grid {
          position: relative;
          max-width: 68rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .ols-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.9rem;
        }

        .ols-heading {
          font-family: "Fraunces", Georgia, serif;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 1.1;
          margin: 0 0 1.25rem;
          letter-spacing: -0.01em;
        }
        .ols-heading em {
          font-style: italic;
          font-weight: 400;
          color: #ffd9a0;
        }

        .ols-lead {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--muted);
          margin: 0 0 2rem;
          max-width: 30rem;
        }

        .ols-address {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          margin-bottom: 2.25rem;
        }
        .ols-name {
          font-weight: 600;
          font-size: 1.02rem;
          margin: 0 0 0.3rem;
          color: var(--ink);
        }
        .ols-row {
          font-size: 0.95rem;
          color: var(--ink);
        }
        .ols-row-icon {
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffd9a0;
        }
        .ols-row-icon :global(svg) {
          display: block;
        }

        .ols-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          color: var(--brand);
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.75rem 1.4rem;
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 10px 24px -10px rgba(0, 0, 0, 0.35);
        }
        .ols-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -10px rgba(0, 0, 0, 0.45);
        }

        .ols-card {
          position: relative;
          background: var(--card);
          border-radius: 20px;
          padding: 1.75rem;
          color: #241b1e;
          box-shadow: 0 40px 70px -30px rgba(5, 12, 40, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .ols-card-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.15rem 0.35rem 1.1rem;
        }
        .ols-card-title {
          margin: 0;
          font-weight: 700;
          font-size: 1.05rem;
          color: #16204a;
        }
        .ols-card-sub {
          margin: 0;
          font-size: 0.8rem;
          color: #8b93a8;
        }

        .ols-map-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          overflow: hidden;
          border-radius: 14px;
          background: var(--map-fallback);
          border: 1px solid #e6eaf3;
        }

        .ols-map {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          pointer-events: none;
          filter: grayscale(1) contrast(1.02) brightness(1.01);
          transform: scale(1.03);
          transition: filter 0.6s ease, transform 0.6s ease;
        }
        .ols-card.is-hovered .ols-map {
          filter: grayscale(0) contrast(1) brightness(1);
          transform: scale(1.05);
        }

        .ols-map-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 26, 58, 0) 60%, rgba(11, 26, 58, 0.16) 100%);
          pointer-events: none;
        }

        .ols-map-link {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 0.9rem;
          text-decoration: none;
        }
        .ols-map-link:focus-visible {
          outline: 2px solid var(--brand);
          outline-offset: 2px;
          border-radius: 8px;
        }

        .ols-map-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(4px);
          color: var(--brand);
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.55rem 0.95rem;
          border-radius: 999px;
          box-shadow: 0 10px 22px -8px rgba(11, 26, 58, 0.35);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .ols-card.is-hovered .ols-map-pill,
        .ols-map-link:focus-visible .ols-map-pill {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .ols-map,
          .ols-map-pill,
          .ols-cta {
            transition: none;
          }
        }

        @media (max-width: 860px) {
          .ols-grid {
            grid-template-columns: 1fr;
            gap: 2.75rem;
          }
        }

        @media (max-width: 480px) {
          .ols-section {
            padding: 3.75rem 1.25rem;
          }
          .ols-heading {
            font-size: 2rem;
          }
          .ols-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
