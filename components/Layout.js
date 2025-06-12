import Navigation from './Navigation';
import SlideCounter from './SlideCounter';

export default function Layout({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {children}
      <Navigation />
      <SlideCounter />
    </div>
  );
}
