import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

export default function AnimatedCounter({ from = 0, to = 0, duration = 1, className = '' }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate: (v) => setValue(v.toFixed(0)),
    });
    return controls.stop;
  }, [from, to, duration]);

  return <span className={className}>{value}</span>;
}
