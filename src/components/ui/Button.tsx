import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent tracking-wide";
  const primaryStyle = "bg-accent text-primary hover:bg-accent-hover hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5";
  const outlineStyle = "border border-accent text-accent hover:bg-accent hover:text-primary";
  
  const style = variant === "primary" ? primaryStyle : outlineStyle;
  
  return (
    <button className={`${baseStyle} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}
