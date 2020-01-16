import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Spinner } from "react-bootstrap";
import Maxlogo from "./Maxlogo";
import Navbar from "./navbar";
import axios from "axios";
class Department extends React.Component {
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
    return (
      <div>
        <Navbar />
        <Container xs={12}>
          <Maxlogo />
          <h2 className="text-center">Department Information</h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Department Name</th>
                {this.state.Employee.map(depatmet => (
                  <td>
                    {depatmet.departmentName} <br />
                  </td>
                ))}
                <Spinner animation="grow" variant="success" />
              </tr>
              <tr>
                <th>Manager Name</th>
                {this.state.Employee.map(depatmet => (
                  <td>
                    {depatmet.departmentManager} <br />
                  </td>
                ))}
                <Spinner animation="grow" variant="warning" />
              </tr>
              <th>Department ID</th>
              {this.state.Employee.map(depatmet => (
                <td>
                  {depatmet.departmentId} <br />
                </td>
              ))}{" "}
              <Spinner animation="grow" variant="danger" />
            </thead>
          </Table>
        </Container>
      </div>
    );
  }
}
export default Department;
