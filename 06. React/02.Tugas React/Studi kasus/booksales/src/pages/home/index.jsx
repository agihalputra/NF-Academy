// src/pages/home/index.jsx
import React from "react";
import Hero from "../../components/shared/Hero";
import ProductList from "../../components/shared/Product_List";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductList />
    </>
  );
}
