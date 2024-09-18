import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function Confirmation() {
  return (
    <div>
      <PageNav />
      <div className="grid grid-cols-2 w-[1170px] mx-auto">
        <h4 className="text-green-600 flex justify-center col-span-2 my-10">
          Thank you. Your order has been received.
        </h4>
        <div className="bg-slate-300 rounded-t-md">
          <ul className="w-[475px] text-left mx-auto">
            <h3 className="text-[20px] mb-5 my-5">Order info</h3>
            <li className="grid grid-cols-2">
              <p className="mb-2">order number</p>
              <span className="">: 60235</span>
            </li>
            <li className="grid grid-cols-2">
              <p className="mb-2">Data</p>
              <span className="">: 60235</span>
            </li>
            <li className="grid grid-cols-2">
              <p className="mb-2">Total</p>
              <span className="">: 60235</span>
            </li>
            <li className="grid grid-cols-2">
              <p className="mb-2">Mayment methord</p>
              <span className="">: 60235</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-300 ml-5 rounded-md">
          <ul className="w-[475px] text-left mx-auto">
            <h3 className="my-5 text-[20px]">Billing Address</h3>
            <li className="grid grid-cols-2 mb-2">
              <p>order number</p>
              <span>: 60235</span>
            </li>
            <li className="grid grid-cols-2 mb-2">
              <p>Data</p>
              <span className="">: 60235</span>
            </li>
            <li className="grid grid-cols-2 mb-2">
              <p className="">Total</p>
              <span className="">: 60235</span>
            </li>
            <li className="grid grid-cols-2 mb-7">
              <p className="">Mayment methord</p>
              <span className="">: 60235</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-300 rounded-b-md">
          <ul className="w-[475px] text-left mx-auto">
            <h3 className="text-[20px] mb-5">Shipping Address</h3>
            <li className="grid grid-cols-2 mb-2">
              <p className="">order number</p>
              <span className="">: 60235</span>
            </li>
            <li className="grid grid-cols-2 mb-2">
              <p className="">Data</p>
              <span className="">: 60235</span>
            </li>
            <li className="grid grid-cols-2 mb-2">
              <p className="">Total</p>
              <span className="">: 60235</span>
            </li>
            <li className="grid grid-cols-2 mb-7">
              <p className="">Mayment methord</p>
              <span className="">: 60235</span>
            </li>
          </ul>
        </div>
        <div></div>
      </div>

      <table className="w-[1170px] mx-auto mt-16 bg-slate-200 text-left">
        <thead>
          <tr className="border-b border-b-slate-400">
            <th className="p-6">Order Details</th>
          </tr>
          <tr className="border-b border-b-slate-400">
            <th className="p-6">Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left">
            <td className="px-6">1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td className="px-6">1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td className="px-6">1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr className="border border-b-slate-400">
            <td className="px-6">1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th className="p-6" colSpan="2">
              Quantity
            </th>
            <th> Total</th>
          </tr>
        </tfoot>
      </table>
      <Footer />
    </div>
  );
}

export default Confirmation;
