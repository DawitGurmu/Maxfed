import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import axios from "axios";

import React, { Component } from "react";
import "../App.css";
import {
  Card,
  Form,
  Col,
  Spinner,
  Button,
  Row,
  Container
} from "react-bootstrap";
export class DeletEmployee extends Component {
  constructor(props) {
    super(props);
    this.onCheangeid = this.onCheangeid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      msg: "",
      id: "",
      rout: "employee/"
    };
  }

  onCheangeid = event => {
    this.setState({
      id: event.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const employee = {
      id: this.state.id
    };
    console.log(employee);
    axios.delete(
      this.state.rout + this.state.id
    ); /* .then(res => {
      const msg = res.data;
      this.setState({ msg });
    }); */

    console.log(employee);
    this.setState({
      id: ""
    });
  }
  render() {
    return (
      <Container>
        <Navbar />
        <h1>{this.state.msg}</h1>
        <h1 className="App">Enter Employee ID</h1>

        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group as={Col}>
              <Form.Control
                value={this.state.id}
                onChange={this.onCheangeid}
                placeholder=" Enter Employee ID"
              />
            </Form.Group>

            <Button onClick={this.onSubmit} block variant="danger">
              DELETE
              <Spinner />
            </Button>
          </Form>
        </Col>
        <br />
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Col md={{ offset: 4 }}>
                <Card.Title className="warnig">
                  WARNING! <Spinner animation="grow" variant="danger" />
                </Card.Title>
              </Col>
              <Card.Body>
                <h5>
                  Deleting data will result permanent removal of Employee
                  records.
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*    {this.state.msg.map(deleted => (
          <h1>{deleted.firstName}</h1>
        ))} */}
      </Container>
    );
  }
}

export default DeletEmployee;
