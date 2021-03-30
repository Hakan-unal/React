import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";


export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <div className="h2 text-dark text-center mt-5">
                Hey&#x1F44B;, I’m Hakan. Currently working Software Developer at
                <a href="http://devtagon.com/" style={{ position: "relative" }} className="stretched-link font-weight-bold text-dark"> Devtagon</a>.Here you can learn more about me and my ideas.
            </div>

        );
    }
}