import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOuter = cursorOuterRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorOuter) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        cursorOuter.style.left = `${e.clientX}px`;
        cursorOuter.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50
                   mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"
        style={{ transition: 'width 0.2s, height 0.2s' }}
      />
      <div
        ref={cursorOuterRef}
        className="fixed w-8 h-8 border-2 border-cyan-400/50 rounded-full pointer-events-none z-50
                   mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"
        style={{ transition: 'width 0.2s, height 0.2s' }}
      />
    </>
  );
};

export default CustomCursor;