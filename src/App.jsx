import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Page from "./pages/Page";
import Contact from "./pages/Contact";
import PageNav from "./components/PageNav";
import ProductDetail from "./pages/ProductDetail";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import Card from "./pages/Card";
import Confirmation from "./pages/Confirmation";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="fixed top-0 w-full z-50 bg-white">
      <PageNav />
      </div>
      <div className="mt-[95px] overflow-auto"> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="detail" element={<ProductDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blogDetail" element={<BlogDetail />} />
        <Route path="page" element={<Page />} />
        <Route path="login" element={<Login />} />
        <Route path="card" element={<Card />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}
export default App;
