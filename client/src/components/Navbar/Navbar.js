import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.Cart?.cartItems);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Ecommerce App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbarr"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbarr">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                <span>{cartItems.length}</span>
                <img
                  src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-2.jpg"
                  width={50}
                  height={50}
                />
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
