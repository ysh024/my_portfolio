import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yashdev.io"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  keywords: [
    "Independent Web Developer",
    "Next.js Developer",
    "Full-Stack Developer",
    "AI-Assisted Web Developer",
    "React Developer",
    "TypeScript",
    "Razorpay Integration",
    "Tailwind CSS",
    "Web Application Development",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashdev.io",
    title: siteConfig.title,
    description: siteConfig.bio,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.bio,
    creator: "@yash_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D12] text-[#FCFCFD] selection:bg-[#7C3AED] selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
