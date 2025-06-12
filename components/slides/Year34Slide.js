import { motion } from 'framer-motion';
import AnimatedList from '../AnimatedList';

export default function Year34Slide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="glass text-left space-y-2"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">🎯 ปี 3-4: เลือกเส้นทางที่ชอบ</h2>
        <p className="text-lg md:text-2xl">เลือกสาขาเฉพาะทางที่สนใจจาก 6 สาย</p>
        <AnimatedList
          className="grid grid-cols-2 gap-2 text-lg md:text-2xl"
          items={[
            'AI',
            'Web',
            'Game',
            'Cyber',
            'Mobile',
            'Cloud',
          ]}
        />
      </motion.div>
    </div>
  );
}
