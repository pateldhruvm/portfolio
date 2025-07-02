"use client";

import Image from "next/image";

const images = [
  "/images/diwali.jpg",
  "/images/boston.jpg",
  "/images/salem.jpg",
];

export function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-xl shadow-md">
          <Image
            src={src}
            alt={`gallery-${index}`}
            width={500}
            height={300}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
