// import { OrderInfo } from "@/components/custom/Cart/OrderInfo";
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export function Cart() {
//   const UserDetails = JSON.parse(localStorage.getItem("UserDetails"));
//   const MyCart = JSON.parse(localStorage.getItem("MyCart") || "[]");
//   const location = useLocation();
//   const product = location.state;
//   console.log("Product in Cart Page :", product);
//   const [qty, setQty] = useState(1);

//   return (
//     <div className="w-full bg-[#f1f3f6]">
//       <div className="mx-auto flex justify-center ">
//         <div
//           className={`bg-white border border-gray-300 sticky top-7 overflow-y-auto
//         ${MyCart.length == 1 || 0 ? "h-[55vh]" : "h-[85vh]"}
//       `}
//         >
//           {UserDetails ? (
//             <div className="border-b border-gray-300 p-5 bg-white sticky top-0 z-10">
//               <p className="text-xs text-gray-500  tracking-wide">
//                 Deliver to :-
//               </p>
//               <p className="font-semibold text-gray-900 mt-1"> 
//                 {UserDetails?.fullName}
//               </p>
//               <p className="font-semibold text-gray-900 mt-1">
//                 {UserDetails?.mobile}
//               </p>
//               <p className="text-sm text-gray-700 leading-snug mt-1">
//                 {UserDetails?.addressLine}, {UserDetails?.locality},<br />
//                 {UserDetails?.city} - {UserDetails?.pincode},{" "}
//                 {UserDetails?.state}
//               </p>
//             </div>
//           ) : (
//             <span className="text-sm text-gray-600 leading-relaxed p-5 block border-b border-gray-300 bg-white sticky top-0 z-10">
//               Add your delivery details to help us deliver your orders quickly
//               and accurately.
//             </span>
//           )}
//           {MyCart?.length > 0 ? (
//             MyCart.map((item) => {
//               const discount = Math.round(
//                 Number(item.price) * (Number(item.discountPercentage) / 100)
//               );

//               return (
//                 <div className="">
//                   <OrderInfo
//                     key={item.id}
//                     BuyData={item}
//                     discount={discount}
//                     qty={qty}
//                     setQty={setQty}
//                     CartBtn={true}
//                   />
//                 </div>
//               );
//             })
//           ) : (
//             <Link
//               to="/"
//               className="flex gap-2 text-xl font-mono text-center text-blue-500 min-h-screen justify-center items-center"
//             >
//               Your cart is empty
//               <span className="text-yellow-500 hover:text-yellow-700">
//                 Start shopping now!
//               </span>
//             </Link>
//           )}
//           {MyCart.length > 0 && (
//             <div className="flex justify-between items-center sticky bottom-0 z-10 bg-white">
//               <span className="px-12 py-2">
//                 <p className="text-gray-600 text-sm font-light  line-through ">
//                   ₹30,4040
//                 </p>
//                 <p className="text-blacktext-2xl font-medium ">₹30,4040</p>
//               </span>

//               <button className=" bg-[#fb641b] hover:bg-[#e95a17] text-white py-3 font-semibold tracking-wide cursor-pointer w-[60%]">
//                 Place Order
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { OrderInfo } from "@/components/custom/Cart/OrderInfo";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Cart() {
  const UserDetails = JSON.parse(localStorage.getItem("UserDetails"));
  const MyCart = JSON.parse(localStorage.getItem("MyCart") || "[]");
  // const location = useLocation();
  // const product = location.state;
  // console.log("Product in Cart Page :", product);
  const [qty, setQty] = useState(1);

  const isScrollable = MyCart.length > 1;

  return (
    <div>
      <div className="bg-white w-full">
        <div
          className={`px-[20%] border border-gray-300
            ${
              isScrollable
                ? "h-auto"
                : "h-[60vh] overflow-hidden"
            }
          `}
        >
          {UserDetails ? (
            <div className=" p-5 bg-white ">
              <p className=" text-xs text-gray-500 tracking-wide">
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
            <span className="text-sm text-gray-600 leading-relaxed p-5 block border-b border-gray-300  sticky top-0 z-10">
              Add your delivery details to help us deliver your orders quickly
              and accurately.
            </span>
          )}

          {MyCart.length > 0 ? (
            MyCart.map((item) => {
              const discount = Math.round(
                Number(item.price) * (Number(item.discountPercentage) / 100)
              );

              return (
                <div key={item.id}>
                  <OrderInfo
                    BuyData={item}
                    discount={discount}
                    qty={qty}
                    setQty={setQty}
                    CartBtn={true}
                  />
                </div>
              );
            })
          ) : (
            <Link
              to="/"
              className="flex gap-2 text-xl font-mono text-center text-blue-500 justify-center items-center py-50"
            >
              Your cart is empty
              <span className="text-yellow-500 hover:text-yellow-700">
                Start shopping now!
              </span>
            </Link>
          )}

          {MyCart.length > 0 && (
            <div className="flex justify-between items-center sticky bottom-0 z-10 bg-white">
              <span className="px-12 py-2">
                <p className="text-gray-600 text-sm font-light line-through">
                  ₹30,4040
                </p>
                <p className="text-black text-2xl font-medium">₹30,4040</p>
              </span>

              <button className="bg-[#fb641b] hover:bg-[#e95a17] text-white py-3 font-semibold tracking-wide cursor-pointer w-[60%]">
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
