import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => (
    <div className="events__body">
        <div className="events__body__content">
            <h1 className="about__title">Events</h1>
            <p className="about__subtitle">E Cell organises a plethora of events round the clock to promote entrepreneurial activities in and around the campus, and infuse its spirit among students.</p>
            <Link to="/eventsPage" className="button button--about">Events</Link>
        </div>
        <div className="events__body__image">
            <img src="/images/events.png" alt="events"/>
        </div>
    </div>
);

export default Events;