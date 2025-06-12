import { useState } from 'react';
import Modal from '../Modal';
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
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState('overview');
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState('name');

  const openModal = (spec) => {
    setSelected(spec);
    setTab('overview');
  };

  const filtered = specializations
    .filter((s) => s.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));

  return (
    <div className="slide">
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
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="flex-1 bg-black/50 border border-accent rounded px-2 py-1 text-sm"
          />
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            className="bg-black/50 border border-accent rounded px-2 py-1 text-sm"
          >
            <option value="name">Sort A-Z</option>
            <option value="id">Sort by ID</option>
          </select>
        </div>
        {filtered.map((spec) => (
          <motion.div
            key={spec.id}
            className="bg-black/40 border rounded p-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.stopPropagation();
              openModal(spec);
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl">{spec.icon}</span>
              <h3 className="font-semibold text-lg">{spec.name}</h3>
              <span className="text-sm text-gray-400">{spec.tagline}</span>
            </div>
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
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span>{selected.icon}</span> {selected.name}
            </h3>
            <div className="flex gap-2">
              {['overview', 'projects', 'careers', 'learning'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-2 py-1 border rounded text-sm ${tab === t ? 'bg-accent text-black' : 'bg-black/50 border-accent'}`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
            {tab === 'overview' && (
              <div className="text-sm space-y-1">
                <p>{selected.description}</p>
                <div className="grid grid-cols-2 gap-1">
                  {Object.entries(selected.techStack).map(([k, list]) => (
                    <div key={k}>
                      <h4 className="font-semibold text-accent text-xs">{k}</h4>
                      <p className="text-xs">{list.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === 'projects' && (
              <div className="space-y-1 text-sm">
                {selected.projectExamples?.map((p) => (
                  <div key={p.title} className="border-b pb-1">
                    <div className="font-semibold">{p.title}</div>
                    <p className="text-xs">{p.description}</p>
                    <p className="text-xs text-gray-400">Tech: {p.tech.join(', ')}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === 'careers' && (
              <div className="space-y-1 text-sm">
                {selected.careerPaths?.map((c) => (
                  <div key={c.title} className="flex justify-between text-xs border-b pb-1">
                    <span>{c.title}</span>
                    <span className="text-gray-400">{c.salary} THB – {c.demand}</span>
                  </div>
                ))}
              </div>
            )}
            {tab === 'learning' && (
              <div className="text-sm space-y-1">
                {selected.learningPath && (
                  <>
                    <h4 className="font-semibold text-accent text-xs">Year 3</h4>
                    <p className="text-xs">{selected.learningPath.year3.join(', ')}</p>
                    <h4 className="font-semibold text-accent text-xs mt-2">Year 4</h4>
                    <p className="text-xs">{selected.learningPath.year4.join(', ')}</p>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
