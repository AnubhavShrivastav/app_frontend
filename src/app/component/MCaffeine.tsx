"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner: string[] = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Coffee%20Body%20Scrub-1743077422.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Blueberry%20Blast%20Body%20Wash-1743077446.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Brightening%20Raspberry%20Body%20Wash-1743077469.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Sweet%20Escape%20Perfume%20Body%20Lotion-1743077491.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Breeze%20Perfume%20Body%20Lotion-1743077512.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Brightening%20Raspberry%20Sunscreen-1743077529.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Super%20Glow%20Flash%20Facial%20Mask-1743077571.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Glow%20Boost%20Grapefruit%20Body%20Wash-1743077603.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Sun%20Glaze%20Mist%20Face%20Sunscreen%20Spray-1743077636.png",
];

function MCaffeine() {

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
      <h1 className="text-2xl font-bold ml-5">mCaffeine - Buy 1 Get 1 Free</h1>

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
                src="https://asset20.ckassets.com/resources/image/stores/mcaffeine-coupons-1735628969.jpg"
                className="absolute rounded-xl left-[5%] top-[5%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
                alt=""
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

export default MCaffeine;
