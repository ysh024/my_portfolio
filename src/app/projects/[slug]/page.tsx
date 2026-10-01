import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { TiltCard } from "@/components/ui/TiltCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, getProjectBySlug } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon, WhatsappIcon } from "@/components/ui/SocialIcons";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="pt-32 pb-20 purple-glow-bg">
      <Container size="large">
        {/* Top Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#A78BFA]" /> Back to all projects
          </Link>
        </div>

        {/* Project Hero Header */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="purple">{project.category}</Badge>
            <span className="text-xs text-zinc-400 font-mono">Year {project.year}</span>
            <Badge variant="success" dot>{project.status}</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Launch Live Website
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                View Source Code
              </Button>
            )}
          </div>
        </div>

        {/* Hero Visual Preview Card */}
        <div className="mt-12 relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#262436] bg-[#14131C] shadow-2xl shadow-purple-950/40">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 sm:p-7 rounded-3xl bg-[#14131C] border border-[#262436] backdrop-blur-xl">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">{m.label}</span>
                <span className="text-2xl font-extrabold text-[#A78BFA] mt-1">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Main Case Study Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Case Study Details */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Overview */}
            <TiltCard className="p-8 flex flex-col gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.overview}
              </p>
            </TiltCard>

            {/* Problem & Solution Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TiltCard className="p-7 bg-[#1A1218] border-red-900/30 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-red-400">
                  <AlertTriangle className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">The Challenge</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </TiltCard>

              <TiltCard className="p-7 bg-[#111A18] border-emerald-900/30 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">The Solution</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </TiltCard>
            </div>

            {/* Key Features */}
            <TiltCard className="p-8 flex flex-col gap-5">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Key Features Delivered
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#0D0D12] border border-[#262436]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-200">{feature}</span>
                  </div>
                ))}
              </div>
            </TiltCard>

            {/* Challenges & Learnings */}
            {(project.challenges || project.learnings) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.challenges && (
                  <TiltCard className="p-7 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-amber-400">
                      <Layers className="w-4 h-4" />
                      <h3 className="text-sm font-bold">Key Challenges</h3>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="leading-relaxed">&bull; {c}</li>
                      ))}
                    </ul>
                  </TiltCard>
                )}

                {project.learnings && (
                  <TiltCard className="p-7 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-[#A78BFA]">
                      <Lightbulb className="w-4 h-4" />
                      <h3 className="text-sm font-bold">Project Takeaways</h3>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                      {project.learnings.map((l, i) => (
                        <li key={i} className="leading-relaxed">&bull; {l}</li>
                      ))}
                    </ul>
                  </TiltCard>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar: Tech Stack & Inquire */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Tech Stack */}
            <TiltCard className="p-7 flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <Tag key={t} className="text-xs">
                    {t}
                  </Tag>
                ))}
              </div>
            </TiltCard>

            {/* Integrations */}
            {project.integrations && project.integrations.length > 0 && (
              <TiltCard className="p-7 flex flex-col gap-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                  APIs &amp; Integrations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.integrations.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-xl text-xs bg-[#251545] text-[#C4B5FD] border border-[#58399E]/60 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            )}

            {/* Quick Inquire Bento Card */}
            <TiltCard className="p-7 bg-gradient-to-br from-[#251545] via-[#14131C] to-[#0D0D12] border-[#58399E]/60 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#DDD6FE]">
                <Sparkles className="w-4 h-4 text-[#A78BFA]" />
                <h3 className="text-sm font-bold">Want a similar website?</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Let&apos;s build a custom, high-converting website tailored specifically for your business.
              </p>
              <Button href="/contact" variant="primary" size="sm" className="w-full justify-center">
                Get a Free Quote
              </Button>
            </TiltCard>
          </div>
        </div>

        {/* Related Case Studies */}
        {relatedProjects.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#262436]">
            <h2 className="text-2xl font-bold text-white mb-8">
              More Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
