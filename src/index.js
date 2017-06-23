import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import ReactStormpath, {Router, HomeRoute, LoginRoute, AuthenticateRoute} from 'react-stormpath';
import './index.css';


ReactDOM.render(
    <Router history="{browserHistory}">
    </Router>,
    document.getElementById("app-container");
);
registerServiceWorker();
