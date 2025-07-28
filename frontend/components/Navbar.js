import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-purple-800 shadow-md">
      <Link href="/"><button className="text-white hover:underline">🏠 Home</button></Link>
      <button onClick={() => history.back()} className="text-white hover:underline">🔙 Back</button>
    </div>
  );
}