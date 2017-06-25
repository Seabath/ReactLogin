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
        <p>
          <label>
            Name
            <br />
            <input type="text" name="name" onChange={this.handleChange} value={this.state.student.name}/>
          </label>
        </p>
        <p>
          <label>
            Firstname
            <br />
            <input type="text" name="firstname" onChange={this.handleChange} value={this.state.student.firstname}/>
          </label>
        </p>
        <p>
          <label>
           Group
            <br />
            <input type="radio" name="group" value="X" onChange={this.handleChange} checked={this.state.student.group === 'X'}/>X
            <input type="radio" name="group" value="I" onChange={this.handleChange} checked={this.state.student.group === 'I'}/>I
          </label>
        </p>
        <input type="submit" value="Save" onClick={this.handleSave} />
      </form>
    );
  }
}



export default StudentForm;
