import React from "react";

export function FooterLinks({ Heading, Link1, Link2, Link3, Link4, Link5 }) {
  const linksClassName =
    "cursor-pointer hover:text-blue-500 transition-all duration-700";
  return (
    <div className="space-y-2">
      <h2 className="text-gray-300 text-lg font-semibold tracking-wide uppercase">
        {Heading}
      </h2>
      <ul className="space-y-2 text-md text-gray-200">
        <li className={linksClassName}>{Link1}</li>
        <li className={linksClassName}>{Link2}</li>
        <li className={linksClassName}>{Link3}</li>
        <li className={linksClassName}>{Link4}</li>
        <li className={linksClassName}>{Link5}</li>
      </ul>
    </div>
  );
}
