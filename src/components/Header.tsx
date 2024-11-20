import React, { useEffect, useRef } from 'react';
import { Monitor } from 'lucide-react';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scroll = window.scrollY;
        headerRef.current.style.transform = `translateY(${scroll * 0.5}px)`;
        headerRef.current.style.opacity = (1 - scroll / 700).toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      
      <div className="text-center space-y-6 p-4">
        <Monitor className="w-16 h-16 mx-auto text-cyan-400 animate-pulse" />
        
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Jaikishan Bagul
        </h1>
        
        <p className="text-xl md:text-2xl text-cyan-300 font-mono">
          Senior Executive Developer
        </p>
        
        <div className="flex justify-center gap-4">
          <a href="#about" 
             className="px-6 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full 
                      hover:bg-cyan-500/20 transition-all duration-300 text-cyan-300">
            Explore
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;