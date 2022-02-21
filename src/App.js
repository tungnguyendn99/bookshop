import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Styles from "./components/Styles/index";
import UI from "./components/UI";
import NewPage from "./components/NewPage/NewPage";
import Cart from "./components/NewPage/Cart";
import BookStore from "./components/NewPage/BookStore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABUwgv4-P-d95qEA2lcLhwqg-BfUDQbB0",
  authDomain: "bookshop-997b3.firebaseapp.com",
  projectId: "bookshop-997b3",
  storageBucket: "bookshop-997b3.appspot.com",
  messagingSenderId: "644749568388",
  appId: "1:644749568388:web:170c5b4cd78a581d8555d1",
  measurementId: "G-LXZ36X0X9E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <Styles>
      <body>
        <Header />
        <Routes>
          <Route path="/" element={<UI />} />
          <Route path="newpage" element={<NewPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="bookstore" element={<BookStore />} />
        </Routes>
        <Footer />
      </body>
    </Styles>
  );
};

export default App;
