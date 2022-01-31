import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ProductDetails() {
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

  // <!-- product gallery -->
  // <script>
  //     var ProductImg = document.getElementById("ProductImg");
  //     var SmallImg = document.getElementsByclassNameName("small-img");

  //     SmallImg[0].onclick = function () {
  //         ProductImg.src = SmallImg[0].src;
  //     }
  //     SmallImg[1].onclick = function () {
  //         ProductImg.src = SmallImg[1].src;
  //     }
  //     SmallImg[2].onclick = function () {
  //         ProductImg.src = SmallImg[2].src;
  //     }
  //     SmallImg[3].onclick = function () {
  //         ProductImg.src = SmallImg[3].src;
  //     }

  // </script>
  return (
    <div>
      <Navbar />
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img
              src="images/dresses/twist.jpg"
              width="100%"
              id="ProductImg"
              alt=""
            />

            <div className="small-img-row">
              <div className="small-img-col">
                <img
                  src="images/dresses/twist2.jpg"
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src="images/dresses/twist3.jpg"
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src="images/dresses/twist4.jpg"
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  src="images/dresses/twist.jpg"
                  width="100%"
                  className="small-img"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-2">
            <p>Home / T-Shirt</p>
            <h1>Checkered Twist Dress</h1>
            <h4>$50.00</h4>
            <select>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>
            </select>
            <input type="number" value="1" />
            <a href="" className="btn">
              Add To Cart
            </a>

            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            <br />
            <p>
              Give your summer wardrobe a style upgrade with the HRX Men's
              Active T-Shirt. Team it with a pair of shorts for your morning
              workout or a denims for an evening out with the guys.
            </p>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="row row-2">
          <h2>Related Products</h2>
          <p>View More</p>
        </div>
      </div>

      <div className="small-container">
        <div className="row">
          <div className="col-4">
            <img src="images/product-9.jpg" alt="" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-10.jpg" alt="" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-11.jpg" alt="" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-12.jpg" alt="" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
