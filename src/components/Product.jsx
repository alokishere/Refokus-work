import React from "react";
import Btn from "./Btn";
import { IoIosReturnRight } from "react-icons/io";

const Product = ({ products, index, mover, count }) => {
  return (
    <div key={index} className="w-full h-[20rem] flex ">
      <div
        onMouseEnter={() => mover(count)}
        className="w-4xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl capitalize font-semibold">{products.title}</h1>
        <div className="w-1/3">
          <p className="mb-5">{products.description}</p>
          <div className="flex items-center justify-between gap-3">
            {products.btn && <Btn btn="Live website" />}
            {products.case && <Btn btn="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
