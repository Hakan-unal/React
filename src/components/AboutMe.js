import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";


export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <div className="h3 text-dark text-center mt-5 mx-5">

                Hey&#x1F44B;, It's Hakan. Currently working as Software Developer at
                <a href="http://devtagon.com/" style={{ position: "relative" }} className="stretched-link font-weight-bold text-dark"> Devtagon</a>.Here you can learn more about me and my ideas.
                <div  >
                    <img alt="baby yoda" style={{ width: 300, borderRadius: 20 }} src="https://www.macleans.ca/wp-content/uploads/2019/11/BABY-YODA-MANDALORIAN-NOV19-810x445.jpg" />
                </div>
            </div>


        );
    }
}