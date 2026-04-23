import React from 'react';

export function ServicesPricing() {
  const collections = [
    {
      title: "HAIRCUT & STYLING",
      image: "/images/gallery_1.png",
      link: "#"
    },
    {
      title: "COLOUR & HIGHLIGHTS",
      image: "/images/gallery_2.png",
      link: "#"
    },
    {
      title: "HAIR SPA & TREATMENTS",
      image: "/images/gallery_3.png",
      link: "#"
    },
    {
      title: "BRIDAL & MAKEUP",
      image: "/images/gallery_4.png",
      link: "#"
    }
  ];

  return (
    <div id="services" className="w-full py-24 bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter mb-12 text-center md:text-left">
          Our Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, idx) => (
            <a key={idx} href={item.link} className="group relative block aspect-[3/4] overflow-hidden bg-surface">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/50"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-serif text-3xl uppercase tracking-tighter text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500">
                  <span className="font-sans text-sm uppercase tracking-widest font-bold border-b-2 border-white pb-1">
                    Explore
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA after section */}
        <div className="mt-20 text-center">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary font-sans font-bold uppercase tracking-widest text-lg px-12 py-5 rounded-full shadow-lg hover:bg-accent hover:text-white transition-all hover:-translate-y-1">
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
