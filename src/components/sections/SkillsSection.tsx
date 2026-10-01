"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, skillCategories } from "@/data/skills";
import { Sparkles, ArrowRight, Code, Database, Plug, Cloud, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Code className="w-4 h-4 text-sky-400" />,
    "Backend / Data": <Database className="w-4 h-4 text-indigo-400" />,
    Integrations: <Plug className="w-4 h-4 text-emerald-400" />,
    "DevOps / Tools": <Cloud className="w-4 h-4 text-amber-400" />,
    "AI-Assisted Development": <Bot className="w-4 h-4 text-purple-400" />,
  };

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  const categories = ["All", ...skillCategories.map((c) => c.title.split(" ")[0])];

  return (
    <section className="py-24 sm:py-32 border-t border-zinc-800/60 relative">
      <Container size="large">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Technical Stack"
            title="Skills &amp;"
            highlight="Modern Technologies"
            description="Production-tested tools and frameworks I use to engineer scalable, high-speed digital products."
          />
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>View Full Tech Matrix &amp; Proficiency</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: "All", label: "All Skills" },
            { id: "Frontend", label: "Frontend" },
            { id: "Backend / Data", label: "Backend / Data" },
            { id: "Integrations", label: "Integrations" },
            { id: "DevOps / Tools", label: "DevOps & Cloud" },
            { id: "AI-Assisted Development", label: "AI-Assisted Stack" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  skill.highlight
                    ? "bg-zinc-900/80 border-zinc-700/80 hover:border-indigo-500/50"
                    : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      {categoryIcons[skill.category]}
                      <h4 className="text-sm font-semibold text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        skill.level === "Advanced"
                          ? "bg-indigo-950 text-indigo-300 border border-indigo-800/60"
                          : "bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
