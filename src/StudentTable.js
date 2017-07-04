import React from 'react';
import StudentRow from './StudentRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        column: 'name',
        direction: 'desc'
      }
    };
    this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleDestroy(id) {
    console.log(this.props.onDestroy);
    this.props.onDestroy(id);
  }

  handleSort(column, direction) {
    this.setState({
      sort: {
        column: column,
        direction: direction
      }
    });
  }

  sortByKeyAndOrder(A, B) {
    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    let [a, b] = [A[this.state.sort.column], B[this.state.sort.column]];
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
      if ((student.name.indexOf(this.props.filterText) !== -1 || student.firstname.indexOf(this.props.filterText) !== -1)
          && (!this.props.xOnly || (student.group === "X" && this.props.xOnly))
          && (!this.props.iOnly || (student.group === "I" && this.props.iOnly)))
        rows.push(
          <StudentRow student={student} key={student.id} onDestroy={this.handleDestroy}/>
      );
    });

    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
            <SortableColumnHeader
              currentSort={this.state.sort}
              column="name"
              onSort={this.handleSort} />
              <SortableColumnHeader
                currentSort={this.state.sort}
                column="firstname"
                onSort={this.handleSort} />
              <SortableColumnHeader
                currentSort={this.state.sort}
                column="group"
                onSort={this.handleSort} />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default StudentTable;
