import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../Footer";
import { singleProductLoader } from "../../services/apiItem";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getCurrentQuantityById } from "./productSlice";
import UpdateProduct from "./UpdateProduct";

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

export async function loader({ params }) {
  const product = await singleProductLoader(params.productId);
  return product;
}

function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0);

  const product = useLoaderData();
  const { id, title, image, price, description } = product;

  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantityById(id));
  const images = [image];

  function handAddItem() {
    const newItem = {
      productId: id,
      title,
      image,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };
    dispatch(addProduct(newItem));
  }
  const totalPrice = price * quantity;

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
        <div className="w-[450px] h-[450px] border flex mx-auto">
          <MdOutlineNavigateBefore
            size={"40px"}
            className="mx-auto h-10 my-auto cursor-pointer overflow-hidden"
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
          <MdOutlineNavigateNext
            size={"40px"}
            className="mx-auto h-10 my-auto cursor-pointer overflow-hidden"
            onClick={NextImage}
          />
          {/* <img
            src="../src/assets/icon/right-arrow.svg"
            className="w-10 h-10 p-1 mx-auto rounded-3xl bg-slate-500 my-auto cursor-pointer"
            onClick={NextImage}
          /> */}
        </div>
        <div className="w-[730px] mx-auto">
          <p className=" text-center mb-10 mt-10 font-bold text-[35px]">
            {title}
          </p>
          <p className="text-center w-full text-[15px]">{description}</p>

          <>
            {quantity === 0 ? (
              <button
                className="w-40 border p-5 flex justify-center mx-auto mt-10 rounded-md border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={handAddItem}
              >
                Add to Card
              </button>
            ) : (
              <>
                <div className="flex justify-around mt-10 w-[400px] flex-wrap align-middle mx-auto">
                  <div className="my-auto">Quantity</div>
                  <UpdateProduct productId={id} quantity={quantity} />
                  <div className="my-auto">{totalPrice}$</div>
                </div>
                <Link to={"/shop"} className="flex w-12 mx-auto mt-10">
                  <button className=" border px-5 py-2 rounded-md bg-blue-500 text-cyan-50">
                    Done
                  </button>
                </Link>
              </>
            )}
          </>
        </div>
      </div>
      <div className="ml-5">
        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;
