import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function AnimatedList({ items = [], className = '' }) {
  return (
    <motion.ul
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((itemContent, idx) => (
        <motion.li key={idx} variants={item} className="mb-1">
          {itemContent}
        </motion.li>
      ))}
    </motion.ul>
  );
}
