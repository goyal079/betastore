import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
