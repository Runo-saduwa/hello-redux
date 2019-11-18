import React, { Component } from "react";
import {createStore} from 'redux';
import HelloWorld from "./HelloWorld";


const store = createStore(reducer);

class App extends Component {
  state = {
    tech: "React"
  };
  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
