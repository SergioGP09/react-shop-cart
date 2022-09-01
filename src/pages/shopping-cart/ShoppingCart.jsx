import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import { ProductsContext } from "../../context/ProductsContext";

function ShoppingCart() {
  const { cart } = useContext(ProductsContext);

  return (
    <>
      <h1 className="text-2xl text-white m-4 font-semibold">Shoppin Cart</h1>
      <main className="grid grid-cols-4 gap-2 m-4">
        {cart.map((cart) => {
          return <ProductCard product={cart} deleteC={true}/>;
        })}
      </main>
      <h4 className="text-3xl text-white m-4">
          <b>Price:</b>{" "}
          {cart.map((p) => p.price).reduce((pP, cP) => pP + cP, 0)}
      </h4>
    </>
  );
}

export default ShoppingCart;
