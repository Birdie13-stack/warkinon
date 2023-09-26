import React from "react";
// import ReactDOM from "./react-dom/client";
import logo from "../assets/Logo.png";
import main_img from "../assets/main-img.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="heading">
        <img src={logo} alt="Logo" className="logo" />

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="contact">Contact</button>
      </div>

      <section className="header-main">
        <section className="header-main_text">
          <h1>
            The Better Way To <span>Success</span> In Your Business
          </h1>

          <p>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly and memorable interactive experiences
          </p>

          <button className="hire">Hire Me</button>
        </section>

        <img src={main_img} alt="" />
      </section>
    </div>
  );
}

export default Header;
