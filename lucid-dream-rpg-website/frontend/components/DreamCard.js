export default function DreamCard({ dream }) {
  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{dream.date}</h3>
        {dream.favorite ? <span className="text-yellow-500">★ Favorite</span> : null}
      </div>
      <p className="text-sm"><span className="font-semibold">Emotions:</span> {dream.emotions}</p>
      <p className="text-sm"><span className="font-semibold">Type:</span> {dream.type}</p>
      <p className="text-sm"><span className="font-semibold">Patterns:</span> {dream.patterns}</p>
      <p className="text-sm"><span className="font-semibold">People:</span> {dream.people}</p>
      <p className="text-sm"><span className="font-semibold">Location:</span> {dream.location}</p>
      <p className="text-sm"><span className="font-semibold">Rating:</span> {dream.rating}/10</p>
      <p className="text-sm"><span className="font-semibold">Quest:</span> {dream.quest}</p>
      <p className="text-sm"><span className="font-semibold">XP Awarded:</span> {dream.xp_awarded}</p>
      <p className="text-sm"><span className="font-semibold">Lucidity Level:</span> {dream.lucidity_level}</p>
      <p className="text-sm"><span className="font-semibold">Dream Signs:</span> {dream.dream_signs}</p>
    </div>
  );
}