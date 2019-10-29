import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './styles.css';
import config from '../../config.json';

function Single(props) {
  const { master } = props;
  const uploadDir = config.uploadDir;
  return (
    <React.Fragment>
      <MDBRow className='text-center'>
        <MDBCol size={12}>
          <img
            className='img-fluid limitedSize rounded'
            src={`${uploadDir}${master.bigPic.guid}${master.bigPic.ext}`}
            alt={master.lastName}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size={12}>
          <h3 className='text-center'>
            <b>
              {master.firstName} {master.lastName}
            </b>
          </h3>
        </MDBCol>
      </MDBRow>
      <div className='gap'></div>
    </React.Fragment>
  );
}

Single.propTypes = {};

export default Single;
