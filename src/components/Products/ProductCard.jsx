import { useState } from "react";

function ProductCard({ title }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-[390px] h-[519px]">
      <div
        className=" w-[360px] h-[381px] mx-auto group relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src="../src/assets/img/popular1.png.webp" />

        <p className="text-center relative top-[-43px] h-14 duration-500 ease-in-out group-hover:translate-y-[-10%] cursor-pointer group-hover:bg-red-500 pt-3">
          {hover ? (
            <span className="text-[15px] text-white">Add to Card</span>
          ) : null}
        </p>
        <div className={"border border-red-500 top-[-49px] relative"}></div>
      </div>
      <div className="text-center mt-5">
        <a className="text-[25px] font-bold">{title}</a>
        <p className="font-bold mt-3 text-red-600">$45,743</p>
      </div>
    </div>
  );
}

export default ProductCard;
