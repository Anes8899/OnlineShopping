import { useDispatch } from "react-redux";
import { decrement, increment } from "./productSlice";

function UpdateProduct({ productId, quantity }) {
  const dispatch = useDispatch();
  console.log(productId);

  return (
    <div className="flex h-10">
      <button
        className="rounded-md  px-3 py-1 border bg-red-500 text-white"
        onClick={() => dispatch(decrement(productId))}
      >
        -
      </button>
      <h1 className="mx-5 my-auto">{quantity}</h1>
      <button
        className="rounded-md  px-3 py-1 border bg-red-500 text-white"
        onClick={() => dispatch(increment(productId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateProduct;
