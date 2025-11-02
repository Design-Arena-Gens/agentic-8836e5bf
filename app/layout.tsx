import type { Metadata } from "next";
import "./globals.css";

const title = "How DesignArena Works";
const description =
  "Explore the end-to-end process that powers DesignArena, the collaborative platform for AI-assisted product design teams.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://agentic-8836e5bf.vercel.app",
    siteName: "DesignArena",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-sand text-slate">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
