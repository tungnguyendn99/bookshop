import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaPinterest,
//   FaYoutube,
// } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./UI/Intro";

import Book from "./UI/Book";
import BookList from "./UI/Booklist";

const UI = () => {
  return (
    <div>
      <main>
        <Intro />
        <Book />
        <div className="banner img2-3">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2021/12/17/Gateway_Billboard-B_HGG-BOPIS.jpg"
            alt=""
            className="img2"
          />
        </div>
        <BookList />
        <div className="banner img2-3">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2021/11/09/Gateway_Billboard_D_11-09.jpg"
            alt=""
            className="img3"
          />
        </div>
      </main>
      <div className="newsletter">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input
            type="text"
            className="srch"
            placeholder="Your email address"
          />
          <button className="btn btn-sign">Sign Up</button>
        </div>
      </div>
      {/* <footer className="footer">
        <div className="cols">
          <div className="col">
            <img
              className="img4"
              src="https://st2.depositphotos.com/2402473/7435/v/950/depositphotos_74359605-stock-illustration-logo-print-to-the-library.jpg"
              alt=""
            />
            <h4>Contacts</h4>
            <p>
              <strong>Address:</strong> 221b Baker St, London NW1 6XE, United
              Kingdom
            </p>
            <p>
              <strong>Phone:</strong> +44 20 7224 3688
            </p>
            <p>
              <strong>Houes:</strong> 10:00 - 18:00. Mon - Sat
            </p>
            <div className="follow">
              <h4>Follow us</h4>
              <div className="icons">
                <a href="">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a href="">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
                <a href="">
                  <i>
                    <FaInstagram />
                  </i>
                </a>
                <a href="">
                  <i>
                    <FaPinterest />
                  </i>
                </a>
                <a href="">
                  <i>
                    <FaYoutube />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h4>Aboout</h4>
            <a href="">About us</a>
            <a href="">Deliverty Information</a>
            <a href="">Privacy Policy</a>
            <a href="">Term & Conditions</a>
            <a href="">Contact Us</a>
          </div>
          <div className="col">
            <h4>My Account</h4>
            <a href="">Sign In</a>
            <a href="">View Cart</a>
            <a href="">My Wishlist</a>
            <a href="">Track My Order</a>
            <a href="">Help</a>
          </div>
          <div className="col">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
              <img
                className="img5"
                src="https://gcsystems.sk/wp-content/uploads/2020/06/App-Store-Google-Play-Badges-Vector.jpg"
                alt=""
              />
            </div>
            <p>Secured Payment Gateways</p>
            <img
              className="img6"
              src="https://ecoheater.ie/wp-content/uploads/2018/10/cards-.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="copyright">
          <p>© 2021 All Rights Reserved Terms of Use Privacy Notice</p>
        </div>
      </footer> */}
    </div>
  );
};

export default UI;
