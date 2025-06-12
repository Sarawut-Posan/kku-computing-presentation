import { useState } from 'react';
import { motion } from 'framer-motion';
import TerminalWindow from '../TerminalWindow';
import TypeWriter from '../TypeWriter';
import { specializations } from '../../data/specializations';
import { tracks } from '../../data/tracks';

const alumniStories = [
  {
    name: 'พี่ณัฐ (AI Track)',
    graduation: '2022',
    currentRole: 'ML Engineer at Agoda',
    salary: '85,000 THB/month',
    story:
      'เริ่มจากไม่รู้ Python เลย ตอนนี้ทำ recommendation system ให้ลูกค้า millions คน',
    projects: ['Hotel Recommendation AI', 'Price Optimization Model'],
  },
  {
    name: 'พี่มิน (Web Dev Track)',
    graduation: '2021',
    currentRole: 'Senior Full-Stack at LINE',
    salary: '95,000 THB/month',
    story:
      'ตอนจบทำ startup ตัวเอง ขายให้บริษัทใหญ่ได้ แล้วเข้าทำงานที่ LINE',
    projects: ['E-commerce Platform', 'Real-time Chat System'],
  },
];

export default function Year34Slide() {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <div className="slide" onClick={() => {}}>
      {/* SECTION 1 - HEADER */}
      <TerminalWindow title="specialization_selector.py" className="space-y-4">
        <TypeWriter text="🎯 ปี 3-4: Choose Your Tech Stack & Specialization..." />
        <div className="mt-4">
          <span className="text-yellow-400">❯ </span>
          <span className="text-cyan-400">select_specialization()</span>
        </div>
        <div className="text-green-400 mt-2 space-y-1 text-sm">
          <div>✓ Foundation courses completed</div>
          <div>✓ Ready for advanced tracks</div>
          <div>✓ Portfolio projects prepared</div>
        </div>
      </TerminalWindow>

      {/* SECTION 2-7 - SPECIALIZATION CARDS */}
      <div className="mt-4 space-y-2 max-h-[50vh] overflow-y-auto p-2">
        {specializations.map((spec) => (
          <motion.div
            key={spec.id}
            className="bg-black/40 border rounded p-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => toggle(spec.id)}
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl">{spec.icon}</span>
              <h3 className="font-semibold text-lg">{spec.name}</h3>
              <span className="text-sm text-gray-400">{spec.tagline}</span>
            </div>
            {active === spec.id && (
              <motion.div
                className="mt-2 text-sm space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p>{spec.description}</p>
                <div className="grid grid-cols-2 gap-1">
                  {Object.entries(spec.techStack).map(([k, list]) => (
                    <div key={k}>
                      <h4 className="font-semibold text-accent text-xs">{k}</h4>
                      <p className="text-xs">{list.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* SECTION 8 - COMPARISON MATRIX */}
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-bold">Comparison Matrix</h3>
        <div className="overflow-x-auto text-xs">
          <table className="min-w-full border border-accent text-center">
            <thead>
              <tr className="bg-black/50">
                <th className="p-1 border">Track</th>
                <th className="p-1 border">Difficulty</th>
                <th className="p-1 border">Salary</th>
                <th className="p-1 border">Math</th>
                <th className="p-1 border">Demand</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((t) => (
                <tr key={t.id} className="border-t">
                  <td className="border px-1">{t.name}</td>
                  <td className="border px-1">{'★'.repeat(t.difficulty)}</td>
                  <td className="border px-1">{'★'.repeat(t.salary)}</td>
                  <td className="border px-1">{'★'.repeat(t.math)}</td>
                  <td className="border px-1">{'★'.repeat(t.demand)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 9 - ALUMNI STORIES */}
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-bold">Alumni Success Stories</h3>
        {alumniStories.map((a) => (
          <div key={a.name} className="bg-black/40 border rounded p-2 text-sm">
            <div className="font-semibold">{a.name} – {a.currentRole}</div>
            <div className="text-gray-400">Graduated {a.graduation} | {a.salary}</div>
            <p>{a.story}</p>
            <p className="text-xs">Projects: {a.projects.join(', ')}</p>
          </div>
        ))}
      </div>

      {/* SECTION 10 - TECHNOLOGY TRENDS */}
      <div className="mt-4 space-y-1 text-sm">
        <h3 className="text-xl font-bold">Technology Trend Predictions</h3>
        <p>Job growth projections show continual increase across all tracks.</p>
        <p>Cloud, AI, and mobile technologies are leading the next decade.</p>
      </div>
    </div>
  );
}
