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
    <section id="testimonials" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground mb-4">Client Love</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <Card key={idx} className="flex flex-col h-full bg-primary/30">
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 font-light italic flex-grow mb-8 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-medium text-foreground tracking-wide">{item.name}</h4>
                <p className="text-sm text-foreground/50">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent text-primary font-medium text-lg px-8 py-4 rounded hover:bg-accent/90 transition-colors shadow-xl hover:shadow-accent/20">
            Book Your Appointment Today
          </a>
        </div>
      </div>
    </section>
  );
}
