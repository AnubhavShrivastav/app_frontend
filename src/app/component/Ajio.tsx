"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  "https://asset22.ckassets.com/resources/image/staticpage_images/Dress-1747131083.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Under%20527-1746696315.png",
];

function Ajio() {
  const settings = {
    dots: false, // Shows navigation dots
    infinite: false, // Looping
    speed: 500, // Animation speed
    slidesToShow: 3.2, // Show 3 at once
    slidesToScroll: 1, // Move one at a time
    autoplay: false, // Auto-slide
    autoplaySpeed: 3000, // 3 seconds
    arrows: true, // Left/Right arrows
  };

  return (
    <div className="mx-4 my-3">
      <h1 className="text-2xl font-bold ml-5">Ajio - Top Deals</h1>

      <div className="px-8">
        <Slider {...settings}>
          {Banner.map((img, index) => (
            <div
              key={index}
              className="min-w-[200px] relative m-3 cursor-pointer"
            >
              <img
                src={img}
                alt={`Image ${index}`}
                className="mx-1 my-1"
                height={200}
                width={430}
              />
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
        </Slider>
      </div>
    </div>
  );
}

export default Ajio;
