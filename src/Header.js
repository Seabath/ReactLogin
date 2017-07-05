import React, {Component} from 'react';

class Header extends Component {
  render() {
    let url = window.location.pathname;
    return (
      <div>
        <div className="App-header">
          <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </div>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">ReactTest</a>
            </div>
            <ul className="nav navbar-nav">
              <li className={url === "/" ? "active" : ""}><a href="/">Home</a></li>
              <li className={url === "/add-student" ? "active" : ""}><a href="/add-student">Add Student</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
