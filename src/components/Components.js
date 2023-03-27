import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import vercel from "../assets/image/vercel.png"

const cardPadding = {
    padding: 35
}
export default class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationModal: false,
            modalContent: null,
            modalHeader: null,
        };
    }

    render() {
        return (<Row className="mt-5 mx-3">
            <Col
                className="mt-2"
                sm={{ span: 12 }}
                md={{ span: 6 }}
                lg={{ span: 4 }}
                xl={{ span: 3 }}
            >
                <Card style={cardPadding}>
                    <Card.Img width={100} height={150} variant="top" src={vercel} />
                    <Card.Body>
                        <Card.Title>Custom Table</Card.Title>
                        <hr />
                        <Card.Text>
                            React.js, Antd
                        </Card.Text>
                        <Button
                            variant="outline-primary"
                            href="https://custom-table-three.vercel.app/"
                        >
                            Demo
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        );
    }
}