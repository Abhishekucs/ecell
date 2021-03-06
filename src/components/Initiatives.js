import React from "react";
import { Link } from "react-router-dom";

const Initiatives = () => (
  <div className="initiatives__body">
    <div className="initiatives__body__content">
      <h1 className="about__title">Initiatives</h1>
      <p className="about__subtitle">
        Stimulating projects undertaken by us on a regular basis define our
        desire to innovate and resolve the problems of society.
      </p>
      <span className="button button--about">
        <Link to="/aboutPage">Initiatives</Link>
      </span>
    </div>
    <div className="initiatives__body__photo">
      <img src="/images/initiatives.png" alt="initiatives" />
    </div>
  </div>
);

export default Initiatives;
