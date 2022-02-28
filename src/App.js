import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";



import Content from "./components/Content";
import anime from 'animejs/lib/anime.es.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageControl: false
    };
  }
  componentDidMount() {
    anime({
      speed: 4000,
      targets: "p",
      innerHTML: [0, 10000],
      easing: "linear",
      round: 2000 // Will round the animated value to 1 decimal
    });
    setTimeout(() => {
      this.setState({ pageControl: true })
    }, 2000)
  }
  render() {
    return (

      <div className="App">
        {this.state.pageControl ?
          <>
            <Navbar></Navbar>
            <Content></Content>
          </>
          :

          <p style={{ marginTop: 300 }}></p>
        }
      </div>
    );
  }
}
