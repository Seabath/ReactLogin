import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Button from './Button';
import Students from './Students.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className='App-logo' alt='logo'/>
          <h2>T'AS PERDU !!</h2>
        </div>

        <p className="App-intro">
          Hi {this.props.name}!
        </p>
        <Clock/>

        <Button/>

        <Students />
      </div>
    );
  }
}

export default App;
