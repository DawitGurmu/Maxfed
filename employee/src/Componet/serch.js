import React, { Component } from "react";
import axios from "axios";

import "../App.css";
import {
  Form,
  Button,
  Card,
  Row,
  Accordion,
  Container,
  FormControl,
  Col
} from "react-bootstrap";

export class serch extends Component {
  constructor(props) {
    super(props);
    this.onCheangeSerch = this.onCheangeSerch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      serch: "",
      routeFL: "employee/ ",
      routeFirstName: "employee/firstName/",
      routeId: "employee/records/",
      routelastName: "employee/lastName/",
      Employee: []
    };
  }
  onCheangeSerch = event => {
    this.setState({
      serch: event.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    if (typeof this.state.serch == "number") {
      alert("error ");
    } else {
      axios.get(this.state.routeFL + this.state.serch).then(res => {
        const Employee = res.data;
        this.setState({ Employee });
      });
    }
    axios.get(this.state.routeId + this.state.serch).then(res => {
      const Employee = res.data;
      this.setState({ Employee });
    });

    axios.get(this.state.routeFirstName + this.state.serch).then(res => {
      const Employee = res.data;
      this.setState({ Employee });
    });
  }

  render() {
    return (
      <div>
        <Card className="cardborder">
          <h1 className="max-center">MAXIMUS</h1>
          <Container>
            <Col md={{ offset: 10 }}>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={this.state.serch}
                  onChange={this.onCheangeSerch}
                  className="mr-sm-2"
                />
                <Button
                  type="submit"
                  onClick={this.onSubmit}
                  variant="outline-success"
                >
                  Search
                </Button>
              </Form>
            </Col>
            <br />
            <>
              {" "}
              {this.state.Employee.map(employee => (
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <h4>
                        {employee.firstName} {employee.lastName}{" "}
                      </h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Row>
                          <Col>
                            <Card className="carrd">
                              <h4>
                                <br />
                                FirstName: {employee.firstName}
                                <br />
                                LastName: {employee.lastName}
                                <br />
                                Manager: {employee.managerName}
                              </h4>
                            </Card>
                          </Col>
                          <Col>
                            <Card className="carrd">
                              <h4>
                                <br />
                                Employee Id: {employee.employeeId}
                                <br />
                                Education: {employee.education}
                                <br />
                                DepartmentId : {employee.departmentId}
                                <br />
                              </h4>
                            </Card>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              ))}
            </>
            <br />
          </Container>
        </Card>
      </div>
    );
  }
}

export default serch;
