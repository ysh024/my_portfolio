"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteConfig } from "@/data/site";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { ArrowRight, Sparkles, Code2, Zap, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-28 pb-20 purple-glow-bg relative">
      {/* 1. Hero Section: Modern 2-Column Professional Showcase */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: 7 cols (Text, Pitch, Metrics, CTAs) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-start text-left gap-6"
            >
              {/* Availability & Location Status Badge */}
              <motion.div variants={itemVariants} className="flex items-center gap-2 flex-wrap">
                <Badge variant="purple" className="px-3.5 py-1.5 text-xs font-semibold backdrop-blur-xl bg-[#14131C] shadow-lg border-[#58399E]/60 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for new client projects
                </Badge>
                <span className="hidden sm:inline-block text-xs font-medium text-zinc-500">•</span>
                <span className="text-xs font-medium text-zinc-400 font-mono">📍 {siteConfig.location}</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
              >
                Building high-performance websites &amp;{" "}
                <span className="text-gradient-accent">modern web experiences</span>.
              </motion.h1>

              {/* Professional Pitch / Summary */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal"
              >
                Hi, I&apos;m <strong className="text-white font-semibold">{siteConfig.name}</strong> — {siteConfig.role}. I partner with founders, businesses, and creators to engineer fast, conversion-focused websites, custom web applications, and seamless digital solutions.
              </motion.p>

              {/* Feature Highlights Pills */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 pt-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#14131C] border border-[#262436] text-xs text-zinc-300 font-medium">
                  <span className="text-[#A78BFA]">⚡</span> Ultra-Fast 95+ Performance
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#14131C] border border-[#262436] text-xs text-zinc-300 font-medium">
                  <span className="text-[#A78BFA]">📱</span> 100% Responsive Design
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#14131C] border border-[#262436] text-xs text-zinc-300 font-medium">
                  <span className="text-[#A78BFA]">💬</span> Direct WhatsApp Support
                </div>
              </motion.div>

              {/* CTA Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  size="lg"
                  icon={<WhatsappIcon className="w-4 h-4 text-emerald-300" />}
                >
                  WhatsApp
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Services
                </Button>
                <Button
                  href="/projects"
                  variant="outline"
                  size="lg"
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column: 5 cols (Professional Showcase Visual) */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative pt-4 lg:pt-0">
              {/* Subtle ambient backlight glow */}
              <div className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#6E06F2]/25 blur-[80px] pointer-events-none -z-10" />

              {/* Floating Tech Pill Top Right */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="hidden sm:flex absolute -top-3 -right-2 sm:-right-4 z-30 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#14131C]/95 border border-[#262436] shadow-xl backdrop-blur-xl text-xs font-semibold text-zinc-200"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Next.js • React • TS</span>
              </motion.div>

              {/* Floating Turnaround Badge Bottom Left */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="hidden sm:flex absolute -bottom-3 -left-2 sm:-left-4 z-30 items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#14131C]/95 border border-[#58399E]/60 shadow-2xl backdrop-blur-xl text-xs font-semibold text-[#DDD6FE]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>Turnaround: 3-7 Days</span>
              </motion.div>

              {/* Sleek Professional Portrait Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-[320px] sm:max-w-[360px] rounded-3xl p-2 bg-gradient-to-b from-[#262436] via-[#1A1926] to-[#14131C] border border-[#262436] shadow-2xl shadow-purple-950/40"
              >
                {/* Inner Image Container with Protection Overlay */}
                <div 
                  className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0D0D12] select-none group"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <Image
                    src="/images/profile/avatar.png"
                    alt={siteConfig.name}
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 380px"
                    priority
                    draggable={false}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 protected-image"
                  />
                  {/* Subtle Gradient Shadow at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Professional Bottom Label */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#14131C]/90 backdrop-blur-md border border-[#262436] flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                      <span className="text-xs font-semibold text-white">{siteConfig.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#A78BFA]">Full-Stack Web</span>
                  </div>

                  {/* Transparent Click & Context Menu Shield */}
                  <div 
                    className="absolute inset-0 z-20"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Overview Metrics Strip: Floating Bento Card with Cursor-following Tilt */}
      <section className="py-10 relative z-20">
        <Container size="large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            <TiltCard className="p-6 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">3 - 7 Days</span>
              <span className="text-xs text-zinc-400 mt-1 block">Average Turnaround</span>
            </TiltCard>

            <TiltCard className="p-6 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">100%</span>
              <span className="text-xs text-zinc-400 mt-1 block">Mobile Optimized</span>
            </TiltCard>

            <TiltCard className="p-6 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">Direct</span>
              <span className="text-xs text-zinc-400 mt-1 block">1-on-1 Collaboration</span>
            </TiltCard>

            <TiltCard className="p-6 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#A78BFA] block">Next.js</span>
              <span className="text-xs text-zinc-400 mt-1 block">Modern Tech Stack</span>
            </TiltCard>
          </motion.div>
        </Container>
      </section>

      {/* 3. Story Section with Stacking Layer & Scroll Reveal */}
      <section className="py-20 relative z-30">
        <Container size="default">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                About <span className="text-gradient-accent">My Work</span>
              </h2>
              <p className="text-sm text-zinc-400">
                Direct craftsmanship, clear communication, and solid engineering.
              </p>
            </div>

            {/* Continuous narrative Tilt card */}
            <TiltCard className="p-8 sm:p-12 text-base sm:text-lg text-zinc-300 leading-relaxed space-y-6 shadow-2xl">
              <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#A78BFA] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                {siteConfig.aboutStory[0]}
              </p>
              <p>
                {siteConfig.aboutStory[1]}
              </p>
              <p>
                {siteConfig.aboutStory[2]}
              </p>
            </TiltCard>
          </motion.div>
        </Container>
      </section>

      {/* 4. Development Principles: Staggered Scroll Reveal with Floating Cards */}
      <section className="py-20 relative z-40">
        <Container size="large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              title="Development"
              highlight="Principles"
              description="Core standards that guide every project."
              className="mb-12"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.philosophy.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard className="p-7 h-full flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-[#251545] text-[#C4B5FD] border border-[#58399E]/60 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed pl-12">
                    {item.desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Contact CTA */}
      <div className="relative z-50">
        <ContactCTA />
      </div>
    </div>
  );
}
