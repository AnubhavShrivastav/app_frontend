"use client";

const images: string[] = [
  "https://asset20.ckassets.com/resources/image/category/banking-finance-offers-4684-17455848681.png",
  "https://asset20.ckassets.com/resources/image/category/biggest-sales-5257-17352940050.png",
  "https://asset20.ckassets.com/resources/image/category/loans-offers-5376-17455651671.png",
  "https://asset20.ckassets.com/resources/image/category/fashion-offers-4199-17352129510.png",
  "https://asset20.ckassets.com/resources/image/category/health-medicine-offers-4203-17352130130.png",
  "https://asset20.ckassets.com/resources/image/category/mobiles-phones-offers-4200-17352851830.png",
  "https://asset20.ckassets.com/resources/image/category/electronics-offers-4205-17352127230.png",
  "https://asset20.ckassets.com/resources/image/category/new-on-ck-4908-17352852140.png",
  "https://asset20.ckassets.com/resources/image/category/beauty-personal-care-offers-4206-17352128850.png",
  "https://asset20.ckassets.com/resources/image/category/health-and-wellness-4900-17352129720.png",
  "https://asset20.ckassets.com/resources/image/category/food-and-grocery-4901-17352860840.png",
  "https://asset20.ckassets.com/resources/image/category/departmental-offers-4204-17352129310.png",
  "https://asset20.ckassets.com/resources/image/category/travel-offers-4207-17352130220.png",
  "https://asset20.ckassets.com/resources/image/category/home-kitchen-offers-4209-17352129920.png",
  "https://asset20.ckassets.com/resources/image/category/domain-hosting-offers-4686-17352857680.png",
  "https://asset20.ckassets.com/resources/image/category/education-offers-4445-17352857240.png",
];

function ProductSlider() {
  return (
    <div className="mx-3 my-12">
      <h1 className="text-xl font-semibold">Top Categories</h1>

      <div className="flex items-center my-10 w-[110px] h-[110px] cursor-pointer">
        {images.map((img, index) => (
          <img src={img} key={index} className="mx-6 hover:scale-110" />
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
