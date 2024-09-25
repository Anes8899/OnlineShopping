import { useDispatch } from "react-redux";
import { clearCart, deleteProduct } from "../Products/productSlice";
import UpdateProduct from "../Products/UpdateProduct";

function ListProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[1170px]  mx-auto my-10 border border-red-400 mt-44  ">
        <div className="flex list-none text-center justify-around bg-red-400 text-white">
          <li className="">No</li>
          <li className=" ">Product</li>
          <li className=" ">Quantity</li>
          <li className="w-[30%]">Name</li>
          <li className="">Price</li>
          <li className="">Total</li>
          <li className="">Action</li>
        </div>

        {product.map((product, index) => (
          <ul>
            <li
              key={product.productId || index}
              className="flex list-none border items-center justify-around flex-nowrap"
            >
              <p>{index + 1}</p>

              <img
                className="w-24 my-5 mx-5"
                src={product.image}
                alt={product.name}
              />
              <div className="flex justify-around items-center">
                <UpdateProduct
                  productId={product.productId}
                  quantity={product.quantity}
                />
              </div>
              <p className=" px-4  w-[30%] flex-wrap">{product.title}</p>
              <p>${product.unitPrice}</p>
              <p className="w-20">${product.totalPrice}</p>

              <button
                className="border p-2 bg-red-500 text-white hover:bg-red-600 rounded-md"
                onClick={() =>
                  dispatch(deleteProduct({ productId: product.productId }))
                }
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
        <button
          className="border w-24 py-3 m-2 rounded-lg bg-red-500 text-white relative left-1"
          onClick={() => dispatch(clearCart())}
        >
          Delete All
        </button>
      </div>
    </>
  );
}

export default ListProductCard;
