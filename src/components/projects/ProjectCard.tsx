"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { motion, useSpring } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 350, damping: 25 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    rotateX.set(rotX);
    rotateY.set(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -7, scale: 1.01 }}
      className="group relative flex flex-col rounded-3xl bg-[#14131C] border border-[#262436] hover:border-[#5B448E] overflow-hidden backdrop-blur-xl transition-colors duration-300 hover:shadow-2xl hover:shadow-purple-900/30"
    >
      {/* Dynamic Cursor Light Reflection */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.18), transparent 75%)`,
        }}
      />

      {/* Thumbnail / Image Preview */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0D0D12] border-b border-[#262436] z-0">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14131C] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
          <Badge variant="purple" className="shadow-md">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge variant="purple" className="bg-[#2E1065] text-[#DDD6FE] border-[#7C3AED]/70 shadow-md">
              <Sparkles className="w-3 h-3 mr-1 text-[#A78BFA]" /> Featured
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 relative z-20">
        {/* Title */}
        <Link href={`/projects/${project.slug}`} className="group/link block">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover/link:text-[#A78BFA] transition-colors flex items-center justify-between gap-2">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/link:text-[#A78BFA] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all shrink-0" />
          </h3>
        </Link>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Metrics Pill (if any) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 py-2 px-3 rounded-2xl bg-[#0D0D12] border border-[#262436] text-xs">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="flex items-center gap-1.5 text-zinc-300">
                <span className="text-zinc-400">{m.label}:</span>
                <span className="font-bold text-[#A78BFA]">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech} className="text-xs">
              {tech}
            </Tag>
          ))}
          {project.technologies.length > 4 && (
            <Tag className="text-xs text-zinc-400">
              +{project.technologies.length - 4}
            </Tag>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[#262436] flex items-center justify-between text-xs text-zinc-400">
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-[#A78BFA] hover:text-[#C4B5FD] transition-colors inline-flex items-center gap-1"
          >
            View Case Study &rarr;
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View source code"
                className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-[#1E1C2B] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View live demo"
                className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-[#1E1C2B] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
