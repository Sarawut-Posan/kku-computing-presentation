import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';
import QRCode from 'react-qr-code';

export default function QASlide() {
  const url = 'https://app.sli.do/event/t7Qgpc1rD2rTZEZnape4sL';
  const code = 't7Qgpc1rD2rTZEZnape4sL';

  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="terminal flex flex-col justify-between items-center w-full max-w-4xl mx-auto py-6 h-full"
        whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,255,65,0.8)' }}
      >
        <div className="space-y-2 text-center pt-4">
          <motion.h2
            className="text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🙋‍♂️ Q&A Time!
          </motion.h2>
          <TypeWriter
            text="ถามคำถามเกี่ยวกับการเรียน Computer Science"
            className="text-lg md:text-2xl text-accent"
          />
        </div>

        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 py-4 w-full">
          <motion.div
            className="relative p-2 rounded-xl border-2 border-accent shadow-[0_0_20px_rgba(0,255,65,0.8)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
          >
            <QRCode value={url} size={200} className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="mt-2 text-center text-sm">Scan to Join</p>
          </motion.div>

          <div className="space-y-2 text-left text-sm md:text-lg">
            <p>เข้าร่วม Q&A ได้หลากหลายวิธี:</p>
            <p>
              1. สแกน QR Code หรือคลิก{' '}
              <a href={url} className="underline text-accent" target="_blank" rel="noreferrer">ลิงก์นี้</a>
            </p>
            <p>
              2. ไปที่{' '}
              <a href="https://app.sli.do" className="underline text-accent" target="_blank" rel="noreferrer">app.sli.do</a>{' '}
              แล้วกรอกรหัส <span className="font-mono bg-black/40 px-1 rounded">{code}</span>
            </p>
          </div>
        </div>

        <div className="text-center text-sm md:text-base space-y-1 pb-4">
          <p>ขอบคุณที่รับชม!</p>
          <p>
            Facebook:{' '}
            <a href="https://facebook.com/KKUCom" className="underline text-accent" target="_blank" rel="noreferrer">
              KKU Computing
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
