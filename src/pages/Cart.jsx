import { useState } from "react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-[1170px]  mx-auto my-10">
      <table className="w-full  text-left">
        <thead>
          <tr>
            <th className="p-2">Product</th>
            <th className="text-right">Price</th>
            <th className="text-right">Quantity</th>
            <th className="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-y">
              <div className="flex h-full w-[90%]">
                <img
                  src="../src/assets/img/popular1.png.webp"
                  className="w-56 h-56 p-2"
                />
                <span className="mx-auto my-auto w-full  ml-3">
                  Minimalistic shop for multipurpose use
                </span>
              </div>
            </td>
            <td className="border-y text-right">$360.00</td>
            <td className="border-y ">
              <div className=" flex justify-between w-36 pl-36">
                <button
                  className="border rounded-md p-3 text-xl"
                  onClick={() => setCount(count < 1 ? none : count - 1)}
                >
                  -
                </button>
                <span className="text-center my-auto w-5 px-5">{count}</span>
                <button
                  className="border rounded-md p-3 text-xl ml-2"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            </td>
            <td className="border-y text-right ">$720.00</td>
          </tr>

          <tr className="border-y ">
            <td className="p-10">
              <button className="bg-blue-500 p-5 rounded-md text-white relative">
                Update cart
              </button>
            </td>
            <td></td>
            <td></td>
            <td>
              <button className="bg-red-400 p-5 rounded-md text-white relative left-28">
                Close Coupon
              </button>
            </td>
          </tr>

          <tr className="border-y text-center">
            <td></td>
            <td></td>
            <td className="p-5 text-right">SubTotal</td>
            <td className="text-right">$2160.00</td>
          </tr>

          <tr className="border-y text-right">
            <td></td>
            <td></td>
            <td className="  align-text-top pt-2">Shipping</td>
            <td>
              <div className="mb-3 pt-2">
                <span>Free Shipping</span>
                <input type="checkbox" className="ml-2" />
              </div>
              <div className="mb-3">
                <span>Flat Rate: $10.00 </span>
                <input type="checkbox" className="ml-2" />
              </div>
              <div className="mb-3">
                <span>Local Delivery: $2.00</span>
                <input type="checkbox" className="ml-2" />
              </div>
              <div className="mb-3">
                <span>Flat Rate: $5.00 </span>
                <input type="checkbox" />
              </div>
              <div className="mb-3">Calculate Shipping </div>
              <div className="mb-3">
                <select className="border p-2 w-full bg-slate-300">
                  <option value={"phnom penh"}>Phnom Penh</option>
                  <option value={"takeo"}>Takeo</option>
                  <option value={"siamreap"}>Siam Reap</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="border p-2 w-full bg-slate-300 ">
                  <option value={"phnom penh"}>Phnom Penh</option>
                  <option value={"takeo"}>Takeo</option>
                  <option value={"siamreap"}>Siam Reap</option>
                </select>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Post Code/Zip Code"
                  className="border p-2 w-full bg-slate-300"
                />
              </div>
              <button className="border p-5 mb-2 rounded-md bg-blue-500 text-white">
                Update Deatial
              </button>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td className=" text-right">
              <button className="border px-9 py-5 mt-5 rounded-md bg-blue-500 text-white ">
                Continue Shopping
              </button>
            </td>
            <td className="text-right">
              <button className="border px-9 py-5 mt-5 rounded-md bg-blue-500 text-white hover:bg-green-500 ">
                Proces to checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Footer />
    </div>
  );
}

export default Card;
