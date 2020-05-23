import React from "react";
import { Link } from "react-router-dom";

const StudentStartups = () => (
  <div className="studentStartups__body">
    <div className="studentStartups__body__content">
      <h1 className="about__title">Student Startups</h1>
      <p className="about__subtitle">
        Under our aegis, students project their creative ideas and get a
        lucrative opportunity of gaining first hand experience by incubating
        their own start-ups.
      </p>
      <span className="button button--about">
        <Link to="/aboutPage">Student Startups</Link>
      </span>
    </div>
    <div className="studentStartups__body__image">
      <img src="/images/studentstartups.png" alt="studentstartups" />
    </div>
  </div>
);

export default StudentStartups;
