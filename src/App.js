import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Content></Content>
      </div>
    );
  }
}
