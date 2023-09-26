import React from "react";
import "./Testimonial.css";
import testimonial_img from "../assets/testimonial_img.jpg";

function Testimonial() {
  return (
    <div className="testimonials">
      <h3>Our Testimonial</h3>
      <p className="belief">
        We believe scaling startups require a radically different kind of agency
      </p>

      <div className="testimonial">
        <div className="testimonial-item">
          <img src={testimonial_img} alt="" />
          <p>
            The experts easily identified the way and guided us through the
            creation of the c.
          </p>

          <span>I love Sway😍</span>
          <hr className="test-dem" />
          <p className="credits">
            <span className="name">Vincent Smith </span>
            CEO at Bitmo
          </p>
        </div>
        <div className="testimonial-item">
          <img src={testimonial_img} alt="" />

          <p>
            The experts easily identified the wand guided us through the
            creation of the c.
          </p>

          <span>I love Sway😍</span>
          <hr className="test-dem" />
          <p className="credits">
            <span className="name">Vincent Smith </span>
            CEO at Bitmo
          </p>
        </div>
        <div className="testimonial-item">
          <img src={testimonial_img} alt="" />

          <p>
            The experts easily identified the wand guided us through the
            creation of the c.
          </p>
          <span>I love Sway😍</span>
          <hr className="test-dem" />
          <p className="credits">
            <span className="name">Vincent Smith </span>
            CEO at Bitmo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
