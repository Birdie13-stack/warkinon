import React from "react";
import "./Main1.css";
import airbnb from "../assets/Airbnb.jpg";
import amazon from "../assets/Amazon.jpg";
import apple from "../assets/Apple.jpg";
import google from "../assets/Google.jpg";
import nike from "../assets/Nike.jpg";
import spotify from "../assets/Spotify.jpg";
import group_4284 from "../assets/Group 4284.jpg";
import agency_img from "../assets/image-9.jpg";
import purchase_img from "../assets/image-10.jpg";
import strategy_img from "../assets/image-11.jpg";

function Main1() {
  return (
    <div>
      <p className="trust">Trusted By the World's Best Companies</p>

      <section className="logo-container">
        <img src={nike} alt="Nike Logo" />
        <img src={spotify} alt="Spotify Logo" />
        <img src={google} alt="Google Logo" />
        <img src={apple} alt="Apple Logo" />
        <img src={amazon} alt="Amazon Logo" />
        <img src={airbnb} alt="Airbnb Logo" />
      </section>

      <section className="process">
        <img src={group_4284} alt="" />
        <div className="process-text">
          <h2>Let your visitors know about your features.</h2>
          <p>
            We develop enjoyable consumer experiences, from digital strategy and
            content to media and analysis. Leading to meaningful results and
            satisfied clients.
          </p>

          <button>Our Process</button>
        </div>
      </section>

      <section className="feature">
        <h3 className="feature-heading">I want company feature</h3>
        <p>
          We believe scaling startups require a radically different kind of
          agency
        </p>
        <section className="features">
          <div className="purchase">
            <img src={purchase_img} alt="" />
            <h3>Easy to purchase</h3>
            <p>
              A complete set of tools to enable marketing teams to curate,
              personalize, contextualize, send, integrate and track campaigns -
              no coding required.
            </p>
          </div>
          <div className="strategy">
            <img src={strategy_img} alt="" />
            <h3>Strategy</h3>
            <p>
              A complete set of tools to enable marketing teams to curate,
              personalize, contextualize, send, integrate and track campaigns -
              no coding required.
            </p>
          </div>
          <div className="agency">
            <img src={agency_img} alt="" />
            <h3>Agency Web</h3>
            <p>
              A complete set of tools to enable marketing teams to curate,
              personalize, contextualize, send, integrate and track campaigns -
              no coding required.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Main1;
