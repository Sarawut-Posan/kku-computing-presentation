import Navigation from './Navigation';
import SlideCounter from './SlideCounter';
import ParallaxBackground from './ParallaxBackground';

export default function Layout({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <ParallaxBackground />
      {children}
      <Navigation />
      <SlideCounter />
    </div>
  );
}
