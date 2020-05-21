import React from 'react';

const About = () => (
    <div className="about__body">
        <div className="about__body__content">
            <h1 className="about__title">About Us</h1>
            <p className="about__subtitle">E Cell NIT Agartala desires to create an entrepreneurial mindset in students, who participate in a thriving ecosystem that harbours innovation and intellect.</p>
            <button className="button button--about">About Us</button>
        </div>
        <div className="about__body__image">
            <img src={"/images/about.png"} alt="about"/>
        </div>
    </div>
);

export default About;