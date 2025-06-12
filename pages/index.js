import { useSlideNavigation } from '../hooks/useSlideNavigation';
import slides from '../data/slidesData';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const { current, handleClick } = useSlideNavigation();
  const SlideComponent = slides[current] || slides[0];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [current]);

  const directions = ['right', 'left', 'up', 'down'];
  const dir = directions[current % directions.length];

  const variants = {
    enter: (d) => {
      switch (d) {
        case 'left':
          return { opacity: 0, x: -100 };
        case 'right':
          return { opacity: 0, x: 100 };
        case 'up':
          return { opacity: 0, y: -100 };
        case 'down':
          return { opacity: 0, y: 100 };
        default:
          return { opacity: 0 };
      }
    },
    center: { opacity: 1, x: 0, y: 0 },
    exit: (d) => {
      switch (d) {
        case 'left':
          return { opacity: 0, x: 100 };
        case 'right':
          return { opacity: 0, x: -100 };
        case 'up':
          return { opacity: 0, y: 100 };
        case 'down':
          return { opacity: 0, y: -100 };
        default:
          return { opacity: 0 };
      }
    },
  };

  return (
    <div onClick={handleClick} className="w-full h-full relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={variants}
          custom={dir}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-6 h-6 border-2 border-t-transparent border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
