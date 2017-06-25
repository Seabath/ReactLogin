import React from 'react';


class StudentForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(e) {
    this.props.onSave(this.state.student);
    this.setState({
      student: Object.assign({}, RESET_VALUES)
    });
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <h3>Enter a new Student</h3>
        <p>
          <label>
            Name
            <br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Firstname
            <br />
            <input type="text" name="firstname" />
          </label>
        </p>
        <p>
          <label>
           Group
            <br />
            <input type="radio" name="group" value="X"/>X
            <input type="radio" name="group" value="I"/>I
          </label>
        </p>
        <input type="submit" value="Save" onClick={this.handleSave} />
      </form>
    );
  }
}



export default StudentForm;
