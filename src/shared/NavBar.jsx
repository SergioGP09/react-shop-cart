import React from "react";
import { Link } from "react-router-dom";

import { BsCart4, BsBag } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="bg-zinc-900 p-6 grid grid-cols-2">
      <Link
        className="bg-purple-600 rounded-md grid grid-cols-2 hover:bg-purple-500 cursor-pointer w-48"
        to=""
      >
        <BsBag size={"40px"} className="m-2" />
        <h4 className="text-xl text-white font-sans font-semibold pt-3">
          Products
        </h4>
      </Link>
      <Link
        className="bg-purple-600 rounded-md grid grid-cols-2 hover:bg-purple-500 cursor-pointer w-48"
        to="/shopping-cart"
      >
        <BsCart4 size={"40px"} className="m-2" />
        <h4 className="text-xl tex font-semibold text-white">Shopping Cart</h4>
      </Link>
    </nav>
  );
}

export default NavBar;
