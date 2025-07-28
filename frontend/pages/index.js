import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Lucid Dream RPG Hub</h1>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/dream-journal"><button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-600">Dream Journal</button></Link>
          <Link href="/dream-view"><button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-600">View Dreams</button></Link>
          <Link href="/rpg-dashboard"><button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-600">RPG Dashboard</button></Link>
          <Link href="/quest-board"><button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-600">Quest Board</button></Link>
          <Link href="/waifu-companions"><button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-600">Waifu Companions</button></Link>
          <Link href="/database/people"><button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-600">People</button></Link>
          <Link href="/database/places"><button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-600">Places</button></Link>
          <Link href="/database/emotions"><button className="p-4 bg-purple-700 rounded-xl hover:bg-purple-600">Emotions</button></Link>
        </div>
      </div>
    </div>
  );
}