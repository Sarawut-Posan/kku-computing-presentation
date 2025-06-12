import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="glass"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          🚀 ยินดีต้อนรับสู่อนาคต! วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น
        </h1>
      </motion.div>
    </div>
  );
}
