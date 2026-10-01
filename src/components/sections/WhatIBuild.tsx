"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Globe, Zap, CreditCard, ShieldCheck, ArrowRight, Smartphone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function WhatIBuild() {
  const offerings = [
    {
      icon: <Globe className="w-6 h-6 text-sky-400" />,
      title: "Complete Small Business Websites",
      description: "Clean, professional multi-page websites for local businesses, shops, clinics, consultants, and service providers that look great on all mobile screens.",
      tags: ["Mobile First", "WhatsApp Button", "Location Map", "Fast Loading"],
      link: "/services#websites",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "1-Page High-Converting Landing Pages",
      description: "Focused single-page websites designed to generate inquiries for a specific offer, product, or ad campaign, connected to your Google Sheets.",
      tags: ["Ad Ready", "Lead Form", "Google Sheets Sync", "Call Triggers"],
      link: "/services#lead-systems",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
      title: "UPI & Online Payment Setup",
      description: "Accept payments and advance booking fees directly into your bank account using Google Pay, PhonePe, Paytm, and Cards via Razorpay.",
      tags: ["Google Pay", "PhonePe", "Razorpay UPI", "Instant Receipts"],
      link: "/services#integrations",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: "Website Redesign & Speed Upgrades",
      description: "Transform your old, slow, or broken website into a fresh, fast, and modern website that works properly on modern smartphones.",
      tags: ["Speed Fix", "Mobile Friendly", "Content Update", "Security"],
      link: "/services#maintenance",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative">
      <Container size="large">
        <SectionHeading
          badge="Services"
          title="What I Can"
          highlight="Build For You"
          description="Everything your business needs to establish a solid online presence and start getting more customer inquiries."
          align="left"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="group rounded-3xl bg-zinc-900/50 border border-zinc-800/80 p-7 hover:border-zinc-700 hover:bg-zinc-850/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-950/80 text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                >
                  <span>Learn more about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
