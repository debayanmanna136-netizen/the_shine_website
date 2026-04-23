import React from 'react';
import { Button } from '../ui/Button';

export function About() {
  return (
    <section id="about" className="py-32 bg-background border-y border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-6xl md:text-8xl lg:text-[10rem] uppercase tracking-tighter text-primary leading-[0.85] mb-8">
          YOUR STYLE.<br/>YOUR CONFIDENCE.
        </h2>
        <p className="font-sans text-xl md:text-3xl text-foreground/80 uppercase tracking-widest font-bold max-w-4xl mx-auto mb-16">
          We bring together years of expertise to offer personalized grooming experiences. We don't just cut hair; we craft your confidence.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          {[
            "EXPERT STYLISTS",
            "PREMIUM PRODUCTS",
            "STRICT HYGIENE",
            "LUXURY EXPERIENCE"
          ].map((point, idx) => (
            <div key={idx} className="border border-primary/20 p-6 flex items-center justify-center text-center hover:bg-primary hover:text-white text-foreground transition-colors duration-300">
              <span className="font-sans text-sm md:text-base font-bold uppercase tracking-widest">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
