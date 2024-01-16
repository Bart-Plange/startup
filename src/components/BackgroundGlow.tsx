import { useState, useEffect } from 'react';

const BackgroundGlow = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

const calculateGlowStyles = () => {
  const glowSize = 100; // Adjust the size of the glow
  const glowX = mousePosition.x - glowSize / 2;
  const glowY = mousePosition.y - glowSize / 2;

  const glowIntensity = 0.5; // Adjust the intensity of the glow (between 0 and 1)
  
  // Adjust the glow color and other properties as needed
  const glowColor = `rgba(255, 223, 77, ${glowIntensity})`;

  return {
    backgroundImage: `radial-gradient(circle at ${glowX}px ${glowY}px, ${glowColor}, transparent ${glowSize}px)`,
    transition: 'background-image 0.5s',
  };
};


  return (
    <div
      className="min-h-screen w-full transition-all duration-500"
      style={calculateGlowStyles()}
    >
      {children}
    </div>
  );
};

export default BackgroundGlow;
