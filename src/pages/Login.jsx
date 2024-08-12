import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function Login() {
  return (
    <div>
      <PageNav />

      <div className="border shadow-md flex w-[1000px] justify-between mx-auto my-10 h-[700px]  items-center">
        <div className=" w-1/2 h-full">
          <img src="../src/assets/img/popular1.png.webp" className="w-full" />
        </div>

        <div className=" w-1/2 h-full">
          <div className=" mx-auto w-[415px] h-[300px] my-52">
            <h3 className="mb-10 text-[30px] font-bold">
              Welcome Back! <br /> Pleace Sign in now
            </h3>
            <form>
              <input
                type="text"
                placeholder="UserName"
                className="border-b w-full mb-4 pb-2"
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="border-b w-full mb-4 pb-2"
              />
              <div>
                <input type="checkbox" className="mr-5" />
                <span className="text-[15px]">Remeber me</span>
              </div>
              <button className="border border-blue-400 mt-5 w-full h-16 text-blue-400 hover:bg-blue-400 hover:text-white">
                Login
              </button>
              <a className="relative left-[300px] mt-2 cursor-pointer">
                Forgot Password
              </a>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
