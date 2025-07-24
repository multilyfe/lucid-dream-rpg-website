import { useState, useEffect } from 'react';
import QuestCard from '../components/QuestCard';

export default function QuestBoard() {
  const [quests, setQuests] = useState([]);
  const [form, setForm] = useState({ name: '', status: 'Active', reward: '', xp_reward: '', legendary: false });

  useEffect(() => {
    fetch('/api/quests')
      .then((res) => res.json())
      .then((data) => setQuests(data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/quests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setQuests((prev) => [...prev, data]);
    setForm({ name: '', status: 'Active', reward: '', xp_reward: '', legendary: false });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quest Board</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-white/80 backdrop-blur p-4 rounded-2xl">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Quest Name" className="p-2 border rounded" required />
        <select name="status" value={form.status} onChange={handleChange} className="p-2 border rounded">
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Legendary">Legendary</option>
        </select>
        <input type="text" name="reward" value={form.reward} onChange={handleChange} placeholder="Reward" className="p-2 border rounded" />
        <input type="number" name="xp_reward" value={form.xp_reward} onChange={handleChange} placeholder="XP Reward" className="p-2 border rounded" />
        <div className="flex items-center space-x-2">
          <input type="checkbox" name="legendary" checked={form.legendary} onChange={handleChange} />
          <label className="text-sm">Legendary</label>
        </div>
        <button type="submit" className="col-span-full bg-green-500 text-white py-2 px-4 rounded">Add Quest</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}