import React from "react";
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function Tag({ children, active = false, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-xl text-xs font-medium transition-colors select-none",
        active
          ? "bg-[#7C3AED] text-white shadow-md shadow-purple-900/40"
          : "bg-[#1A1926] text-zinc-300 border border-[#2E2C42] hover:border-[#5B448E]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
