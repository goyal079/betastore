import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div>
        <div className="navbar">
          <div className="logo">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" width="125px" />
            </a>
          </div>
          <nav className="nav">
            {/* <Link to="/Home">Home</Link>
            <Link to="/Products">Products</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Account">Account</Link> */}

            <ul
              id="MenuItems"
              style={toggle ? { maxHeight: "200px" } : { maxHeight: "0px" }}
            >
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="products.html">Products</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="account.html">Account</a>
              </li>
            </ul>
          </nav>
          <a href="cart.html">
            <img src="images/cart.png" width="30px" height="30px" alt="" />
          </a>
          <img
            src="images/menu.png"
            className="menu-icon"
            onClick={menuToggle}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
// var MenuItems = document.getElementById("MenuItems");
// MenuItems.style.maxHeight = "0px";

export default Navbar;
