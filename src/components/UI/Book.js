import React from "react";
import { FaSearch } from "react-icons/fa";
import Category from "./Category";
import SingleBook from "./SingleBook";
import { useCart } from "../context/Context";
import { Link } from "react-router-dom";

const Book = () => {
  const { search, setSearch, handleItem } = useCart();

  return (
    <div>
      <div className="banner">
        <div className="showcaseSearch">
          <div className="quote">
            <h3>A Book Is A Dream That You Hold In Your Hand.</h3>
          </div>
          <div className="search">
            <div className="searchIcon">
              <FaSearch />
            </div>
            <input
              className="srch"
              type="text"
              placeholder="Search by Title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Category />
      <div className="section-center">
        {handleItem.slice(0, 8).map((bookItem) => {
          return <SingleBook item={bookItem} key={bookItem.id} />;
        })}
      </div>
      <div className="view-list">
        <Link to="/bookstore">
          <button className="btn view-list-btn">VIEW LIST (BOOKS)</button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
