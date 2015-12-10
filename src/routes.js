import React from 'react';
import {Route} from 'react-router';

/* React Component */
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import {Home} from './components/Home';
import {Members} from './components/Members';

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path="/voting" component={VotingContainer} />
    <Route path="/home" component={Home} />
    <Route path="/members" component={Members} />
    <Route path="*" component={Home} />
</Route>;

export default routes;