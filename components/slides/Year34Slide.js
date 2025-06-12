import { useState } from 'react';
import { motion } from 'framer-motion';
import { tracks } from '../../data/tracks';

export default function Year34Slide() {
  const [filters, setFilters] = useState({
    difficulty: 1,
    salary: 1,
    math: 1,
    demand: 1,
  });
  const [compare, setCompare] = useState([]);

  const handleFilter = (key) => (e) => {
    setFilters({ ...filters, [key]: Number(e.target.value) });
  };

  const filtered = tracks.filter(
    (t) =>
      t.difficulty >= filters.difficulty &&
      t.salary >= filters.salary &&
      t.math >= filters.math &&
      t.demand >= filters.demand
  );

  const toggleCompare = (id) => {
    setCompare((prev) =>
      prev.includes(id)
        ? prev.filter((p) => p !== id)
        : prev.length < 2
        ? [...prev, id]
        : prev
    );
  };

  const comparedTracks = tracks.filter((t) => compare.includes(t.id));

  return (
    <div className="slide" onClick={() => {}}>
      <motion.div
        className="terminal text-left space-y-4 overflow-y-auto h-[80vh] p-2"
        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,255,65,0.8)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          🎯 ปี 3-4: เลือกเส้นทางที่ชอบ
        </h2>

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs md:text-sm">
          {[
            ['difficulty', 'Difficulty'],
            ['salary', 'Salary'],
            ['math', 'Math'],
            ['demand', 'Demand'],
          ].map(([key, label]) => (
            <label key={key} className="flex flex-col">
              <span>{label}: {filters[key]}</span>
              <input
                type="range"
                min="1"
                max="5"
                value={filters[key]}
                onChange={handleFilter(key)}
              />
            </label>
          ))}
        </div>

        {/* Track list */}
        <div className="space-y-2">
          <p className="text-lg md:text-2xl">ผลการกรอง ({filtered.length} สาย)</p>
          <div className="grid md:grid-cols-2 gap-2">
            {filtered.map((track) => (
              <motion.div
                key={track.id}
                className="p-2 border rounded cursor-pointer bg-black/30"
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleCompare(track.id)}
              >
                <h3 className="font-semibold text-lg">{track.name}</h3>
                <div className="flex space-x-2 text-xs py-1">
                  <span>Diff {track.difficulty}</span>
                  <span>Salary {track.salary}</span>
                  <span>Math {track.math}</span>
                  <span>Demand {track.demand}</span>
                </div>
                <div className="text-xs space-y-1">
                  <div>Pros: {track.pros.join(', ')}</div>
                  <div>Cons: {track.cons.join(', ')}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        {comparedTracks.length === 2 && (
          <div className="space-y-2 mt-4">
            <h3 className="text-xl font-bold">เปรียบเทียบ</h3>
            <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
              {comparedTracks.map((t) => (
                <div key={t.id} className="p-2 border rounded bg-black/30">
                  <h4 className="font-semibold mb-1">{t.name}</h4>
                  <div>Difficulty: {t.difficulty}</div>
                  <div>Salary: {t.salary}</div>
                  <div>Math: {t.math}</div>
                  <div>Demand: {t.demand}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
