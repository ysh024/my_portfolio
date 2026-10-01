import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center max-w-2xl mx-auto" : "items-start",
        className
      )}
    >
      {badge && (
        <div className="inline-block">
          <Badge variant="purple" className="mb-1">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-gradient-accent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
