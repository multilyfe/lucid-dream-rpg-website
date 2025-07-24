export default function WaifuCard({ waifu }) {
  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-md flex flex-col items-center text-center">
      <img src={waifu.image_url || '/placeholder_light_gray_block.png'} alt={waifu.name} className="w-24 h-24 rounded-full mb-2 object-cover" />
      <h3 className="font-semibold text-lg">{waifu.name}</h3>
      <p className="text-sm mb-1">{waifu.buff}</p>
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-pink-400 h-3 rounded-full"
          style={{ width: `${waifu.unlock_progress}%` }}
        ></div>
      </div>
      <p className="text-xs mt-1">Unlock Progress: {waifu.unlock_progress}%</p>
    </div>
  );
}