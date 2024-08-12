import DetailAboutPage from "../components/DetailAboutPage";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <>
      <PageNav />
      <div className="  w-[1170px] mx-auto mt-20">
        <div className="flex gap-10 justify-between ">
          <ul className="flex gap-10 cursor-pointer">
            <li className="hover:underline decoration-2 decoration-indigo-500 underline-offset-8 ">
              New Arrrivals
            </li>
            <li className="hover:underline decoration-2 decoration-indigo-500 underline-offset-8 ">
              Price Hight to Lovw
            </li>
            <li className="hover:underline decoration-2 decoration-indigo-500 underline-offset-8 ">
              Most Popular
            </li>
          </ul>
          <select className=" bg-slate-300  rounded-md p-3">
            <option value={"page1"}>page1</option>
            <option value={"page2"}>page2</option>
            <option value={"page3"}>page3</option>
          </select>
        </div>
        <div className="grid grid-cols-3 mt-6 mb-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <DetailAboutPage />
        <Footer />
      </div>
    </>
  );
}

export default Shop;
