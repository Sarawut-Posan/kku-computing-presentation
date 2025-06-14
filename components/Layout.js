import Navigation from './Navigation';
import SlideCounter from './SlideCounter';
import ParallaxBackground from './ParallaxBackground';
import MatrixBackground from './MatrixBackground';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (!showNav) return;
    const id = setTimeout(() => setShowNav(false), 3000);
    return () => clearTimeout(id);
  }, [showNav]);

  const revealNav = () => {
    if (window.innerWidth < 768) {
      setShowNav(true);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden" onClick={revealNav}>
      <ParallaxBackground />
      <MatrixBackground />
      {children}
      <Navigation visible={showNav} />
      <SlideCounter />
    </div>
  );
}
