import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
            <Link className="header__logo" to="/" ><img src="/images/ecell.png" alt="ecell"/></Link>
            <div className="header__nav">
                <ul>
                    <li><Link to="/" className="link" exact={true}>Home</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link className="link">Team</Link></li>
                    <li><Link className="link">Initiatives</Link></li>
                    <li><Link className="link">Events</Link></li>
                    <li><Link className="link">Student Startups</Link></li>
                    <li><Link className="link">Contact Us</Link></li>
                </ul>
            </div>
            <div className="mobile__nav">
                <h4><Link className="menu">Menu</Link></h4>
            </div>
    </header>
);

export default Header;