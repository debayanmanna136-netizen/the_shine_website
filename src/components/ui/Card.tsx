import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-surface p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-border hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}
