import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import Lottery from "./applications/lottery";
import Covid from "./applications/covid";
import Switch from "./applications/switch";
import MemoryGame from "./applications/memoryGame";
import Calculator from "./applications/calculator";
import vercel from "../assets/image/vercel.png"

const cardPadding = {
  padding: 35
}



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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>CRU'D Services
                </Card.Title>
                <hr />
                <Card.Text>
                  Firebase, React.js application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://firebase-cru-d-git-main-hakan-unal.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>Ask IP
                </Card.Title>
                <hr />
                <Card.Text>
                  React.js application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://ask-4yywbkzds-hakan-unal.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>Exchange Rates
                </Card.Title>
                <hr />
                <Card.Text>
                  React.js application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://exchange-rate-amber.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>Invent Analytics Frontend Developer Case
                </Card.Title>
                <hr />
                <Card.Text>
                  React.js, Redux.js, Custom Hook application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://invent-demo.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>WEG Frontend Case Study</Card.Title>
                <hr />
                <Card.Text>
                  Next.js, GraphQL, React.js, Redux.js application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://weg-demo.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>My Website</Card.Title>
                <hr />
                <Card.Text>
                  React.js application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://hakanunal.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>Crud Services</Card.Title>
                <hr />

                <Card.Text>
                  Next.js, React.js application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://nextjs-chat-lovat-mu.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} s />
              <Card.Body>
                <Card.Title>Basic Portfolio</Card.Title>
                <hr />
                <Card.Text>
                  Gatsby.js application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://gatsbytestportfolio.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>Demo Socket</Card.Title>
                <hr />
                <Card.Text>
                  Node.js, Socket.io   application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://socket-pink.vercel.app/"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>Arçelik Demo Case</Card.Title>
                <hr />
                <Card.Text>
                  Node.js, Express.js, React.js application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://vercel.com/hakan-unal/arcelik-be"
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
            <Card style={cardPadding}>
              <Card.Img width={100} height={150} variant="top" src={vercel} />
              <Card.Body>
                <Card.Title>Winterfell</Card.Title>
                <hr />
                <Card.Text>
                  Next.js, React.js, MongoDB application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://winterfell-be.vercel.app/"
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
                    : this.state.modalContent === 5 ?
                      <Calculator />
                      :
                      null
            }
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
