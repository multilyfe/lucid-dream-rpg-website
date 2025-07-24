import { useState } from 'react';
import SleepGraph from '../components/SleepGraph';

export default function RemSleepTracker() {
  const [data, setData] = useState([
    { label: 'Night 1', rem: 50 },
    { label: 'Night 2', rem: 60 },
    { label: 'Night 3', rem: 45 },
    { label: 'Night 4', rem: 70 }
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target.result;
        // Expecting CSV: label,rem
        const lines = text.trim().split(/\r?\n/);
        const parsed = lines.map((line) => {
          const [label, rem] = line.split(',');
          return { label: label.trim(), rem: parseInt(rem, 10) };
        });
        setData(parsed);
      } catch (err) {
        console.error('Error parsing file', err);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">REM & Sleep Tracker</h1>
      <div className="bg-white/80 backdrop-blur p-4 rounded-2xl">
        <p className="mb-2">Upload a CSV file with columns <code>label,rem</code> to visualize your REM percentages.</p>
        <input type="file" accept=".csv, .json" onChange={handleFileUpload} className="p-2 border rounded" />
      </div>
      <SleepGraph data={data} />
    </div>
  );
}