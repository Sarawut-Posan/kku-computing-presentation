import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import slides from '../data/slidesData';

export function useSlideNavigation() {
  const router = useRouter();
  const current = parseInt(router.query.slide ?? '0', 10);

  const changeSlide = useCallback(
    (index) => {
      if (index >= 0 && index < slides.length) {
        router.push(`/?slide=${index}`, undefined, { shallow: true });
      }
    },
    [router]
  );

  const nextSlide = useCallback(() => changeSlide(current + 1), [current, changeSlide]);
  const prevSlide = useCallback(() => changeSlide(current - 1), [current, changeSlide]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextSlide, prevSlide]);

  const handleClick = () => nextSlide();

  return { current, nextSlide, prevSlide, handleClick };
}
