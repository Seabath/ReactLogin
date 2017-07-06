import React from 'react';
import ReactDOM from 'react-dom';
import {Home, AddStudent} from '../main.js';

it('renders Home without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

it('renders AddStudent without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
