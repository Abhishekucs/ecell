import React from 'react';
import About from './About';
import Team from './Team';
import Events from './Events';
import StudentStartups from './StudentStartups';
import Initiatives from './Initiatives';
import ContactUs from './ContactUs';

const LandingPage = () => (
    <div className="langingPage__body">
        <div className="content__one">
            <div className="content__one--title">
                <h1>Start Your Journey Here</h1>
                <p>Ideate, Innovate, Incubate</p>
            </div>
            <button className="button">Explore</button>
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

export default LandingPage;