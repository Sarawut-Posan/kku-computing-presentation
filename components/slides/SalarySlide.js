import { motion } from 'framer-motion';
import AnimatedCounter from '../AnimatedCounter';

export default function SalarySlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="glass text-left space-y-2"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">💰 เรื่องเงินเดือน</h2>
        <p className="text-lg md:text-2xl">
          ช่วงเงินเดือนตั้งแต่ 25,000 ถึง{' '}
          <AnimatedCounter from={25000} to={100000} duration={1.5} className="inline-block" />
          + บาท ตามประสบการณ์
        </p>
      </motion.div>
    </div>
  );
}
