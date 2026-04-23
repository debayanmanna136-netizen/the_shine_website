import React from 'react';

export function ServicesPricing() {
  const gentsServices = [
    { name: "Hair Cut", price: "₹80", popular: true },
    { name: "Beard", price: "₹40" },
    { name: "Shaving", price: "₹50" },
    { name: "Spa", price: "₹200 / ₹300 / ₹400" },
    { name: "Straightening", price: "₹800 - ₹1000" },
    { name: "Global Colour", price: "₹300 / ₹400" },
    { name: "Highlight", price: "₹600 - ₹1000" },
    { name: "Perming", price: "₹1000 - ₹1500" },
  ];

  const ladiesServices = [
    { name: "Shampoo + Haircut + Blowdry", price: "₹200", popular: true },
    { name: "Hair Spa", price: "₹500 / ₹800 / ₹1000" },
    { name: "Threading", price: "₹30" },
    { name: "Global Colour", price: "₹1200 - ₹1500" },
    { name: "Highlight", price: "₹200 per stick" },
    { name: "Straightening / Smoothening", price: "₹3000 - ₹3500", popular: true },
    { name: "Hair Treatment", price: "₹3000 / ₹4000 / ₹5000" },
    { name: "Dandruff Treatment", price: "₹800 + ₹1000" },
    { name: "Ozone + Hairfall Treatment", price: "₹500 / ₹800" },
  ];

  return (
    <div id="services" className="w-full flex flex-col gap-16 py-24 bg-primary relative">
      {/* Subtle background glow effect for theme visibility */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 mb-12">
        <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Services</h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
        <p className="text-foreground/70 font-light text-lg">
          Experience our premium services in a relaxing, modern atmosphere. 
          Expert styling for both men and women.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Gents Section */}
        <div className="flex flex-col bg-surface/30 p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
          <div className="mb-10 text-center lg:text-left">
            <h3 className="font-serif text-4xl md:text-5xl text-accent mb-4">For Men</h3>
            <p className="text-foreground/60 font-light text-sm uppercase tracking-widest">Precision Grooming</p>
          </div>

          <div className="flex flex-col gap-6 mb-10">
            {gentsServices.map((item, idx) => (
              <div key={idx} className="group flex flex-col sm:flex-row sm:items-end border-b border-white/5 pb-4 hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center">
                  <h4 className="font-serif text-xl md:text-2xl text-foreground/90 group-hover:text-white transition-colors duration-300 pr-2">
                    {item.name}
                  </h4>
                  {item.popular && (
                    <span className="text-[10px] uppercase tracking-wider bg-accent/20 text-accent px-2 py-1 rounded-sm ml-2">Popular</span>
                  )}
                </div>
                <div className="flex-grow border-b-2 border-dotted border-white/10 mb-2 mx-4 group-hover:border-accent/30 transition-colors duration-300 hidden sm:block"></div>
                <p className="font-medium text-accent text-lg md:text-xl whitespace-nowrap mt-2 sm:mt-0">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ladies Section */}
        <div className="flex flex-col bg-surface/30 p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
          <div className="mb-10 text-center lg:text-left">
            <h3 className="font-serif text-4xl md:text-5xl text-accent mb-4">For Women</h3>
            <p className="text-foreground/60 font-light text-sm uppercase tracking-widest">Ultimate Transformation</p>
          </div>

          <div className="flex flex-col gap-6 mb-10">
            {ladiesServices.map((item, idx) => (
              <div key={idx} className="group flex flex-col sm:flex-row sm:items-end border-b border-white/5 pb-4 hover:border-accent/40 transition-colors duration-300">
                <div className="flex items-center">
                  <h4 className="font-serif text-xl md:text-2xl text-foreground/90 group-hover:text-white transition-colors duration-300 pr-2">
                    {item.name}
                  </h4>
                  {item.popular && (
                    <span className="text-[10px] uppercase tracking-wider bg-accent/20 text-accent px-2 py-1 rounded-sm ml-2">Popular</span>
                  )}
                </div>
                <div className="flex-grow border-b-2 border-dotted border-white/10 mb-2 mx-4 group-hover:border-accent/30 transition-colors duration-300 hidden sm:block"></div>
                <p className="font-medium text-accent text-lg md:text-xl whitespace-nowrap mt-2 sm:mt-0">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
