import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Products from "./components/Products";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Products />
      <Banner />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
