import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Schedule from '../Home/components/Schedule';
import './styles.css';

function ScheduleShow(props) {
  return (
    <MDBContainer className='main-container' fluid>
        <MDBRow>
            <MDBCol xl='12' xs='12' className='contentArea-container'>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Расписание
            </h2>
                <MDBRow>
                    <MDBCol>
                        <Schedule />
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}

ScheduleShow.propTypes = {};

export default ScheduleShow;
