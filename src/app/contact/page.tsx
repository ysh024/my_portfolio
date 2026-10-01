"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Clock,
  Sparkles,
  HelpCircle,
  MapPin,
  Loader2,
} from "lucide-react";

import { TiltCard } from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phoneOrEmail: "",
    businessType: "Custom Website",
    budget: "Standard (1-2 weeks)",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneOrEmail || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setFormSubmitted(true);
    } catch (err: unknown) {
      console.error("Submission error:", err);
      // Fallback: try direct submission if API route fails and environment variable is present
      try {
        const directUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBAPP_URL;

        if (directUrl) {
          await fetch(directUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              emailOrPhone: formData.phoneOrEmail,
              projectType: formData.businessType,
              timeline: formData.budget,
              brief: formData.message,
            }),
          });
          setFormSubmitted(true);
        } else {
          throw err;
        }
      } catch (fallbackErr) {
        setErrorMessage(
          err instanceof Error
            ? err.message
            : "Could not submit right now. Please reach out directly on WhatsApp."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How much does a complete website cost?",
      a: "Pricing is simple and transparent. A standard 1-page landing page is usually around ₹5,000 to ₹8,000 ($80-$100), and a complete multi-page business website is typically ₹10,000 to ₹25,000 ($150-$300) depending on the number of pages and custom features.",
    },
    {
      q: "How many days will it take to build my website?",
      a: "Most small business websites are delivered in just 3 to 7 days once you share your basic photos, services list, and contact details.",
    },
    {
      q: "Do I need to buy domain and hosting separately?",
      a: "I will guide you step-by-step or set up your custom domain (.com or .in) and high-speed cloud hosting for you with zero confusion.",
    },
    {
      q: "Can I update phone numbers, photos, or prices later?",
      a: "Yes! Every website includes 14 days of free updates after launch. For future changes, you can simply text me on WhatsApp anytime.",
    },
  ];

  return (
    <div className="pt-32 pb-20 purple-glow-bg">
      {/* Hero */}
      <section className="relative pb-12">
        <Container size="large">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              badge="Contact"
              title="Let's Discuss"
              highlight="Your Project"
              description="Have a question or want to discuss a new web project? Reach out directly."
              className="mb-14"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Fast Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <TiltCard className="p-7 flex flex-col gap-5">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A78BFA]" /> Direct Communication
                </h3>

                {/* WhatsApp Box */}
                <div className="p-4 rounded-2xl bg-[#1D162E] border border-[#58399E]/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#251545] border border-[#58399E]/60 flex items-center justify-center text-emerald-400 shrink-0">
                      <WhatsappIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#C4B5FD] font-mono uppercase tracking-wider block font-semibold">WhatsApp</span>
                      <span className="text-sm font-medium text-white">+91 97188 71979</span>
                    </div>
                  </div>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6E06F2] to-[#8B5CF6] hover:opacity-95 text-white font-semibold text-xs transition-all inline-flex items-center gap-1 shadow-md shadow-purple-950/40"
                  >
                    Chat <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-[#0D0D12] border border-[#262436] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-[#14131C] border border-[#262436] flex items-center justify-center text-[#A78BFA] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider block">Email</span>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-zinc-200 hover:text-white truncate block">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#1A1926] text-zinc-300 hover:text-white hover:bg-[#251545] transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location and Info */}
                <div className="pt-2 text-xs sm:text-sm text-zinc-400 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0" />
                    <span>Location: <strong className="text-white font-medium">India (Remote Worldwide)</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Clock className="w-4 h-4 text-[#A78BFA] shrink-0" />
                    <span>Response Time: <strong className="text-white font-medium">Within a few hours</strong></span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Right Column: Simple Project Inquiry Form with TiltCard Hover Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="lg:col-span-7"
            >
              <TiltCard className="p-7 sm:p-8">
                {formSubmitted ? (
                  <div className="py-10 flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#251545] border border-[#58399E]/60 flex items-center justify-center text-[#A78BFA]">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Message Received!
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
                      Thank you, {formData.name}. I will review your requirements and reply to <strong className="text-white">{formData.phoneOrEmail}</strong> shortly.
                    </p>
                    <a
                      href={`https://wa.me/919718871979?text=Hi%20Yash,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20want%20to%20discuss%20a%20website%20for%20my%20business:%20${encodeURIComponent(formData.message)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6E06F2] to-[#8B5CF6] text-white font-semibold text-xs inline-flex items-center gap-2 shadow-lg shadow-purple-900/40"
                    >
                      <WhatsappIcon className="w-4 h-4 text-emerald-300" /> Also Ping on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-white">
                      Send a Message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-zinc-300">
                          Your Name / Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D12] border border-[#262436] text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#7C3AED]"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-zinc-300">
                          Email or Phone *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.phoneOrEmail}
                          onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                          placeholder="Email or phone number"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D12] border border-[#262436] text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#7C3AED]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-zinc-300">
                          Project Type
                        </label>
                        <select
                          value={formData.businessType}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D12] border border-[#262436] text-sm text-zinc-200 focus:outline-none focus:border-[#7C3AED]"
                        >
                          <option>Custom Website</option>
                          <option>Web Application</option>
                          <option>Landing Page</option>
                          <option>API & Integration</option>
                          <option>Website Redesign</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-zinc-300">
                          Timeline / Scope
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D12] border border-[#262436] text-sm text-zinc-200 focus:outline-none focus:border-[#7C3AED]"
                        >
                          <option>Standard (1-2 weeks)</option>
                          <option>Fast Track (3-5 days)</option>
                          <option>Flexible Timeline</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-zinc-300">
                        Project Brief *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me a bit about what you want to build..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D12] border border-[#262436] text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#7C3AED]"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/60 text-xs text-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center mt-1"
                      icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Submitting Inquiry..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </TiltCard>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 border-t border-[#262436] bg-[#0D0D12]/40">
        <Container size="large">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            description="Clear answers to common questions regarding process, deliverables, and timelines."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <TiltCard
                key={faq.q}
                className="p-6 flex flex-col gap-2"
              >
                <h4 className="text-base font-bold text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#A78BFA] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
