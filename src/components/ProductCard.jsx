import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function ProductCard({ product, deleteC = false }) {
  const { addCart, deleteCart } = useContext(ProductsContext);

  return (
    <div className="mt-2 bg-slate-700 rounded-md p-3">
      <h2 className="text-2xl font-semibold text-white mb-2">{product.name}</h2>
      {!deleteC ? (
        <span
          className={
            product.stock
              ? "bg-green-600 rounded-md p-1 mb-2 inline-block"
              : "bg-red-600 rounded-md p-1 mb-2 inline-block"
          }
        >
          {product.stock ? "We have stock" : "We don't have stock"}
        </span>
      ) : (
        ""
      )}
      <br />
      <span className="mt-1 text-xl text-gray-400 font-normal pr-6">
        ${product.price}
      </span>
      <button
        className="mr-2 bg-orange-500 p-1 rounded-lg hover:bg-orange-400"
        onClick={() => addCart(product)}
      >
        Añadir a la lista
      </button>
      {deleteC ? (
        <button
          className="bg-red-600 rounded-md p-1 mb-2 inline-block"
          onClick={() => deleteCart(product)}
        >
          Delete to the cart
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductCard;
