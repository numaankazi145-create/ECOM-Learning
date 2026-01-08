import { TopDeal } from "./TopDealsItems";
import { useState } from "react";

export function DealsSection({ data }) {
  const [viewAll, setViewAll] = useState(false);
  const visibleData = viewAll ? data : data.slice(0, 10);
  return (
    <section className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Top Deals For You
        </h2>

        <button
          onClick={() => setViewAll((prev) => !prev)}
          className="text-sm text-blue-600 cursor-pointer hover:underline"
        >
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {visibleData?.map((item) => (
          <TopDeal
            key={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
            reviewCount={item.reviews?.length || 0}
          />
        ))}
      </div>
    </section>
  );
}
