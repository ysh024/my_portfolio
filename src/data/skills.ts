import { Skill, SkillCategory } from "@/types";

export const skills: Skill[] = [
  // Web Development
  { name: "Next.js & React", category: "Frontend", level: "Advanced", highlight: true, description: "Fast, modern websites that load instantly on all mobile phones and laptops." },
  { name: "TypeScript & JavaScript", category: "Frontend", level: "Advanced", highlight: true, description: "Clean, error-free code that keeps your website running smoothly 24/7." },
  { name: "Tailwind CSS & Mobile Design", category: "Frontend", level: "Advanced", highlight: true, description: "Modern, clean visual layouts customized with your brand colors and logo." },
  { name: "Fast Mobile Performance", category: "Frontend", level: "Advanced", highlight: true, description: "Optimized images and lightweight code for instant loading on 4G and 5G networks." },

  // Business Integrations
  { name: "WhatsApp Click-to-Chat", category: "Integrations", level: "Advanced", highlight: true, description: "Direct buttons so customers can message your business with one tap." },
  { name: "Google Maps & Directions", category: "Integrations", level: "Advanced", highlight: true, description: "Interactive map embeds so customers can easily drive to your office or shop." },
  { name: "Razorpay & UPI Payments", category: "Integrations", level: "Advanced", highlight: true, description: "Accept payments via Google Pay, PhonePe, Paytm, and Cards directly to your bank." },
  { name: "Google Sheets Lead Sync", category: "Integrations", level: "Advanced", highlight: true, description: "Automatic lead forwarding so all website inquiries show up directly in your spreadsheet." },
  { name: "Email Alerts (Resend)", category: "Integrations", level: "Advanced", description: "Get instant email alerts on your phone whenever a customer fills out your contact form." },

  // Hosting & Local SEO
  { name: "Google Search & Local SEO", category: "DevOps / Tools", level: "Advanced", highlight: true, description: "On-page search optimization so local customers find your business when searching in your city." },
  { name: "Custom Domain & SSL (.com / .in)", category: "DevOps / Tools", level: "Advanced", highlight: true, description: "Complete setup for your official domain name with free SSL security padlock." },
  { name: "High-Speed Cloud Hosting", category: "DevOps / Tools", level: "Advanced", description: "Reliable, 99.9% uptime hosting on Vercel with zero server maintenance hassle." },
  { name: "AI-Powered Coding Speed", category: "AI-Assisted Development", level: "Advanced", highlight: true, description: "Using AI development tools to deliver your website in days instead of weeks." }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development & Design",
    description: "Building fast, modern, and mobile-friendly websites that look great.",
    skills: skills.filter((s) => s.category === "Frontend"),
  },
  {
    title: "Business & Payment Integrations",
    description: "WhatsApp buttons, Google Maps, UPI payments, and automated lead capture.",
    skills: skills.filter((s) => s.category === "Integrations"),
  },
  {
    title: "Hosting, Domains & Local SEO",
    description: "Domain setup, Google ranking, and ultra-reliable cloud hosting.",
    skills: skills.filter((s) => s.category === "DevOps / Tools" || s.category === "AI-Assisted Development"),
  },
];
