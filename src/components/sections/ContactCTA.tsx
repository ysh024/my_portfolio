"use client";

import React, { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { motion, useSpring } from "framer-motion";

export function ContactCTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 350, damping: 25 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;

    rotateX.set(rotX);
    rotateY.set(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <Container size="large">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="group relative rounded-3xl bg-gradient-to-b from-[#1C1929] via-[#14131C] to-[#0D0D12] border border-[#262436] hover:border-[#7C3AED]/70 p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl shadow-purple-950/40 backdrop-blur-2xl transition-colors duration-300"
        >
          {/* 1. Animated Breathing Ambient Purple Glow Orb */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-[#6E06F2]/30 via-[#7C3AED]/25 to-[#38BDF8]/15 blur-[110px] pointer-events-none -z-10"
          />

          {/* 2. Dynamic Cursor-Following Radial Glow Reflection */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.22), transparent 75%)`,
            }}
          />

          {/* 3. Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#251545]/80 border border-[#58399E]/60 text-xs font-semibold text-[#DDD6FE] shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Let&apos;s Build Something Great</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to start your next{" "}
              <span className="text-gradient-accent">project?</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-lg leading-relaxed">
              Have an idea or looking for a website upgrade? Reach out directly via WhatsApp or email to discuss details and timelines.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Button
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                size="lg"
                icon={<WhatsappIcon className="w-4 h-4 text-emerald-300" />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Contact Form
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 mt-3 border-t border-[#262436] text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" /> Fast Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" /> Direct Communication
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" /> Modern Architecture
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
