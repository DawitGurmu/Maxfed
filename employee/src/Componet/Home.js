import React, { Component } from "react";
import "../App.css";
import Aplication from "./application";

import Navbar from "./navbar";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Aplication />
      </div>
    );
  }
}
