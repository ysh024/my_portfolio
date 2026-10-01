"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Code2, Sparkles, PhoneCall, CheckCircle2 } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/15 blur-[140px] pointer-events-none" />

      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <Badge variant="success" dot>
                {siteConfig.availability}
              </Badge>
              <span className="text-xs text-zinc-400 font-medium">
                ⚡ Based in India &bull; Serving Clients Globally
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                I build fast, clean websites for{" "}
                <span className="text-gradient-accent">small &amp; local businesses</span> that bring real customer inquiries.
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed"
            >
              Hi, I&apos;m <strong className="text-white font-semibold">Yash</strong>—an independent web developer. I create fast, mobile-friendly websites with direct WhatsApp buttons, Google Maps, and simple online payments delivered in just 3 to 7 days.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Button
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                variant="glow"
                size="lg"
                icon={<WhatsappIcon className="w-4 h-4 text-emerald-300" />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                size="lg"
                icon={<Code2 className="w-4 h-4" />}
              >
                See Client Projects
              </Button>
            </motion.div>

            {/* Reassurance points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-2 border-t border-zinc-800/80 w-full"
            >
              {siteConfig.stats.map((st) => (
                <div key={st.label} className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {st.value}
                  </span>
                  <span className="text-xs text-zinc-400 mt-0.5">
                    {st.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Grounded Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-6 backdrop-blur-xl shadow-2xl flex flex-col gap-5">
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shrink-0 shadow-lg">
                    <Image
                      src="/images/profile/avatar.jpg"
                      alt={siteConfig.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-white text-base">
                        {siteConfig.name}
                      </h3>
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                    </div>
                    <p className="text-xs text-indigo-400 font-medium">
                      Independent Web Developer
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      📍 {siteConfig.location}
                    </p>
                  </div>
                </div>

                {/* What You Get Box */}
                <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 flex flex-col gap-2.5 text-xs">
                  <span className="text-zinc-400 font-semibold uppercase tracking-wider text-[11px]">
                    Why Work Directly With Me:
                  </span>
                  <div className="space-y-2 text-zinc-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct 1-on-1 contact on WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Fast 3 to 7 days delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Fair upfront pricing with no hidden fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Free 14 days post-launch support</span>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Action Banner */}
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/60 transition-colors flex items-center justify-between text-xs text-emerald-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Have a question? Message me on WhatsApp</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
