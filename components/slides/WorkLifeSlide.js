import { motion } from 'framer-motion';
import AnimatedList from '../AnimatedList';

export default function WorkLifeSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="terminal text-left space-y-2"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,65,0.8)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">💼 ชีวิตการทำงานจริง</h2>
        <AnimatedList
          className="list-disc list-inside text-lg md:text-2xl"
          items={[
            'การประชุมและทำงานร่วมทีมทุกวัน',
            'เรียนรู้เทคโนโลยีใหม่ตลอดเวลา',
            'ทำโปรเจกต์ที่ท้าทายและสร้างสรรค์',
            'รีวิวโค้ดและแก้บั๊กอย่างสม่ำเสมอ',
            'ดีพลอยระบบจริงและติดตามผล',
          ]}
        />
      </motion.div>
    </div>
  );
}
