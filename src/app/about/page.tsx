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
      {/* 1. Hero Section: Clean Portrait with Framed Accent & Non-Overlapping Content */}
      <section className="relative pb-16 pt-8 overflow-hidden">
        <Container size="large">
          <div className="flex flex-col items-center gap-10">
            {/* High-Res Portrait with Animated Elements Behind */}
            <div className="relative flex items-center justify-center">
              {/* 1. Subtle Radial Ambient Light Glow (Centrally focused behind photo only) */}
              <motion.div
                animate={{
                  scale: [0.95, 1.08, 0.95],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#6E06F2]/25 blur-[70px] pointer-events-none -z-10"
              />

              {/* 3. Floating Micro Interactive Badges */}
              {/* Left Floating Badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="hidden sm:flex absolute -left-12 sm:-left-16 md:-left-20 top-1/4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#14131C]/90 border border-[#262436] shadow-xl backdrop-blur-xl text-xs font-semibold text-zinc-200"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Next.js • React</span>
              </motion.div>

              {/* Right Floating Badge */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="hidden sm:flex absolute -right-12 sm:-right-16 md:-right-20 bottom-1/4 z-20 items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#14131C]/90 border border-[#262436] shadow-xl backdrop-blur-xl text-xs font-semibold text-[#DDD6FE]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>High Performance</span>
              </motion.div>

              {/* 4. Portrait Card with Outer Dashed Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative group z-10"
              >
                {/* Subtle ambient backlight glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#6E06F2]/30 via-[#7C3AED]/20 to-[#A78BFA]/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Outer Dashed Frame */}
                <div className="relative p-2.5 sm:p-3.5 rounded-3xl bg-[#14131C]/90 border border-dashed border-[#7C3AED]/60 shadow-2xl shadow-purple-950/50 backdrop-blur-xl">
                  {/* Inner Image Container */}
                  <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-[#262436] bg-[#0D0D12]">
                    <Image
                      src="/images/profile/avatar.jpg"
                      alt={siteConfig.name}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Clean Non-Overlapping Content Section Below Image */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6"
            >
              {/* Role & Location Badge */}
              <motion.div variants={itemVariants}>
                <Badge variant="purple" className="px-4 py-1.5 text-xs font-semibold backdrop-blur-xl bg-[#14131C] shadow-lg border-[#58399E]/60">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#A78BFA]" /> {siteConfig.role} • {siteConfig.location}
                </Badge>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.14]"
              >
                Building clean, high-performance websites &amp;{" "}
                <span className="text-gradient-accent">web applications</span>.
              </motion.h1>

              {/* Summary Text */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl"
              >
                Hi, I&apos;m <strong className="text-white font-semibold">Yash</strong>. I help businesses and creators build modern, fast-loading digital experiences tailored to their goals.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-2">
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
                  href="/projects"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
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
