"use client";

import { useState } from "react";

const images: string[] = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746783373.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747036591.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746783405.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746696683.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746851314.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desk%20Banner-1746596178.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/cleevo%20desk-1746037053.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746037110.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746851354.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1746938100.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/M-site%20Banner-1747037559.png",
];

function Slider() {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative mx-72 my-8 overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="flex justify-center items-center p-4 mx-2 my-2">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="object-cover h-85 w-200 rounded-md"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Slider;
