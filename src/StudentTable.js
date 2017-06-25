import React from 'react';
import StudentRow from './StudentRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
    this.state = {
      sort: {
        column: 'name',
        direction: 'desc'
      }
    };
  }

  sortByKeyAndOrder(A, B) {
    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    let [a, b] = [A[this.state.sort.coluln], B[this.state.sort.column]];
    if (a > b)
      return 1 * isDesc;
    if (a < b)
      return -1 * isDesc;
    return 0;
  }

  sortStudents() {
    let studentsAsArray = Object.keys(this.props.students).map((pid) => this.props.students[pid]);
    return studentsAsArray.sort(this.sortByKeyAndOrder);
  }

  render() {
    let rows = [];
    
    this.sortStudents().forEach((student) => {
      if (student.name.indexOf(this.props.filterText) !== -1)
        rows.push(
          <StudentRow student={student} key={student.id} />
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
            <SortableColumnHeader
              currentSort={this.state.sort}
              column="name" />
              <SortableColumnHeader
                currentSort={this.state.sort}
                column="firstname" />
              <SortableColumnHeader
                currentSort={this.state.sort}
                column="group" />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default StudentTable;
