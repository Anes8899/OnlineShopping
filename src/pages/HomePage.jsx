// import { Link } from "react-router-dom";
// import CardNewArrivals from "../components/cart/CardNewArrivals";
// // import ProductCard from "../components/cart/ProductCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
// import DetailAboutPage from "../components/DetailAboutPage";
// import PageNav from "../components/PageNav";
import { useState } from "react";
// import ListProductCard from "../components/cart/ListProductCard";

function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll(e) {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position);
  }

  return (
    <div onScroll={handleScroll} className="overflow-y-scroll h-screen">
      {scrollPosition < 15 && scrollPosition > 0 ? null : (
        <div className="fixed top-0 w-full z-50 bg-white "></div>
      )}

      <div>
        <section className="w-full  h-auto bg-gray-300">
          <div className="max-w-[1170px] w-full h-full flex mx-auto justify-between gap-6 p-5">
            <div className="w-[750px] max-w-full h-auto mx-auto my-auto">
              <p className="text-[70px] font-bold pb-5  max-sm:text-[30px]">
                Select Your New Perfect Style
              </p>
              <p className="mb-20">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat is aute irure.
              </p>

              {/* <Link to={"/shop"} className="relative "> */}
              <Button size="w-[150px]" bg="bg-red-500" effic="bg-gray-500">
                SHOP NOW
              </Button>
              {/* </Link> */}
            </div>
            <div className="p-6 overflow-hidden">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp"
                className="h-full animate-zoomOut w-full max-sm:w-[20]"
              />
            </div>
          </div>
        </section>
        <section className="xl:w-[1170px]  h-auto mx-auto mt-48 max-lg:mx-20 max-sm:mx-10 ">
          <p className="font-bold text-[40px] pb-16   ">New Arrivals</p>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 md:w-full max-lg:grid-cols-2 max-sm:grid-cols-1">
            {/* <CardNewArrivals />
            <CardNewArrivals />
            <CardNewArrivals /> */}
          </div>
        </section>
        <section className="grid xl:grid-cols-4 md:grid-cols-2 md:w-full max-lg:grid-cols-2 max-sm:grid-cols-1 gap-2  max-sm:w-full">
          <div className=" h-[630px] col-span-2 overflow-hidden max-sm:w-[445px]">
            <img
              src="../src/assets/img/menwithwatch.jpg"
              className="w-full h-full hover:scale-95 ease-out duration-500 hover:brightness-50"
            />
          </div>
          <div className="border col-span-1 max-sm:col-span-2 w-full max-sm:w-[445px]">
            <img
              src="../src/assets/img/menwithwatch.jpg"
              className=" h-[630px] w-full"
            />
          </div>
          <div className="border max-sm:w-[445px]">
            <div className="border mb-2">
              <img
                src="../src/assets/img/menwithwatch.jpg"
                className="w-full h-[315px]"
              />
            </div>
            <div className="border">
              <img
                src="../src/assets/img/menwithwatch.jpg"
                className="h-[290px] w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-[1170px] mx-auto mt-40">
          <div className=" text-center mb-[70px] w-[652px] mx-auto">
            <p className="font-bold text-[50px]">Popular Items</p>
            <p className="opacity-70">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida.
            </p>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3">
            {/* <ListProductCard /> */}
          </div>
        </section>
        <div className="flex justify-center items-center group relative">
          <Button>VIEW MORE PRODUCT</Button>
        </div>
        <section>
          <div className="flex justify-center mt-[200px]">
            <div className=" w-[1170px] h-[719px] justify-between flex gap-10">
              <div className="w-[457px] h-[336px] my-auto mx-[35px]">
                <p className=" text-[50px] font-bold pb-9">Watch of Choice</p>
                <p className="text-[15px] pb-16">
                  Enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse.
                </p>
                <Button size="w-[200px]">SHOP WATCH</Button>
              </div>
              <img
                src="../src/assets/img/popular1.png.webp"
                className="w-[585px] h-[589px]"
              />
            </div>
          </div>
        </section>
        <section className="flex justify-center mt-[200px]">
          <div className=" w-[1170px] h-[719px] justify-between flex gap-10">
            <img
              src="../src/assets/img/popular1.png.webp"
              className="w-[585px] h-[589px]"
            />
            <div className="w-[457px] h-[336px]  mx-[35px]">
              <p className=" text-[50px] font-bold pb-9">Watch of Choice</p>
              <p className="text-[15px] pb-16">
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <Button size="w-[200px]">SHOP WATCH</Button>
            </div>
          </div>
        </section>
        {/* <DetailAboutPage /> */}
        <Footer />
      </div>
      <h1>HomePage</h1>
    </div>
  );
}

export default HomePage;
