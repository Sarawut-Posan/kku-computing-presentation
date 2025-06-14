import React, { useState, useEffect } from 'react';

// TypeWriter Component
const TypeWriter = ({ text, className = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

// Matrix Rain Effect Component
const MatrixRain = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const generateDrops = () => {
      const newDrops = [];
      for (let i = 0; i < 50; i++) {
        newDrops.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2
        });
      }
      setDrops(newDrops);
    };

    generateDrops();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-green-400 text-xs font-mono animate-pulse"
          style={{
            left: `${drop.x}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`
          }}
        >
          <div className="animate-bounce">
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        </div>
      ))}
    </div>
  );
};

// QR Code Component (Simple SVG-based)
const SimpleQRCode = ({ value, size = 200 }) => {
  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-lg"
      style={{ width: size, height: size }}
    >
      <div className="w-full h-full bg-black rounded grid grid-cols-8 grid-rows-8 gap-1 p-2">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} rounded-sm`}
          />
        ))}
      </div>
      <div className="text-center mt-2 text-black text-xs font-semibold">
        Scan to Join
      </div>
    </div>
  );
};

// Particle System
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 3 + 2
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-green-400 rounded-full opacity-60 animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default function QASlide() {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const url = 'https://app.sli.do/event/t7Qgpc1rD2rTZEZnape4sL';
  const code = 't7Qgpc1rD2rTZEZnape4sL';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Random glitch effect
    const glitchTimer = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);

    return () => {
      clearInterval(timer);
      clearInterval(glitchTimer);
    };
  }, []);

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden cursor-pointer"
         onClick={handleClick}>
      
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Particles */}
      <Particles />
      
      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="w-full h-full opacity-10"
             style={{
               background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)'
             }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-8">
        
        {/* Header */}
        <div className="text-right text-xs opacity-60">
          <div className="border border-green-400 px-2 py-1 inline-block">
            {currentTime.toLocaleTimeString('th-TH')} | Status: ONLINE
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 flex flex-col justify-center items-center space-y-12 transition-all duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        } ${glitchActive ? 'animate-pulse' : ''}`}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
          
          {/* Title Section */}
          <div className="text-center space-y-6">
            <div className={`text-4xl md:text-6xl font-bold ${glitchActive ? 'blur-sm' : ''}`}>
              <div className="border-2 border-green-400 p-6 bg-black/80 backdrop-blur-sm shadow-[0_0_50px_rgba(0,255,65,0.3)]">
                <span className="inline-block animate-bounce">🙋‍♂️</span>
                <span className="ml-4">Q&A Time!</span>
              </div>
            </div>
            
            <div className="text-xl md:text-2xl">
              <TypeWriter 
                text="ถามคำถามเกี่ยวกับการเรียน Computer Science undefined → defined!"
                speed={80}
              />
            </div>
          </div>

          {/* QR Code and Instructions */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-4xl">
            
            {/* QR Code Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <SimpleQRCode value={url} size={220} />
                
                {/* Scanning effect */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute inset-x-0 h-1 bg-green-400 animate-pulse opacity-80"
                       style={{
                         animation: 'scan 2s ease-in-out infinite',
                         transform: 'translateY(0)'
                       }} />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4 text-lg max-w-md">
              <div className="border border-green-400 p-4 bg-black/50 backdrop-blur-sm rounded-lg">
                <h3 className="text-xl mb-4 text-center border-b border-green-400 pb-2">
                  🚀 เข้าร่วม Q&A Session
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-300 font-bold">1.</span>
                    <div>
                      สแกน QR Code หรือ{' '}
                      <a href={url} 
                         className="underline text-green-300 hover:text-white transition-colors"
                         target="_blank" 
                         rel="noreferrer">
                        คลิกที่นี่
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-green-300 font-bold">2.</span>
                    <div>
                      ไปที่{' '}
                      <a href="https://app.sli.do" 
                         className="underline text-green-300 hover:text-white transition-colors"
                         target="_blank" 
                         rel="noreferrer">
                        app.sli.do
                      </a>
                      {' '}แล้วใส่รหัส
                      <div className="mt-2 font-mono bg-green-900/50 border border-green-400 px-3 py-1 rounded text-center text-green-300">
                        {code}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Stats */}
          <div className="flex space-x-8 text-sm opacity-80">
            <div className="border border-green-400 px-3 py-1">
              👥 Ready for Questions
            </div>
            <div className="border border-green-400 px-3 py-1">
              ⚡ Live Session
            </div>
            <div className="border border-green-400 px-3 py-1">
              🔥 Interactive Mode
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2 opacity-80">
          <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mb-4"></div>
          
          <p className="text-lg">🙏 ขอบคุณที่รับชม!</p>
          
          <div className="flex items-center justify-center space-x-4">
            <span>📘 Facebook:</span>
            <a href="https://facebook.com/SarawutPosan" 
               className="underline hover:text-white transition-colors border border-green-400 px-2 py-1 hover:bg-green-400 hover:text-black"
               target="_blank" 
               rel="noreferrer">
              Sarawut Posan
            </a>
          </div>
          
          <div className="text-xs mt-4 opacity-60">
            💻 Click anywhere to join • Built with ❤️ and lots of ☕
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(200px); opacity: 0.5; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}