import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: true };
    this.handleClcik = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggle,
    }));
  }
  render() {
    return (
      <div>
        return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        );
      </div>
    );
  }
}

root.render(<h1>Hwllo</h1>);
