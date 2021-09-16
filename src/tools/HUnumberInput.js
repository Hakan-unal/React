import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";


//*****  PROPSLAR :

// value             
// onChange          
// isValidValue        
// isInvalidValue
// size
// warningText
// successText
// notificationText
// inputLabel
// isVerticalLabel
// placeholder
// isDisabled
// maxLength


const style = {
    borderRadius: 20,
    width: "100%",
    borderBottom: "2px",
    borderTop: "2px",
    borderLeft: "2px",
    borderRight: "2px",
    opacity:0.9,
    textAlign:"center",
    backgroundColor:"#EEEEEE75",
    cursor:"pointer",
    color:"#000000",
    fontWeight:"bold",
}

export default class HUnumberInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            isHidden: true
        };
    }
    numberInputFormater = (value) => {
        const result = value.replace(/[^0-9.-]+/g, '').replace('-', '')
        return result
    }


    render() {
        return (
            <Row>
                <Col sm={{ span: 4 }}>
                    <Form.Label column={true}>{this.props.inputLabel ? this.props.inputLabel + " :" : ""}</Form.Label>
                </Col>
                <Col sm={{ span: this.props.isVerticalLabel ? 12 : 8 }}>

                    <Form.Control
                        ref={c => console.log(c)}
                        value={this.props.value ? this.numberInputFormater(this.props.value) : null}
                        type="text"
                        onChange={this.props.onChange}
                        isValid={this.props.isValidValue ? this.props.isValidValue : false}
                        isInvalid={this.props.isInvalidValue ? this.props.isInvalidValue : false}
                        size={this.props.size ? this.props.size : "md"}
                        disabled={this.props.isDisabled ? this.props.isDisabled : false}
                        readOnly={false}
                        placeholder={this.props.placeholder ? this.props.placeholder : ""}
                        onMouseEnter={() => this.setState({ isHidden: false })}
                        onMouseLeave={() => this.setState({ isHidden: true })}
                        maxLength={this.props.maxLength ? this.props.maxLength : 50}
                        style={style}
                    />
                    {this.props.isInvalidValue ?
                        <small className="text-danger">{this.props.warningText}</small>
                        :
                        null
                    }
                    {this.props.isValidValue ?
                        <small className="text-success">{this.props.successText}</small>
                        :
                        null
                    }
                    {this.props.notificationText ?
                        <small className="text-secondary">{this.props.notificationText}</small>
                        :
                        null
                    }
                </Col>
            </Row>
        );
    }
}