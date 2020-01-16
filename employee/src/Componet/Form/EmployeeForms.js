import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import Maxlogo from "../Maxlogo";
import Navbar from "../navbar";
import Dip from "./departmentinfo";
import { Col, Button, Nav, Row, Form, Container, Card } from "react-bootstrap";
import axios from "axios";
class EmployeeForms extends React.Component {
  constructor(props) {
    super(props);
    this.oncheangefirstName = this.oncheangefirstName.bind(this);
    this.oncheangelastName = this.oncheangelastName.bind(this);
    this.onCheangessn = this.onCheangessn.bind(this);
    this.onCheangedepartment = this.onCheangedepartment.bind(this);
    this.onCheangedepartmentId = this.onCheangedepartmentId.bind(this);
    this.onCheangeManmagerName = this.onCheangeManmagerName.bind(this);
    this.onCheangeEmployeeId = this.onCheangeEmployeeId.bind(this);
    /* --------------Bining Education changes--------------------- */
    this.onChangecollegeName = this.onChangecollegeName.bind(this);
    this.onChangeeducationDegree = this.onChangeeducationDegree.bind(this);
    this.onCheangeeducationLevel = this.onCheangeeducationLevel.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.onCheangeAdress = this.onCheangeAdress.bind(this);
    /* -------------binding Address table ------------- */
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangeaddress_two = this.onChangeaddress_two.bind(this);
    this.onChangecity = this.onChangecity.bind(this);
    this.onChangestate = this.onChangestate.bind(this);
    this.onChangezip = this.onChangezip.bind(this);
    /* -----------------other------------------------- */
    this.onCheangeDOB = this.onCheangeDOB.bind(this);
    this.onSave = this.onSave.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      managerid: "",
      education: " ",
      address: "",
      employeeId: "",
      dob: "",
      ssn: "",
      employeeId: "",
      departmentId: "",
      /* -----------------variables from Education information----------------- */
      collegeName: "",
      educationDegree: "",
      educationLevel: "",

      /* -------------variables for Address table ----------------- */
      address: "",
      address_two: "",
      city: "",
      state: "",
      zip: "",
      /* ----------others---------- */
      Department: [],
      redirectTo: false,
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
  /* -------------track chanege for Education table --------------- */
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
  /* ----------------track cahnge for Address table-------------------- */
  onChangeaddress = event => {
    this.setState({
      address: event.target.value
    });
  };
  onChangeaddress_two = event => {
    this.setState({
      address_two: event.target.value
    });
  };
  onChangecity = event => {
    this.setState({
      city: event.target.value
    });
  };
  onChangestate = event => {
    this.setState({
      state: event.target.value
    });
  };
  onChangezip = event => {
    this.setState({
      zip: event.target.value
    });
  };
  /* -------------------Sending all data from ui to database-------------------- */
  onSubmitEducation(e) {
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
      all: this.state.firstName,
      redirectTo: true
    };
    axios.post("employee/add", employee).then(res => {
      const data = res.data;
      this.setState({ data: [data] });
      console.log(data);
    });
    this.setState({
      firstName: "",
      employeeId: this.state.employeeId,
      lastName: "",
      dob: "",
      ssn: "",
      department: "",
      departmentId: "",
      managerName: "",
      education: "",
      address: ""
    });
    const education = {
      collegeName: this.state.collegeName,
      educationDegree: this.state.educationDegree,
      educationLevel: this.state.educationLevel,
      employeeId: this.state.employeeId
    };
    axios.post("education/add", education);
    this.setState({
      collegeName: "",
      EmployeeId: " ",
      educationDegree: "",
      educationLevel: ""
    });
    const address = {
      address: this.state.address,
      address_two: this.state.address_two,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      employeeId: this.state.employeeId
    };
    axios.post("address/add", address);
    this.setState({
      address: "",
      address_two: "",
      city: "",
      employeeId: "",
      state: "",
      zip: ""
    });
  }

  onSave(e) {
    this.setState({
      r: false
    });
  }
  render() {
    const redirectTo = this.state.redirectTo;
    if (redirectTo === true) {
      return <Redirect to="/home" />;
    }
  }
  render() {
    const r = this.state.r;
    if (r === false) {
      return (
        <div>
          <Navbar />
          <Container>
            <Maxlogo />
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={this.state.address}
                onChange={this.onChangeaddress}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Addres two</Form.Label>
              <Form.Control
                value={this.state.address_two}
                onChange={this.onChangeaddress_two}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={this.state.city}
                  onChange={this.onChangecity}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  value={this.state.state}
                  onChange={this.onChangestate}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  value={this.state.zip}
                  onChange={this.onChangezip}
                />
              </Form.Group>
            </Form.Row>
            <h1 className="App">Education</h1>
            <Form.Row>
              <Form.Group as={Col}>
                {/*-----------------------Education Input--------------------- */}
                <Form.Label>college</Form.Label>
                <Form.Control
                  value={this.state.collegeName}
                  onChange={this.onChangecollegeName}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>educationLevel</Form.Label>
                <Form.Control
                  value={this.state.educationLevel}
                  onChange={this.onCheangeeducationLevel}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>educationDegree</Form.Label>
                <Form.Control
                  value={this.state.educationDegree}
                  onChange={this.onChangeeducationDegree}
                />
              </Form.Group>
            </Form.Row>

            <Row>
              <Col md={{ offset: 5 }}>
                <Button onClick={this.onSubmitEducation}>Save And Close</Button>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        /*----- -----------------Employee Input------------------------- */
        <Container>
          <Navbar />
          <Form>
            <Maxlogo />
            <Dip />

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
                  type="text"
                  placeholder="ID"
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
            </Form.Row>
            <Col md={{ offset: 5 }}>
              <Button onClick={this.onSave} type="submit" variant="primary">
                Continue
              </Button>
            </Col>
          </Form>
        </Container>
      );
    }
  }
}
export default EmployeeForms;
