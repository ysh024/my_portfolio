"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Code2, Plug, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Web Development & Design": <Code2 className="w-5 h-5 text-sky-400" />,
    "Business & Payment Integrations": <Plug className="w-5 h-5 text-emerald-400" />,
    "Hosting, Domains & Local SEO": <Globe className="w-5 h-5 text-[#A78BFA]" />,
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
              badge="Technical Architecture"
              title="Skills &amp;"
              highlight="Proficiency Matrix"
              description="Production technologies, frameworks, and business integrations I leverage to engineer fast, high-converting digital products."
              className="mb-14"
            />
          </motion.div>

          <div className="flex flex-col gap-10">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#14131C] border border-[#262436] shadow-xl backdrop-blur-xl"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[#262436]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#1D1B2A] border border-[#2E2C42] flex items-center justify-center shrink-0">
                      {categoryIcons[category.title] || <Sparkles className="w-5 h-5 text-[#A78BFA]" />}
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white">
                        {category.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="purple" className="self-start sm:self-auto font-mono text-xs">
                    {category.skills.length} Capabilities
                  </Badge>
                </div>

                {/* Skills Grid with TiltCards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <TiltCard
                      key={skill.name}
                      className={`p-5 flex flex-col justify-between ${
                        skill.highlight
                          ? "border-[#58399E]/60 bg-[#171524]"
                          : "bg-[#0D0D12]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                            <span>{skill.name}</span>
                          </h3>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-[#251545] text-[#C4B5FD] border border-[#58399E]/60">
                            {skill.level}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-xs text-zinc-400 leading-relaxed mt-2 pl-5.5">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}
