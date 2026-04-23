import React from 'react';

export function Pricing() {
  const gentsServices = [
    { service: "Hair Cut", price: "₹80" },
    { service: "Beard", price: "₹40" },
    { service: "Shaving", price: "₹50" },
    { service: "Spa", price: "₹200 / ₹300 / ₹400", popular: true },
    { service: "Straightening", price: "₹800 – ₹1000" },
    { service: "Global Colour", price: "₹300 / ₹400" },
    { service: "Highlight", price: "₹600 – ₹1000" },
    { service: "Perming", price: "₹1000 – ₹1500" },
  ];

  const ladiesServices = [
    { service: "Shampoo + Haircut + Blowdry", price: "₹200" },
    { service: "Hair Spa", price: "₹500 / ₹800 / ₹1000" },
    { service: "Threading", price: "₹30" },
    { service: "Global Colour", price: "₹1200 – ₹1500" },
    { service: "Highlight", price: "₹200 per stick" },
    { service: "Straightening / Smoothening", price: "₹3000 / ₹3500", popular: true },
    { service: "All Types of Hair Treatment", price: "₹3000 / ₹4000 / ₹5000" },
    { service: "Dandruff Treatment", price: "₹800 – ₹1000" },
    { service: "Ozone + Hairfall Treatment", price: "₹500 / ₹800" },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-medium mb-3 uppercase tracking-widest">
            Affordable pricing with premium service
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 uppercase tracking-tighter">
            Our Services & Pricing
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gents Column */}
          <div className="bg-surface p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border">
            <h3 className="font-serif text-3xl text-primary uppercase tracking-tight border-b border-border pb-6 mb-8 text-center md:text-left">
              Gents Services
            </h3>
            <ul className="space-y-6">
              {gentsServices.map((item, idx) => (
                <li key={idx} className="flex justify-between items-end relative group">
                  <div className="flex-1 pr-4">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      <span className="font-medium text-foreground tracking-wide text-lg md:text-xl group-hover:text-primary transition-colors">
                        {item.service}
                      </span>
                      {item.popular && (
                        <span className="text-xs font-bold uppercase tracking-wider bg-accent text-white px-2 py-1 rounded-sm whitespace-nowrap">
                          Most Popular
                        </span>
                      )}
                    </div>
                    {/* Dots divider */}
                    <div className="border-b-[1.5px] border-dotted border-border mt-3 opacity-60 group-hover:border-primary/40 transition-colors w-full"></div>
                  </div>
                  <span className="font-serif text-xl md:text-2xl text-foreground font-semibold pl-2 whitespace-nowrap">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ladies Column */}
          <div className="bg-surface p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border">
            <h3 className="font-serif text-3xl text-primary uppercase tracking-tight border-b border-border pb-6 mb-8 text-center md:text-left">
              Ladies Services
            </h3>
            <ul className="space-y-6">
              {ladiesServices.map((item, idx) => (
                <li key={idx} className="flex justify-between items-end relative group">
                  <div className="flex-1 pr-4">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      <span className="font-medium text-foreground tracking-wide text-lg md:text-xl group-hover:text-primary transition-colors">
                        {item.service}
                      </span>
                      {item.popular && (
                        <span className="text-xs font-bold uppercase tracking-wider bg-accent text-white px-2 py-1 rounded-sm whitespace-nowrap">
                          Most Popular
                        </span>
                      )}
                    </div>
                    {/* Dots divider */}
                    <div className="border-b-[1.5px] border-dotted border-border mt-3 opacity-60 group-hover:border-primary/40 transition-colors w-full"></div>
                  </div>
                  <span className="font-serif text-xl md:text-2xl text-foreground font-semibold pl-2 whitespace-nowrap">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="https://wa.me/91XXXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans font-bold uppercase tracking-widest text-lg px-12 py-5 rounded-full hover:bg-[#1ebd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z" />
            </svg>
            Book on WhatsApp
          </a>
          <a 
            href="tel:+91XXXXXXXXXX" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-sans font-bold uppercase tracking-widest text-lg px-12 py-5 rounded-full hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
