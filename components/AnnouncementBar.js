export default function AnnouncementBar({
  emoji = "🎉",
  highlight = "20% EARLY BIRD",
  text = "On NEET Repeater Batch starts 30th June",
  href = "#",
}) {
  return (
    <a
      href={href}
      className="block w-full bg-gradient-to-r from-brand-green to-emerald-500 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-95"
    >
      <span className="mr-1">{emoji}</span>
      <span className="font-bold">{highlight}</span>
      <span className="mx-1">✨</span>
      <span>{text}</span>
      <span className="ml-1 inline-block translate-y-[1px]">›</span>
    </a>
  );
}
