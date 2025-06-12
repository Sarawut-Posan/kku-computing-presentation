import { useSlideNavigation } from '../hooks/useSlideNavigation';
import slides from '../data/slidesData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const { current, handleClick } = useSlideNavigation();
  const SlideComponent = slides[current] || slides[0];

  return (
    <div onClick={handleClick} className="w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
