import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import { singleProductLoader } from "../../services/apiItem";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./productSlice";

export async function loader({ params }) {
  const product = await singleProductLoader(params.productId);
  return product;
}

function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const [count, setCount] = useState(0);
  const product = useLoaderData();
  const { id, title, image, price, description } = product;

  const cart = useSelector((state) => state.product.cart);

  // console.log(cart);

  const dispatch = useDispatch();

  const images = [image];

  function NextImage() {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    console.log("nextimage");
  }

  function PrevImage() {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  }

  return (
    <>
      <div className="w-[850px] h-auto mx-auto">
        <div className="w-[850px] h-[850px] border flex">
          <img
            src="../src/assets/icon/leftarrow.svg"
            className="w-10 mx-auto rounded-3xl bg-slate-500 h-10 my-auto cursor-pointer overflow-hidden"
            onClick={PrevImage}
          />
          <div className="w-full h-full">
            <AnimatePresence wait>
              <motion.img
                key={images[currentImage]}
                src={images[currentImage]}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              />
            </AnimatePresence>
          </div>

          <img
            src="../src/assets/icon/right-arrow.svg"
            className="w-10 h-10 p-1 mx-auto rounded-3xl bg-slate-500 my-auto cursor-pointer"
            onClick={NextImage}
          />
        </div>
        <div className="w-[730px] mx-auto">
          <p className=" text-center mb-10 mt-10 font-bold text-[35px]">
            {title}
          </p>
          <p className="text-center w-full text-[15px]">{description}</p>

          {cart.map((product) => (
            <>
              <div className="flex justify-center mt-10">
                <div className="py-5">Quantity</div>

                <div className=" w-20 flex mx-10">
                  <div></div>
                  <button
                    className="border px-10 py-5 text-[20px] cursor-pointer"
                    onClick={() => dispatch(decrement())}
                  >
                    -
                  </button>
                  <div className="border px-10 py-5 bg-slate-500 text-[20px]">
                    {product.quantity}
                  </div>
                  <button
                    className="border px-10 py-5 text-[20px] cursor-pointer"
                    onClick={() => dispatch(increment())}
                  >
                    +
                  </button>
                </div>
                <div className="ml-48 py-5">${product.totalPrice}</div>
              </div>
            </>
          ))}
          <button className="w-40 border p-5 flex justify-center mx-auto mt-10 rounded-md border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Add to Card
          </button>
        </div>
      </div>
      <div className="ml-5">
        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;
