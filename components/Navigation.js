import { useSlideNavigation } from '../hooks/useSlideNavigation';

export default function Navigation() {
  const { prevSlide, nextSlide } = useSlideNavigation();

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
      <button onClick={prevSlide} className="nav-button">ย้อนกลับ</button>
      <button onClick={nextSlide} className="nav-button">ถัดไป</button>
    </div>
  );
}
