function Flipcart() {
  const Banner: string[] = [
    "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Jeans%20Trousers-1747120163.png",
    "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20Top%20Fashion%20Brands-1746722016.png",
    "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Shirt-1747119841.png",
    "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20TSP%20Footwear-1747120034.png",
    "https://asset22.ckassets.com/resources/image/staticpage_images/Flipkart%20Generic%20Perfumes%20Deodorants-1747120060.png",
  ];

  return (
    <div className="mx-4 my-3">
      <h1 className="text-2xl font-bold ml-5">FlipCart - Top Deals</h1>

      <div className="flex overflow-x-auto">
        {Banner.map((img, index) => (
          <div
            key={index}
            className="min-w-[400px] relative m-3 cursor-pointer"
          >
            <img src={img} alt={`Image ${index}`} className="mx-2 my-1" />
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
      </div>
    </div>
  );
}

export default Flipcart;
