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
      </div>

      {/* Stark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="container relative z-10 w-full px-6 md:px-12 flex flex-col justify-center items-center text-center h-full">
        <div className="max-w-4xl animate-in slide-in-from-bottom-8 fade-in duration-1000 ease-out">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white leading-[0.9] mb-8 drop-shadow-2xl">
            Transform Your Look
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/90 uppercase tracking-widest font-semibold mb-12">
            Expert Hair & Beauty Services
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6">
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white font-sans font-bold uppercase tracking-widest text-lg px-10 py-5 hover:bg-primary-hover transition-colors rounded-full shadow-lg hover:-translate-y-1">
              Book Now
            </a>
            <a href="#services" className="inline-flex items-center justify-center border-2 border-white text-white font-sans font-bold uppercase tracking-widest text-lg px-10 py-5 hover:bg-white hover:text-primary transition-colors rounded-full shadow-lg hover:-translate-y-1">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
