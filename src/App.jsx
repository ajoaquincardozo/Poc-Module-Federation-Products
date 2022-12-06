import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Products from './Components/Products'

const App = () => {
  const handleAddProduct = (event) => {
    const { id, price, quantity } = event.detail.newProduct;
    console.log("id", id);
    console.log("price", price);
    console.log("quantity", quantity);
  };

  useEffect(() => {
    window.addEventListener('add-product', handleAddProduct);

    // cleanup this component
    return () => {
      window.removeEventListener('add-product', handleAddProduct);
    };
  }, []);

  return <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header/>
      <div className="my-10">
        <Products/>
      </div>
      <Footer/>
    </div>
};

ReactDOM.render(<App />, document.getElementById("app"));
