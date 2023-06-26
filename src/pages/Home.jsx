import React from "react";
import { useSelector } from "react-redux";
import CardProducts from "../components/Home/CardProducts";

const Home = () => {
  const { products } = useSelector((state) => state);

  return (
    <div>
      <div>
        {products?.map((product) => (
          <CardProducts key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
