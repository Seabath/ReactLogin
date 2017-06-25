import React from 'react';
import './StudentTableHeader.css';


class StudentTableHeader extends React.Component {
  render() {
    return (
      <th>
        {this.props.column}
        <button className="StudentTableHeader-current">&#x2582;</button>
        <button>&#258C;</button>
      </th>
    );
  }
}


export default StudentTableHeader;
