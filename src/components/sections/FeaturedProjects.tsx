"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 sm:py-28 border-t border-zinc-800/60 bg-zinc-950/30 relative">
      <Container size="large">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Client Work"
            title="Recent"
            highlight="Websites &amp; Projects"
            description="Real examples of websites built for local businesses, clinics, cafes, and service providers."
          />
          <Button
            href="/projects"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((project, idx) => (
            <ProjectCard key={project.id} project={project} priority={idx < 2} />
          ))}
        </div>
      </Container>
    </section>
  );
}
