import React from 'react';


class SortableColumnHeader extends React.Component {

  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(e) {
    this.props.onSort(this.props.column, e.target.name);
  }

  render() {
    let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false;
    return (
      <th>
        {this.props.column}
        <button
          className="btn-xs btn-default glyphicon glyphicon-arrow-up pull-right"
          onClick={this.handleSort}
          name="desc">
        </button>
        <button
          className='btn-xs btn-default glyphicon glyphicon-arrow-down pull-right'
          onClick={this.handleSort}
          name="asc" >
        </button>
      </th>
    );
  }
}


export default SortableColumnHeader;
