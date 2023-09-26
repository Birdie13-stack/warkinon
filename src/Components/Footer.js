import React from "react";
import insta from "../assets/insta.jpg";
import fb from "../assets/fb.jpg";
import twitter from "../assets/twitter.jpg";

function Footer() {
  return (
    <div className="footer">
      <section className="section1">
        <ul className="stuff">
          <li>About</li>
          <li>Services</li>
          <li>Pricing Plans</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>

        <ul className="socials">
          <li>
            <img src={fb} alt="Facebook Icon" className="social-icon" />
          </li>
          <li>
            <img src={insta} alt="Instagram Icon" />
          </li>
          <li>
            <img src={twitter} alt="Twitter Icon" />
          </li>
        </ul>
      </section>

      <hr className="section1-demarcation" />
      <section className="section2">
        <ul>
          <li className="title-item">
            <b>About</b>
          </li>
          <li>About Sway</li>
          <li>Plans and Pricing</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li className="title-item">
            <b>Products</b>
          </li>
          <li>Primary blocks</li>
          <li>Content block</li>
          <li>Infographic blocks</li>
          <li>Business blocks</li>
        </ul>
        <ul>
          <li className="title-item">
            <b>Resources</b>
          </li>
          <li>Support center</li>
          <li>Documentation</li>
          <li>Newsletter</li>
          <li>Chanelog</li>
        </ul>

        <ul>
          <li className="title-item">
            <b>Follow Us</b>
          </li>
          <li>Twitter</li>
          <li>Dribble</li>
          <li>Facebook</li>
          <li>Linkedin</li>
        </ul>

        <div className="location">
          <p>
            <b>Contact</b>
          </p>

          <p className="address">
            New York. 112 W 34th St, Manhattan (1) 212-445-4320
          </p>
        </div>
      </section>
      <hr className="section2-demarcation" />

      <section className="section3">
        <p>Sways by keydesign. All Rights Reserved</p>
        <p>Terms of Use Privacy Policy</p>
      </section>
    </div>
  );
}

export default Footer;
