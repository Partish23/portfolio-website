import { useState, useEffect } from 'react';

export const useScrollGradient = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate gradient based on scroll position
  const getGradientStyle = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
    
    // Define color stops for the gradient transition
    const colors = [
      { r: 17, g: 24, b: 39 },   // gray-900 (start)
      { r: 30, g: 41, b: 59 },   // slate-800
      { r: 51, g: 65, b: 85 },   // slate-700
      { r: 71, g: 85, b: 105 },  // slate-600
      { r: 31, g: 41, b: 55 },   // slate-800 (darker)
      { r: 0, g: 0, b: 0 },      // black (end)
    ];
    
    // Calculate which colors to interpolate between
    const colorIndex = scrollProgress * (colors.length - 1);
    const lowerIndex = Math.floor(colorIndex);
    const upperIndex = Math.min(lowerIndex + 1, colors.length - 1);
    const factor = colorIndex - lowerIndex;
    
    const lowerColor = colors[lowerIndex];
    const upperColor = colors[upperIndex];
    
    // Interpolate between colors
    const r = Math.round(lowerColor.r + (upperColor.r - lowerColor.r) * factor);
    const g = Math.round(lowerColor.g + (upperColor.g - lowerColor.g) * factor);
    const b = Math.round(lowerColor.b + (upperColor.b - lowerColor.b) * factor);
    
    return {
      background: `linear-gradient(135deg, rgb(${r}, ${g}, ${b}) 0%, rgb(${Math.max(r-20, 0)}, ${Math.max(g-20, 0)}, ${Math.max(b-20, 0)}) 100%)`,
      transition: 'background 0.3s ease-out'
    };
  };

  return { scrollY, getGradientStyle };
};