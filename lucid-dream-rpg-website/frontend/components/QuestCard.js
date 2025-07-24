export default function QuestCard({ quest }) {
  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-md">
      <h3 className="font-semibold text-lg mb-2">{quest.name}</h3>
      <p className="text-sm"><span className="font-semibold">Status:</span> {quest.status}</p>
      <p className="text-sm"><span className="font-semibold">Reward:</span> {quest.reward}</p>
      <p className="text-sm"><span className="font-semibold">XP Reward:</span> {quest.xp_reward}</p>
      {quest.legendary ? (
        <p className="text-xs text-purple-700 mt-1">Legendary Quest!</p>
      ) : null}
    </div>
  );
}