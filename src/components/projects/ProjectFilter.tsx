"use client";

import React from "react";
import { ProjectCategory } from "@/types";
import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
  counts?: Record<ProjectCategory, number>;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#14131C] border border-[#262436] backdrop-blur-xl w-fit">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors select-none ${
              isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeProjectCategory"
                className="absolute inset-0 bg-[#7C3AED] rounded-xl shadow-lg shadow-purple-900/40"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {category}
              {counts && counts[category] !== undefined && (
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-[#5B21B6] text-white" : "bg-[#1A1926] text-zinc-400"
                  }`}
                >
                  {counts[category]}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
