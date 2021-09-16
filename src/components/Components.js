import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Row } from "react-bootstrap";
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
                





            </>
        );
    }
}