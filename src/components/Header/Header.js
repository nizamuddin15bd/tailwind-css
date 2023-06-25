import React from "react";
import { Link } from "react-router-dom";
import nizam from "../../image/nizam.jpg";

const Header = () => {
  return (
    <nav className="flex items-center justify-between mx-4  p-2">
      <img
        className="h-16 rounded-full ring-4 ring-blue-500"
        src={nizam}
        alt=""
      />
      <div>
        <Link className="p-2" to={"/"}>
          Home
        </Link>
        <Link className="p-2" to={"/cart"}>
          Cart
        </Link>
        <Link to={"/design"}> Design</Link>
      </div>
    </nav>
  );
};

export default Header;
