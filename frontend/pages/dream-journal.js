import { useState, useEffect } from 'react';
import DreamCard from '../components/DreamCard';
import { calculateXPFromDream } from '../utils/xpUtils';

export default function DreamJournal() {
  const [dreams, setDreams] = useState([]);
  const [form, setForm] = useState({
    date: '',
    emotions: '',
    type: '',
    patterns: '',
    people: '',
    location: '',
    favorite: false,
    rating: '',
    quest: '',
    lucidity_level: '',
    dream_signs: ''
  });

  useEffect(() => {
    fetch('/api/dreams')
      .then((res) => res.json())
      .then((data) => setDreams(data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: inputType === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Auto calculate XP based on dream contents
    const xp_awarded = calculateXPFromDream(form);
    const newDream = { ...form, xp_awarded };
    const res = await fetch('/api/dreams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDream)
    });
    const data = await res.json();
    setDreams((prev) => [data, ...prev]);
    setForm({
      date: '', emotions: '', type: '', patterns: '', people: '', location: '', favorite: false, rating: '', quest: '', lucidity_level: '', dream_signs: ''
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dream Journal</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-white/80 backdrop-blur p-4 rounded-2xl">
        <input type="text" name="date" value={form.date} onChange={handleChange} placeholder="Date (MM-DD-YYYY)" className="p-2 border rounded" required />
        <input type="text" name="emotions" value={form.emotions} onChange={handleChange} placeholder="Emotions (comma separated)" className="p-2 border rounded" />
        <input type="text" name="type" value={form.type} onChange={handleChange} placeholder="Dream Type" className="p-2 border rounded" />
        <input type="text" name="patterns" value={form.patterns} onChange={handleChange} placeholder="Patterns" className="p-2 border rounded" />
        <input type="text" name="people" value={form.people} onChange={handleChange} placeholder="People" className="p-2 border rounded" />
        <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location" className="p-2 border rounded" />
        <div className="flex items-center space-x-2">
          <input type="checkbox" name="favorite" checked={form.favorite} onChange={handleChange} />
          <label className="text-sm">Favorite</label>
        </div>
        <input type="number" name="rating" value={form.rating} onChange={handleChange} placeholder="Rating (1-10)" className="p-2 border rounded" />
        <input type="text" name="quest" value={form.quest} onChange={handleChange} placeholder="Quest" className="p-2 border rounded" />
        <input type="text" name="lucidity_level" value={form.lucidity_level} onChange={handleChange} placeholder="Lucidity Level (Low/Medium/High)" className="p-2 border rounded" />
        <input type="text" name="dream_signs" value={form.dream_signs} onChange={handleChange} placeholder="Dream Signs" className="p-2 border rounded" />
        <button type="submit" className="col-span-full bg-blue-500 text-white py-2 px-4 rounded">Add Dream</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dreams.map((dream) => (
          <DreamCard key={dream.id} dream={dream} />
        ))}
      </div>
    </div>
  );
}