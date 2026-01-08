import React from 'react'

export 
    function OrderBill({ BuyData , qty  }) {
    const todayDate = new Date().toISOString().slice(0, 10);
      const discount = Math.round(
        BuyData?.price * (BuyData?.discountPercentage / 100)
      );

      const totalPrice = BuyData?.price * qty;
      const totalDiscount = discount * qty;
      const finalAmount = totalPrice - totalDiscount;
  return (
    <>
      <div className="col-span-4">
        <div className="bg-white border border-gray-300">
          {/* ================= PRICE DETAILS HEADER ================= */}
          <div className="px-5 py-3 border-b border-gray-300 text-sm font-semibold text-gray-900">
            PRICE DETAILS
          </div>

          {/* ================= PRICE CONTENT ================= */}
          <div className="px-5 py-4 text-sm space-y-3">
            <div className="flex justify-between">
              <span>Price ({qty} item)</span>
              <span>₹{Math.round(totalPrice)}</span>
            </div>

            <div className="flex justify-between text-green-700">
              <span>Discount</span>
              <span>-₹{totalDiscount}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">FREE</span>
            </div>

            <div className="border-t border-gray-300 pt-3 flex justify-between font-semibold text-base">
              <span>Total Amount</span>
              <span>₹{Math.round(finalAmount)}</span>
            </div>

            <p className="text-green-700 font-medium text-sm">
              You will save ₹{totalDiscount} on this order
            </p>
          </div>

          {/* ================= ORDER INFO / BARCODE ================= */}
          <div className="border-t border-gray-300 px-5 py-4">
            <div className="text-sm font-semibold text-gray-900 mb-4">
              ORDER INFORMATION
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-3">
                {/* Barcode no */}
                <div>
                  <p className="text-xs text-gray-500">Order Barcode</p>
                  <p className="font-mono text-base tracking-widest text-gray-900">
                    {BuyData?.meta?.barcode}
                  </p>
                </div>
                {/* dates */}
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-xs text-gray-500">Order Date</p>
                    <p className="text-gray-800">{todayDate}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Last Updated</p>
                    <p className="text-gray-800">
                      {BuyData?.meta?.updatedAt?.split("T")[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* scanner */}
              <div className="flex justify-end">
                <div className="border border-dashed border-gray-300 p-3 rounded-md bg-gray-50">
                  <img
                    src={BuyData?.meta?.qrCode}
                    alt="Order QR Code"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= PLACE ORDER BUTTON ================= */}
          <div className="p-4">
            <button
              disabled={BuyData?.stock === 0}
              className="w-full bg-[#fb641b] hover:bg-[#e95a17] text-white py-3 font-semibold tracking-wide cursor-pointer disabled:cursor-not-allowed disabled:opacity-45"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
