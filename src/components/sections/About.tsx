import React from 'react';
import { Button } from '../ui/Button';

export function About() {
  return (
    <section id="about" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-accent/10 -translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 group-hover:-translate-x-6 group-hover:translate-y-6"></div>
            <img 
              src="/images/about_salon.png" 
              alt="Salon Interior" 
              className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl text-foreground mb-6">Why Choose The Shine?</h2>
            <p className="text-foreground/70 font-light text-lg mb-6 leading-relaxed">
              We bring together years of expertise and a passion for aesthetics to offer personalized grooming experiences. We don't just cut hair; we craft your confidence.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Highly experienced & trained stylists",
                "Strict hygiene and sanitization standards",
                "Premium salon products & treatments",
                "Affordable luxury pricing",
                "Personalized consultation for every client"
              ].map((point, idx) => (
                <li key={idx} className="flex items-center text-foreground/80 font-light">
                  <div className="w-2 h-2 rounded-full bg-accent mr-4"></div>
                  {point}
                </li>
              ))}
            </ul>

            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent text-primary font-medium text-base px-8 py-3 rounded hover:bg-accent/90 transition-colors shadow-lg">
              Book Your Session
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
