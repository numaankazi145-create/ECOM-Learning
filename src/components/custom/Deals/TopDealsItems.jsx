export function TopDeal({
  thumbnail,
  title,
  price,
  discountPercentage,
  rating,
  reviewCount,
}) {
  return (
    <div className="flex flex-col items-center text-center cursor-pointer group">
      <img
        src={thumbnail}
        alt={title}
        className="h-32 object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
      />

      <p className="text-sm font-medium text-gray-800 line-clamp-1">{title}</p>

      <p className="text-sm font-semibold text-green-600 mt-1">
        Up to {Math.round(discountPercentage)}% Off
      </p>

      <p className="text-sm text-gray-500">{price} $</p>

      <div className="flex items-center gap-1 mt-1 text-xs">
        <span className="bg-green-600 text-white px-1.5 py-0.5 rounded">
          {rating} ★
        </span>
        <span className="text-gray-400">({reviewCount})</span>
      </div>
    </div>
  );
}
