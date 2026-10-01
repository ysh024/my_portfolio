"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "purple" | "glow";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-2xl select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#6E06F2] to-[#8B5CF6] text-white shadow-lg shadow-purple-900/40 border border-purple-400/30 hover:shadow-purple-700/60 hover:opacity-95",
    glow:
      "bg-gradient-to-r from-[#6E06F2] to-[#8B5CF6] text-white shadow-lg shadow-purple-900/40 border border-purple-400/30 hover:shadow-purple-700/60 hover:opacity-95",
    purple:
      "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-lg shadow-purple-900/40 border border-purple-500/40",
    secondary:
      "bg-[#1A1926] text-zinc-100 hover:bg-[#232133] border border-[#2E2C42] hover:border-[#4B3E75]",
    outline:
      "border border-[#2E2C42] bg-[#14131C]/60 text-zinc-300 hover:bg-[#1E1C2B] hover:text-white hover:border-[#5B448E]",
    ghost:
      "text-zinc-400 hover:text-white hover:bg-zinc-800/40",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
