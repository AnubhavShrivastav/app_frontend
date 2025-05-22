import Header from "../component/Header";
import Footer from "../component/Footer";
import BannerSlider  from "../component/BannerSlider";
import ProductSlider from "../component/ProductSlider";
import FlashDeal from "../component/FlashDeal";
import Ajio from "../component/Ajio";
import Flipcart from "../component/Flipcart";
import Amazon from "../component/Amazon";
import Myntra from "../component/Myntra";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HomePage() {
  return (
    <>
      <Header />
      <BannerSlider />
      <ProductSlider />
      <FlashDeal />
      <Ajio />
      <Flipcart />
      <Amazon />
      <Myntra />
      <Footer />
    </>
  );
}

export default HomePage;
