import React, { Component } from "react";
import { ButtonToolbar, Tooltip, OverlayTrigger } from "react-bootstrap";
export default class tooltip extends Component {
  render() {
    return (
      <div>
        <>
          <ButtonToolbar>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>Click Here to see Department Information</Tooltip>
              }
            >
              <h6 className="tool">Department Information</h6>
            </OverlayTrigger>
          </ButtonToolbar>
        </>
      </div>
    );
  }
}
