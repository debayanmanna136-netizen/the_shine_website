import React from 'react';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

export function Gallery() {
  const images = [
    "/images/gallery_1.png",
    "/images/gallery_2.png",
    "/images/gallery_3.png",
    "/images/gallery_4.png"
  ];

  return (
    <section id="gallery" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Style Transformations</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-foreground/70 text-lg font-light max-w-2xl mx-auto">
            A glimpse into our salon experience and the stunning transformations we create every day.
          </p>
        </div>

        {/* Interactive Before/After Section */}
        <div className="mb-20">
          <BeforeAfterSlider 
            beforeImage="/images/before_hair.png" 
            afterImage="/images/after_hair.png" 
          />
        </div>

        {/* Static Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="group overflow-hidden rounded-2xl bg-primary border border-white/5 hover:border-accent/30 transition-all duration-500 shadow-lg relative aspect-[4/5]">
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-1"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-white/90 font-serif text-xl tracking-wider uppercase border border-white/20 rounded-full px-6 py-2 backdrop-blur-sm -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
