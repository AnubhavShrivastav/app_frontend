"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747715287.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Desktop%20Banner-1747740557.png",
];


function BannerSlider() {
  const Setting = {
    dots: false, // Shows navigation dots
    infinite: false, // Looping
    speed: 500, // Animation speed
    slidesToShow: 3.2, // Show 3 at once
    slidesToScroll: 2, // Move one at a time
    autoplay: false, // Auto-slide
    autoplaySpeed: 3000, // 3 seconds
    arrows: true, // Left/Right arrows
  };

  return (
    <div className="min-w-[200px] mx-10 mt-30">
      <Slider {...Setting}>
        {images.map((banner, index) => (
          <div className="px-2">
            <img
              src={banner}
              key={index}
              className="w-[534px] h-[248px] rounded-xl"
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerSlider;
