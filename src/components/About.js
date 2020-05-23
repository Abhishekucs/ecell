import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="about" id="about">
    <div className="about__body">
      <div className="about__body__content">
        <h1 className="about__title">About Us</h1>
        <p className="about__subtitle">
          E Cell NIT Agartala desires to create an entrepreneurial mindset in
          students, who participate in a thriving ecosystem that harbours
          innovation and intellect.
        </p>
        <Link to="/aboutPage" className="button button--about">
          About Us
        </Link>
      </div>
      <div className="about__body__image">
        <img src={"/images/about.png"} alt="about" />
      </div>
    </div>
  </div>
);

export default About;
