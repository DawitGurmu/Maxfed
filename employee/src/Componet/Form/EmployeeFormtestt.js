import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import Maxlogo from "../Maxlogo";
import Navbar from "../navbar";
import DipartmetnInfo from "./departmentinfo";
import { Col, Button, Form, Container } from "react-bootstrap";
import axios from "axios";
class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.oncheangefirstName = this.oncheangefirstName.bind(this);
    this.oncheangelastName = this.oncheangelastName.bind(this);
    this.onCheangessn = this.onCheangessn.bind(this);
    this.onCheangedepartment = this.onCheangedepartment.bind(this);
    this.onCheangedepartmentId = this.onCheangedepartmentId.bind(this);
    this.onCheangeManmagerName = this.onCheangeManmagerName.bind(this);
    /*  this.onCheangeEducationLeve = this.onCheangeEducationLeve.bind(this); */
    this.onCheangeAdress = this.onCheangeAdress.bind(this);
    this.onCheangeEmployeeId = this.onCheangeEmployeeId.bind(this);
    this.onCheangeDOB = this.onCheangeDOB.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      managerid: "",
      education: " ",
      address: "",
      employeeId: "",
      dob: "",
      ssn: "",
      departmentId: "",
      msg: [],
      Department: [],
      data: [],
      find: "/department/all"
    };
  }
  componentDidMount() {
    axios.get(this.state.find).then(res => {
      const Department = res.data;
      this.setState({ Department });
    });
  }
  oncheangefirstName = event => {
    this.setState({
      firstName: event.target.value
    });
  };
  oncheangelastName = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  onCheangessn = event => {
    this.setState({
      ssn: event.target.value
    });
  };
  onCheangedepartment = event => {
    this.setState({
      departmentName: event.target.value
    });
  };
  onCheangedepartmentId = event => {
    this.setState({
      departmentId: event.target.value
    });
  };
  onCheangeManmagerName = event => {
    this.setState({
      managerName: event.target.value
    });
  };
  onCheangeAdress = event => {
    this.setState({
      address: event.target.value
    });
  };
  onCheangeEmployeeId = event => {
    this.setState({
      employeeId: event.target.value
    });
  };
  onCheangeDOB = event => {
    this.setState({
      dob: event.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      ssn: this.state.ssn,
      employeeId: this.state.employeeId,
      department: this.state.department,
      departmentId: this.state.departmentId,
      managerName: this.state.managerName,
      education: this.state.education,
      dob: this.state.dob,
      address: this.state.address,
      all: this.state.firstName
    };
    axios.post("employee/add", employee).then(res => {
      const data = res.data;
      this.setState({ data: [data] });
      console.log(data);
    });
    this.setState({
      firstName: "",
      employeeId: "",
      lastName: "",
      dob: "",
      ssn: "",
      department: "",
      departmentId: "",
      managerName: "",
      education: "",
      address: "",
      redirectToReferrer: false
    });
  }
  onSave(e) {
    this.setState({
      redirectToReferrer: true,
      r: false
    });
  }
  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
      return (
        <p className="App">
          <Card>
            <Card.Title>Your data is </Card.Title>
            <p>
              First Name: {this.state.firstName}
              <br />
              Last Name: {this.state.lastName}
              <br />
              EmployeeID :{this.state.EmployeeId}
              <br />
              SSN: {this.state.ssn}
              <br />
              DepartmentName:{this.state.department}
              <br />
              DepartmentId: {this.state.departmentId}
              <br />
              ManagerName: {this.state.managerName}
              <br />
              Berth day:{this.state.dob}
              <br />
              Address: {this.state.address}
            </p>
          </Card>
          <br />
          <Button onClick={this.onSubmit} variant="primary" type="submit">
            Save and Continue
          </Button>
        </p>
      );
    }
    const r = this.state.r;
    if (r === false) {
      return <Redirect to="/EducationFrom" />;
    }
    return (
      <Container>
        <Navbar />
        <Form>
          <Maxlogo />
          <DipartmetnInfo />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridfirstName">
              <Form.Label>First Name</Form.Label>

              <Form.Control
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.oncheangefirstName}
                placeholder=" First Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGrilastname">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={this.oncheangelastName}
                value={this.state.lastName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridssn">
              <Form.Label>SSN</Form.Label>
              <Form.Control
                type="password"
                placeholder="SSN"
                onChange={this.onCheangessn}
                value={this.state.ssn}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Departments</Form.Label>
              <Form.Control
                value={this.state.department}
                onChange={this.onCheangedepartment}
                as="select"
              >
                <option> None</option>
                {this.state.Department.map(department => (
                  <option id=""> {department.departmentName}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label> Department ID</Form.Label>
              <Form.Control
                value={this.state.departmentId}
                onChange={this.onCheangedepartmentId}
                as="select"
              >
                <option>None</option>
                {this.state.Department.map(department => (
                  <option id="">{department.departmentId}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Manager Name</Form.Label>
              <Form.Control
                value={this.state.managerName}
                onChange={this.onCheangeManmagerName}
                as="select"
              >
                <option>None</option>
                {this.state.Department.map(department => (
                  <option id="dp">{department.departmentManager} </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>EmployeeID</Form.Label>
              <Form.Control
                value={this.state.employeeId}
                onChange={this.onCheangeEmployeeId}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Date of Berth</Form.Label>
              <Form.Control
                type="date"
                value={this.state.dob}
                onChange={this.onCheangeDOB}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={this.state.address}
                onChange={this.onCheangeAdress}
                placeholder="1234 Main St"
              />
            </Form.Group>
          </Form.Row>
          <Col md={{ offset: 5 }}>
            <Button onClick={this.onSave} variant="primary">
              Continue
            </Button>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default EmployeeForm;
