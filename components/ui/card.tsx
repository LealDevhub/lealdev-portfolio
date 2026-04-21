import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ children, className = "", hover = true, gradient = false, ...props }: CardProps) {
  const baseStyles = "bg-card rounded-xl border border-border overflow-hidden";
  const hoverStyles = hover ? "transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1" : "";
  const gradientStyles = gradient ? "gradient-border" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`px-6 pb-6 pt-0 ${className}`}>{children}</div>;
}
