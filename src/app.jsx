import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import reducer from './reducer';
import {setState} from './actions/application';
import remoteActionMiddleware from './remote_action_middleware';
import routes from './routes';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
        store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

const target  = document.getElementById('app');
const node = (
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>
);

ReactDOM.render(node, target);