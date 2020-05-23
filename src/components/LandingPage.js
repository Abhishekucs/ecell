import React, { useRef, useEffect } from 'react';
import About from './About';
import Team from './Team';
import Events from './Events';
import StudentStartups from './StudentStartups';
import Initiatives from './Initiatives';
import ContactUs from './ContactUs';
import { landingText } from './Animation';
import { Link } from 'react-scroll';

const LandingPage = () => {
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(() => {
        landingText(line1, line2);
    })
    return (
        <div className="langingPage__body">
            <div className="content__one">
                <div className="content__one--title">
                    <h1 ref={el => (line1 = el)}>Start Your Journey Here</h1>
                    <p ref={el => (line2 = el)}>Ideate, Innovate, Incubate</p>
                </div>
                <Link activeClass="active" className="button" type="click" to="about" smooth={true} duration={500} >Explore</Link>
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
    )
};

export default LandingPage;