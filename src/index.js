import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from ''
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import {App, Home, AddStudent} from './main.js';

ReactDOM.render((
    <Router history = {browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="addstudent" component={AddStudent} />
      </Route>
    </Router>

    ), document.getElementById('root')
);
