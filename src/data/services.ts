import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "websites",
    title: "Complete Small Business Website",
    shortDescription: "A modern, clean, mobile-friendly website that shows what your business offers and makes it easy for customers to contact you.",
    iconName: "Globe",
    popular: true,
    timeline: "4 - 7 Days",
    inclusions: [
      "Custom design with your logo, brand colors, and photos",
      "100% responsive (looks amazing on Android, iPhone & laptops)",
      "Direct Click-to-WhatsApp and Call buttons on every page",
      "Google Maps location embed so customers can navigate to your shop/office",
      "Contact form with instant email / Google Sheets notification",
      "Basic SEO setup so your business shows up on Google Search",
    ],
    deliverables: [
      "Live website hosted on high-speed servers",
      "Custom domain setup (yourname.com or .in)",
      "Free SSL security padlock",
      "14 days free support after launch",
    ],
  },
  {
    id: "lead-systems",
    title: "1-Page High-Converting Landing Page",
    shortDescription: "A focused, single-page website designed specifically to get customer inquiries for a single product, service, or event.",
    iconName: "Zap",
    popular: true,
    timeline: "2 - 4 Days",
    inclusions: [
      "High-impact headline and clear list of your services / offers",
      "Customer review & testimonial section to build trust",
      "Sticky bottom bar with direct WhatsApp and Phone Call buttons",
      "Fast lead inquiry form connected directly to your Google Sheets",
      "Instant page loading on 4G/5G mobile networks",
    ],
    deliverables: [
      "Published landing page ready for WhatsApp or Instagram sharing",
      "Google Sheets lead sheet where all customer inquiries appear",
    ],
  },
  {
    id: "integrations",
    title: "UPI & Online Payment Setup",
    shortDescription: "Start accepting online payments or advance booking fees directly into your bank account using Google Pay, PhonePe, Paytm, and Cards.",
    iconName: "CreditCard",
    timeline: "2 - 3 Days",
    inclusions: [
      "Razorpay / UPI QR code payment integration",
      "Instant payment confirmation receipt sent to customer",
      "Direct bank account settlement with zero confusion",
      "Safe and encrypted checkout experience",
    ],
    deliverables: [
      "Live checkout button connected to your verified merchant account",
      "Test payment verification and step-by-step guide",
    ],
  },
  {
    id: "maintenance",
    title: "Website Redesign & Speed Fix",
    shortDescription: "Upgrade your slow, broken, or outdated website into a clean, modern, and fast website that customers love using.",
    iconName: "ShieldCheck",
    timeline: "3 - 5 Days",
    inclusions: [
      "Complete fresh visual redesign without losing your existing content",
      "Speed fix to eliminate slow loading times and image lag",
      "Fix broken buttons, outdated phone numbers, and outdated prices",
      "Update contact forms and location maps",
    ],
    deliverables: [
      "Modernized, fast-loading website with updated contact links",
      "Mobile-friendly layouts tested across all screen sizes",
    ],
  },
];
