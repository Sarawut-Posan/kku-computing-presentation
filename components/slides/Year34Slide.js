import TerminalWindow from '../TerminalWindow';
import TypeWriter from '../TypeWriter';
import { specializations } from '../../data/specializations';

export default function Year34Slide() {
  return (
    <div className="slide">
      <TerminalWindow title="year3_4.py" className="space-y-3">
        <TypeWriter text="🎯 ปี 3-4: Pick Your Specialization!" />
        <p className="text-green-400 text-sm">Find a track that excites you.</p>
      </TerminalWindow>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-h-[60vh] overflow-y-auto">
        {specializations.map((spec) => (
          <div
            key={spec.id}
            className="rounded-lg p-4 shadow-lg text-black"
            style={{ background: `linear-gradient(135deg, ${spec.colors[0]}, ${spec.colors[1]})` }}
          >
            <div className="text-3xl mb-2">{spec.icon}</div>
            <h3 className="font-bold text-lg">{spec.name}</h3>
            <p className="text-sm">{spec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
