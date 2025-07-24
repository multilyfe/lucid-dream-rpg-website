import { useState } from 'react';
import RitualTracker from '../components/RitualTracker';

export default function ObedienceSystem() {
  // Initial streak counts for each ritual frequency
  const [rituals, setRituals] = useState({
    daily: { streak: 0 },
    weekly: { streak: 0 },
    monthly: { streak: 0 },
    yearly: { streak: 0 }
  });

  const incrementStreak = (key) => {
    setRituals((prev) => ({
      ...prev,
      [key]: { streak: prev[key].streak + 1 }
    }));
  };

  const resetStreak = (key) => {
    setRituals((prev) => ({
      ...prev,
      [key]: { streak: 0 }
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Obedience & Rituals</h1>
      <RitualTracker rituals={rituals} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(rituals).map((key) => (
          <div key={key} className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-md flex flex-col items-center">
            <h3 className="font-semibold capitalize mb-2">{key} Ritual</h3>
            <p className="text-sm mb-2">Streak: {rituals[key].streak}</p>
            <button
              onClick={() => incrementStreak(key)}
              className="bg-green-500 text-white px-3 py-1 rounded mb-1 text-sm"
            >
              Complete
            </button>
            <button
              onClick={() => resetStreak(key)}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Reset
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}