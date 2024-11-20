import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div 
        className="scroll-percentage"
        style={{ opacity: scrollPercentage > 0 ? 1 : 0 }}
      >
        {Math.round(scrollPercentage)}%
      </div>
      <div 
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-yellow-400 to-yellow-500"
        style={{ 
          height: `${scrollPercentage}%`,
          transition: 'height 0.3s'
        }}
      />
    </div>
  );
};

export default ScrollIndicator;