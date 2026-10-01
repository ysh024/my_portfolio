"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { footerLinks } from "@/data/navigation";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#262436] bg-[#0D0D12] text-zinc-400 relative overflow-hidden">
      {/* Ambient Purple Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-[#6E06F2]/10 blur-[130px] pointer-events-none" />

      <Container size="large" className="py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Col 1: Name & Bio */}
          <div className="md:col-span-1 flex flex-col gap-3.5">
            <Link href="/about" className="group flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#A78BFA] transition-colors">
                Yash
              </span>
              <span className="text-zinc-600 font-light select-none text-sm">|</span>
              <span className="text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-[#DDD6FE] transition-colors tracking-tight">
                AI Automation
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Web developer building fast, modern websites and applications.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Yash on WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#14131C] border border-[#262436] flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-700/60 transition-colors"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="View Yash's GitHub Profile"
                className="w-10 h-10 rounded-xl bg-[#14131C] border border-[#262436] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#5B448E] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="View Yash's LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-[#14131C] border border-[#262436] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#5B448E] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="View Yash's Twitter Profile"
                className="w-10 h-10 rounded-xl bg-[#14131C] border border-[#262436] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#5B448E] transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerLinks.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Box */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Contact
            </h3>
            <div className="p-4 rounded-2xl bg-[#14131C] border border-[#262436] flex flex-col gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Mail className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline text-zinc-200 truncate">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <WhatsappIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="hover:underline text-emerald-300 font-medium">
                  {siteConfig.whatsappNumber}
                </a>
              </div>
            </div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors self-start mt-1 p-1 -ml-1"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#262436] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
