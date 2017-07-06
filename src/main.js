import React, {Component} from 'react';
import Students from './Students.js';
import Header from  './Header.js';
import StudentForm from './StudentForm.js';


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
        <div className="container" >
          <StudentForm />
        </div>
      </div>
    );
  }
}
