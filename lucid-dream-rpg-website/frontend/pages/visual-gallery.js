import { useState } from 'react';
import GalleryCard from '../components/GalleryCard';

export default function VisualGallery() {
  const [filter, setFilter] = useState('All');
  const images = [
    { url: '/placeholder_light_gray_block.png', caption: 'Candy Siren in Sky Palace', category: 'Waifu' },
    { url: '/placeholder_light_gray_block.png', caption: 'Shattered Veil Quest Art', category: 'Quest' },
    { url: '/placeholder_light_gray_block.png', caption: 'Lucid Tree Concept', category: 'XP' }
  ];

  const filteredImages = filter === 'All' ? images : images.filter((img) => img.category === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Visual Gallery</h1>
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
          <option value="All">All</option>
          <option value="Waifu">Waifu</option>
          <option value="Quest">Quest</option>
          <option value="XP">XP</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((img, idx) => (
          <GalleryCard key={idx} image={img} />
        ))}
      </div>
    </div>
  );
}