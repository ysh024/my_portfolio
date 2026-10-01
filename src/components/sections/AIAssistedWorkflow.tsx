"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { CheckCircle2, Clock, Zap, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { motion } from "framer-motion";

export function AIAssistedWorkflow() {
  return (
    <section className="py-20 sm:py-28 border-t border-zinc-800/60 relative overflow-hidden">
      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 4 Simple Steps */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              badge="Simple Process"
              title="How We Work"
              highlight="Together in 4 Steps"
              description="No complicated meetings or endless back-and-forth. Here is how we take your website from idea to launch in just a few days."
            />

            <div className="flex flex-col gap-4 mt-2">
              {siteConfig.aiWorkflowSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/60 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {step.step}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Grounded Guarantee Box */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col gap-6">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                <div className="w-10 h-10 rounded-2xl bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    The Independent Developer Promise
                  </h3>
                  <p className="text-xs text-zinc-400">Direct work &bull; Honest pricing</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Talk directly to Yash:</strong> No account managers or call center delays.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>On-time delivery:</strong> Standard websites live in 3 to 7 days.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>You own everything:</strong> Full ownership of domain, code, and accounts.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Post-launch support:</strong> 14 days of free revisions and tweaks after launch.</span>
                </div>
              </div>

              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <WhatsappIcon className="w-4 h-4 text-emerald-300" /> Message on WhatsApp to Get Started
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
