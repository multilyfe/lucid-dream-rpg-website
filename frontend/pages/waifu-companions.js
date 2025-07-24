import { useState, useEffect } from 'react';
import WaifuCard from '../components/WaifuCard';

export default function WaifuCompanions() {
  const [waifus, setWaifus] = useState([]);
  const [form, setForm] = useState({ name: '', buff: '', unlock_progress: 0, image_url: '' });

  useEffect(() => {
    fetch('/api/waifus')
      .then((res) => res.json())
      .then((data) => setWaifus(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'unlock_progress' ? parseInt(value, 10) : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/waifus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setWaifus((prev) => [...prev, data]);
    setForm({ name: '', buff: '', unlock_progress: 0, image_url: '' });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Waifu Companions</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-white/80 backdrop-blur p-4 rounded-2xl">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="p-2 border rounded" required />
        <input type="text" name="buff" value={form.buff} onChange={handleChange} placeholder="Buff" className="p-2 border rounded" />
        <input type="number" name="unlock_progress" value={form.unlock_progress} onChange={handleChange} placeholder="Unlock Progress %" className="p-2 border rounded" min="0" max="100" />
        <input type="text" name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image URL" className="p-2 border rounded" />
        <button type="submit" className="col-span-full bg-pink-500 text-white py-2 px-4 rounded">Add Companion</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {waifus.map((w) => (
          <WaifuCard key={w.id} waifu={w} />
        ))}
      </div>
    </div>
  );
}