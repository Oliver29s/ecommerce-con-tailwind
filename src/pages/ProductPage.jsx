import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/Home/productsPage/ProductInfo";

const ProductPage = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;
    axios
      .get(url)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(product);
  return (
    <div>
      <ProductInfo  product={product} />
    </div>
  );
};

export default ProductPage;
