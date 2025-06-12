import { motion } from 'framer-motion';
import AnimatedList from '../AnimatedList';

export default function ContactSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="terminal text-left space-y-2"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,65,0.8)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">🚀 พร้อมเริ่มต้นการเดินทางแล้วหรือยัง?</h2>
        <p className="text-lg md:text-2xl">ติดต่อตามช่องทางเหล่านี้:</p>
        <AnimatedList
          className="list-disc list-inside text-lg md:text-2xl"
          items={[
            <span key="web">เว็บไซต์: <a href="https://com.kku.ac.th" className="text-accent underline">com.kku.ac.th</a></span>,
            <span key="fb">Facebook: <a href="https://facebook.com/KKUCom" className="text-accent underline">KKU Computing</a></span>,
            <span key="email">Email: <a href="mailto:info@com.kku.ac.th" className="text-accent underline">info@com.kku.ac.th</a></span>,
            <span key="gh">GitHub: <a href="https://github.com/kku" className="text-accent underline">github.com/kku</a></span>,
            <span key="tel">โทร: 043-000000</span>,
          ]}
        />
      </motion.div>
    </div>
  );
}
