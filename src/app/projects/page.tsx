"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 purple-glow-bg">
      <section className="relative pb-16">
        <Container size="large">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              badge="Projects"
              title="Featured"
              highlight="Work & Case Studies"
              description="Production web applications, client websites, and digital systems built with modern web technologies."
              className="mb-12"
            />
          </motion.div>

          <ProjectGrid projects={projects} showFilter={true} showSearch={true} />
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}
