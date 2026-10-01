"use client";

import React, { useState, useMemo } from "react";
import { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
  showSearch?: boolean;
  limit?: number;
}

export function ProjectGrid({
  projects,
  showFilter = true,
  showSearch = true,
  limit,
}: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: ProjectCategory[] = ["All", "Websites", "Web Apps", "Integrations"];

  const counts = useMemo(() => {
    const map: Record<ProjectCategory, number> = {
      All: projects.length,
      Websites: projects.filter((p) => p.category === "Websites").length,
      "Web Apps": projects.filter((p) => p.category === "Web Apps").length,
      Integrations: projects.filter((p) => p.category === "Integrations").length,
    };
    return map;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (limit) {
      result = result.slice(0, limit);
    }

    return result;
  }, [projects, activeCategory, searchQuery, limit]);

  return (
    <div className="flex flex-col gap-8">
      {(showFilter || showSearch) && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {showFilter && (
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              counts={counts}
            />
          )}

          {showSearch && (
            <div className="relative min-w-[220px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech, title..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          )}
        </div>
      )}

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx < 2} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-16 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800/60 p-8">
          <p className="text-zinc-400 text-sm">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-semibold text-indigo-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
