import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 relative purple-glow-bg">
      <Container size="small" className="text-center relative z-10 flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-3xl bg-[#251545] border border-[#58399E]/60 flex items-center justify-center text-[#A78BFA] shadow-2xl shadow-purple-950/50">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold text-[#A78BFA] uppercase tracking-widest px-3 py-1 rounded-full bg-[#14131C] border border-[#262436]">
          Error 404
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-zinc-300 max-w-md leading-relaxed">
          The page you are looking for might have been moved, renamed, or doesn&apos;t exist.
        </p>

        <div className="pt-2">
          <Button href="/about" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Return to Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}
