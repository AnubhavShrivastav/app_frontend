function Ajio() {
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
  ];

  return (
    <div className="mx-4 my-3">
      <h1 className="text-2xl font-bold ml-5">Ajio - Top Deals</h1>

      <div className="flex overflow-x-auto">
        {Banner.map((img, index) => (
          <div key={index} className="min-w-[400px] relative m-3 cursor-pointer">
            <img src={img} alt={`Image ${index}`} className="mx-2 my-1" />
            <img
              src="https://asset20.ckassets.com/resources/image/stores/ajio-coupons-1735561339.jpg"
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
      </div>
    </div>
  );
}

export default Ajio;
