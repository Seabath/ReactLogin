import React from 'react';

class StudentRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <span>{this.props.student.name}</span>
        </td>
        <td>
          <span>{this.props.student.firstname}</span>
        </td>
        <td>
          <span>{this.props.student.group}</span>
        </td>
      </tr>
    );
  }
}


export default StudentRow;
