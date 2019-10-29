import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBIcon } from 'mdbreact';
import axios from 'axios';
import config from '../../config.json';
import './styles.css';
import '../../App.css';

export default class SingleMasterInfo extends Component {
  state = {
    isLoading: true,
    error: '',
    loadedMaster: null
  };

  componentDidMount() {
    const { match } = this.props;
    const humanId = match.params.humanId;
    if (humanId) {
      axios
        .post('/api/masters/load-single-master', { humanId })
        .then(response => {
          if (response.data.success) {
            this.setState({
              isLoading: false,
              error: '',
              loadedMaster: response.data.master
            });
          } else {
            this.setState({ isLoading: false, error: response.data.error });
          }
        })
        .catch(error => {
          console.log(error);
          this.setState({
            isLoading: false,
            error: error.response.data.error
          });
        });
    }
  }
  render() {
    const { isLoading } = this.state;

    if (isLoading) return <div>спинер</div>;

    const { loadedMaster } = this.state;
    const master = loadedMaster[0];
    const uploadDir = config.uploadDir;
    const regaliesListPre = master.regalies;
    const regaliesProcess = regaliesListPre.split(';');

    console.log('master: ', master);
    return (
      <React.Fragment>
        <MDBContainer className='main-container' fluid>
          <MDBRow>
            <MDBCol xl='12' xs='12' className='contentArea-container'>
              <MDBRow>
                <MDBCol xs='12'>
                  <h3>
                    {master.firstName} {master.lastName}
                  </h3>
                  <br />
                  <h5>{master.specialization}</h5>
                  <br />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol xs='12' sm='6' className='noPaddingLeft'>
                  {regaliesProcess.map((regalia, index) => {
                    if (regalia != '') {
                      return (
                        <div key={index}>
                          <MDBIcon icon='certificate' className='redStar' />{' '}
                          {regalia}
                        </div>
                      );
                    }
                  })}
                </MDBCol>
                <MDBCol xs='12' sm='6' className='noPaddingLeft'>
                  <img
                    alt={master.lastName}
                    className='img-fluid rounded'
                    src={`${uploadDir}${master.bigPic.guid}${master.bigPic.ext}`}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}
