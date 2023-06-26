import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsThunk } from "./store/slices/products.slice";
import Header from "./components/Home/shared/Header";
import ProductPage from "./pages/ProductPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
