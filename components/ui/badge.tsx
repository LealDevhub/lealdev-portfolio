import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "primary" | "outline";
}

export function Badge({ children, className = "", variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-card text-muted border border-border",
    primary: "bg-primary/10 text-primary-light border border-primary/20",
    outline: "bg-transparent text-muted border border-border hover:border-primary/50 hover:text-primary-light",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
