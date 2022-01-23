import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import Lottery from "./applications/lottery";
import Covid from "./applications/covid";
import Switch from "./applications/switch";
import MemoryGame from "./applications/memoryGame";
import Calculator from "./applications/calculator";


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
              <Card.Img width={100} height={150} variant="top" src="https://play-lh.googleusercontent.com/tzd1ewmTpFsQdSFHPwVwG-jARqimlMhX8jCWKWI0gvWQsq8FJnG98bJzLGPdGaBFw21l=s360-rw" />
              <Card.Body>
                <Card.Title>KFC GIDA</Card.Title>
                <hr />
                <Card.Text>
                  Mobile android application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://play.google.com/store/apps/details?id=com.extranet&hl=tr&gl=US"
                >
                  Show
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
              <Card.Img width={100} height={150} variant="top" src="https://play-lh.googleusercontent.com/tzd1ewmTpFsQdSFHPwVwG-jARqimlMhX8jCWKWI0gvWQsq8FJnG98bJzLGPdGaBFw21l=s360-rw" />
              <Card.Body>
                <Card.Title>KFC GIDA</Card.Title>
                <hr />

                <Card.Text>
                  Mobile ios application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://apps.apple.com/tr/app/kfc-%C3%BCretici-bilgi-takip/id1586120006?l=tr"
                >
                  Show
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
              <Card.Img width={100} height={150} variant="top" src="https://play-lh.googleusercontent.com/uvANNHshsAPG874Oh2idH-id2xB5HvAoq4GF4b2RUPW1hvGP8ATkuZr751tXFyAAMxI=s360-rw" />
              <Card.Body>
                <Card.Title>TODO APP</Card.Title>
                <hr />
                <Card.Text>
                  Mobile android application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://play.google.com/store/apps/details?id=com.mytodoapp123"
                >
                  Show
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
              <Card.Img width={100} height={150} variant="top" src="https://files.sikayetvar.com/lg/cmp/15/155920.png?1614947557" />
              <Card.Body>
                <Card.Title>IN-LINE</Card.Title>
                <hr />
                <Card.Text>
                  React web application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://inline.devtagon.com/"
                >
                  Show
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
              <Card.Img width={100} height={150} variant="top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQE5s2GA-JIQng/company-logo_200_200/0/1603700990543?e=2159024400&v=beta&t=SkfWkrLvYYthQteE1_sDXtxgRHR9DY3RrD5d3qFO_4o" />
              <Card.Body>
                <Card.Title>DUYUROOM</Card.Title>
                <hr />
                <Card.Text>
                  React web application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://demo.duyuroom.com/"
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
              <Card.Img variant="top" src="https://files.sikayetvar.com/lg/cmp/15/155920.png?1614947557" width={100} height={150} />
              <Card.Body>
                <Card.Title>EXTRANET</Card.Title>
                <hr />
                <Card.Text>
                  React web application
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://inline-extranet.devtagon.com/"
                >
                  Show
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
