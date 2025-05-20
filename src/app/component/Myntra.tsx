"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner: string[] = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Ethnic%20wear-1738129257.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/bags-1738129192.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/speaker-1738129900.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/decor-1738129206.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Footwear-1738129268.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/shirts-1738129356.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Deodorants-1738129220.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/trouser-1738129946.png",
];

function Myntra() {
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
      <h1 className="text-2xl font-bold ml-5">Myntra - Top Deals</h1>

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
                src="https://asset20.ckassets.com/resources/image/stores/myntra-1735792893.jpg"
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

export default Myntra;
