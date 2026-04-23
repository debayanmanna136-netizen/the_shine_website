"use client";

import React from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed scale-110"
        style={{ 
          backgroundImage: 'url("/hero-bg.png")'
        }}
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-2xl animate-in slide-in-from-bottom-8 fade-in duration-1000 ease-out">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-foreground leading-tight drop-shadow-lg">
            Discover Your True <span className="text-accent italic">Shine</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 font-light max-w-lg leading-relaxed drop-shadow-md">
            Your Style, Our Passion. Experience premium styling and care in an environment that feels like home, yet looks like luxury.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" className="text-lg px-8 py-4 shadow-xl hover:shadow-accent/20">Book Appointment</Button>
            <Button variant="outline" className="text-lg px-8 py-4 bg-surface/30 backdrop-blur-md hover:bg-surface/50">Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
