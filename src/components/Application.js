import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';

export default class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <>
                <Row className="mt-5 mx-3">
                    <Col sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 3 }} >
                        <Card >
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 3 }} >
                        <Card >
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 3 }} >
                        <Card >
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 3 }} >
                        <Card >
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>

        );
    }
}