export default function SleepGraph({ data = [] }) {
  // data is an array of objects { label: string, rem: number }
  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-md">
      <h3 className="font-semibold text-lg mb-2">REM % Over Time</h3>
      <div className="flex items-end space-x-2 h-40">
        {data.map((entry) => (
          <div key={entry.label} className="flex-1 flex flex-col items-center">
            <div
              className="bg-green-400 w-full rounded-t"
              style={{ height: `${entry.rem}%` }}
            ></div>
            <span className="text-xs mt-1">{entry.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}