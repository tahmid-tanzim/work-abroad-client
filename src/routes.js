import React from 'react';
import {Route} from 'react-router';

/* React Component */
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import {Home} from './components/Home';

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path="/home" component={Home} />
    <Route path="/" component={VotingContainer} />
</Route>;

export default routes;