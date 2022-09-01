import React, { useEffect, useState } from "react";
import { createContext } from "react";
import products from "../data/products";

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
  const [newProducts, setNewProducts] = useState(products);
  const [cart, setCart] = useState([]);

  const filterProducts = (data) => {
    if (data == "all") {
      setNewProducts(products);
    } else {
      setNewProducts(products.filter((products) => products.type == data));
    }
  };

  const addCart = (data) => {
    if (data.stock == false) {
      alert("We don't have stock");
    } else {
      setCart([...cart, data]);
      alert("Added to the cart")
    }
  };

  const deleteCart = (data) => {
    console.log(data);
    setCart(cart.filter((cart) => cart.id != data.id));
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        newProducts,
        cart,
        filterProducts,
        addCart,
        deleteCart,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
