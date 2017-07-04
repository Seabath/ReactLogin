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
        <div className="row">
          <div className="col-sm-4">
            <input
              type="text"
              placeholder="Search"
              value={this.props.filterText}
              name="filterText"
              onChange={this.handleChange}/>
          </div>
          <div className="col-sm-4">
            <label>
              <input
                type="checkbox"
                checked={this.props.showXOnly}
                name="xOnly"
                onChange={this.handleChange} />
              X only
            </label>
          </div>
          <div className="col-sm-4">
            <label>
              <input
                type="checkbox"
                checked={this.props.showIOnly}
                name="iOnly"
                onChange={this.handleChange} />
              I only
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export default Filters;
