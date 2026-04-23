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
            Transform Your Look, <br/><span className="text-accent italic">Elevate Your Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 font-light max-w-lg leading-relaxed drop-shadow-md">
            Get premium hair & beauty services from expert stylists who care about your results. Walk in feeling tired, walk out feeling unstoppable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-accent text-primary font-medium text-lg px-8 py-4 rounded hover:bg-accent/90 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              Book on WhatsApp
            </a>
            <a href="#services" className="inline-flex items-center justify-center border border-accent text-accent text-lg px-8 py-4 rounded bg-surface/30 backdrop-blur-md hover:bg-surface/50 transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
