import React from "react";
import { Form } from "react-bootstrap";

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchButton1: false,
      switchButton2: false,
      switchButton3: false,
      switchButton4: false,
      switchButton5: false,
      switchButton6: false,
      switchButton7: false,
      switchButton8: false,
      switchButton9: false,
    };
  }

  changeSwitch = (name, value, switchOrder) => {
    const randomNumber1 = parseInt(Math.random() * 8) + 1;
    const randomNumber2 = parseInt(Math.random() * 8) + 1;
    if(randomNumber1===randomNumber2){
        const randomNumber2 = parseInt(Math.random() * 8) + 1;
        this.setState({ [name]: value,["switchButton"+randomNumber1]:!this.state["switchButton"+randomNumber1],["switchButton"+randomNumber2]:!this.state["switchButton"+randomNumber2] });
    }else{
        this.setState({ [name]: value,["switchButton"+randomNumber1]:!this.state["switchButton"+randomNumber1],["switchButton"+randomNumber2]:!this.state["switchButton"+randomNumber2] });
    }
  };

  render() {
    return (
      <>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch1"
            name="switchButton1"
            checked={this.state.switchButton1}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 1)
            }
          />
        </div>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch2"
            name="switchButton2"
            checked={this.state.switchButton2}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 2)
            }
          />
        </div>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch3"
            name="switchButton3"
            checked={this.state.switchButton3}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 3)
            }
          />
        </div>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch4"
            name="switchButton4"
            checked={this.state.switchButton4}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 4)
            }
          />
        </div>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch5"
            name="switchButton5"
            checked={this.state.switchButton5}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 5)
            }
          />
        </div>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch6"
            name="switchButton6"
            checked={this.state.switchButton6}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 6)
            }
          />
        </div>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch7"
            name="switchButton7"
            checked={this.state.switchButton7}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 7)
            }
          />
        </div>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch8"
            name="switchButton8"
            checked={this.state.switchButton8}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 8)
            }
          />
        </div>
        <div>
          <Form.Check
            className="text-center"
            type="switch"
            id="custom-switch9"
            name="switchButton9"
            checked={this.state.switchButton9}
            onChange={(event) =>
              this.changeSwitch(event.target.name, event.target.checked, 9)
            }
          />
        </div>
      </>
    );
  }
}

export default Switch;
