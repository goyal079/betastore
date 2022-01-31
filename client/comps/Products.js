import React from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

function Products() {
  // <script>
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
      <Navbar />
      <div class="small-container">
        <div class="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Default Sort</option>
            <option>Sort By Price</option>
            <option>Sort By Popularity</option>
            <option>Sort By Rating</option>
            <option>Sort By Sale</option>
          </select>
        </div>
        <div class="row">
          <div class="col-4">
            <a href="product_details.html">
              <img src="images/dresses/bluedress.jpg" alt="" />
            </a>
            <h4>Warm Mustard</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/dresses/checkdress.jpg" alt="" />
            <h4>Summer Breeze</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/dresses/greendress.jpg" alt="" />
            <h4>Warm Pink Jacket</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/dresses/orangedress.jpg" alt="" />
            <h4>Formal Pink Dress</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img src="images/dresses/reddress.jpg" alt="" />
            <h4>Modern Hipster</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/Footwear/shoe.jpg" alt="" />
            <h4>Grey Chequered</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/Footwear/slipper.jpg" alt="" />
            <h4>CDisco Mix</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/Footwear/sneaker.jpg" alt="" />
            <h4>Sneakers</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img src="images/Footwear/boot.jpg" alt="" />
            <h4>Red Smart Casual</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/Footwear/cas.jpg" alt="" />
            <h4>Summer Greens</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/Footwear/heel.jpg" alt="" />
            <h4>Striped Casual Dress</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="images/Footwear/loaf.jpg" alt="" />
            <h4>Green Birds pattern</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <div class="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
