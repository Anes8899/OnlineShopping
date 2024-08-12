import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
// import Footer from "./components/Footer";

const images = [
  "../src/assets/img/popular1.png.webp",
  "../src/assets/img/watch.png.webp",
  // Add more image URLs here
];

function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const [count, setCount] = useState(0);

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
      <PageNav />
      <div className="w-[850px] h-auto mx-auto">
        <div className="w-[850px] h-[850px] border flex">
          <img
            src="../src/assets/icon/leftarrow.svg"
            className="w-10 mx-auto rounded-3xl bg-slate-500 h-10 my-auto cursor-pointer"
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
            Foam filling cotton slow rebound pillows
          </p>
          <p className="text-center w-full text-[15px]">
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources. Credibly innovate
            granular internal or “organic” sources whereas high standards in
            web-readiness. Credibly innovate granular internal or organic
            sources whereas high standards in web-readiness. Energistically
            scale future-proof core competencies vis-a-vis impactful
            experiences. Dramatically synthesize integrated schemas. with
            optimal networks.
          </p>
          <div className="flex justify-center mt-10">
            <div className="py-5">Quantity</div>
            <div className=" w-20 flex mx-10">
              <button
                className="border px-10 py-5 text-[20px] cursor-pointer"
                onClick={() => setCount(count < 1 ? none : count - 1)}
              >
                -
              </button>
              <div className="border px-10 py-5 bg-slate-500 text-[20px]">
                {count}
              </div>
              <button
                className="border px-10 py-5 text-[20px] cursor-pointer"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <div className="ml-48 py-5">$5</div>
          </div>
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
