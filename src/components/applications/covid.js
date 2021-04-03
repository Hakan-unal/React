import React from "react";
import { getCovid } from "../../services/api";
import {  Table } from "react-bootstrap";

class Covid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      covids:[]
    }
    
  }
  async componentDidMount() {
    const covids = await getCovid();
    this.setState({covids:covids})  
  }

  render() {
    const covidTableRow=this.state.covids.map((covid,index)=>{
      return(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{covid.country}</td>
          <td>{covid.cases.new}</td>
          <td>{covid.cases.total}</td>
          <td>{covid.deaths.new}</td>
          <td>{covid.deaths.total}</td>
        </tr>
      )
    })
    return (
      <Table bordered responsive="md" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Daily Case</th>
            <th>Total Case</th>
            <th>Daily Death</th>
            <th>Total Death</th>
          </tr>
        </thead>
        <tbody>
        {covidTableRow}
        </tbody>
      </Table>
    );
  }
}

export default Covid;
