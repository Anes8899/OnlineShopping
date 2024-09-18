import { useEffect, useState } from "react";
import { getProducts } from "../../services/apiItem";
import ProductCard from "./ProductCard";

function ListProductCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      setData(res);
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {data &&
        data.map((dataProducts) => <ProductCard title={dataProducts.title} />)}
    </div>
  );
}

export default ListProductCard;
