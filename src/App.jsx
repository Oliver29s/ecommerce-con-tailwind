
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsThunk } from "./store/slices/products.slice";

function App() {
 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return(
  <>
  <Routes>
    <Route path="/" element={<Home/>}/>

  </Routes>
  </>)
}

export default App;
