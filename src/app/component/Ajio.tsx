"use client";
import { useState } from "react";

const Banner: string[] = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20532-1747131217.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20531-1747131207.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20530-1747131198.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Skincare-1747131065.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/MenTrousers-1747131039.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Skincare-1747131065.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Pants%20Trousers-1747131097.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/TShirt-1747131108.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Women%20Handbags-1747131120.png",
  // "https://asset22.ckassets.com/resources/image/staticpage_images/Dress-1747131083.png",
  // "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20527-1746696315.png",
];

function Ajio() {
  const [current, setCurrent] = useState<number>(0);
  const imagesPerSlide: number = 3;

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + imagesPerSlide >= Banner.length ? 0 : prev + imagesPerSlide
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev - imagesPerSlide < 0
        ? Banner.length - imagesPerSlide
        : prev - imagesPerSlide
    );
  };

  const visibleImages: string[] = Banner.slice(
    current,
    current + imagesPerSlide
  );

  return (
    <div className="mx-4 my-3">
      <h1 className="text-2xl font-bold ml-5">Ajio - Top Deals</h1>

      <div className="flex overflow-x-auto">
        <button
          onClick={prevSlide}
          className="text-3xl bg-white rounded-full px-3 py-1 shadow-md"
        >
          ◀
        </button>
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="min-w-[400px] relative m-3 cursor-pointer"
          >
            <img src={img} alt={`Image ${index}`} className="mx-2 my-1" />
            <img
              src="https://asset20.ckassets.com/resources/image/stores/ajio-coupons-1735561339.jpg"
              className="absolute rounded-xl left-[5%] top-[5%] right-[60%] bottom-[90%]"
              height={90}
              width={100}
              alt={`Slide ${index}`}
            />

            <button className="absolute cursor-pointer inline bottom-[6%] left-[70%] rounded-lg px-3 py-1 bg-white text-blue-700 font-semibold text-lg">
              Grab Deal
            </button>
          </div>
        ))}

        <button
          onClick={nextSlide}
          className="text-3xl bg-white rounded-full px-3 py-1 shadow-md"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Ajio;
