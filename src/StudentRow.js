import React from 'react';

class StudentRow extends React.Component {

  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }

  destroy() {
    this.props.onDestroy(this.props.student.id);
  }

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
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={this.destroy}>X</button>
        </td>
      </tr>
    );
  }
}


export default StudentRow;
