"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function TiltCard({
  children,
  className,
  glowColor = "rgba(124, 58, 237, 0.18)",
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 350, damping: 25 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;

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
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative rounded-3xl bg-[#14131C] border border-[#262436] hover:border-[#5B448E] overflow-hidden backdrop-blur-xl shadow-xl transition-colors duration-300",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor-Following Radial Glow without re-renders */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300 z-0",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 80%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
