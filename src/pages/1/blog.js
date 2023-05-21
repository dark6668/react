import React from "react";

import "./page1.css";
import Footer from "./Footer";
import Img from "./Navbar";
import Main from "./Main";
import Header from "./Header";
import Header2 from "../2/Header2";

export default function Page1() {
  return (
    <div>
      <Header2 />

      <div className="container">
        <div className="container1">
          <Img />
          <Main />
          <Header />
          <Footer />
        </div>
      </div>
    </div>
  );
}
