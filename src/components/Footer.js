import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
