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
                    <p className="text-primary/70 font-light leading-relaxed mb-2">
                      123 Beauty Boulevard<br />
                      Suite 450<br />
                      New York, NY 10001
                    </p>
                    <p className="text-accent text-sm font-medium">Proudly serving clients in NY & surrounding areas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 tracking-wide">Contact</h4>
                    <p className="text-primary/70 font-light text-lg mb-2">+1 (555) 123-4567</p>
                    <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white text-sm px-4 py-1.5 rounded font-medium hover:bg-green-600 transition-colors">
                      Chat on WhatsApp
                    </a>
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
                <Button variant="primary" type="button" className="w-full md:w-auto mt-4 px-10">Send Inquiry</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 w-full h-[400px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-surface border border-white/5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744400758!3d40.69763123331291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-90 grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
