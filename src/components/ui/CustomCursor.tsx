"use client";

import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.group') // to hover on flashcards
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isVisible]);

  if (!mounted) return null;
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null; // Don't show custom cursor on mobile

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `body { cursor: none; } a, button { cursor: none; }`}} />
      <div 
        className={`fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-150 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) scale(${isHovering ? 2.5 : 1})`,
        }}
      ></div>
    </>
  );
}
