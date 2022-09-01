import React, { useContext } from "react";
import ButtonFilter from "./ButtonFilter";

function ProductFilter() {
  return (
    <div>
      <h2 className="text-left text-white text-2xl font-semibold m-5">
        Filter the Pruducts
      </h2>
      <div className="grid grid-cols-7 m-3">
        <ButtonFilter text={"All"} filter="all" />
        <ButtonFilter text={"Phones"} filter="phone" />
        <ButtonFilter text={"Computers"} filter="computer" />
        <ButtonFilter text={"Components"} filter="component" />
        <ButtonFilter text={"Consoles"} filter="console" />
        <ButtonFilter text={"TV's"} filter="tv" />
        <ButtonFilter text={"Headphones"} filter="headphones" />
      </div>
    </div>
  );
}

export default ProductFilter;
