"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiments } from "@/data/experiments";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { TiltCard } from "@/components/ui/TiltCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Sparkles, Terminal, Code, Cpu, Play, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function ExperimentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [tokenInput, setTokenInput] = useState("Explain Next.js 15 Server Components in 2 sentences.");

  const categories = ["All", "UI & Interaction", "AI Tooling", "Developer Tools", "Security & API", "Creative Coding"];

  const filtered =
    activeCategory === "All"
      ? experiments
      : experiments.filter((e) => e.category === activeCategory);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#7C3AED", "#A78BFA", "#38BDF8", "#10B981"],
    });
  };

  return (
    <div className="pt-32 pb-20 purple-glow-bg">
      <section className="relative pb-16">
        <Container size="large">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              badge="Lab &amp; R&amp;D"
              title="Experiments &amp;"
              highlight="Interactive Prototypes"
              description="A sandbox of UI interactions, micro-utilities, and technical proof-of-concepts exploring modern web capabilities."
              className="mb-12"
            />
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#7C3AED] text-white shadow-lg shadow-purple-900/40"
                    : "bg-[#14131C] text-zinc-400 hover:text-white border border-[#262436]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bento Experiments Grid with TiltCards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Live Interactive Card 1: Confetti Physics Bento */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <TiltCard className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="purple">UI &amp; Interaction</Badge>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">&bull; Live Sandbox</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Micro-Interaction &amp; Particle Studio
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    Test custom canvas particles, spring physics triggers, and zero-jank micro-animations.
                  </p>

                  <div className="p-6 rounded-2xl bg-[#0D0D12] border border-[#262436] flex flex-col items-center justify-center gap-4 text-center">
                    <p className="text-xs text-zinc-400">
                      Click the trigger below to launch the particle simulation:
                    </p>
                    <button
                      onClick={triggerConfetti}
                      className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#6E06F2] to-[#8B5CF6] text-white font-semibold text-xs shadow-lg shadow-purple-900/40 hover:scale-105 active:scale-95 transition-all"
                    >
                      🎉 Launch Particle Effect
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#262436] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    <Tag className="text-xs">Canvas API</Tag>
                    <Tag className="text-xs">Springs</Tag>
                  </div>
                  <span className="text-xs text-[#A78BFA] font-medium">Active Prototype</span>
                </div>
              </TiltCard>
            </motion.div>

            {/* Live Interactive Card 2: AI Token Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TiltCard className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="purple">AI Tooling</Badge>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">&bull; Live Utility</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Client-Side Tokenizer &amp; Cost Estimator
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    Type below to calculate estimated tokens and LLM API cost in real-time.
                  </p>

                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      value={tokenInput}
                      onChange={(e) => setTokenInput(e.target.value)}
                      placeholder="Enter sample prompt..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D12] border border-[#262436] text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#7C3AED]"
                    />
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded-xl bg-[#0D0D12] border border-[#262436]">
                        <span className="text-[11px] text-zinc-500 block">Est. Tokens</span>
                        <span className="text-xs sm:text-sm font-bold text-[#A78BFA] font-mono">
                          {Math.ceil(tokenInput.length / 3.8)}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#0D0D12] border border-[#262436]">
                        <span className="text-[11px] text-zinc-500 block">Gemini 1.5</span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">$0.000002</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#0D0D12] border border-[#262436]">
                        <span className="text-[11px] text-zinc-500 block">Latency</span>
                        <span className="text-xs sm:text-sm font-bold text-[#C084FC] font-mono">~120ms</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#262436] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    <Tag className="text-xs">Google AI Studio</Tag>
                    <Tag className="text-xs">Tokenizer</Tag>
                  </div>
                  <span className="text-xs text-[#A78BFA] font-medium">Active Prototype</span>
                </div>
              </TiltCard>
            </motion.div>

            {/* Remaining Experiment Bento Cards */}
            {filtered.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              >
                <TiltCard className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="purple">{exp.category}</Badge>
                      <span className="text-xs font-mono text-zinc-400">{exp.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    {exp.highlight && (
                      <div className="p-3.5 rounded-2xl bg-[#0D0D12] border border-[#262436] text-xs text-[#DDD6FE] font-mono">
                        ✨ {exp.highlight}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#262436] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <Tag key={t} className="text-xs">
                          {t}
                        </Tag>
                      ))}
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1A1926] text-zinc-400 border border-[#262436]">
                      {exp.status}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}
