import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import {App, Home, AddStudent} from './main.js';

ReactDOM.render((
    <Router history = {browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/add-student" component={AddStudent} />
    </Router>

    ), document.getElementById('root')
);
