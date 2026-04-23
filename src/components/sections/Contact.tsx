import React from 'react';
import { Button } from '../ui/Button';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter mb-12 text-center md:text-left">
          Find Us
        </h2>
        
        <div className="bg-black border border-white/20 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 p-12 border-b lg:border-b-0 lg:border-r border-white/20">
              <h3 className="font-sans text-2xl font-bold uppercase tracking-widest mb-10">Get in Touch</h3>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-sans font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <MapPin size={18} /> Location
                  </h4>
                  <p className="text-white/70 font-sans text-lg mb-2">
                    123 Beauty Boulevard<br />
                    Suite 450<br />
                    New York, NY 10001
                  </p>
                  <p className="text-white font-bold uppercase tracking-widest text-sm">Serving NY & Surrounding Areas</p>
                </div>

                <div>
                  <h4 className="font-sans font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Phone size={18} /> Contact
                  </h4>
                  <p className="text-white/70 font-sans text-lg mb-4">+1 (555) 123-4567</p>
                  <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-bold uppercase tracking-widest text-xs px-6 py-3 hover:bg-gray-200 transition-colors">
                    Chat on WhatsApp
                  </a>
                </div>

                <div>
                  <h4 className="font-sans font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Clock size={18} /> Hours
                  </h4>
                  <p className="text-white/70 font-sans text-lg">
                    Mon - Fri: 9:00 AM - 8:00 PM<br />
                    Sat: 9:00 AM - 6:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 p-12 bg-surface">
              <h3 className="font-sans text-2xl font-bold uppercase tracking-widest mb-10">Send an Inquiry</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-sans font-bold uppercase tracking-widest text-sm mb-2 text-white/70">First Name</label>
                    <input type="text" className="w-full bg-black border border-white/20 p-4 focus:outline-none focus:border-white transition-colors text-white" placeholder="JANE" />
                  </div>
                  <div>
                    <label className="block font-sans font-bold uppercase tracking-widest text-sm mb-2 text-white/70">Last Name</label>
                    <input type="text" className="w-full bg-black border border-white/20 p-4 focus:outline-none focus:border-white transition-colors text-white" placeholder="DOE" />
                  </div>
                </div>
                <div>
                  <label className="block font-sans font-bold uppercase tracking-widest text-sm mb-2 text-white/70">Email</label>
                  <input type="email" className="w-full bg-black border border-white/20 p-4 focus:outline-none focus:border-white transition-colors text-white" placeholder="JANE@EXAMPLE.COM" />
                </div>
                <div>
                  <label className="block font-sans font-bold uppercase tracking-widest text-sm mb-2 text-white/70">Message</label>
                  <textarea rows={4} className="w-full bg-black border border-white/20 p-4 focus:outline-none focus:border-white transition-colors text-white resize-none" placeholder="HOW CAN WE HELP YOU?"></textarea>
                </div>
                <button type="button" className="bg-white text-black font-sans font-bold uppercase tracking-widest px-12 py-5 hover:bg-gray-200 transition-colors w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 w-full h-[500px] border border-white/20 bg-black">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744400758!3d40.69763123331291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
