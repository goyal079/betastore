import React from "react";

function Header() {
  return (
    <div>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <h1>
                Womens Fashion <br /> Look Your Best!
              </h1>
              <p>
                "I think fashion can do a lot. Fashion is very popular, so it
                can help broadcast a message and reach a new generation."
                <br />
                —Maria Grazia Chiuri
              </p>
              <a href="" className="btn">
                Explore Now &#8594;
              </a>
            </div>
            <div class="col-2">
              <img src="images/dresses/herodress.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
