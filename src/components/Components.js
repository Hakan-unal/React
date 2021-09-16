import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import HUnumberInput from '../tools/HUnumberInput';

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

    onChange = (event) => {
        this.setState({ input1: event.target.value })
    }
    render() {
        return (
            <>
                <Row className="my-3 mx-5">
                    <HUnumberInput
                        value={this.state.input1}
                        onChange={this.onChange}
                        notificationText="En az 4 rakamlı olmaz zorunda"
                        // isInvalidValue={true}
                        // warningText={"Başarısız"}
                        // isReadonly={true}
                        // inputLabel={"Ad"}
                        // isVerticalLabel={false}
                    />
                </Row>
                <Row className="mt-5 mx-3">
                    <Col
                        className="mt-2"
                        sm={{ span: 12 }}
                        md={{ span: 6 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
                        <Card>
                            <Card.Header>Only Number Input</Card.Header>
                            <Card.Body>

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