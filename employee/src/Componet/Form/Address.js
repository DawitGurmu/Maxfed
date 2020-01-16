import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Maxlogo from "../Maxlogo";
import Navbar from "../navbar";
import DipartmetnInfo from "./departmentinfo";
import { Col, Button, Form, Row, Container } from "react-bootstrap";
import axios from "axios";

import { Component } from "react";

export class Address extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Maxlogo />
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
            /* value={this.state.collegeName}
              onChange={this.onChangecollegeName} */
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Addres two</Form.Label>
            <Form.Control
            /*  value={this.state.educationLevel}
              onChange={this.onCheangeeducationLevel} */
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Row>
            <Col md={{ offset: 5 }}>
              <Button /* onClick={this.onSubmitEducation} */>
                Save And Close
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Address;
