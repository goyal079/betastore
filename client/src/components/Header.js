import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" width="125px" />
            </a>
          </div>
          <nav>
            <ul id="MenuItems">
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
            <img src="images/cart.png" width="30px" height="30px" />
          </a>
          <img
            src="images/menu.png"
            className="menu-icon"
            onclick="menutoggle()"
          />
        </div>
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Life <br /> A New Style!
            </h1>
            <p>
              Success isn't always about greatness. It;s about consistency.
              Consistent <br /> hard work gains success. Greatness will come.
            </p>
            <a href="" className="btn">
              Explore Now;
            </a>
          </div>
          <div className="col-2">
            <img src="images/dresses/herodress.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
