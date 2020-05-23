import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = ({ history }) => {
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu",
    })

    useEffect(() => {
        history.listen(() => {
            setState({clicked: false, menuName: "Menu"})
        })
    }, [history]);
    const [disabled, setDisabled] = useState(false);

    const handleMenu = () => {
        disableMenu();
        if(state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    };

    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
          setDisabled(false);
        }, 1200);
    };
    
    return (
    <header>
        <div className="header">
            <Link className="header__logo" to="/" ><img src="/images/ecell.png" alt="ecell"/></Link>
            <div className="header__nav">
                <ul>
                    <li><Link to="/" className="link" exact={true}>Home</Link></li>
                    <li><Link to="/aboutPage" className="link">About</Link></li>
                    <li><Link to="/teamPage" className="link">Team</Link></li>
                    <li><Link to="/initiativesPage" className="link">Initiatives</Link></li>
                    <li><Link to="/eventsPage" className="link">Events</Link></li>
                    <li><Link to="/studentStartupsPage" className="link">Student Startups</Link></li>
                    <li><Link className="link">Contact Us</Link></li>
                </ul>
            </div>
            <div className="mobile__nav">
                <button disabled={disabled} onClick={handleMenu} className="menu__button">{state.menuName}</button>
            </div>
        </div>
        <Hamburger state={state}/>
    </header>
    )
};

export default withRouter(Header);