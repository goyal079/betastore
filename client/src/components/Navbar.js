import React, { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };
  return (
    //something wrong with navbar width
    <div className="container" style={{ backgroundColor: "#F9F1F0" }}>
      <div>
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="../images/logo.png" alt="logo" width="125px" />
            </Link>
          </div>
          <nav>
            <ul
              id="MenuItems"
              style={toggle ? { maxHeight: "200px" } : { maxHeight: "0px" }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Cart</Link>
              </li>
              <li>
                <Link to="/">Sign In</Link>
              </li>
            </ul>
          </nav>
          <Link to="/">
            <img src="../images/cart.png" width="30px" height="30px" />
          </Link>
          <img
            src="../images/menu.png"
            className="menu-icon"
            onClick={menuToggle}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
