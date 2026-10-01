"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 border-t border-zinc-800/60 bg-zinc-950/30 relative">
      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Avatar Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-md flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-700/60 shrink-0">
                  <Image
                    src="/images/profile/avatar.jpg"
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{siteConfig.name}</h3>
                  <p className="text-xs text-indigo-400 font-medium">{siteConfig.role}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">📍 {siteConfig.location}</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-zinc-300">
                {siteConfig.philosophy.slice(0, 3).map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">
                        {item.title}
                      </span>
                      <span className="text-zinc-400 text-[11px] leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Bio & Story */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <SectionHeading
              badge="About Yash"
              title="Work Directly With"
              highlight="Your Developer"
              description="No agency bureaucracy, no confusing technical terms."
            />

            <div className="space-y-3.5 text-sm text-zinc-300 leading-relaxed">
              <p>
                {siteConfig.aboutStory[0]}
              </p>
              <p className="text-zinc-400">
                {siteConfig.aboutStory[1]}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                More About Me
              </Button>
              <Button
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="md"
                icon={<WhatsappIcon className="w-4 h-4 text-emerald-400" />}
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
