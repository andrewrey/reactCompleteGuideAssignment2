import React, { Component } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";

class App extends Component {
  state = {
    input: "",
  };

  textInputHandler = (e) => {
    let text = e.target.value;
    this.setState((prevState) => {
      return {
        input: text,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <Header input={this.state.input} textInputHandler={this.textInputHandler} />
        <Main input={this.state.input} />
      </div>
    );
  }
}

export default App;
