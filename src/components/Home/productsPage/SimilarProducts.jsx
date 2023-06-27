import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProducts from "./../CardProducts";

const SimilarProducts = ({ category, productId }) => {
  const [filterProducts, setFilterProducts] = useState();

  const { products } = useSelector((state) => state);

  useEffect(() => {
    if (category && products) {
      setFilterProducts(
        products?.filter((product) => product.category.id === category.id)
      );
    }
  }, [category, products]);

  return (
    <div>
      <h2>Discover Similar products</h2>
      <div>
        {filterProducts?.map((filterPro) => {
          if (filterPro.id !== productId) {
            return (
            <CardProducts key={filterPro.id} product={filterPro} />);
          }
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
