import Button from "../components/Button";
import Footer from "../components/Footer";
import { getProducts } from "../services/apiItem";
import { Link, useLoaderData } from "react-router-dom";
import CardNewArrivals from "../components/cart/CardNewArrivals";
import ProductList from "../components/Products/ProductList";

export async function loader() {
  const productLimit = await getProducts();
  return productLimit;
}

function HomePage() {
  const productLimit = useLoaderData();

  const itemLimet = productLimit.slice(0, 3);
  // function handleScroll(e) {
  //   const { scrollTop, scrollHeight, clientHeight } = e.target;
  //   const position = Math.ceil(
  //     (scrollTop / (scrollHeight - clientHeight)) * 100
  //   );
  //   setScrollPosition(position);
  // }

  return (
    <div>
      {/* {scrollPosition < 15 && scrollPosition > 0 ? null : (
        <div className="fixed top-0 w-full z-50 bg-white "></div>
      )} */}

      <section className="w-full h-auto flex flex-col lg:flex-row justify-around bg-gray-300 border border-gray-950">
        <div className="h-full flex mx-auto justify-between gap-6 p-5">
          <div className="h-auto mx-auto my-auto text-center lg:text-left">
            <p className="text-[30px] lg:text-[70px] font-bold pb-5">
              Select Your New Perfect Style
            </p>
            <p className="mb-10 lg:mb-20 px-4 lg:px-0">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>

            <Link to={"/shop"}>
              <Button
                size="w-[150px]"
                bg="bg-red-500"
                effic="bg-gray-500"
                className="py-5"
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
          <div className="p-6 overflow-hidden">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp"
              className="w-full max-sm:w-[50%] lg:w-auto animate-zoomOut"
            />
          </div>
        </div>
      </section>
      <section className="w-[100%] sm:w-[50%] h-auto sm:mx-auto  mt-48 my-56">
        <p className="font-bold text-[40px] pb-10">New Arrivals</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
          {itemLimet.map((product, id) => (
            <CardNewArrivals key={id} item={product} />
          ))}
        </div>
      </section>
      {/* <section className="grid xl:grid-cols-4 md:grid-cols-2 md:w-full max-lg:grid-cols-2 max-sm:grid-cols-1 gap-2  max-sm:w-full">
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
          </div> */}
      {/* {productLimit.map((product) => (
        <div className="border mb-2">
          <img src={`${product.image}`} className="w-full h-[315px]" />
        </div>
      ))} */}
      {/* </section>   */}
      <section className="w-[50%] mx-auto mt-40">
        <div className=" text-center mb-[70px] w-full mx-auto">
          <p className="font-bold text-[50px]">Popular Items</p>
          <p className="opacity-70">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
          {productLimit
            .map((products) => <ProductList products={products} />)
            .slice(0, 6)}
        </div>
      </section>

      <div className="flex justify-center items-center group relative">
        <Link to={"/shop"}>
          <Button className="py-5 mt-20">VIEW MORE PRODUCT</Button>
        </Link>
      </div>

      <section>
        {productLimit
          .map((product, index) => (
            <div
              key={index}
              className={`flex justify-between mx-auto sm:w-[45rem] xl:w-[60rem] w-[20rem]  gap-10 my-[10rem]  border ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 text-left">
                <p className="sm:text-[50px] font-bold pb-9">{product.title}</p>
                <p className="sm:text-[15px] pb-16 hidden md:block">
                  {product.description}
                </p>
                <Button
                  size="sm:w-[200px] w-[100px]"
                  className="py-5 rounded-md text-[10px] sm:text-[20px]"
                >
                  SHOP WATCH
                </Button>
              </div>
              <div className="w-1/2">
                <img src={product.image} className="w-[80rem]" />
              </div>
            </div>
            // </div>
          ))
          .slice(0, 2)}
      </section>

      {/* <DetailAboutPage /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
