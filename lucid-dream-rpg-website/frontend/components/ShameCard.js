import { useState } from 'react';

export default function ShameCard({ shame }) {
  const [nsfwVisible, setNsfwVisible] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">Shame & Panty Logs</h3>
        <button
          className="text-xs text-blue-600 underline"
          onClick={() => setNsfwVisible(!nsfwVisible)}
        >
          {nsfwVisible ? 'Hide NSFW' : 'Show NSFW'}
        </button>
      </div>
      {nsfwVisible ? (
        <div className="space-y-1 text-sm">
          <p><span className="font-semibold">Panty Submission Tally:</span> {shame.panty_tally}</p>
          <p><span className="font-semibold">Dirty Tokens:</span> {shame.dirty_tokens}</p>
          <p><span className="font-semibold">Shame XP:</span> {shame.shame_xp}</p>
        </div>
      ) : (
        <p className="text-sm text-gray-600">NSFW content hidden. Toggle above to view.</p>
      )}
    </div>
  );
}