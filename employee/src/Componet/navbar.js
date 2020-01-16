import React, { Component } from "react";
import "../App.css";

import { Navbar, Dropdown, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

class navbar extends Component {
  state = {
    EmployeeId: " "
  };

  render() {
    return (
      <div className="fixed-top">
        <Navbar collapseOnSelect expand="lg" bg="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <h5>
            <Link to="/home">
              <Badge className="headr-text" variant="dark">
                {" "}
                MAXIMUS
              </Badge>{" "}
            </Link>
          </h5>

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            {" "}
            <Nav>
              <Nav.Item>
                <Nav.Link href="/EmployeeForm">
                  <h6 className="navbartext">EmployeeForm</h6>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Dropdown drop="down">
                  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    <h6 className="navbartext">Settings</h6>
                  </Dropdown.Toggle>
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
                    <Dropdown.Item href="">
                      <h6>Help</h6>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
              <Nav.Item href="/EmployeeTree">
                <Nav.Link href="/EmployeeTree">
                  <h6 className="navbartext">Serch</h6>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default navbar;
