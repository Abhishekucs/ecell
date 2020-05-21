import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';

const IndexRouters = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default IndexRouters;