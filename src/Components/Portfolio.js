import React from "react";
import "./Portfolio.css";
import website_design from "../assets/website-design.jpg";
import dahsboard_design from "../assets/dashboard-design.png";
import gallery_item from "../assets/gallery-item.jpg";
import mockup_design from "../assets/mockup-design.jpg";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3>Our Impressive Portfolio</h3>
      <p>
        We believe scaling startups require a radically different kind of agency
      </p>
      <div className="portfolio_items">
        <div className="portfolio_item">
          <img src={website_design} alt="" />
          <h3>Website Design</h3>
        </div>
        <div className="portfolio_item">
          <img src={dahsboard_design} alt="Dashboard Design" />
          <h3>Dashboard Design</h3>
        </div>
        <div className="portfolio_item">
          <img src={gallery_item} alt="" />
          <h3>Gallery Item</h3>
        </div>
        <div className="portfolio_item">
          <img src={mockup_design} alt="" />
          <h3>Mockup Design</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
