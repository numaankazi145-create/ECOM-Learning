import { useLocation } from "react-router-dom";
import { useState } from "react";
import { OrderInfo } from "@/components/custom/Cart/OrderInfo";
import { OrderBill } from "@/components/custom/Cart/OrderBill";

export function BuyNow() {
  const { state: BuyData } = useLocation();
  console.log(BuyData, "<<BUYNOW>>");
  const UserDetails = JSON.parse(localStorage.getItem("UserDetails"));
  const [qty, setQty] = useState(1);

  const discount = Math.round(
    BuyData?.price * (BuyData?.discountPercentage / 100)
  );

  const totalPrice = BuyData?.price * qty;
  const totalDiscount = discount * qty;
  const finalAmount = totalPrice - totalDiscount;

  return (
    <div className="min-h-screen bg-[#f1f3f6]">
      <div className="max-w-350 mx-auto px-6 py-6 grid grid-cols-12 gap-4">
        {/* ================= LEFT SIDE ================= */}
        <div className="col-span-8 bg-white border border-gray-300">
          {/* ---*/}
          {UserDetails ? (
            <div className="border-b border-gray-300 p-8 relative">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Deliver to :-
              </p>
              <p className="font-semibold text-gray-900 mt-1">
                {UserDetails?.fullName}
              </p>
              <p className="font-semibold text-gray-900 mt-1">
                {UserDetails?.mobile}
              </p>
              <p className="text-sm text-gray-700 leading-snug mt-1">
                {UserDetails?.addressLine}, {UserDetails?.locality},<br />
                {UserDetails?.city} - {UserDetails?.pincode},{" "}
                {UserDetails?.state}
              </p>
            </div>
          ) : (
            <span className="text-sm text-gray-600 leading-relaxed p-8 block border-b border-gray-300">
              Add your delivery details to help us deliver your orders quickly
              and accurately.
            </span>
          )}
          <OrderInfo
            BuyData={BuyData}
            discount={discount}
            qty={qty}
            setQty={setQty}
            footer={true}
          />
        </div>
        <OrderBill
          BuyData={BuyData}
          qty={qty}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          finalAmount={finalAmount}
        />
      </div>
    </div>
  );
}
