import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const TruncatedText = ({ text, maxLength, className }) => {
  const truncated =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <p className={className}>{truncated}</p>;
};

function ProductList({ products }) {
  const { id, title, image, price } = products;
  const [hover, setHover] = useState(false);
  return (
    <div className="bg-slate-100">
      {/* <div
        className=" w-full h-[381px] group relative border"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      > */}
      <img
        src={`${image}`}
        className="w-[250px] h-[280px] mx-auto my-auto relative top-8"
      />
      {/* <p className="text-center relative top-[50px] h-14 duration-500 ease-in-out group-hover:translate-y-[-10%] cursor-pointer group-hover:bg-red-500 pt-3">
        {hover ? (
          <button
            className="text-[15px] text-white"
            onClick={() => alert("click")}
          >
            Add to Card
          </button>
        ) : null}
      </p> */}
      {/* <div className={"border border-red-500 relative bottom-[-44px]"}></div> */}
      {/* </div> */}
      <div className="text-center my-10">
        <TruncatedText
          text={title}
          maxLength={20}
          className={"text-[20px] font-bold"}
        />
        <p className="font-bold mt-3 text-red-600">${price}</p>
      </div>
      <Link to={`${products.id}`} className="border flex flex-col">
        <Button size="20">Preview </Button>
      </Link>
    </div>
  );
}

export default ProductList;
