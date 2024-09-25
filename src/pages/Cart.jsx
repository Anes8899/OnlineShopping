import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { getItem } from "../components/Products/productSlice";
import ListProductCard from "../components/cart/ListProductCard";

function Card() {
  const product = useSelector(getItem);

  return (
    <div>
      <div className="w-full flex justify-center">
        {product.length === 0 ? (
          <p className="text-lg mt-44">Empty Products</p>
        ) : (
          <div>
            <ListProductCard product={product} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Card;
