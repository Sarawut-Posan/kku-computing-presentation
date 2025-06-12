import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="terminal space-y-4 text-left"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,255,65,0.8)' }}
      >
        <pre className="whitespace-pre leading-none">
{` _  __ _  _   _ _
| |/ /| |/ /  / __)\n| ' / | ' / _| (__ 
|_|\_\|_|\_\(____)`}
        </pre>
        <p>> Welcome to KKU Computing</p>
        <pre className="text-sm">$ neofetch --ascii_distro arch</pre>
        <pre className="text-sm">$ gcc hello.c &amp;&amp; ./a.out\nHello World</pre>
        <span className="cursor-blink"></span>
      </motion.div>
    </div>
  );
}
