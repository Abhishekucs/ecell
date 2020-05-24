import React, { useEffect } from "react";
import About from "./About";
import Team from "./Team";
import Events from "./Events";
import StudentStartups from "./StudentStartups";
import Initiatives from "./Initiatives";
import ContactUs from "./ContactUs";
import { Link } from "react-scroll";
import gsap from "gsap";

const LandingPage = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(".inner__overlay", {
      height: 0,
      duration: 1.2,
      ease: "export.inOut",
      delay: 0.5,
      stagger: 0.4,
    })
      .from(".line", {
        y: 200,
        ease: "power4.out",
        duration: 1,
        stagger: {
          amount: 0.3,
        },
      })
      .from(".button", {
        opacity: 0,
      });
  });
  return (
    <div className="langingPage__body">
      <div className="content__one">
        <div className="background">
          <div className="background__text">
            <h1>E-CELL</h1>
            <h3>NIT</h3>
            <h5>Agartala</h5>
          </div>
        </div>
        <div className="foreground">
          <div className="content__one--title">
            <h1 className="line line__title">Start Your Journey Here</h1>
            <p className="line line__subtitle">Ideate, Innovate, Incubate</p>
          </div>
          <div className="button">
            <Link
              activeClass="active"
              type="click"
              to="about"
              smooth={true}
              duration={500}
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="top">
          <div className="inner__overlay"></div>
          <div className="inner__overlay"></div>
          <div className="inner__overlay"></div>
        </div>
      </div>
      <div className="about">
        <About />
      </div>
      <div className="initiatives">
        <Initiatives />
      </div>
      <div className="events">
        <Events />
      </div>
      <div className="studentStartups">
        <StudentStartups />
      </div>
      <div className="team">
        <Team />
      </div>
      <div className="contactus">
        <ContactUs />
      </div>
    </div>
  );
};

export default LandingPage;
