import React from "react";
import { Link } from "react-router";
import FeaturedImage from "../images/white_tesla.png";
import Featured from "../components/Featured";
import Services from "../components/Services";
import "../css/HomeScreen.css";

const Landing = () => {
  return (
    <>
      <div className="Landing-page">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="description"
        >
          <h1>Used electric cars</h1>
          <h1>made easy</h1>
          <h6>Easily browse and choose an e-car</h6>
          <h6>just like on Amazon</h6>
          <Link to="/products">
            <button className="shop__now">Shop Now</button>
          </Link>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="featured_image"
        >
          <img src={FeaturedImage} alt="hi :)" />
        </div>
      </div>
      <Services />
      <Featured />
    </>
  );
};

export default Landing;
