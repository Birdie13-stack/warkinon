import React from "react";
import "./Main2.css";
import fine_girl from "../assets/fine-girl.jpg";

function Main2() {
  return (
    <div className="main-2">
      <div className="main-2_text">
        <h2>Peed Of Creative Service For Your Business Growth</h2>

        <p>
          We recruit doctors with the best honors and graduates at their
          universities, with a very broad and extraordinary experience they grow
          into professional doctors then received extraordinary supplies, guided
          for 2 years, they already understand very well about existing diseases
          and how to handle them properly.
        </p>
      </div>

      {/* <div className="main-2_img"></div> */}
      <img src={fine_girl} alt="" />
    </div>
  );
}

export default Main2;
