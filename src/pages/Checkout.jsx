import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function Checkout() {
  return (
    <>
      <PageNav />
      <div className="w-[1140px] mx-auto">
        <section>
          <h5 className=" bg-slate-200 mt-5 py-2 px-10">
            Returning Customer?
            <a href="#" className="text-blue-600 underline">
              Click here to login
            </a>
          </h5>
          <h5 className="text-slate-500 mt-5 mb-10">
            If you have shopped with us before, please enter your details in the
            boxes below. If you are a new customer, please proceed to the
            Billing & Shipping section.
          </h5>
          <form className="w-[710px] h-[181.5px] border">
            <input
              type="text"
              placeholder="UserName Email"
              className="border w-[325px] p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border w-[50%] ml-7 p-2"
            />
            <div className="flex mt-5">
              <button className="border border-blue-500 text-blue-500 px-8 py-6 rounded-md hover:bg-blue-500 hover:text-white transition duration-700">
                Login
              </button>
              <div className="ml-3 flex gap-3">
                <input type="checkbox" />
                <span className="my-auto">Remeber me</span>
              </div>
              <span>Forget password</span>
            </div>
          </form>
        </section>

        <section>
          <div className="bg-slate-200 flex p-2 px-10 mb-4">
            <p>Have a coupon?</p>
            <a href="#" className="text-blue-500 underline">
              Click here to enter your code
            </a>
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Enter your coupon"
              className="border w-[70%] p-2"
            />
          </div>

          <button className="border my-5 py-2 px-5 rounded-md hover:bg-blue-500 hover:text-white transition duration-700">
            Apply coupon
          </button>
        </section>

        <section className="flex  gap-4  w-[1170px]">
          <div className=" w-[780px] h-auto">
            <form className="p-4 bg-slate-100 shadow-md">
              <h4>Billing Details</h4>
              <div className="flex gap-4 my-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[50%] border p-1"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[50%] border p-1"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="border p-1 w-full"
              />
              <div className="flex gap-4 my-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-1 border w-[50%]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-1 border w-[50%]"
                />
              </div>
              <input
                type="text"
                placeholder="Country"
                className="border p-1 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Address 01"
                className="border p-1 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Address 02"
                className="border p-1 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Town/City"
                className="border p-1 w-full mb-4"
              />
              <input
                type="text"
                placeholder="District"
                className="border p-1 w-full mb-4"
              />
              <input
                type="text"
                placeholder="PostCode/Zip"
                className="border p-1 w-full mb-4"
              />

              <input type="checkbox" />
              <span className="ml-2">create an account</span>

              <div>
                <h3 className="text-[20px] mt-10 mb-5">Shipping Details</h3>
                <input type="checkbox" />
                <span> Ship to a different address?</span>
              </div>
              <div className="mt-3 h-36">
                <textarea
                  className="border w-full h-full p-1"
                  placeholder="order note"
                />
              </div>
            </form>
          </div>

          <div className=" w-[390px] h-96 bg-slate-100">
            <div className=" ">
              <h2 className="text-[20px] p-2 border-b">Your Order</h2>
              <ul>
                <li className="border-b py-2 px-5 ">
                  <a href="#">
                    Product
                    <span className="float-right">Total</span>
                  </a>
                </li>

                <li className="border-b py-2 px-5 w-full">
                  <a href="#" className="flex justify-between items-center">
                    <span> Fresh Blackberry</span>
                    <span className="float-none mx-auto">x 02</span>
                    <span className="float-right">$720.00</span>
                  </a>
                </li>
                <li className="border-b py-2 px-5 ">
                  <a href="#" className="flex justify-between items-center">
                    Fresh Tomatoes
                    <span>x02</span>
                    <span>$720.00</span>
                  </a>
                </li>
                <li className="border-b py-2 px-5 ">
                  <a href="#" className="flex justify-between items-center">
                    Fresh Broccoli
                    <span>x02</span>
                    <span>$720.00</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li className="border-b py-2 px-5 ">
                  <a href="#" className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>$2160.00</span>
                  </a>
                </li>
                <li className="border-b py-2 px-5 ">
                  <a href="#" className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span>Flat rate: $50.00</span>
                  </a>
                </li>
                <li className="border-b py-2 px-5 ">
                  <a href="#" className="flex justify-between items-center">
                    Total
                    <span>$2210.00</span>
                  </a>
                </li>
              </ul>
              <div className="p-4">
                <div>
                  <input type="radio" id="f-option5" name="selector" />
                  <label for="f-option5" className="ml-2">
                    Check payments
                  </label>
                </div>
                <p className="mt-4">
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
              <div className="px-4">
                <div>
                  <input type="radio" id="f-option6" name="selector" />
                  <label for="f-option6" className="ml-2">
                    Paypal
                  </label>
                  <div></div>
                </div>
                <p className="mt-2 ">
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
              <div className="p-4">
                <input type="checkbox" id="f-option4" name="selector" />
                <label for="f-option4" className="ml-2">
                  I’ve read and accept the{" "}
                </label>
                <a href="#">terms &amp; conditions*</a>
              </div>
              <a href="#" className="border w-full">
                Proceed to Paypal
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
