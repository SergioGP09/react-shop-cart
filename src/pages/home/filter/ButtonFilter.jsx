import React, { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

function ButtonFilter({ text, filter }) {
  const { filterProducts } = useContext(ProductsContext);
  
  return (
    <button
      className="bg-purple-600 rounded-md text-white p-3 m-2 hover:bg-purple-500"
      onClick={() => filterProducts(filter)}
    >
      {text}
    </button>
  );
}

export default ButtonFilter;
