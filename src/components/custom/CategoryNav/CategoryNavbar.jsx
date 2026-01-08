// ---shadcn component---
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { CATEGORY_GROUPS, Catogories } from "@/Data/staticData";
import { CatogoriesBtn } from "./Catogories";
export function CategoryNavbar({
  handleCategoryClick,
  ApiCallHandle,
  showImage = true,
}) {
  return (
    <div className="grid grid-cols-7 gap-8 bg-white rounded-bl-2xl rounded-tr-2xl py-5 shadow-2xl">
      {Catogories.map((item) => {
        const menu = CATEGORY_GROUPS[item.id];

        return (
          <HoverCard key={item.id} openDelay={100} closeDelay={150}>
            <HoverCardTrigger asChild>
              <div>
                <CatogoriesBtn
                  title={item.title}
                  image={showImage ? item.image : null}
                  onClick={() => handleCategoryClick(item)}
                />
              </div>
            </HoverCardTrigger>
            {menu && (
              <HoverCardContent
                side="bottom"
                align="start"
                className="z-50 min-w-55 bg-white shadow-lg rounded p-3"
              >
                <ul className="space-y-2 text-sm">
                  {Array.isArray(menu)
                    ? menu.map((sub) => (
                        <li
                          key={sub}
                          onClick={() => ApiCallHandle(sub)}
                          className="cursor-pointer text-gray-600 hover:text-black"
                        >
                          {sub}
                        </li>
                      ))
                    : Object.entries(menu).map(([type, list]) => (
                        <li key={type}>
                          <p className="font-medium capitalize">{type}</p>
                          <ul className="ml-3 mt-1 space-y-1 text-gray-600">
                            {list.map((sub) => (
                              <li
                                key={sub}
                                onClick={() => ApiCallHandle(sub)}
                                className="cursor-pointer hover:text-black"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                </ul>
              </HoverCardContent>
            )}
          </HoverCard>
        );
      })}
    </div>
  );
}

// ------SELF CREATED CODE CATEGORYCARD WITH HOVER---------

// import { CATEGORY_GROUPS, Catogories } from "@/Data/staticData";
// import React from "react";
// import { CatogoriesBtn } from "./Catogories";
// export function CategoryNavbar({ navigate, handleCategoryClick }) {
//   return (
//     <>
//       <div className="grid grid-cols-7 gap-8 bg-white rounded-bl-2xl rounded-tr-2xl py-5">
//         {Catogories.map((item) => {
//           const key = item.id;
//           const menu = CATEGORY_GROUPS[key];
//           return (
//             <div key={item.id} className="relative group">
//               <CatogoriesBtn
//                 title={item.title}
//                 image={item.image}
//                 onClick={() => handleCategoryClick(item)}
//               />
//               {menu && (
//                 <>
//                   <div className="absolute left-0 top-full h-3 w-full" />
//                   <div
//                     className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto
//                     bg-white shadow-lg rounded z-50 min-w-55"
//                   >
//                     <ul className="p-3 space-y-2 text-sm">
//                       {Array.isArray(menu)
//                         ? menu.map((sub) => (
//                             <li
//                               key={sub}
//                               onClick={() => navigate(`/category/${sub}`)}
//                               className="cursor-pointer hover:text-black text-gray-600"
//                             >
//                               {sub}
//                             </li>
//                           ))
//                         : //convert object into array and apply loop on it.
//                           Object.entries(menu).map(([type, list]) => (
//                             <li key={type}>
//                               <p className="font-medium capitalize">{type}</p>
//                               <ul className="ml-3 mt-1 text-gray-600">
//                                 {list.map((sub) => (
//                                   <li
//                                     key={sub}
//                                     onClick={() => navigate(`/category/${sub}`)}
//                                     className="cursor-pointer hover:text-black"
//                                   >
//                                     {sub}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </li>
//                           ))}
//                     </ul>
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
