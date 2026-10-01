import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "accent" | "purple" | "outline";
  dot?: boolean;
  children: React.ReactNode;
}

export function Badge({
  variant = "purple",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    purple: "bg-[#251545] text-[#C4B5FD] border border-[#58399E]/60",
    accent: "bg-[#251545] text-[#C4B5FD] border border-[#58399E]/60",
    success: "bg-[#064E3B]/80 text-[#6EE7B7] border border-[#059669]/60",
    default: "bg-[#1A1926] text-zinc-300 border border-[#2E2C42]",
    outline: "bg-transparent text-zinc-400 border border-[#2E2C42]",
  };

  const dotColors = {
    purple: "bg-[#A78BFA]",
    accent: "bg-[#A78BFA]",
    success: "bg-[#10B981] animate-pulse",
    default: "bg-zinc-400",
    outline: "bg-zinc-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("w-2 h-2 rounded-full shrink-0", dotColors[variant])} />}
      {children}
    </span>
  );
}
