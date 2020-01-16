import React, { Component } from "react";

import { Form, Col, Card, Container, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.onCheangeEmail = this.onCheangeEmail.bind(this);
    this.onCheangePassword = this.onCheangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      userName: "",
      password: ""
    };
  }
  onCheangeEmail = event => {
    this.setState({
      userName: event.target.value
    });
  };
  onCheangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const user = {
      userName: this.state.userName,
      password: this.state.password
    };

    console.log(user);
    axios.post("user/add", user).then(res => console.log(res.data));
    console.log(user);
    this.setState({
      userName: "",
      password: ""
    });
    /*   onLgin = event => {
            axios.get().then(res => {
              const Department = res.data;
              this.setState({ Department });
            });
          
        }; */
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control
                      value={this.state.userName}
                      onChange={this.onCheangeEmail}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                      value={this.state.password}
                      onChange={this.onCheangePassword}
                      type="password"
                      placeholder="password"
                    />
                  </Form.Group>
                </Form>
                <Row>
                  <Col>
                    <Button
                      onClick={this.onSubmit}
                      href="/Home"
                      variant="primary"
                      block
                      type="submit"
                    >
                      Sign up
                    </Button>
                  </Col>
                  <Col>
                    <Button href="/Home" variant="success" block type="submit">
                      Sign In
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
