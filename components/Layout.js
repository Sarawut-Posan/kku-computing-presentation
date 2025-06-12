import Navigation from './Navigation';
import SlideCounter from './SlideCounter';
import ParallaxBackground from './ParallaxBackground';
import MatrixBackground from './MatrixBackground';

export default function Layout({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <ParallaxBackground />
      <MatrixBackground />
      {children}
      <Navigation />
      <SlideCounter />
    </div>
  );
}
