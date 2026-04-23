import React from 'react';

export function Pricing() {
  const priceList = [
    { service: "Signature Haircut", price: "$45" },
    { service: "Color Consultation & Dye", price: "$120+" },
    { service: "Keratin Treatment", price: "$150" },
    { service: "Deep Conditioning", price: "$35" },
    { service: "Radiance Facial", price: "$85" },
    { service: "Bridal Styling", price: "$180" },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground mb-4">Pricing Preview</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-foreground/70 text-lg font-light">
            Transparent pricing for our signature services.
          </p>
        </div>

        <div className="bg-primary p-8 md:p-12 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <ul className="space-y-6">
            {priceList.map((item, idx) => (
              <li key={idx} className="flex justify-between items-end border-b border-muted/20 pb-4">
                <span className="font-medium text-foreground tracking-wide text-lg">{item.service}</span>
                <span className="font-serif text-xl text-accent font-semibold">{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <p className="text-sm text-foreground/50 font-light italic">
              *Prices may vary depending on hair length, condition, and specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
