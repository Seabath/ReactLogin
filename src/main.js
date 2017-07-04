import React, {Component} from 'react';
import Students from './Students.js';
import Header from  './Header.js';
import StudentForm from './StudentForm.js';

export class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>Add Student</li>
        </ul>
      </div>
    );
  }
}
export default App;


export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Students />
      </div>
    );
  }
}

export class AddStudent extends Component {
  render() {
    return (
      <div>
        <Header />
        <StudentForm />
      </div>
    );
  }
}
