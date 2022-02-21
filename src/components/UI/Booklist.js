import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/Context";

const BookList = () => {
  const {
    state: { items },
  } = useCart();

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="book-list">
      <h3>Best Sellers of the Month</h3>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {items.slice(0, 8).map((image) => {
            const { img, id } = image;
            return (
              <motion.div className="img-carousel" key={id}>
                <img src={img} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookList;
