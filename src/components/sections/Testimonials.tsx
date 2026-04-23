import React from 'react';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Emma S.",
      text: "The most relaxing salon experience I've ever had. Not only do I love my new haircut, but the staff made me feel incredibly pampered.",
      role: "Client"
    },
    {
      name: "Michael T.",
      text: "Professional, clean, and highly skilled. The grooming service is top tier. I won't go anywhere else for my trims.",
      role: "Client"
    },
    {
      name: "Sophia L.",
      text: "Absolutely stunning results! The color correction was done flawlessly. The ambiance is elegant and welcoming.",
      role: "Client"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-8">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter mb-2">Real Reviews</h2>
            <p className="font-sans text-xl uppercase tracking-widest text-white/70 font-bold">5-Star Experiences</p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-2 text-white">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-background text-foreground border border-transparent p-8 hover:border-accent transition-colors duration-300 flex flex-col">
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <h3 className="font-sans font-bold text-xl text-primary uppercase tracking-widest mb-4">"Absolutely Stunning"</h3>
              <p className="text-foreground/80 font-sans text-lg flex-grow mb-8 leading-relaxed">
                {item.text}
              </p>
              <div className="border-t border-border pt-4 mt-auto flex items-center justify-between">
                <span className="font-sans font-bold uppercase tracking-widest text-primary">{item.name}</span>
                <span className="text-xs uppercase tracking-widest text-primary/70 bg-primary/10 px-2 py-1">Verified Client</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-block bg-background text-primary font-sans font-bold uppercase tracking-widest text-lg px-12 py-5 hover:bg-accent hover:text-white transition-colors">
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
