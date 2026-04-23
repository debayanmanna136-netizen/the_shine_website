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
    <footer className="bg-primary pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <h3 className="font-serif text-3xl text-accent tracking-wide">The Shine</h3>
          <p className="text-foreground/70 leading-relaxed font-light text-sm pr-4">
            Where your style meets our passion. We provide premium salon and barbershop services focused on your beauty, wellness, and distinct elegance.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-foreground transition-all duration-300 transform hover:-translate-y-1">
              <InstagramIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-foreground transition-all duration-300 transform hover:-translate-y-1">
              <FacebookIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-foreground transition-all duration-300 transform hover:-translate-y-1">
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-serif text-xl mb-6 text-foreground">Explore</h3>
          <ul className="space-y-4">
            <li><a href="#services" className="text-foreground/70 hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Our Services</a></li>
            <li><a href="#about" className="text-foreground/70 hover:text-accent hover:pl-2 transition-all duration-300 inline-block">About Us</a></li>
            <li><a href="#gallery" className="text-foreground/70 hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Style Gallery</a></li>
            <li><a href="#testimonials" className="text-foreground/70 hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Client Reviews</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-serif text-xl mb-6 text-foreground">Contact</h3>
          <ul className="space-y-5">
            <li className="flex items-start text-foreground/70 group">
              <MapPin size={20} className="mr-3 text-accent mt-0.5 group-hover:-translate-y-1 transition-transform" />
              <span className="font-light">123 Elegance Avenue,<br />Mumbai, Maharashtra 400001</span>
            </li>
            <li className="flex items-center text-foreground/70 group">
              <Phone size={20} className="mr-3 text-accent group-hover:rotate-12 transition-transform" />
              <span className="font-light">+91 98765 43210</span>
            </li>
            <li className="flex items-center text-foreground/70 group">
              <Mail size={20} className="mr-3 text-accent group-hover:scale-110 transition-transform" />
              <span className="font-light">hello@theshinesalon.com</span>
            </li>
          </ul>
        </div>

        {/* Instagram Grid */}
        <div>
          <h3 className="font-serif text-xl mb-6 text-foreground">Follow Us</h3>
          <div className="grid grid-cols-3 gap-2">
            {igImages.map((img, idx) => (
              <a key={idx} href="#" className="relative group rounded-md overflow-hidden aspect-square block">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon size={18} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-foreground/50 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} The Shine Salon. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
