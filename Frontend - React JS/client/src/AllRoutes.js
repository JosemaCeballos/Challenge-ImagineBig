import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products } from "./components/Products/Products";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/:id" element={<ProductInfo />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
