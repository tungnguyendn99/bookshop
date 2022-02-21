import React, { useState } from "react";
import { useCart } from "../context/Context";

const Category = () => {
  const { categories, filterItem, type, setType } = useCart();

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        const filTer = () => {
          filterItem(category);
          setType(index);
        };
        return (
          <button
            type="button"
            className={
              type === index ? "filter-btn activeButton" : "filter-btn"
            }
            key={index}
            onClick={() => filTer()}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
