export default function WhatsAppButton() {
  const whatsappNumber = "919300044064";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
    >
      <span className="text-lg">📞</span>
      <span>WhatsApp Us</span>
    </a>
  );
}
