import React from 'react';

class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target["value"];
    this.props.onFilter({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          name="filterText"
          onChange={this.handleChange}/>
      </form>
    );
  }
}

export default Filters;
