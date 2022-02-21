import React, { useState, useContext, useEffect } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../context/Context";
import "../Styles/Cart.css";

const Cart = () => {
  const {
    cartItems,
    increaseBook,
    reduceBook,
    removeBook,
    clearCart,
    totalCost,
  } = useCart();

  return (
    <div className="cart-items">
      <div className="cart-left">
        <div className="cart-header">
          <h2 className="cart-header-title">Shopping Cart</h2>
          <h3>{cartItems.length} Items</h3>
        </div>
        <div className="product">
          {cartItems.length === 0 && (
            <div className="cartItems-empty">No items are added</div>
          )}
          <div>
            {cartItems.map((bookItem) => {
              const { id, title, img, category, price, qty } = bookItem;
              return (
                <div className="cart-list">
                  <div className="cart-products">
                    <p>PRODUCT DETAILS</p>
                    <div className="cart-prod">
                      <img src={img} alt={title} className="cart-img" />
                      <div>
                        <p>{title}</p>
                        <p>{category}</p>
                        <button
                          className="cart-btn"
                          onClick={() => removeBook(bookItem)}
                        >
                          Remove <AiFillDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-qty">
                    <p>QUANTITY</p>
                    <div className="quantity">
                      <button
                        className="cart-btn qty-btn"
                        onClick={() => increaseBook(bookItem)}
                      >
                        +
                      </button>
                      <span className="qty">{qty}</span>
                      <button
                        className="cart-btn qty-btn"
                        onClick={() => reduceBook(bookItem)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="cart-price">
                    <p>PRICE</p>
                    <p>${price}</p>
                  </div>
                  <div className="total">
                    <p>TOTAL</p>
                    <p>${(price * qty).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="back">
          <Link to="/bookstore">
            <MdOutlineKeyboardBackspace className="back-icon" /> Continue
            Shopping
          </Link>
          {cartItems.length !== 0 && (
            <button className="cart-clear" onClick={() => clearCart()}>
              Clear Cart
            </button>
          )}
        </div>
      </div>

      <div className="cart-right">
        <div className="order">
          <h2>Order Summary</h2>
        </div>
        {cartItems.length !== 0 && (
          <div>
            <div className="total-cost">
              <p>ITEMS {cartItems.length} :</p>
              <p>${totalCost.toFixed(2)}</p>
            </div>
            <div className="shipping">
              <p>SHIPPING :</p>
              <div className="form-text">
                <span>Standard Delivery - FREE</span>
              </div>
            </div>
            <div className="cart-address">
              <p>YOUR ADDRESS, PHONE NUMBER</p>
              <div className="form-text">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter your address..."
                />
              </div>
            </div>
            <div className="code">
              <p>PROMO CODE</p>
              <div className="form-text">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter your code"
                />
              </div>
            </div>
            <div className="apply">
              <button className="btn-apply">APPLY</button>
            </div>
          </div>
        )}
        <div className="total-cost">
          <p>TOTAL COST :</p>
          <p>${Math.round(totalCost)}</p>
        </div>
        <button className="checkout">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
