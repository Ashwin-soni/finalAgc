"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import Navbar from "../../components/Navbar";
import OurLocationSection from "../../components/OurLocationSection";
import Footer from "../../components/Footer";

/* ============================================================
   Config
============================================================ */
const CHANNEL_HANDLE = "@agcjabalpur2334";
const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const MAX_PAGES = 10; // safety cap: 10 pages x 50 videos = up to 500 videos

/* ============================================================
   Icons (inline, no external icon dependency for brand marks)
============================================================ */
function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="1" y="5" width="22" height="14" rx="4" fill="currentColor" opacity="0.15" />
      <path
        d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8Z"
        fill="currentColor"
      />
      <path d="M10 15.2V8.8L15.5 12 10 15.2Z" fill="white" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path
        d="M14.5 8.5h1.8V5.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.3H6.9v3.2h2.4V21h3.2v-5.5h2.4l.4-3.2h-2.8V10c0-.9.3-1.5 1.6-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socials = [
  {
    label: "YouTube",
    handle: "@agcjabalpur2334",
    href: "https://www.youtube.com/@agcjabalpur2334",
    Icon: YouTubeIcon,
    iconColor: "text-red-600",
    iconBg: "bg-red-50",
  },
  {
    label: "Instagram",
    handle: "@agcjabalpur",
    href: "https://www.instagram.com/agcjabalpur/?hl=en",
    Icon: InstagramIcon,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
  },
  {
    label: "Facebook",
    handle: "AGC Jabalpur",
    href: "https://www.facebook.com/AGCJabalpur/",
    Icon: FacebookIcon,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
];

/* ============================================================
   YouTube data fetching (runs in the browser)
============================================================ */
async function youtubeFetch(endpoint, params) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_YOUTUBE_API_KEY. Add it to .env.local, then restart the dev server."
    );
  }

  const url = new URL(`${YOUTUBE_API_BASE}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) url.searchParams.set(key, String(value));
  });
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`YouTube API request to "${endpoint}" failed (${res.status}): ${body}`);
  }
  return res.json();
}

async function getUploadsPlaylistId(handle) {
  const forHandle = handle.startsWith("@") ? handle : `@${handle}`;
  const data = await youtubeFetch("channels", { part: "contentDetails", forHandle });
  const channel = data.items?.[0];
  if (!channel) throw new Error(`No YouTube channel found for handle "${forHandle}".`);
  return channel.contentDetails.relatedPlaylists.uploads;
}

async function getAllPlaylistVideos(playlistId) {
  const videos = [];
  let pageToken;
  let pages = 0;

  do {
    const data = await youtubeFetch("playlistItems", {
      part: "snippet",
      playlistId,
      maxResults: 50,
      pageToken,
    });

    for (const item of data.items ?? []) {
      const snippet = item.snippet;
      const videoId = snippet?.resourceId?.videoId;
      if (!videoId) continue;
      if (snippet.title === "Private video" || snippet.title === "Deleted video") continue;

      videos.push({
        id: videoId,
        title: snippet.title,
        publishedAt: snippet.publishedAt,
        thumbnail:
          snippet.thumbnails?.maxres?.url ||
          snippet.thumbnails?.high?.url ||
          snippet.thumbnails?.medium?.url ||
          snippet.thumbnails?.default?.url,
      });
    }

    pageToken = data.nextPageToken;
    pages += 1;
  } while (pageToken && pages < MAX_PAGES);

  return videos;
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ============================================================
   Page
============================================================ */
export default function SocialsPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const playlistId = await getUploadsPlaylistId(CHANNEL_HANDLE);
        const allVideos = await getAllPlaylistVideos(playlistId);
        if (!cancelled) setVideos(allVideos);
      } catch (err) {
        if (!cancelled) setLoadError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Close the player on Escape.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setActiveId(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock page scroll while the player is open.
  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  const activeVideo = videos.find((v) => v.id === activeId) ?? null;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Intro */}
      <section className="bg-[#EBEEF6] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-bold text-[#0f172a] md:text-5xl">
            Our Socials
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Lectures, results and everyday moments from AGC — follow along wherever you scroll.
          </p>
        </div>
      </section>

      {/* Link cards */}
      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {socials.map(({ label, handle, href, Icon, iconColor, iconBg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg}`}
              >
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </span>
              <span className="min-w-0 flex-1">
                <p className="font-semibold text-[#0f172a]">{label}</p>
                <p className="truncate text-sm text-gray-500">{handle}</p>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-gray-300 transition-colors group-hover:text-gray-500"
              />
            </a>
          ))}
        </div>
      </section>

      {/* YouTube gallery */}
      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
              <YouTubeIcon className="h-5 w-5 text-red-600" />
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#0f172a] md:text-3xl">
              Watch our videos
            </h2>
          </div>

          {loading && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className="aspect-video bg-gray-100" />
                  <div className="space-y-2 p-4">
                    <div className="h-3.5 w-5/6 rounded bg-gray-100" />
                    <div className="h-3 w-1/3 rounded bg-gray-100" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && loadError && (
            <div className="rounded-2xl border border-red-100 bg-red-50/60 p-6 text-red-700">
              Couldn&apos;t load the video list right now ({loadError}).
            </div>
          )}

          {!loading && !loadError && videos.length === 0 && (
            <div className="rounded-2xl border border-gray-100 bg-blue-50/70 p-10 text-center text-gray-600">
              No videos found on the channel yet.
            </div>
          )}

          {!loading && !loadError && videos.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveId(video.id)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-video bg-gray-100">
                    {video.thumbnail && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#1453B8] shadow transition-transform group-hover:scale-110">
                        <Play size={20} fill="currentColor" className="ml-0.5" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="line-clamp-2 text-sm font-semibold leading-snug text-[#0f172a]">
                      {video.title}
                    </p>
                    {video.publishedAt && (
                      <p className="mt-2 text-xs text-gray-500">{formatDate(video.publishedAt)}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Click-to-play modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveId(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveId(null)}
              aria-label="Close player"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={18} />
            </button>
            <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
              <iframe
                key={activeVideo.id}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/80">{activeVideo.title}</p>
          </div>
        </div>
      )}

      <OurLocationSection />
      <Footer />
    </main>
  );
}
