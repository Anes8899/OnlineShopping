import { useState } from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  const { id, title, image, price } = products;
  const [hover, setHover] = useState(false);
  return (
    <div className="bg-slate-100">
      <Link to={`${products.id}`}>
        <div
          className=" w-full h-[381px] group relative border"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={`${image}`}
            className="w-[250px] h-[280px] mx-auto my-auto relative top-8"
          />
          <p className="text-center relative top-[50px] h-14 duration-500 ease-in-out group-hover:translate-y-[-10%] cursor-pointer group-hover:bg-red-500 pt-3">
            {hover ? (
              <span className="text-[15px] text-white">Add to Card</span>
            ) : null}
          </p>
          <div
            className={"border border-red-500 relative bottom-[-44px]"}
          ></div>
        </div>
        <div className="text-center mt-5">
          <a className="text-[20px] font-bold">{title}</a>
          <p className="font-bold mt-3 text-red-600">${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductList;
