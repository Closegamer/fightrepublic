import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { MDBNavLink, MDBBtn } from "mdbreact";
// import ScheduleTable from "./ScheduleTable.jsx";

function Squatter({ match }) {
  return (
    <React.Fragment>
      <div className="rightBordered">
        <h3>Управление сквоттером</h3>
        <br />
        123
        {/* <ScheduleTable /> */}
      </div>
    </React.Fragment>
  );
}

export default withRouter(Squatter);
