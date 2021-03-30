import '../App.css';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { AiOutlineGithub, AiFillLinkedin, AiFillGitlab } from "react-icons/ai";
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
                        <h4><Badge>Hakan Ünal</Badge></h4><Badge pill variant="white">Md. Software Developer</Badge>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="https://git.devtagon.com/Hakan-unal"><AiFillGitlab size={55} color="black" title="Gitlab" /></Nav.Link>
                            <Nav.Link href="https://github.com/Hakan-unal"><AiOutlineGithub size={55} color="black" title="Github" /></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/hakan-unal/"><AiFillLinkedin size={55} color="black" title="Linkedin" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}