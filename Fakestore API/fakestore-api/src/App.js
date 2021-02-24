import './App.css';
import React, { useState, useEffect } from "react";
import { Route } from "react-dom";
import Header from "./Components/Header";
import Products from "./Components/Products";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Route 
        path="/products"
        component={() => {
          return(
            <Products products={products}
            />)
        }}
      />

    </div>
  );
}

export default App;
