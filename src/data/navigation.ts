import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  navigation: [
    { label: "About Yash", href: "/about" },
    { label: "Services & Pricing", href: "/services" },
    { label: "Client Projects", href: "/projects" },
    { label: "Contact / WhatsApp", href: "/contact" },
  ],
  services: [
    { label: "Small Business Websites", href: "/services#websites" },
    { label: "1-Page Landing Pages", href: "/services#lead-systems" },
    { label: "UPI & Online Payments", href: "/services#integrations" },
    { label: "Website Speed & Redesign", href: "/services#maintenance" },
  ],
  socials: [
    { label: "WhatsApp", href: "https://wa.me/919718871979", icon: "MessageSquare" },
    { label: "GitHub", href: "https://github.com/ysh024", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yash-developer", icon: "Linkedin" },
  ]
};
