import React from "react";

export function CatogoriesBtn({ image, title, onClick }) {
  return (
    <section className="flex flex-col justify-center items-center ">
      <button
        type="submit"
        className="rounded-xl transition-all duration-200 cursor-pointer"
        onClick={onClick}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-30 h-20 object-contain rounded-t-full"
          />
        )}

        <p className="text-black font-medium text-xl tracking-wide">
          {title}
        </p>
      </button>
    </section>
  );
}
