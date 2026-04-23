"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  // Replace with actual WhatsApp number
  const whatsappUrl = "https://wa.me/91XXXXXXXXXX";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-gray-800 text-sm font-semibold py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Book on WhatsApp
      </span>
    </a>
  );
}
