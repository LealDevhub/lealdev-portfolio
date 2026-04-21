"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, badge, children, align = "center" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-4 mb-12 ${alignClass}`}
    >
      {badge && (
        <span className="text-sm font-medium text-primary-light tracking-wider uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-2xl text-pretty leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
