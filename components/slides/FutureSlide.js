import { motion } from 'framer-motion';
import AnimatedList from '../AnimatedList';

export default function FutureSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="terminal text-left space-y-2"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,65,0.8)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">🌟 อนาคต 10 ปีข้างหน้า</h2>
        <AnimatedList
          className="list-disc list-inside text-lg md:text-2xl"
          items={[
            'AI และ Automation จะมีบทบาทมากขึ้น',
            'การเชื่อมต่อผ่าน Cloud และ IoT',
            'ความปลอดภัยไซเบอร์สำคัญยิ่งกว่าเดิม',
            'โลกเสมือนจริง AR/VR จะแพร่หลาย',
            'เทคโนโลยีสีเขียวเพื่อสิ่งแวดล้อม',
          ]}
        />
      </motion.div>
    </div>
  );
}
