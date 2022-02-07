import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import "../../css/Navbar/Header.css";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <section className="ecommerceNavbar bg-dark">
      <div className="brand animate__animated animate__fadeInDown">
        <a className="text-white fw-bold" href="">
          Shopping Cart
        </a>
      </div>
      <div className="rightSide">
        <Button onClick={showDrawer} className="openDrawer">
          <i className="fas fa-bars"></i>
        </Button>
        <Drawer
          title="Shopping Cart"
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <Link to="/Cart" className="cartItemResponsive mahmoud">
            <div>
              <i className="fas fa-cart-plus mx-2"></i>
            </div>
            Orders
            <span className="cartLogo_badge mx-2">0</span>
          </Link>
          <Link to="/Cart" className="shopItemResponsive mahmoud">
            Home
          </Link>
        </Drawer>
        <Link
          to="/cart"
          className="cartItem animate__animated animate__fadeInDown"
        >
          <div>
            <i className="fas fa-cart-plus mx-2"></i>
          </div>
          Orders
          <span className="cartLogo_badge mx-2">0</span>
        </Link>
        <Link to="/" className="shopItem animate__animated animate__fadeInDown">
          Home
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
