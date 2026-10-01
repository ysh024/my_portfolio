"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import {
  Globe,
  Zap,
  CreditCard,
  ShieldCheck,
  Check,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-sky-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
    CreditCard: <CreditCard className="w-6 h-6 text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#A78BFA]" />,
  };

  return (
    <div className="pt-32 pb-20 purple-glow-bg">
      {/* Hero */}
      <section className="relative pb-16">
        <Container size="large">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              badge="Services"
              title="Development"
              highlight="Capabilities & Offerings"
              description="Clear deliverables, fast turnaround times, and high-quality web engineering."
              className="mb-14"
            />
          </motion.div>

          {/* Services Grid with Interactive Tilt Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.id}
                id={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <TiltCard
                  className={`p-8 h-full flex flex-col justify-between ${
                    svc.popular ? "border-[#7C3AED]/70 shadow-xl shadow-purple-950/40" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#1D1B2A] border border-[#2E2C42] flex items-center justify-center">
                        {iconMap[svc.iconName] || <Globe className="w-6 h-6 text-[#A78BFA]" />}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-[#1A1926] text-zinc-300 font-semibold border border-[#262436] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#A78BFA]" /> {svc.timeline}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {svc.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {svc.shortDescription}
                    </p>

                    {/* Inclusions */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                        What&apos;s Included:
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-300">
                        {svc.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-6 pt-4 border-t border-[#262436]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Key Deliverables:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {svc.deliverables.map((del, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#262436] flex flex-col gap-2.5">
                    <a
                      href={`https://wa.me/919718871979?text=Hi%20Yash,%20I'm%20interested%20in%20the%20${encodeURIComponent(svc.title)}%20service.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#6E06F2] to-[#8B5CF6] hover:opacity-95 text-white text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 transition-all"
                    >
                      <WhatsappIcon className="w-4 h-4 text-emerald-300" /> Inquire on WhatsApp
                    </a>
                    <Button
                      href={`/contact?service=${svc.id}`}
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center text-xs"
                    >
                      Or Send Email Inquiry
                    </Button>
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
