import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { staggerReveal, staggerRevealClose } from "./Animation";

const Hamburger = ({ state }) => {
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);

    useEffect(() => {
        if(state.clicked === false) {
            staggerRevealClose(reveal2, reveal1);
            gsap.to(menuLayer, {css: {display: "none"}});
        } else if(state.clicked === true || (state.clicked === true && state.initial === null)) {
            gsap.to(menuLayer, {duration: 0, css: {display: "block"}})
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(reveal1, reveal2);
        }
    }, [state]);

    return (
        <div ref={el => (menuLayer = el)} className="container">
            <div ref={el => (reveal1 = el)} className ="container__black"></div>
            <div ref={el => (reveal2 = el)} className ="container__red">
                <nav>
                    <ul>
                        <li><Link className="nav__link">Home</Link></li>
                        <li><Link className="nav__link">About</Link></li>
                        <li><Link className="nav__link">Initiatives</Link></li>
                        <li><Link className="nav__link">Events</Link></li>
                        <li><Link className="nav__link nav__link--ss">Studnet Startups</Link></li>
                        <li><Link className="nav__link">Team</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Hamburger;