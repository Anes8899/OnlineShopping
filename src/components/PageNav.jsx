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
  // className="fixed border w-full h-28 justify-between flex p-7 bg-white top-0 left-0 z-50 border-b border-gray-300"
  return (
    <nav className="min-w-full flex flex-wrap justify-around align-middle h-[5em] bg-white border fixed z-50">
      <div className="text-[30px] font-sans font-bold my-auto">
        <Link to={"/"}>
          <span className="text-red-500">Store</span> Shop❣️
        </Link>
      </div>

      <ul className="flex gap-2 text-center mt-3 w-auto items-center ">
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
      <div className="flex gap-5 items-center">
        <Link>
          <MdSearch size={25} />
        </Link>

        <Link to={"account"}>
          <MdAccountCircle
            size={25}
            className={`${click === "/account" && "text-red-500 font-bold"} `}
          />
        </Link>

        <Link to={"cart"}>
          <MdShoppingCart
            size={25}
            className={`${click === "/cart" && "text-red-500 font-bold"} `}
          />
        </Link>
      </div>
    </nav>
  );
}

export default PageNav;
