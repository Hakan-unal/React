import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";


export default class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenCard1: false,
            input1: null
        };
    }

    handleShowModal = (index) => {
        this.setState({ ["isOpenCard" + index]: !this.state["isOpenCard" + index] })
        console.log(this.state)
    }
    numberInputFormeter = (value, index) => {
        this.setState({ ["input" + index]: value.replace(/[^0-9.-]+/g, '').replace('-', '') })
    }

    render() {
        return (
            <>
                <Row className="mt-5 mx-3">
                    <Col
                        className="mt-2"
                        sm={{ span: 12 }}
                        md={{ span: 6 }}
                        lg={{ span: 6 }}
                        xl={{ span: 4 }}
                    >
                        <Card>
                            <Card.Header>Only Number Input</Card.Header>
                            <Card.Body>
                                <Row className="my-3 mx-5">
                                    <Form.Control value={this.state.input1} type="text" onChange={(event) => this.numberInputFormeter(event.target.value, 1)} />
                                </Row>
                                <Button variant="outline-primary" outline onClick={() => this.handleShowModal(1)}>
                                    Show Code
                                </Button>
                            </Card.Body>
                            {this.state.isOpenCard1 ?
                                <Card.Footer>
                                    Test Test Test
                                </Card.Footer>
                                :
                                null
                            }
                        </Card>
                    </Col>





                </Row>





            </>
        );
    }
}