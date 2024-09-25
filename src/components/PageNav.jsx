import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdAccountCircle, MdSearch, MdShoppingCart } from "react-icons/md";

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
    <nav className="fixed border w-[1530px] xl:w-full h-28 justify-between flex p-7 bg-white top-0 left-0 z-50 border-b border-gray-300">
      <div className="text-[30px] font-sans font-bold">
        <Link to={"/"}>
          <span className="text-red-500">Time</span> Zone
        </Link>
      </div>

      <ul className="flex gap-2 text-center mt-3  w-auto ">
        <li className="w-20">
          <Link
            to={"/"}
            className={`hover:border hover:bg-red-400 px-5 py-3 rounded-md hover:text-white bg-fixed  ${
              click === "/" ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            Home
          </Link>
        </li>

        <li className="w-20">
          <Link
            to={"/shop"}
            className={`hover:border hover:bg-red-400 px-5 py-3 rounded-md hover:text-white  ${
              click === "/shop" ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            Shop
          </Link>
        </li>

        <li className="w-20">
          <Link
            to={"/about"}
            className={`hover:border hover:bg-red-400 px-5 py-3 rounded-md hover:text-white  ${
              click === "/about" ? "bg-red-500 text-white" : "text-black"
            }`}
          >
            About
          </Link>
        </li>

        <li className="w-20">
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
      <div className="flex w-30 gap-5 h-8 align-middle mr-20">
        <Link>
          <MdSearch size={"w-full"} />
        </Link>

        <Link to={"account"}>
          <MdAccountCircle
            size={"w-full"}
            className={`${click === "/account" && "text-red-500 font-bold"} `}
          />
        </Link>

        <Link to={"cart"}>
          <MdShoppingCart
            className={`${click === "/cart" && "text-red-500 font-bold"} `}
            size={"w-1/2"}
          />
        </Link>
      </div>
    </nav>
  );
}

export default PageNav;
