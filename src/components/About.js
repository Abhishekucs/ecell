import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useIntersection } from "react-use";
import gsap from "gsap";

const About = () => {
  let line = useRef(null);

  const intersection = useIntersection(line, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      duration: 1,
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      duration:1,
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.3
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
  return (
    <div className="about" id="about">
      <div className="about__body">
        <div className="about__body__content">
          <div ref={line} className="inner">
            <h1 className="about__title fadeIn">About Us</h1>
            <p className="about__subtitle fadeIn">
              E Cell NIT Agartala desires to create an entrepreneurial mindset
              in students, who participate in a thriving ecosystem that harbours
              innovation and intellect.
            </p>
          </div>
          <span className="button button--about fadeIn">
            <Link to="/aboutPage">About us</Link>
          </span>
        </div>
        <div className="about__body__image">
          <img src={"/images/about.png"} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
