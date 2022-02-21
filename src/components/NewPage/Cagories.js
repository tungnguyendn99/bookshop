import React, { useState } from "react";
import { useCart } from "../context/Context";

const Categories = () => {
  const { categories, filterItems } = useCart();
  const [type, setType] = useState("");

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        const filTer = () => {
          filterItems(category);
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

export default Categories;
