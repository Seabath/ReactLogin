import React from 'react';
import Filters from './Filters.js';
import StudentForm from './StudentForm.js';
import StudentTable from './StudentTable.js';


var STUDENTS = {
  '1': {id: 1, group: 'X', firstname: 'Hugues', name: 'Joker'},
  '2': {id: 2, group: 'X', firstname: 'Michael', name: 'Popo'},
  '3': {id: 3, group: 'X', firstname: 'Florian', name: 'Dudu'},
  '4': {id: 4, group: 'X', firstname: 'Charlotte', name: 'Plancq'},
  '5': {id: 5, group: 'I', firstname: 'Gabriel', name: 'Borel'},
  '6': {id: 6, group: 'I', firstname: 'Etienne', name: 'Mion'},
  '7': {id: 7, group: 'I', firstname: 'Valérian', name: 'Noeud'},
  '8': {id: 8, group: 'X', firstname: 'Maxime', name: 'Terasson'},
};


class Students extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText : '',
      students : STUDENTS
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(input) {
    this.setState(input);
  }

  render() {
    return (
      <div>
        <Filters
          filterText={this.state.filterText}
          onFilter={this.handleFilter}/>

        <StudentTable
          students={this.state.students}
          filterText={this.state.filterText}
        />
        <StudentForm />
      </div>
    );
  }
}


export default Students;
