import React from 'react';
import { Users, Camera, Mail, MapPin, Phone } from 'lucide-react';

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export function Footer() {
  const igImages = [
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516975080661-460d3dcd962a?q=80&w=200&auto=format&fit=crop"
  ];

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/20 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <h3 className="font-serif text-5xl tracking-tighter uppercase font-bold">THE SHINE</h3>
          <p className="font-sans text-white/70 uppercase tracking-widest text-sm leading-relaxed pr-4 font-bold">
            Expert styling. Premium care. Unapologetic confidence.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#" className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <FacebookIcon size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-sans text-xl mb-8 font-bold uppercase tracking-widest border-b border-white/20 pb-4">Explore</h3>
          <ul className="space-y-4">
            <li><a href="#services" className="font-sans uppercase tracking-widest text-sm text-white/70 hover:text-white hover:translate-x-2 transition-transform inline-block font-bold">Our Services</a></li>
            <li><a href="#about" className="font-sans uppercase tracking-widest text-sm text-white/70 hover:text-white hover:translate-x-2 transition-transform inline-block font-bold">About Us</a></li>
            <li><a href="#gallery" className="font-sans uppercase tracking-widest text-sm text-white/70 hover:text-white hover:translate-x-2 transition-transform inline-block font-bold">Style Gallery</a></li>
            <li><a href="#testimonials" className="font-sans uppercase tracking-widest text-sm text-white/70 hover:text-white hover:translate-x-2 transition-transform inline-block font-bold">Client Reviews</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-sans text-xl mb-8 font-bold uppercase tracking-widest border-b border-white/20 pb-4">Contact</h3>
          <ul className="space-y-6">
            <li className="flex items-start text-white/70">
              <MapPin size={20} className="mr-4 text-white shrink-0" />
              <span className="font-sans text-sm uppercase tracking-widest font-bold">123 Beauty Blvd,<br />New York, NY 10001</span>
            </li>
            <li className="flex items-center text-white/70">
              <Phone size={20} className="mr-4 text-white shrink-0" />
              <span className="font-sans text-sm uppercase tracking-widest font-bold">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center text-white/70">
              <Mail size={20} className="mr-4 text-white shrink-0" />
              <span className="font-sans text-sm uppercase tracking-widest font-bold">INFO@THESHINE.COM</span>
            </li>
          </ul>
        </div>

        {/* Instagram Grid */}
        <div>
          <h3 className="font-sans text-xl mb-8 font-bold uppercase tracking-widest border-b border-white/20 pb-4">Follow Us</h3>
          <div className="grid grid-cols-3 gap-2">
            {igImages.map((img, idx) => (
              <a key={idx} href="#" className="relative group overflow-hidden aspect-square block bg-surface">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" 
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon size={20} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-white/50 text-xs font-bold uppercase tracking-widest font-sans">
        <p>&copy; {new Date().getFullYear()} THE SHINE. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
