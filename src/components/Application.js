import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import logo from "../logo.svg";
import Lottery from "./applications/lottery";
import Covid from "./applications/covid";
import Switch from "./applications/switch";
import MemoryGame from "./applications/memoryGame";
export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationModal: false,
      modalContent: null,
      modalHeader: null,
    };
  }

  handleShow = (value, modalHeader) => {
    this.setState({
      applicationModal: !this.state.applicationModal,
      modalContent: value,
      modalHeader: modalHeader,
    });
  };

  render() {
    return (
      <>
        <Row className="mt-5 mx-3">
          <Col
            className="mt-2"
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 4 }}
            xl={{ span: 3 }}
          >
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Lottery</Card.Title>
                <Card.Text>
                  You can draw from the values ​​you entered into the
                  application.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => this.handleShow(1, "Lottery")}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className="mt-2"
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 4 }}
            xl={{ span: 3 }}
          >
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Covid</Card.Title>
                <Card.Text>
                  The current number of covid cases can be followed by country.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => this.handleShow(2, "Covid")}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className="mt-2"
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 4 }}
            xl={{ span: 3 }}
          >
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Switch Game</Card.Title>
                <Card.Text>
                  Will you be able to open all switch inputs ?
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => this.handleShow(3, "Switch Game")}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>


          <Col
            className="mt-2"
            sm={{ span: 12 }}
            md={{ span: 6 }}
            lg={{ span: 4 }}
            xl={{ span: 3 }}
          >
            <Card>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Memory Game</Card.Title>
                <Card.Text>
                  A game you can play using your memory
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => this.handleShow(4, "Memory Game")}
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>



        </Row>

        <Modal
          show={this.state.applicationModal}
          onHide={() => this.handleShow()}
          animation={true}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              {this.state.modalHeader}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modalContent === 1 ?
              <Lottery />
              : this.state.modalContent === 2 ?
                <Covid />
                : this.state.modalContent === 3 ?
                  <Switch />
                  : this.state.modalContent === 4 ?
                    <MemoryGame />
                    : null}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
