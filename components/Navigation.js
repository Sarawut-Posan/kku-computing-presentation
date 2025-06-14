import { useSlideNavigation } from '../hooks/useSlideNavigation';

export default function Navigation({ visible }) {
  const { prevSlide, nextSlide } = useSlideNavigation();

  const vibrate = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-6 z-50 md:static md:translate-x-0 md:mt-4 transition-opacity ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:opacity-100`}
    >
      <button
        onClick={() => {
          prevSlide();
          vibrate();
        }}
        className="nav-mobile md:nav-button"
        aria-label="Previous slide"
      >
        <span className="md:hidden">&#8592;</span>
        <span className="hidden md:inline">&#8592; Previous</span>
      </button>
      <button
        onClick={() => {
          nextSlide();
          vibrate();
        }}
        className="nav-mobile md:nav-button"
        aria-label="Next slide"
      >
        <span className="md:hidden">&#8594;</span>
        <span className="hidden md:inline">Next &#8594;</span>
      </button>
    </div>
  );
}
