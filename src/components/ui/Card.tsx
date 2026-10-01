import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-[#14131C] border border-[#262436] p-7 backdrop-blur-xl transition-all duration-300",
        hoverEffect && "hover:bg-[#191824] hover:border-[#5B448E] hover:shadow-2xl hover:shadow-purple-900/15",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
