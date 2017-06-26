import React from 'react';

class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    const name = e.target.name;
    this.props.onFilter({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search... (case sensitive)"
          value={this.props.filterText}
          name="filterText"
          onChange={this.handleChange}/>
        <label>
          <input
            type="checkbox"
            checked={this.props.showXOnly}
            name="xOnly"
            onChange={this.handleChange} />
          X only
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.props.showIOnly}
            name="iOnly"
            onChange={this.handleChange} />
          I only
        </label>
      </form>
    );
  }
}

export default Filters;
