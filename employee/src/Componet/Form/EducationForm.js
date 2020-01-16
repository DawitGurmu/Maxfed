import "bootstrap/dist/css/bootstrap.min.css";
import Maxlogo from "../Maxlogo";

import { Col, Button, Form, Container, Row } from "react-bootstrap";
import axios from "axios";
import React, { Component } from "react";
import Navbar from "../navbar";
import { Redirect } from "react-router-dom";
class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.onChangecollegeName = this.onChangecollegeName.bind(this);
    this.onChangeeducationDegree = this.onChangeeducationDegree.bind(this);
    this.onCheangeeducationLevel = this.onCheangeeducationLevel.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.state = {
      employeeId: "",
      collegeName: "",
      educationDegree: "",
      educationLevel: "",
      redirectToReferrer: false
    };
  }
  onChangecollegeName = event => {
    this.setState({
      collegeName: event.target.value
    });
  };
  onCheangeeducationLevel = event => {
    this.setState({
      educationLevel: event.target.value
    });
  };

  onChangeeducationDegree = event => {
    this.setState({
      educationDegree: event.target.value
    });
  };

  onSubmitEducation(e) {
    e.preventDefault();
    const education = {
      /* employeeId: this.state.employeeId, */
      collegeName: this.state.collegeName,
      educationDegree: this.state.educationDegree,
      educationLevel: this.state.educationLevel
    };
    axios.post("education/add", education);
    this.setState({
      /*     employeeId: "", */
      collegeName: "",
      educationDegree: "",
      educationLevel: "",
      redirectToReferrer: true
    });
  }

  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <Navbar />
        <Container>
          <Maxlogo />
          <Form.Group>
            <Form.Label>college</Form.Label>

            <Form.Control
              value={this.state.collegeName}
              onChange={this.onChangecollegeName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>educationLevel</Form.Label>
            <Form.Control
              value={this.state.educationLevel}
              onChange={this.onCheangeeducationLevel}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>educationDegree</Form.Label>
            <Form.Control
              value={this.state.educationDegree}
              onChange={this.onChangeeducationDegree}
            />
          </Form.Group>
          <Row>
            <Col md={{ offset: 5 }}>
              <Button onClick={this.onSubmitEducation}>Save And Close</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default EducationForm;
