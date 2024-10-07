import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import TextControl from "../TextControl";

// const TruncatedText = ({ text, maxLength, className }) => {
//   const truncated =
//     text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

//   return <p className={className}>{truncated}</p>;
// };

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
        className="w-[150px] h-[180px] mx-auto my-auto relative top-8"
      />

      <div className="text-center my-10">
        <TextControl
          text={title}
          maxLength={10}
          className={"text-[20px] font-bold"}
        />
        <p className="font-bold mt-3 text-red-600">${price}</p>
      </div>
      <Link to={`${products.id}`} className="border flex flex-col">
        <Button size="20" className="py-3">
          Preview
        </Button>
      </Link>
    </div>
  );
}

export default ProductList;
