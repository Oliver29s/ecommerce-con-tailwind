import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export  const getProductsThunk = () => (dispacth) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products";
  axios
    .get(url)
    .then((res) => dispacth(setProducts(res.data)))
    .catch((err) => console.log(err));
};


