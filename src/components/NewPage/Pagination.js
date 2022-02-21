import React, { useState } from "react";
import { useCart } from "../context/Context";

const Pagination = () => {
  const { totalPages, setPages, type } = useCart();
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  console.log(pages);

  return (
    <div className="btn-pagination">
      {pages.map((num) => {
        return (
          <button
            type="button"
            className={type === num ? "filter-btn activeButton" : "filter-btn"}
            key={num}
            onClick={() => setPages(num)}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
