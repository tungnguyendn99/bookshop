import React from "react";
import { FaSearch } from "react-icons/fa";
import Categories from "./Cagories";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/Context";
import Pagination from "./Pagination";

import "../Styles/BookStore.css";

const BookStore = () => {
  const {
    search,
    setSearch,
    handleItems,
    addBook,
    ToastContainer,
    startItems,
    endItems,
  } = useCart();

  return (
    <div className="book-store">
      <div className="banner">
        <div className="book-store-showcase"></div>
      </div>
      <div className="search-store">
        <div className="searchIcon-store">
          <FaSearch />
        </div>
        <div>
          <input
            className="search-btn-store"
            type="text"
            placeholder="Search by Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <Categories />
      <div className="books-section">
        {handleItems.slice(startItems, endItems).map((bookItem) => {
          const { id, title, img, desc, category, price } = bookItem;
          return (
            <div key={id} className="books-item">
              <img src={img} alt={title} className="photos" />
              <div className="item-info items-info">
                <header>
                  <h4>{title}</h4>
                  <h5 className="price">${price}</h5>
                </header>
                <div className="item-desc items-desc">
                  <h5>{category}</h5>
                  <p className="item-text">{desc}</p>
                </div>
                <button
                  className="btn store-shopping"
                  onClick={() => addBook(bookItem)}
                >
                  Add to cart <FaShoppingCart className="storeIcon" />
                </button>
                <ToastContainer />
              </div>
            </div>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default BookStore;
