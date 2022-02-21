import React, { useState, useContext } from "react";
import { FaBars, FaBook, FaShoppingCart } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useCart } from "./context/Context";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => setShowMenu(!showMenu);

  const { cartItems } = useCart();

  return (
    <header className="navbar-header">
      <div className="header">
        <div className="bookButton">
          <Link to="/">
            <FaBook size="2rem" color="fff" />
          </Link>
        </div>
        <div className="menuButton" onClick={toggle}>
          <FaBars size="2rem" />
        </div>
        <div className="title">
          <h1>Bookshop.vn</h1>
        </div>
        <div className="nav-cart">
          <Link to="/cart">
            <span>{cartItems.length}</span>
            <FaShoppingCart size="2rem" color="#ffffff" />
          </Link>
        </div>
      </div>
      <nav className="nav">
        <ul className={showMenu ? "active" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookstore">Book Store</Link>
          </li>
          <li>
            <Link to="/bookstore">eBooks</Link>
            <ul>
              <li>
                <Link to="/bookstore">Romance</Link>
              </li>
              <li>
                <Link to="/bookstore">Horror</Link>
              </li>
              <li>
                <Link to="/bookstore">Manga</Link>
              </li>
              <li>
                <Link to="/bookstore">Poetry</Link>
              </li>
              <li>
                <Link to="/bookstore">Thrillers</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/newpage">Gifts</Link>
            <ul>
              <li>
                <Link to="/newpage">Greeting Cards</Link>
              </li>
              <li>
                <Link to="/newpage">Coupons & Deals</Link>
              </li>
              <li>
                <Link to="/newpage">Gift Bestsellers</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/newpage">Events</Link>
            <ul>
              <li>
                <Link to="/newpage">Special Collections</Link>
              </li>
              <li>
                <Link to="/newpage">Gifts for Book Lovers</Link>
              </li>
              <li>
                <Link to="/newpage">Shop Stationery & Gift Deals</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/newpage">Best Sellers</Link>
          </li>
          <li className="close" onClick={toggle}>
            <AiOutlineCloseSquare size="2rem" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
