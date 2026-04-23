"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary border-b border-white/20 py-4 shadow-md' : 'bg-transparent py-6'}`}>
        <nav className="w-full max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-12">
          <div className="flex items-center gap-3">
            <div className="font-serif text-3xl uppercase tracking-tighter text-white font-bold">
              <a href="#">THE SHINE</a>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white/90 hover:text-accent uppercase tracking-widest font-sans font-bold text-sm transition-colors">
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/91XXXXXXXXXX" className="bg-accent text-white font-sans font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-accent-hover transition-colors rounded-full shadow-md">
              Book Now
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none flex items-center justify-center">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="fixed z-40 top-0 left-0 w-full h-screen bg-primary flex flex-col items-center justify-center space-y-10 animate-in fade-in duration-300">
          {navLinks.map((link) => (
             <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-accent font-serif text-4xl uppercase tracking-tighter transition-colors">
               {link.name}
             </a>
          ))}
          <a href="https://wa.me/91XXXXXXXXXX" className="mt-8 bg-accent text-white font-sans font-bold uppercase tracking-widest px-12 py-5 text-lg hover:bg-accent-hover transition-colors rounded-full shadow-lg">
            Book Now
          </a>
        </div>
      )}
    </>
  );
}
