export default function GalleryCard({ image }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      <img
        src={image.url || '/placeholder_light_gray_block.png'}
        alt={image.caption || 'Dream image'}
        className="w-full h-40 object-cover"
      />
      {image.caption && (
        <div className="p-2 bg-white/80 backdrop-blur text-center text-sm">{image.caption}</div>
      )}
    </div>
  );
}