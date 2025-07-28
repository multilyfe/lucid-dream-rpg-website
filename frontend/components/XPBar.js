import { useEffect, useState } from 'react';

export default function XPBar({ xp, max }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => { setTimeout(() => setProgress((xp / max) * 100), 200); }, [xp, max]);
  return (
    <div className="w-full bg-gray-700 rounded-full h-4">
      <div className="bg-green-400 h-4 rounded-full transition-all duration-1000 ease-out" style={{width: progress + '%'}}></div>
    </div>
  );
}