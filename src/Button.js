import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      backgrounColor: 0,
      textColor : 16777215
    };
  }

  handleClick(event) {
    console.log(this);
    this.setState({
      backgroundColor : this.randomColor(),
      textColor : this.randomColor()
    });
  }

  randomColor() {
    var color = '#';
    var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
    color += letters[Math.floor(Math.random() * letters.length)];
    return(color);
  }

  render() {
    return (
      <button onClick={this.handleClick} style={{backgroundColor: this.state.backgroundColor, color: this.state.textColor}}>
        Click me
      </button>
    );
  }
}


export default Button;
