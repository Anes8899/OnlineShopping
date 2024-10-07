import { useLoaderData } from "react-router-dom";
import DetailAboutPage from "../components/DetailAboutPage";
import Footer from "../components/Footer";
import { getProducts } from "../services/apiItem";
import ProductList from "../components/Products/ProductList";

export async function loader() {
  const product = await getProducts();
  return product;
}

function Shop() {
  const product = useLoaderData();

  return (
    <div>
      <div className="  w-[1170px] mx-auto">
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

        <div className="grid grid-cols-3 m-20 gap-5">
          {product.map((products) => (
            <ProductList products={products} key={products.id} />
          ))}
        </div>

        <DetailAboutPage />
        <Footer />
      </div>
    </div>
  );
}

export default Shop;
