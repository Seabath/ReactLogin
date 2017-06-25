import React from 'react';


class StudentForm extends React.Component {
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
            <input type="text" name="group" />
          </label>
        </p>
        <input type="submit" value="Save" />
      </form>
    );
  }
}



export default StudentForm;
