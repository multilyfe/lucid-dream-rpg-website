export default function RitualTracker({ rituals = {} }) {
  const categories = [
    { name: 'Daily', key: 'daily' },
    { name: 'Weekly', key: 'weekly' },
    { name: 'Monthly', key: 'monthly' },
    { name: 'Yearly', key: 'yearly' }
  ];

  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-md">
      <h3 className="font-semibold text-lg mb-2">Rituals & Streaks</h3>
      <ul className="space-y-2">
        {categories.map(({ name, key }) => (
          <li key={key} className="flex items-center justify-between">
            <span>{name} Ritual</span>
            <span className="text-sm text-gray-700">{rituals[key]?.streak || 0} day streak</span>
          </li>
        ))}
      </ul>
    </div>
  );
}