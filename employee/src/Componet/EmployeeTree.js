import React, { Component } from "react";
import "../App.css";
import Serch from "./serch";
import Navbar from "./navbar";
export default class EmployeTree extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Serch />
      </div>
    );
  }
}
