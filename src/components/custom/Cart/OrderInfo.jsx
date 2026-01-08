import {
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Trash2,
  Truck,
} from "lucide-react";
import React from "react";

export function OrderInfo({ BuyData, discount, qty, setQty, footer, CartBtn }) {
  return (
    <>
      <section className="flex gap-2 border-b border-gray-200 p-6">
        <img
          src={BuyData?.thumbnail}
          alt={BuyData?.title}
          className="w-32 h-48 object-contain border border-gray-200 rounded-md bg-white "
        />

        <div className="flex flex-col flex-1 gap-2 px-6">
          <p className="text-gray-900 font-medium text-sm leading-snug max-w-[90%]">
            {BuyData?.title}
          </p>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
              {BuyData?.rating} <Star size={12} />
            </span>
            <span className="text-xs text-gray-500">
              ({BuyData?.reviews.length} Ratings)
            </span>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <span className="text-lg font-semibold text-gray-900">
              ₹{Math.round(BuyData?.price - discount)}
            </span>
            <span className="text-sm line-through text-gray-400">
              ₹{Math.round(BuyData?.price)}
            </span>
            <span className="text-sm font-medium text-green-700">
              {Math.round(BuyData?.discountPercentage)}% off
            </span>
          </div>

          <p className="text-sm font-medium text-green-700">
            You saved ₹{discount}
          </p>

          {BuyData?.stock > 0 ? (
            <>
              <p className="text-sm text-gray-600">
                Delivery by <span className="font-semibold">Tomorrow</span> |
                FREE
              </p>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm font-medium text-gray-700">Qty</span>

                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <button
                    className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                    disabled={qty === 1}
                  >
                    <Minus size={14} />
                  </button>

                  <input
                    type="number"
                    value={qty}
                    className="w-12 text-center text-sm outline-none border-x border-gray-300"
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 1 && value <= BuyData.stock) {
                        setQty(value);
                      }
                    }}
                  />

                  <button
                    className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                    onClick={() => setQty(qty + 1)}
                    disabled={qty >= BuyData.stock}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="text-sm font-medium text-red-500">Out of Stock</p>
          )}
        </div>
        {/* --footer act btn-- */}
        {CartBtn && (
          <div className="flex flex-col justify-between items-end ">
            <button className="flex items-center gap-2 text-sm font-medium text-red-600 hover:underline">
              <Trash2 size={16} />
              Remove
            </button>

            <button className="flex items-center gap-2 border border-gray-300 text-gray-500 text-sm font-semibold px-5 py-2 rounded cursor-pointer hover:bg-gray-100 transition-all duration-600" >
              <ShoppingBag size={16} />
              Place Order
            </button>
          </div>
        )}
      </section>

      {/* --footer-- */}
      {footer && (
        <div className="p-8 flex gap-8 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-green-700" />
            100% Genuine Product
          </div>
          <div className="flex items-center gap-2">
            <Truck size={18} className="text-blue-700" />
            Easy 7-Day Returns
          </div>
        </div>
      )}
    </>
  );
}
