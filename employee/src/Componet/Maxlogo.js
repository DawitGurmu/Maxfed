import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Alert, Container } from "react-bootstrap";

class Maxlogo extends React.Component {
  render() {
    return (
      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <Alert className="center-titel">
            <h1 className="header-text">MAXIMUS</h1>{" "}
          </Alert>
        </Col>
      </Container>
    );
  }
}
export default Maxlogo;
