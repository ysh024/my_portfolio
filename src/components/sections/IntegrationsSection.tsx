"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Check, MapPin, CreditCard, FileSpreadsheet, Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

export function IntegrationsSection() {
  const integrations = [
    {
      icon: <WhatsappIcon className="w-5 h-5 text-emerald-400" />,
      name: "WhatsApp Click-to-Chat",
      category: "Customer Messaging",
      description: "Direct WhatsApp buttons with pre-filled inquiries so customers can chat with you in one tap.",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-sky-400" />,
      name: "UPI & Razorpay Payments",
      category: "Easy Online Payments",
      description: "Accept payments via Google Pay, PhonePe, Paytm, and Cards directly to your bank account.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-red-400" />,
      name: "Google Maps & Driving Directions",
      category: "Local Footfall",
      description: "Embed your exact shop or clinic location with an interactive map so customers easily find you.",
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
      name: "Google Sheets Lead Forwarding",
      category: "Automated Records",
      description: "All customer inquiries from your website forms automatically land in your personal Google Sheet.",
    },
    {
      icon: <Mail className="w-5 h-5 text-indigo-400" />,
      name: "Instant Email Notifications",
      category: "Never Miss a Lead",
      description: "Receive instant email alerts on your phone whenever a prospective client submits a form.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-zinc-800/60 bg-zinc-950/40 relative">
      <Container size="large">
        <SectionHeading
          badge="Essential Add-Ons"
          title="Tools &amp; Integrations"
          highlight="Included in Your Website"
          description="I connect your website directly to the tools you already use every single day."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-indigo-400">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-800/70 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Ready for your website
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
