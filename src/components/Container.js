import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Hakkimizda from "../pages/About";
const Container = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<Hakkimizda />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Container;
