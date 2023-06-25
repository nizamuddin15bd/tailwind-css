import React from "react";
import logo from "../../image/nizam.jpg";

const Cart = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:justify-center sm:space-x-4">
        <div>
          <img
            className="h-24 rounded-full mx-auto ring-4 ring-green-400 sm:flex-shrink-0"
            src={logo}
            alt=""
          />
        </div>
        <div className="text-center space-y-2 sm:space-x-0">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Learn with sumit</p>
            <p className="text-gray-500 font-medium space-y-0.5">
              Youtube Channal
            </p>
          </div>
          <button className="px-4 py-1 border border-purple-200 text-sm rounded-full text-purple-600 font-semibold">
            Visit now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
