import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigatePage = [
  { key: 0, path: "/login", label: "Login" },
  { key: 1, path: "/card", label: "Card" },
  { key: 2, path: "/confirmation", label: "Confirmation" },
  { key: 3, path: "/checkout", label: "Checkout" },
];

function PageNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mouseOver, setMouseOver] = useState(false);
  const [click, setClick] = useState("");

  const [selectedPath, setSelectedPath] = useState(navigatePage[0]?.path);

  useEffect(() => {
    setClick(location.pathname);
    setSelectedPath(location.pathname);
  }, [location]);

  return (
    <nav className="border  w-[1530px] xl:w-full h-28 justify-between flex p-7 bg-white">
      <div className="text-[30px] font-sans font-bold">
        <span className="text-red-500">Time</span> Zone
      </div>

      <ul className="flex gap-2 text-center mt-3  w-auto ">
        <li>
          <Link
            to={"/"}
            className={`hover:border hover:bg-red-400 px-5 py-3 rounded-md hover:text-white bg-fixed  ${
              click === "/" ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to={"/shop"}
            className={`hover:border hover:bg-red-400 px-5 py-3 rounded-md hover:text-white  ${
              click === "/shop" ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            Shop
          </Link>
        </li>

        <li>
          <Link
            to={"/about"}
            className={`hover:border hover:bg-red-400 px-5 py-3 rounded-md hover:text-white  ${
              click === "/about" ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to={"/detail"}
            className={`hover:border hover:bg-red-400 px-5 py-3 rounded-md hover:text-white  ${
              click === "/detail" ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            ProductDetail
          </Link>
        </li>

        <li className="relative group">
          <button
            className="relative bottom-2 hover:bg-red-400 hover:text-white rounded-md px-5  w-30 h-11 group-hover:opacity-100"
            onClick={() => {
              setMouseOver(true);
            }}
            // onMouseLeave={() => {
            //   setMouseOver(false);
            // }}
          >
            <span className="text-center ">
              {navigatePage.find((item) => item.path === selectedPath)?.label ||
                "Page"}
            </span>
          </button>
          {/* className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-400 rounded-md left-[-40px] mt-5 w-48 z-10" */}
          {mouseOver && (
            <ul className="absolute transition-opacity duration-300 bg-slate-400 rounded-md left-[-40px] mt-5 w-48 z-10">
              {navigatePage.map((item) => (
                <li key={item.key} className="py-5 px-3">
                  <Link
                    to={item.path}
                    className={`hover:border hover:border-transparent hover:bg-red-400 py-5 px-5 rounded-md hover:text-white ${
                      click === item.path
                        ? "bg-red-500 text-white"
                        : "text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link
            to={"/contact"}
            className={`hover:border hover:bg-red-400 px-5 py-3 rounded-md hover:text-white ${
              click === "/contact" ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex gap-10">
        <img src="./search.svg" className="w-5" />
        <img src="./portrait.svg" className="w-5" />
        <img src="./shopping-cart.svg" className="w-5" />
      </div>
    </nav>
  );
}

export default PageNav;
