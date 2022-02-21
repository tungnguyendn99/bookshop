import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/Context";

const SingleBook = ({ item }) => {
  const { addBook, ToastContainer } = useCart();

  const { id, title, img, desc, category, price } = item;
  return (
    <div key={id} className="book-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <div className="item-desc">
          <h5>{category}</h5>
          <p className="item-text">{desc}</p>
        </div>
        <button className="btn shopping" onClick={() => addBook(item)}>
          Add to cart <FaShoppingCart className="cartIcon" />
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SingleBook;
