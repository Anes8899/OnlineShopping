import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Shop, { loader as productLoader } from "./pages/Shop";
import ProductDetail, {
  loader as productDetailLoader,
} from "./components/Products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "shop", element: <Shop />, loader: productLoader },
      {
        path: "shop/:productId",
        element: <ProductDetail />,
        loader: productDetailLoader,
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
