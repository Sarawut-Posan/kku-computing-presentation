import { useState, useEffect } from 'react';

export default function TypeWriter({ text = '', speed = 50, className = '' }) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplay((prev) => prev + text[i]);
      i += 1;
      if (i >= text.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {display}
      <span className="cursor-blink">█</span>
    </span>
  );
}
