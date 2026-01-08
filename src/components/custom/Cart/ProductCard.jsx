export function ProductCard({ ProductData, onProductSelect }) {
  const {
    title,
    thumbnail,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    // onAddToCart,
    // onBuyNow,
  } = ProductData;
  return (
    <div
      onClick={() => onProductSelect(ProductData)}
      className="group relative w-full rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 grid-cols-4 gap-3"
    >
      <div className="relative h-55 overflow-hidden rounded-t-xl bg-gray-50">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />

        {discountPercentage && (
          <span className="absolute top-2 left-2 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white">
            {Math.round(discountPercentage)}% OFF
          </span>
        )}
      </div>

      <div className="p-4 space-y-2">
        <p className="text-xs uppercase tracking-wide text-gray-500">{brand}</p>

        <h3 className="line-clamp-2 text-sm font-medium text-gray-800 group-hover:text-blue-600 transition">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-sm">
          <span className="rounded bg-green-600 px-1.5 py-0.5 text-xs font-semibold text-white">
            {rating} ★
          </span>
          <span className="text-xs text-gray-500">Ratings</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{Math.round(price)}
          </span>
          <span className="text-xs capitalize text-gray-500">{category}</span>
        </div>

        {/* <div className="mt-3 flex gap-2">
          <button
            onClick={() => onAddToCart?.(ProductData.id)}
            className="flex-1 rounded-lg bg-yellow-400 py-2 text-sm font-semibold text-black transition-all duration-700 hover:bg-white hover:text-black hover:border hover:border-yellow-600"
          >
            Add to Cart
          </button>

          <button
            onClick={() => onBuyNow?.(ProductData?.id)}
            className="flex-1 rounded-lg bg-orange-500 py-2 text-sm font-semibold text-white transition-all duration-700 hover:bg-white hover:text-black hover:border hover:border-orange-600"
          >
            Buy Now
          </button>
        </div> */}
      </div>
    </div>
  );
}
