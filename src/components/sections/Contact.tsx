import React from 'react';
import { Button } from '../ui/Button';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-surface rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 bg-foreground text-primary p-12">
              <h3 className="font-serif text-3xl mb-8 text-accent">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 tracking-wide">Location</h4>
                    <p className="text-primary/70 font-light leading-relaxed">
                      123 Beauty Boulevard<br />
                      Suite 450<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 tracking-wide">Phone</h4>
                    <p className="text-primary/70 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 tracking-wide">Opening Hours</h4>
                    <p className="text-primary/70 font-light">
                      Mon - Fri: 9:00 AM - 8:00 PM<br />
                      Sat: 9:00 AM - 6:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 p-12">
              <h3 className="font-serif text-3xl mb-8 text-foreground">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">First Name</label>
                    <input type="text" className="w-full border-b border-muted/30 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Last Name</label>
                    <input type="text" className="w-full border-b border-muted/30 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Email</label>
                  <input type="email" className="w-full border-b border-muted/30 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                  <textarea rows={4} className="w-full border-b border-muted/30 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <Button variant="primary" type="button" className="w-full md:w-auto mt-4 px-10">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
