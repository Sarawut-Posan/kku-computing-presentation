import React, { useState, useEffect } from 'react';

// Custom AnimatedList Component
const AnimatedList = ({ items, className = "", delay = 500 }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < items.length) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, items[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, items, delay]);

  return (
    <ul className={className}>
      {visibleItems.map((item, index) => (
        <li 
          key={index} 
          className="transform transition-all duration-500 hover:scale-105 hover:text-green-300"
          style={{
            animation: `slideInRight 0.6s ease-out ${index * 0.2}s both`
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

// Myth Card Component
const MythCard = ({ myth, truth, icon, isRevealed, onReveal, delay = 0 }) => {
  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-500 ${
        isRevealed ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={onReveal}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`border-2 rounded-lg p-6 min-h-[200px] transition-all duration-500 ${
        isRevealed 
          ? 'border-green-400 bg-green-900/30 shadow-[0_0_30px_rgba(0,255,65,0.4)]' 
          : 'border-red-400 bg-red-900/20 hover:border-yellow-400'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{icon}</span>
          <span className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
            isRevealed 
              ? 'bg-green-400 text-black' 
              : 'bg-red-400 text-white animate-pulse'
          }`}>
            {isRevealed ? '✅ ความจริง' : '❌ ความเข้าใจผิด'}
          </span>
        </div>

        {/* Content */}
        {!isRevealed ? (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-300">คิดว่า...</h3>
            <p className="text-red-200">{myth}</p>
            <div className="text-center mt-4">
              <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transition-colors animate-bounce">
                👆 คลิกเพื่อดูความจริง!
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-300">ความจริงคือ...</h3>
            <p className="text-green-200">{truth}</p>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
      <div 
        className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-white/30 animate-pulse" />
      </div>
      <p className="text-center mt-2 text-sm text-green-300">
        ทำลายความเข้าใจผิดแล้ว {Math.round(progress)}% 🚀
      </p>
    </div>
  );
};

// Floating Animation Component
const FloatingIcons = () => {
  const icons = ['💻', '🤖', '📱', '🎮', '🌐', '⚡', '🔬', '📊'];
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-2xl opacity-20 animate-bounce"
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${20 + (index % 3) * 25}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${2 + (index % 3)}s`
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default function MythsSlide() {
  const [revealedMyths, setRevealedMyths] = useState(new Set());
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const inspiringQuotes = [
    "💡 \"อนาคตของโลกอยู่ในมือของคนที่เข้าใจเทคโนโลยี\"",
    "🚀 \"ทุกแอปที่เธอใช้ มีคนเหมือนเธอเป็นคนสร้าง\"",
    "⭐ \"ไม่ต้องเป็นอัจฉริยะ แค่อยากเรียนรู้ก็พอ\"",
    "🌟 \"CS ไม่ใช่แค่เขียนโค้ด แต่เป็นการแก้ปัญหาโลก\""
  ];

  const myths = [
    {
      id: 1,
      icon: '🧮',
      myth: 'ต้องเก่งคณิตศาสตร์มากถึงจะเรียน Computer Science ได้',
      truth: 'จริงๆ แล้วเป็นเรื่องของ Logic มากกว่า! คณิตระดับ ม.ปลาย + ความคิดเป็นระบบก็เพียงพอแล้ว เหมือนการแก้ปริศนาหรือเล่นเกมมากกว่า'
    },
    {
      id: 2,
      icon: '👨‍💻',
      myth: 'จบแล้วทำได้แค่นั่งเขียนโค้ดอย่างเดียว',
      truth: 'มีงานให้เลือกเพียบ! UX Designer, Data Scientist, Game Developer, Cybersecurity, AI Engineer, Product Manager หรือแม้แต่ YouTuber Tech ก็ได้!'
    },
    {
      id: 3,
      icon: '🎯',
      myth: 'ต้องมีพื้นฐานคอมพิวเตอร์มาก่อนถึงจะเริ่มเรียนได้',
      truth: 'ไม่จำเป็นเลย! หลายคนเริ่มจากศูนย์ ที่สำคัญคือความอยากรู้อยากเรียน และความอดทน มีเพื่อนหลายคนที่เปลี่ยนสายมาเรียนแล้วทำได้ดีมาก'
    },
    {
      id: 4,
      icon: '🤝',
      myth: 'นักเขียนโปรแกรมต้องทำงานคนเดียว ไม่ต้องพูดคุยกับใคร',
      truth: 'ผิดมาก! ทำงานเป็นทีมเป็นเรื่องปกติ ต้องคุยกับลูกค้า ประชุมกับทีม และอธิบายไอเดียให้คนอื่นฟัง Communication Skills สำคัญมาก!'
    },
    {
      id: 5,
      icon: '💰',
      myth: 'เงินเดือนสูงแต่แลกกับการทำงานหนักจนไม่มีชีวิต',
      truth: 'แต่ละบริษัทต่างกัน แต่หลายที่ให้ Work-Life Balance ดี มี Flexible Time, Work from Home และ Benefit เจ๋งๆ เยอะมาก'
    },
    {
      id: 6,
      icon: '🎮',
      myth: 'Computer Science เป็นแค่เรื่องของผู้ชาย',
      truth: 'ไม่จริงเลย! ผู้หญิงเก่งๆ ในวงการเทคเยอะมาก ตั้งแต่ Ada Lovelace คนแรกของโลก จนถึงปัจจุบันมี CEO หลายคนเป็นผู้หญิง ทุกคนต้อนรับเสมอ!'
    }
  ];

  const handleRevealMyth = (mythId) => {
    setRevealedMyths(prev => new Set([...prev, mythId]));
    
    // Show success animation when all myths are revealed
    if (revealedMyths.size + 1 === myths.length) {
      setTimeout(() => setShowSuccess(true), 500);
    }
  };

  const progress = (revealedMyths.size / myths.length) * 100;

  // Rotate inspiring quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % inspiringQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 relative py-8">
      
      {/* Floating Background Icons */}
      <FloatingIcons />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            💥 ทำลายความเข้าใจผิด!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            เกี่ยวกับการเรียน Computer Science 🎓
          </p>
          
          {/* Inspiring Quote */}
          <div className="bg-black/40 backdrop-blur-sm border border-green-400 rounded-lg p-4 mb-6 transition-all duration-1000">
            <p className="text-lg text-green-300">
              {inspiringQuotes[currentQuote]}
            </p>
          </div>

          {/* Progress Bar */}
          <ProgressBar progress={progress} />
        </div>

        {/* Instructions */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-900/30 border border-blue-400 rounded-lg p-4">
            <p className="text-blue-300 text-lg">
              👆 <span className="font-bold">คลิกที่การ์ดสีแดง</span> เพื่อดูความจริง! 🕵️‍♀️
            </p>
          </div>
        </div>

        {/* Myths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {myths.map((myth, index) => (
            <MythCard
              key={myth.id}
              myth={myth.myth}
              truth={myth.truth}
              icon={myth.icon}
              isRevealed={revealedMyths.has(myth.id)}
              onReveal={() => handleRevealMyth(myth.id)}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="text-center mb-8 animate-bounce">
            <div className="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold text-2xl p-6 rounded-full">
              🎉 เยี่ยมมาก! คุณได้เรียนรู้ความจริงทั้งหมดแล้ว! 🎉
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-400 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">🚀 พร้อมที่จะเริ่มต้นแล้วใช่มั้ย?</h2>
          <p className="text-xl mb-6 text-gray-300">
            Computer Science เปิดโลกใหม่ให้คุณ - ไม่ว่าจะเป็นการสร้างแอป เกม หรือเทคโนโลยีที่เปลี่ยนโลก! 🌍
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-900/30 border border-green-400 rounded-lg p-4">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-bold text-green-300">เริ่มต้นเรียนรู้</h3>
              <p className="text-sm">ลองเขียนโค้ดง่ายๆ จาก Scratch หรือ Python</p>
            </div>
            
            <div className="bg-blue-900/30 border border-blue-400 rounded-lg p-4">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-bold text-blue-300">หาเพื่อนร่วมทาง</h3>
              <p className="text-sm">เข้าร่วมชุมชน Developer หรือ Coding Bootcamp</p>
            </div>
            
            <div className="bg-purple-900/30 border border-purple-400 rounded-lg p-4">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-bold text-purple-300">ตั้งเป้าหมาย</h3>
              <p className="text-sm">สร้างโปรเจกต์เล็กๆ ที่คุณสนใจ</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}