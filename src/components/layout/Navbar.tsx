"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";

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
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 pointer-events-none ${isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'}`}>
        <nav className={`pointer-events-auto w-full transition-all duration-500 flex justify-between items-center ${isScrolled ? "max-w-6xl bg-primary/80 backdrop-blur-lg shadow-2xl py-3 px-6 md:px-8 rounded-full border border-white/10" : "max-w-7xl bg-primary/90 backdrop-blur-sm md:bg-transparent py-6 px-6 md:px-12 rounded-none border-transparent"}`}>
          <div className="flex items-center gap-3">
            <Image src="/barber-logo.png" alt="Barber Logo" width={32} height={32} className="object-contain invert brightness-200" />
            <div className={`font-serif text-accent font-semibold tracking-wide transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
              <a href="#">The Shine <span className="text-foreground">Salon</span></a>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-foreground/90 hover:text-accent transition-colors font-medium text-sm tracking-wide">
                {link.name}
              </a>
            ))}
            <Button variant="primary" className={isScrolled ? "py-2 px-6" : ""}>Book Appointment</Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground focus:outline-none flex items-center justify-center">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="fixed z-40 top-0 left-0 w-full h-screen bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          {navLinks.map((link) => (
             <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-accent font-serif text-3xl tracking-wide transition-colors">
               {link.name}
             </a>
          ))}
          <Button variant="primary" className="mt-8 px-12 py-4 text-lg">Book Appointment</Button>
        </div>
      )}
    </>
  );
}
