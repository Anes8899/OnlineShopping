import { useState } from "react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function Card() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <PageNav />
      <div className="w-[1170px]  mx-auto my-10">
        <table className="w-full  text-left">
          <thead>
            <tr>
              <th className="p-2">Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-y text-center">
                <div className="flex h-full w-[80%]">
                  <img
                    src="../src/assets/img/popular1.png.webp"
                    className="w-56 h-56 ml-5 p-3"
                  />
                  <span className="mx-5 my-auto">
                    Minimalistic shop for multipurpose use
                  </span>
                </div>
              </td>
              <td className="border-y text-center">$360.00</td>
              <td className="border-y ">
                <div className=" flex justify-between w-36 mx-auto">
                  <button
                    className="border rounded-md p-3 text-xl"
                    onClick={() => setCount(count < 1 ? none : count - 1)}
                  >
                    -
                  </button>
                  <span className="text-center my-auto w-5">{count}</span>
                  <button
                    className="border rounded-md p-3 text-xl"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="border-y text-center ">$720.00</td>
            </tr>
            <tr className="border-y ">
              <td className="p-10">
                <button className="bg-blue-500 p-5 rounded-md text-white">
                  Update cart
                </button>
              </td>
              <td></td>
              <td></td>
              <td>
                <button className="bg-red-400 p-5 rounded-md text-white">
                  Close Coupon
                </button>
              </td>
            </tr>
            <tr className="border-y text-center">
              <td></td>
              <td></td>
              <td className="p-2">SubTotal</td>
              <td>$2160.00</td>
            </tr>
            <tr className="border-y text-center">
              <td></td>
              <td></td>
              <td className="relative top-0  pb-48 pt-5">Shipping</td>
              <td>
                <div>
                  <span>Flat Rate: $5.00 </span>
                  <input type="checkbox" />
                </div>
                <div>
                  <span>Flat Rate: $5.00 </span>
                  <input type="checkbox" />
                </div>
                <div>
                  <span>Flat Rate: $5.00 </span>
                  <input type="checkbox" />
                </div>
                <div>
                  <span>Flat Rate: $5.00 </span>
                  <input type="checkbox" />
                </div>
                <div>Calculate Shipping </div>
                <div>
                  <select>
                    <option value={"phnom penh"}>Phnom Penh</option>
                    <option value={"takeo"}>Takeo</option>
                    <option value={"siamreap"}>Siam Reap</option>
                  </select>
                </div>
                <div>
                  <select>
                    <option value={"phnom penh"}>Phnom Penh</option>
                    <option value={"takeo"}>Takeo</option>
                    <option value={"siamreap"}>Siam Reap</option>
                  </select>
                </div>
                <div>
                  <input type="text" className="border" />
                </div>
                <button>Update Deatial</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="border text-center p-5 rounded-md gap-2">
                Continue Shopping
              </td>
              <td className="border text-center">Proces to checkout</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Card;
