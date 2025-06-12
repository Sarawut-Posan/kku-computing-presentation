import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Year12Slide() {
  const skillData = [
    ['Programming Logic', '85%'],
    ['Problem Solving', '90%'],
    ['Code Debugging', '75%'],
    ['Team Collaboration', '80%'],
    ['Version Control (Git)', '70%'],
    ['Database Basics', '65%'],
    ['Web Development', '60%'],
    ['Mobile Development', '40%'],
  ];

  const cards = [
    {
      title: '🚀 Coding Journey',
      colors: ['#3B82F6', '#1E40AF'],
      content: (
        <pre className="text-xs md:text-sm text-left whitespace-pre-wrap">
{`// Hello World
console.log("Hello");

// Function
function add(a, b) {
  return a + b;
}

// Class
class Student { constructor(name) { this.name = name; } }`}
        </pre>
      ),
    },
    {
      title: '🧮 Math & Algorithms',
      colors: ['#8B5CF6', '#5B21B6'],
      content: (
        <ul className="text-xs md:text-sm list-disc list-inside space-y-1 text-left">
          <li>Big O: O(1), O(n), O(log n)</li>
          <li>Sorting demos: bubble → merge</li>
          <li>Graph theory sneak peek</li>
          <li>Stats &amp; data charts</li>
        </ul>
      ),
    },
    {
      title: '👥 Teamwork',
      colors: ['#10B981', '#047857'],
      content: (
        <ul className="text-xs md:text-sm list-disc list-inside space-y-1 text-left">
          <li>GitHub flow preview</li>
          <li>Chat style discussions</li>
          <li>PR review animation</li>
          <li>Agile board tasks</li>
        </ul>
      ),
    },
    {
      title: '🛠️ Developer Tools',
      colors: ['#F59E0B', '#D97706'],
      content: (
        <pre className="text-xs md:text-sm text-left whitespace-pre-wrap">
{`$ git init
$ git add .
$ git commit -m "First commit"`}
        </pre>
      ),
    },
    {
      title: '📱 Projects Built',
      colors: ['#EF4444', '#DC2626'],
      content: (
        <ul className="text-xs md:text-sm list-disc list-inside space-y-1 text-left">
          <li>Calculator App → Month 2</li>
          <li>Grade System → Month 6</li>
          <li>Mini Social Network → Month 10</li>
          <li>Weather App → Month 12</li>
        </ul>
      ),
    },
    {
      title: '📊 Skills Acquired',
      colors: ['#06B6D4', '#0891B2'],
      content: (
        <div className="space-y-1">
          {skillData.map(([label, percent]) => (
            <div key={label} className="flex items-center text-xs">
              <span className="mr-2 w-32">{label}</span>
              <div className="w-full bg-white/20 h-2 rounded">
                <motion.div
                  className="h-2 bg-white rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: percent }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: '🎯 Year 3-4 Goals',
      colors: ['#EC4899', '#BE185D'],
      content: (
        <ul className="text-xs md:text-sm list-disc list-inside space-y-1 text-left">
          <li>Choose specialization path</li>
          <li>Build portfolio projects</li>
          <li>Internship opportunities</li>
        </ul>
      ),
    },
    {
      title: '💡 Tips & Resources',
      colors: ['#6366F1', '#4338CA'],
      content: (
        <ul className="text-xs md:text-sm list-disc list-inside space-y-1 text-left">
          <li>Recommended tutorials</li>
          <li>Useful documentation</li>
          <li>Community forums</li>
        </ul>
      ),
    },
  ];

  const [open, setOpen] = useState(null);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto p-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
            onClick={() => setOpen(open === i ? null : i)}
            className="rounded-lg cursor-pointer text-black overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${card.colors[0]}, ${card.colors[1]})` }}
          >
            <motion.h3
              className="font-bold text-sm md:text-lg p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {card.title}
            </motion.h3>
            {open === i && (
              <motion.div
                className="p-2 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {card.content}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
