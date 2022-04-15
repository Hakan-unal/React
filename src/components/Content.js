import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Nav } from 'react-bootstrap';
import AboutMe from './AboutMe';
import Application from './Application';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: "aboutMe"
        };
    }

    render() {
        return (
            <>
                <Nav
                    fill
                    variant="tabs"
                    defaultActiveKey="aboutMe"
                    onSelect={(selectedKey) => this.setState({ activeKey: selectedKey })}
                >
                    <Nav.Item>
                        <Nav.Link eventKey="aboutMe" className="text-dark lead">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="application" className="text-dark lead">Applications</Nav.Link>
                    </Nav.Item>


                </Nav>


                {(this.state.activeKey === "aboutMe") ?
                    <>
                        <AboutMe />
                    </>
                    :
                    (this.state.activeKey === "application") ?
                        <Application />
                        :
                        null
                }
            </>
        );
    }
}