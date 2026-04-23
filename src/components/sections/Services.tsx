import React from 'react';
import { Card } from '../ui/Card';
import { Scissors, Sparkles, Droplet, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "Haircuts & Styling",
      description: "From classic trims to complete transformations, tailored perfectly to you.",
      icon: <Scissors className="text-accent" size={32} />
    },
    {
      title: "Hair Treatments",
      description: "Nourish and restore your hair's natural vitality with premium care.",
      icon: <Sparkles className="text-accent" size={32} />
    },
    {
      title: "Skin Care",
      description: "Rejuvenating facials and skin wellness designed for a radiant glow.",
      icon: <Droplet className="text-accent" size={32} />
    },
    {
      title: "Grooming",
      description: "Precision beard detailing and clean, professional grooming services.",
      icon: <Users className="text-accent" size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl text-foreground mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-foreground/70 text-lg font-light">
            Indulge in our comprehensive range of services, designed to elevate your unique style and enhance your natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:-translate-y-1 transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(service.icon, { className: 'group-hover:text-white transition-colors duration-300' })}
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
