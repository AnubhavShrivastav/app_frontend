"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner: string[] = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Beauty%20Products%201-1745564957.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Personal%20Care-1738069570.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Footwear-1738069495.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Watches-1738069623.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Home%20Improvements%20Products-1738069521.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Baby%20Products-1738069448.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Luggage-1738069556.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Jewellery-1738069535.png",
];

function Amazon() {
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
      <h1 className="text-2xl font-bold ml-5">Amazon - Top Deals</h1>

      <div className="px-8">
        <Slider {...settings}>
          {Banner.map((img, index) => (
            <div
              key={index}
              className="min-w-[200px] relative m-3 cursor-pointer"
            >
            <img src={img} alt={`Image ${index}`} className="mx-1 my-1" height={200} width={430} />
              <img
                src="https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg"
                className="absolute rounded-xl left-[3%] top-[5%] right-[60%] bottom-[90%]"
                height={90}
                width={100}
                alt={`Slide ${index}`}
              />
              <button className="absolute cursor-pointer inline bottom-[6%] left-[65%] rounded-lg px-3 py-1 bg-white text-blue-700 font-semibold text-lg">
                Grab Deal
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Amazon;
