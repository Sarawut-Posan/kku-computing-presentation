import { useSlideNavigation } from '../hooks/useSlideNavigation';
import slides from '../data/slidesData';

export default function SlideCounter() {
  const { current } = useSlideNavigation();
  return (
    <div className="absolute top-4 right-4 z-50 text-sm bg-white/20 px-3 py-1 rounded-md backdrop-blur-md">
      {current + 1} / {slides.length}
    </div>
  );
}
