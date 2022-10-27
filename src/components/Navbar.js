import '../App.css';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand>
                        <h5> <Badge variant="white">Hakan Ünal <br /> Sr. Software Developer</Badge></h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="https://github.com/Hakan-unal"><AiOutlineGithub size={55} color="black" title="Github" /></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/hakan-unal/"><AiFillLinkedin size={55} color="black" title="Linkedin" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}