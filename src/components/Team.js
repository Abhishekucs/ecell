import React from "react";
import { Link } from "react-router-dom";

const Team = () => (
  <div className="team__body">
    <div className="team__body__content">
      <h1 className="about__title">Team</h1>
      <p className="about__subtitle">
        E Cell NIT Agartala desires to create an entrepreneurial mindset in
        students, who participate in a thriving ecosystem that harbours
        innovation and intellect.
      </p>
      <span className="button button--about">
        <Link to="/aboutPage">Team</Link>
      </span>
    </div>
    <div className="team__body__image">
      <img src="/images/team.png" alt="team" />
    </div>
  </div>
);

export default Team;
