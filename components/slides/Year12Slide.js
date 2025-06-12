import { motion } from 'framer-motion';
import AnimatedList from '../AnimatedList';

export default function Year12Slide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="glass text-left space-y-2"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">📚 ปี 1-2: สร้างพื้นฐานแกร่ง</h2>
        <AnimatedList
          className="list-disc list-inside text-lg md:text-2xl"
          items={[
            'การเขียนโปรแกรมพื้นฐาน',
            'คณิตศาสตร์และอัลกอริทึม',
            'การทำงานเป็นทีมและโปรเจกต์เล็กๆ',
          ]}
        />
      </motion.div>
    </div>
  );
}
