import { useState, useEffect } from 'react';
import ShameCard from '../components/ShameCard';

export default function ShamePantyLogs() {
  const [shame, setShame] = useState(null);

  useEffect(() => {
    fetch('/api/shame')
      .then((res) => res.json())
      .then((data) => setShame(data));
  }, []);

  const incrementStat = async (field) => {
    if (!shame) return;
    const updated = { ...shame, [field]: shame[field] + 1 };
    const res = await fetch('/api/shame', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
    const data = await res.json();
    setShame(data);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Shame & Panty Logs</h1>
      {shame && <ShameCard shame={shame} />}
      {shame && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button
            onClick={() => incrementStat('panty_tally')}
            className="bg-purple-500 text-white p-3 rounded-2xl shadow"
          >
            Add Panty Submission
          </button>
          <button
            onClick={() => incrementStat('dirty_tokens')}
            className="bg-pink-500 text-white p-3 rounded-2xl shadow"
          >
            Add Dirty Token
          </button>
          <button
            onClick={() => incrementStat('shame_xp')}
            className="bg-blue-500 text-white p-3 rounded-2xl shadow"
          >
            Add Shame XP
          </button>
        </div>
      )}
    </div>
  );
}