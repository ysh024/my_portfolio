"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] border-b transition-[background-color,border-color,padding,box-shadow] duration-200 ease-out ${
        isScrolled
          ? "py-3.5 bg-[#0D0D12]/90 backdrop-blur-xl border-[#262436] shadow-xl shadow-black/40"
          : "py-5 bg-transparent border-transparent"
      }`}
    >
      <Container size="large">
        <div className="flex items-center justify-between">
          {/* Clean Brand Name: Yash | AI Automation */}
          <Link href="/about" className="group flex items-center gap-2 shrink-0">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#A78BFA] transition-colors">
              Yash
            </span>
            <span className="text-zinc-600 font-light select-none text-sm">|</span>
            <span className="text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-[#DDD6FE] transition-colors tracking-tight">
              AI Automation
            </span>
          </Link>

          {/* Centered Floating Nav Pills */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#14131C]/90 border border-[#262436] backdrop-blur-xl shadow-lg">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors rounded-full ${
                    isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#251545] border border-[#58399E] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<WhatsappIcon className="w-4 h-4 text-emerald-300" />}
            >
              WhatsApp
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2.5 rounded-2xl bg-[#14131C] border border-[#262436] text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden mt-3 rounded-3xl bg-[#14131C]/95 border border-[#262436] backdrop-blur-2xl p-5 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#251545] text-[#C4B5FD] border border-[#58399E]/60 font-semibold"
                          : "text-zinc-300 hover:bg-[#1A1926] hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                <div className="pt-3 mt-1 border-t border-[#262436] flex flex-col gap-2">
                  <Button
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<WhatsappIcon className="w-4 h-4 text-emerald-300" />}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Modern Scroll Progress Indicator Line under Header */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#6E06F2] via-[#A78BFA] to-[#38BDF8] shadow-[0_0_10px_rgba(167,139,250,0.8)] pointer-events-none z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </header>
  );
}
