import { motion } from 'framer-motion';
import { useSlideNavigation } from '../hooks/useSlideNavigation';

export default function ParallaxBackground() {
  const { current } = useSlideNavigation();
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-800 opacity-30 pointer-events-none"
      animate={{ backgroundPositionX: `${-current * 50}px` }}
      transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      style={{ backgroundSize: '400% 400%' }}
    />
  );
}
