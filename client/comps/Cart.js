import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Cart() {
  //   <script>
  //     var MenuItems = document.getElementById("MenuItems");
  //     MenuItems.style.maxHeight = "0px";
  //     function menutoggle() {
  //         if (MenuItems.style.maxHeight == "0px") {
  //             MenuItems.style.maxHeight = "200px"
  //         }
  //         else {
  //             MenuItems.style.maxHeight = "0px"
  //         }
  //     }
  // </script>
  return (
    <>
      <div class="container">
        <Navbar />
      </div>
      <div class="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <div class="cart-info">
                <img src="images/buy-1.jpg" alt="" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div class="cart-info">
                <img src="images/buy-2.jpg" alt="" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div class="cart-info">
                <img src="images/buy-3.jpg" alt="" />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>Price: $50.00</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>$50.00</td>
          </tr>
        </table>
        <div class="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$230.00</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
