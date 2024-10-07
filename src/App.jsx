import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage, { loader as limitProduct } from "./pages/HomePage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Shop, { loader as productLoader } from "./pages/Shop";
import ProductDetail, {
  loader as productDetailLoader,
} from "./components/Products/ProductDetail";
import Account from "./pages/Account";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage />, loader: limitProduct },
        { path: "shop", element: <Shop />, loader: productLoader },
        {
          path: "shop/:productId",
          element: <ProductDetail />,
          loader: productDetailLoader,
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "cart", element: <Cart /> },
        { path: "account", element: <Account /> },
      ],
    },
  ],
  {
    basename: "/storeShop", // Specify the basename
  }
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
