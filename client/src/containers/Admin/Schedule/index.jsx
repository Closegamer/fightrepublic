import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { MDBNavLink, MDBBtn } from 'mdbreact';
import ScheduleTable from './ScheduleTable.jsx';

function Schedule({ match }) {
  return (
    <React.Fragment>
      <div className='rightBordered'>
        <h3>Управление расписанием</h3>
        <br />
        <ScheduleTable />
      </div>
    </React.Fragment>
  );
}

export default withRouter(Schedule);
