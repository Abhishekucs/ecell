import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import InitiativesPage from '../components/InitiativesPage';
import EventsPage from '../components/EventsPage';
import SsPage from '../components/SsPage';
import TeamPage from '../components/TeamPage';

const IndexRouters = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/aboutPage" component={AboutPage} />
                <Route path="/initiativesPage" component={InitiativesPage} />
                <Route path="/eventsPage" component={EventsPage} />
                <Route path="/studentStartupsPage" component={SsPage} />
                <Route path="/teamPage" component={TeamPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default IndexRouters;