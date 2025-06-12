import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TitleSlide() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Ready to innovate with .NET technologies...";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const techStack = [
    { name: '.NET Core', level: 90, color: 'bg-purple-500' },
    { name: 'C#', level: 85, color: 'bg-blue-500' },
    { name: 'MSSQL', level: 80, color: 'bg-red-500' },
    { name: 'Azure', level: 75, color: 'bg-cyan-500' },
    { name: 'JavaScript', level: 70, color: 'bg-yellow-500' }
  ];

  return (
    <div className="slide relative overflow-hidden min-h-screen flex items-center justify-center p-4" onClick={() => {}}>
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-xs font-mono"
            style={{ left: `${i * 8}%`, top: '-20px' }}
            animate={{ y: ['0vh', '120vh'] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear'
            }}
          >
            {'01'.repeat(15)}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="terminal space-y-3 text-left relative z-10 w-full max-w-4xl mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          scale: 1.01, 
          boxShadow: '0 0 25px rgba(59, 130, 246, 0.4)',
          borderColor: 'rgb(59, 130, 246)'
        }}
      >
        {/* Small ASCII Art */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <pre className="text-green-400 font-bold text-sm md:text-base filter drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] leading-tight">
{`
███████╗ █████╗ ██████╗  █████╗ ██╗    ██╗██╗   ██╗████████╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██║    ██║██║   ██║╚══██╔══╝
███████╗███████║██████╔╝███████║██║ █╗ ██║██║   ██║   ██║   
╚════██║██╔══██║██╔══██╗██╔══██║██║███╗██║██║   ██║   ██║   
███████║██║  ██║██║  ██║██║  ██║╚███╔███╔╝╚██████╔╝   ██║   
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝  ╚═════╝    ╚═╝   
██████╗  ██████╗ ███████╗ █████╗ ███╗   ██╗
██╔══██╗██╔═══██╗██╔════╝██╔══██╗████╗  ██║
██████╔╝██║   ██║███████╗███████║██╔██╗ ██║
██╔═══╝ ██║   ██║╚════██║██╔══██║██║╚██╗██║
██║     ╚██████╔╝███████║██║  ██║██║ ╚████║
╚═╝      ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
`}
          </pre>
        </motion.div>
        
        {/* Main Info - more compact */}
        <div className="space-y-2 text-center">
          <motion.h2 
            className="text-xl md:text-2xl font-bold text-blue-400 filter drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            .NET Developer
          </motion.h2>
          
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-blue-300">🎓 KKU Computer Science Graduate</span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="text-green-300 font-semibold">🏢 Currently @ Thai Beverage PLC</span>
          </motion.div>
          
          {/* Tech stack - horizontal layout */}
          <motion.div 
            className="flex justify-center space-x-2 md:space-x-3 text-xs md:text-sm text-blue-200 flex-wrap gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            {['.NET Core', 'C#', 'CQRS', 'MSSQL', 'Azure'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-blue-900/30 rounded border border-blue-500/30 hover:border-blue-400 transition-colors"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Two column layout for better space usage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
          
          {/* Left Column - Skills */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
          >
            <pre className="text-xs text-cyan-400">$ show --skills</pre>
            {techStack.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.08 }}
              >
                <span className="text-xs w-12 text-green-300">{skill.name}</span>
                <div className="flex-1 bg-gray-700 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className={`h-full ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 1.5 + index * 0.08, duration: 0.8 }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-8">{skill.level}%</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Experience & Contact */}
          <motion.div 
            className="space-y-1 text-xs"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <pre className="text-cyan-400">$ cat experience.txt</pre>
            <pre className="text-green-300">Thai Beverage PLC | Full-Stack Developer (2024-Present)</pre>
            <pre className="text-green-300">CODEDIVA | Back-end Developer (2023-2024)</pre>
            <pre className="text-green-300">Arcelik Hitachi | Full-Stack Developer (2023)</pre>
            
            <pre className="text-cyan-400 pt-2">$ echo $CONTACT</pre>
            <pre className="text-cyan-300">📧 sarwut.p@kkumail.com</pre>
            <pre className="text-cyan-300">🔗 linkedin.com/in/sarawut-posan-759860241</pre>
            
            <pre className="text-cyan-400 pt-1">$ git status</pre>
            <motion.pre className="text-green-300">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="cursor-blink"
              >
                █
              </motion.span>
            </motion.pre>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}