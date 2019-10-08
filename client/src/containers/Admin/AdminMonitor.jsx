import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';
import './styles.css';
import UsersControl from './Users';
import ScheduleControl from './Schedule';

const AdminMonitor = props => {
  const { content } = props;
  return (
    <MDBContainer className='adminMonitor-cont' fluid>
      <MDBRow>
        <MDBCol size={12}>
          {content === 'users' && <UsersControl />}
          {content === 'schedule' && <ScheduleControl />}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AdminMonitor;
