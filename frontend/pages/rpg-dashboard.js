import { useState, useEffect } from 'react';
import XPBar from '../components/XPBar';
import SkillTree from '../components/SkillTree';
import QuestCard from '../components/QuestCard';
import WaifuCard from '../components/WaifuCard';

export default function RpgDashboard() {
  const [xp, setXP] = useState({ total_xp: 0, level: 'Dream Novice' });
  const [quests, setQuests] = useState([]);
  const [waifus, setWaifus] = useState([]);

  useEffect(() => {
    fetch('/api/xp')
      .then((res) => res.json())
      .then((data) => {
        setXP(data);
      });
    fetch('/api/quests')
      .then((res) => res.json())
      .then((data) => setQuests(data));
    fetch('/api/waifus')
      .then((res) => res.json())
      .then((data) => setWaifus(data));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">RPG Dashboard</h1>
      <XPBar totalXP={xp.total_xp} level={xp.level} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillTree />
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg mb-2">Active Quests</h2>
            <div className="space-y-2">
              {quests.map((quest) => (
                <QuestCard key={quest.id} quest={quest} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">Your Companions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {waifus.map((w) => (
                <WaifuCard key={w.id} waifu={w} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}