import logo from './logo.svg';
import './App.css';
import { Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  calculate = (operation) => {
    let val;
    if (operation === "increase") {
      val = this.state.count
      val++;
    } else {
      val = this.state.count;
      val--;
    }
    this.setState({ count: val })


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1><em>Follow The White Rabbit...</em></h1>
          <Row>
            <div className="input-group">
              <Button className="btn btn-info" onClick={() => this.calculate("increase")}>+</Button>
              <Button className="btn btn-danger" onClick={() => this.calculate("decrease")}>-</Button>
            </div>
          </Row>
          {this.state.count}
        </header>
      </div>
    );
  }
}