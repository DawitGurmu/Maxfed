import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import Tol from "../tooltip";
import { Row, Container, Popover, OverlayTrigger } from "react-bootstrap";
export default class departmentinfo extends Component {
  state = {
    Employee: []
  };

  componentDidMount() {
    axios.get(`/department/all `).then(res => {
      const Employee = res.data;
      this.setState({ Employee });
    });
  }
  render() {
    const popover = (
      <Popover>
        <Popover.Title as={"h3"}>Department Information</Popover.Title>

        <Popover.Content>
          <Container className="    ">
            <Row>
              <p> --------------------------------------------</p>
              {this.state.Employee.map(depatmet => (
                <ul>
                  Department: {depatmet.departmentName} <br />
                  Manager: {depatmet.departmentManager} <br />
                  DepartmentID: {depatmet.departmentId}
                  <p> -------------------------------------</p>
                </ul>
              ))}
            </Row>
          </Container>
        </Popover.Content>
      </Popover>
    );
    return (
      <Container>
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
          {/* <Button variant="success"> */}
          <h3>
            {" "}
            <Tol />
          </h3>

          {/*   </Button> */}
        </OverlayTrigger>
      </Container>
    );
  }
}
