import { motion } from 'framer-motion';
import AnimatedList from '../AnimatedList';

export default function PrepareSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="terminal text-left space-y-2"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,65,0.8)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">🎯 เตรียมตัวยังไง?</h2>
        <AnimatedList
          className="list-disc list-inside text-lg md:text-2xl"
          items={[
            'ทำความเข้าใจพื้นฐานคณิตและตรรกะ',
            'ฝึกเขียนโปรแกรมเบื้องต้น',
            'ติดตามข่าวสารเทคโนโลยี',
            'สร้างโปรเจกต์ส่วนตัวใน GitHub',
            'เตรียมพอร์ตโฟลิโอและฝึกสัมภาษณ์',
          ]}
        />
      </motion.div>
    </div>
  );
}
