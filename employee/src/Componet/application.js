import React, { Component } from "react";

import { Col, Card, Container, Row, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

export default class application extends Component {
  render() {
    return (
      <div>
        <Card className="cardborder">
          <Container>
            <br />
            <Card>
              <h1 className="App">WellCome</h1>{" "}
            </Card>
            <br />
            <br />
            <Row>
              <Col>
                <Card className="carrd">
                  <Card.Body>
                    <h1 className="App">
                      <Card.Title>Announcements</Card.Title>
                    </h1>
                    <Row></Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="carrd">
                  <Card.Body>
                    <h1 className="App">
                      <Card.Title>Application</Card.Title>
                    </h1>
                    <Row>
                      <Col>Personal Information </Col>
                      <Col>
                        {" "}
                        {/* Employees Information{" "} */}
                        <Dropdown drop="down">
                          <Dropdown.Toggle
                            variant="Secondary"
                            id="dropdown-basic"
                          >
                            <h6>Employee</h6>
                            <Dropdown.Menu>
                              <Dropdown.Item href="/EmployeeForm">
                                <h6>EmployeeForm</h6>
                                <Dropdown.Item href="/EmployeeTree">
                                  <h6>Serch</h6>
                                </Dropdown.Item>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown.Toggle>
                        </Dropdown>
                      </Col>

                      <Col>
                        <Dropdown drop="down">
                          <Dropdown.Toggle
                            variant="Secondary"
                            id="dropdown-basic"
                          >
                            <h6> Departments</h6>

                            <Dropdown.Menu>
                              <Dropdown.Item href="/Department">
                                <h6>Departments Info</h6>
                              </Dropdown.Item>
                              <Dropdown.Item href="DeleteEmployee">
                                <h6>Delet Accont</h6>
                              </Dropdown.Item>
                              <Dropdown.Item href="/">
                                <h6>Log Out</h6>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown.Toggle>
                        </Dropdown>
                      </Col>
                      <Col>Directory </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}
