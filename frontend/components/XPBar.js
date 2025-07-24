export default function XPBar({ totalXP = 0, level = 'Dream Novice' }) {
  // Arbitrary XP needed per level for demonstration purposes
  const xpForNextLevel = 1000;
  const progress = Math.min((totalXP % xpForNextLevel) / xpForNextLevel * 100, 100);

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">Level: {level}</span>
        <span className="text-sm font-medium">{totalXP} XP</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}