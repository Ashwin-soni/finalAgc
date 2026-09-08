import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "AGC | Classroom Coaching for JEE, NEET",
  description:
    "Awanish gupta classes offers classroom and coaching for JEE, NEET, and foundation courses, with test series, study material, and scholarships.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
