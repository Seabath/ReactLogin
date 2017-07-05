import React from 'react';

const RESET_VALUES = {id: '', name: '', firstname: '', group: ''};

class StudentForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      student: Object.assign({}, RESET_VALUES)
    };
  }

  handleSave(e) {
    this.props.onSave(this.state.student);

    this.setState({
      student: Object.assign({}, RESET_VALUES)
    });
    e.preventDefault();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.student[name] = value;
      return {student: prevState.student};
    });
  }

  render() {
    return (
      <form>
        <h3>Enter a new Student</h3>
        <div className="form-group">
          <label for="name">Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            onChange={this.handleChange} value={this.state.student.name}/>
        </div>
        <div className="form-group">
          <label for="firstname">Firstname:</label>
          <input 
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter firstname"
            onChange={this.handleChange} value={this.state.student.firstname}/>
        </div>
        <div className="form-group">
          <label for="group">Group</label>
          <div id="group">
            <label className="radio-inline">
              <input
                type="radio"
                name="group"
                value="X"
                onChange={this.handleChange} checked={this.state.student.group === 'X'}/>
              X
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="group"
                value="I"
                onChange={this.handleChange} checked={this.state.student.group === 'I'}/>
              I
            </label>
          </div>
        </div>
        <input
          className="btn btn-default"
          type="submit" value="Save" onClick={this.handleSave} />
      </form>
    );
  }
}



export default StudentForm;
