"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner: string[] = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Jeans%20Trousers-1747120163.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20Top%20Fashion%20Brands-1746722016.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Shirt-1747119841.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Footwear-1747120034.png",
  "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20Perfumes%20Deodorants-1747120060.png",
];

function Flipcart() {
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
      <h1 className="text-2xl font-bold ml-5">FlipCart - Top Deals</h1>

      <div className="px-8">
        <Slider {...settings}>
          {Banner.map((img, index) => (
            <div
              key={index}
              className="min-w-[200px] relative m-3 cursor-pointer"
            >
              <img src={img} alt={`Image ${index}`} className="mx-1 my-1"  height={200} width={430} />
              <img
                src="https://asset20.ckassets.com/resources/image/stores/flipkart.png"
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

export default Flipcart;
