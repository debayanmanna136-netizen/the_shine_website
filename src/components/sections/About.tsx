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
            <h2 className="font-serif text-4xl text-foreground mb-6">About Our Salon</h2>
            <p className="text-foreground/70 font-light text-lg mb-6 leading-relaxed">
              At The Shine Hair and Beauty, we believe that true elegance lies in feeling entirely comfortable in your own skin. Situated in the heart of the city, our salon provides an oasis of styling, beauty, and relaxation.
            </p>
            <p className="text-foreground/70 font-light text-lg mb-8 leading-relaxed">
              We bring together years of expertise and a passion for aesthetics to offer personalized grooming experiences. Whether you seek a classic trim, a rejuvenating skin treatment, or an entirely new look, our expert team is dedicated to helping you shine from the inside out.
            </p>
            <Button variant="primary">Read Our Story</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
