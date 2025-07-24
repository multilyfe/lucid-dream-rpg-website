import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Lucid Dream RPG</h1>
      <p className="mb-4 max-w-xl text-center">
        Welcome to the Lucid Dream RPG where your dreams turn into adventures. Explore your dream journal, level up through quests, meet companions and more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <Link href="/dream-journal" className="bg-white/20 p-4 rounded-2xl backdrop-blur hover:bg-white/30 transition">
          <div className="font-semibold">Dream Journal</div>
          <p className="text-sm">Record and review your dreams</p>
        </Link>
        <Link href="/rpg-dashboard" className="bg-white/20 p-4 rounded-2xl backdrop-blur hover:bg-white/30 transition">
          <div className="font-semibold">RPG Dashboard</div>
          <p className="text-sm">View XP, skills & progress</p>
        </Link>
        <Link href="/quest-board" className="bg-white/20 p-4 rounded-2xl backdrop-blur hover:bg-white/30 transition">
          <div className="font-semibold">Quest Board</div>
          <p className="text-sm">Accept and complete quests</p>
        </Link>
        <Link href="/waifu-companions" className="bg-white/20 p-4 rounded-2xl backdrop-blur hover:bg-white/30 transition">
          <div className="font-semibold">Companions</div>
          <p className="text-sm">Meet magical waifus</p>
        </Link>
        <Link href="/obedience-system" className="bg-white/20 p-4 rounded-2xl backdrop-blur hover:bg-white/30 transition">
          <div className="font-semibold">Obedience Rituals</div>
          <p className="text-sm">Track rituals & streaks</p>
        </Link>
        <Link href="/shame-panty-logs" className="bg-white/20 p-4 rounded-2xl backdrop-blur hover:bg-white/30 transition">
          <div className="font-semibold">Shame & Panty Logs</div>
          <p className="text-sm">NSFW: track shame & tokens</p>
        </Link>
        <Link href="/visual-gallery" className="bg-white/20 p-4 rounded-2xl backdrop-blur hover:bg-white/30 transition">
          <div className="font-semibold">Visual Gallery</div>
          <p className="text-sm">View dream-inspired art</p>
        </Link>
        <Link href="/rem-sleep-tracker" className="bg-white/20 p-4 rounded-2xl backdrop-blur hover:bg-white/30 transition">
          <div className="font-semibold">REM Sleep Tracker</div>
          <p className="text-sm">Track your sleep and REM</p>
        </Link>
      </div>
    </div>
  );
}