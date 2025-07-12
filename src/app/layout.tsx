import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Newman - Full Stack Software Developer",
  description: "Full Stack Software Developer focused on building impactful systems with modern UI, automation, and deployment strategies. B.S. in Computer Science from VCU.",
  keywords: ["developer", "full-stack", "react", "flask", "python", "postgresql", "software development", "AI", "automation"],
  authors: [{ name: "David Newman" }],
  creator: "David Newman",
  openGraph: {
    title: "David Newman - Full Stack Software Developer",
    description: "Full Stack Software Developer focused on building impactful systems with modern UI, automation, and deployment strategies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Newman - Full Stack Software Developer",
    description: "Full Stack Software Developer focused on building impactful systems with modern UI, automation, and deployment strategies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
