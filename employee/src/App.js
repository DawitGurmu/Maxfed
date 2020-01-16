import React from "react";
import Department from "./Componet/Department";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeTree from "./Componet/EmployeeTree";
import Home from "./Componet/Home";
import DeletEmployee from "./Componet/DeletEmployee";
import "./App.css";
import EmployeeForm from "./Componet/Form/EmployeeForms";
import UserForm from "./Componet/Form/UserForm";
import Address from "./Componet/Form/Address";

function App() {
  return (
    <div>
      <Router>
        <br />
        <br />
        <br />
        <br />
        <Switch>
          <Route path="/" exact component={UserForm} />
          <Route path="/home" component={Home} />
          <Route path="/address" component={Address} />
          <Route path="/Employeetree" component={EmployeeTree} />
          <Route path="/Department" component={Department} />
          <Route path="/DeleteEmployee" component={DeletEmployee} />
          <Route path="/EmployeeForm" component={EmployeeForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
