import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: null
        };
    }

    numberInputFormeter = (value) => {
        this.setState({ input: value.replace(/[^0-9.-]+/g, '').replace('-', '') })
    }
    render() {


        return (
            <>
                <Row className="mt-3">

                    <Col
                        className="mb-5"
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}>
                        <Form.Control value={this.state.input} type="text" onChange={(event) => this.numberInputFormeter(event.target.value)} />
                    </Col>

                    {/**Row 1 */}
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            1
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            2
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            3
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            4
                        </Button>
                    </Col>


                    {/**Row 2 */}
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            5
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            6
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            7
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            8
                        </Button>
                    </Col>

                    {/**Row 3 */}
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            9
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            0
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            +
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            -
                        </Button>
                    </Col>


                    {/**Row 4 */}
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            *
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            /
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            CLEAR
                        </Button>
                    </Col>
                    <Col
                        className="mt-2"
                        sm={{ span: 3 }}
                        md={{ span: 3 }}
                        lg={{ span: 3 }}
                        xl={{ span: 3 }}
                    >
                        <Button
                            block
                            variant="outline-primary"
                        >
                            Result
                        </Button>
                    </Col>



                </Row>

            </>
        );
    }
}

export default Calculator;