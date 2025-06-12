import { motion } from 'framer-motion';
import AnimatedList from '../AnimatedList';

export default function MythsSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="glass text-left space-y-2"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">💡 ทำลายความเข้าใจผิด</h2>
        <AnimatedList
          className="list-disc list-inside text-lg md:text-2xl"
          items={[
            'ไม่ต้องเป็นอัจฉริยะทางคณิตก็เรียนได้',
            'เขียนโค้ดไม่ใช่ทั้งหมดของคอมพิวเตอร์',
            'จบแล้วมีงานหลากหลายไม่ใช่แค่โปรแกรมเมอร์',
          ]}
        />
      </motion.div>
    </div>
  );
}
