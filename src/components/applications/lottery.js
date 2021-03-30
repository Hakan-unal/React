import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Row, Col, Button, FormControl, Table } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";
export default class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      inputArray: [],
      tableRowID: null,
      lotteryButtonDisabled: false
    };
  }
  addTableRow = () => {
    const tempArr = this.state.inputArray;
    tempArr.push(this.state.inputValue)
    this.setState({ inputArray: tempArr, inputValue: "" })
  }
  removeTableRow = (rowIndex) => {
    const tempArr = this.state.inputArray;
    tempArr.splice(rowIndex, 1);
    this.setState({ inputArray: tempArr })
  }
  handleLottery = () => {
    const tempValue = parseInt(Math.random() * this.state.inputArray.length)
    this.setState({ tableRowID: tempValue })
  }


  render() {
    const tableInputRow = this.state.inputArray.map((val, index) => {
      return (
        <tr key={index} className={(this.state.tableRowID === index) ? "bg-warning" : ""}>
          <td>{index + 1}</td>
          <td>{val}</td>
          <td><Button className="bg-danger float-right" onClick={() => this.removeTableRow(index)}><AiOutlineDelete title="Gitlab" /></Button></td>
        </tr>
      )
    })
    return (
      <>
        <Row>
          <Col sm={{ span: 9 }}>
            <FormControl
              placeholder="Fill in the blank"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="inputValue"
              value={this.state.inputValue}
              onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
            />
          </Col>
          <Col sm={{ span: 3 }}>
            <Button block variant="primary" onClick={() => this.addTableRow()}>Save</Button>
          </Col>

          <Col sm={{ span: 3, offset: 3 }}>
          </Col>
        </Row>
        <Row className="mt-4">
          {(this.state.inputArray.length > 0) ?
            <>
              <Table responsive hover striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tableInputRow}
                </tbody>

              </Table>
              <Button className="ml-auto" variant="primary" disabled={this.state.lotteryButtonDisabled} onClick={() => this.handleLottery()}>Lottery</Button>
            </>

            :
            null


          }
        </Row>
      </>
    );
  }
}