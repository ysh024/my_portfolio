import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Yash",
  description: "Explore web applications, production websites, integrations, and interactive systems.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 purple-glow-bg">
      <section className="relative pb-16">
        <Container size="large">
          <SectionHeading
            badge="Projects"
            title="Featured"
            highlight="Work & Case Studies"
            description="Production web applications, client websites, and digital systems built with modern web technologies."
            className="mb-12"
          />

          <ProjectGrid projects={projects} showFilter={true} showSearch={true} />
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}
