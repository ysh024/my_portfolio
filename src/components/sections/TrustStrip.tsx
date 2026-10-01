"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Zap, Smartphone, MapPin, ShieldCheck, Clock } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

export function TrustStrip() {
  const points = [
    { icon: <Clock className="w-4 h-4 text-amber-400" />, text: "3 - 7 Days Fast Delivery" },
    { icon: <Smartphone className="w-4 h-4 text-sky-400" />, text: "100% Mobile Friendly" },
    { icon: <WhatsappIcon className="w-4 h-4 text-emerald-400" />, text: "WhatsApp Triggers Included" },
    { icon: <MapPin className="w-4 h-4 text-red-400" />, text: "Google Maps & Local SEO" },
    { icon: <Zap className="w-4 h-4 text-indigo-400" />, text: "Instant 1-Second Page Load" },
    { icon: <ShieldCheck className="w-4 h-4 text-purple-400" />, text: "14 Days Free Support" },
  ];

  return (
    <div className="border-y border-zinc-800/60 bg-zinc-950/40 py-5 backdrop-blur-sm overflow-hidden">
      <Container size="large">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {points.map((pt, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium"
            >
              <span className="shrink-0">{pt.icon}</span>
              <span className="truncate">{pt.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
