import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
import './styles.css';
import Single from './Single.jsx';

export class MastersUniversalControl extends Component {
  state = {
    isLoading: true,
    error: '',
    masters: ''
  };

  componentDidMount() {
    return axios
      .post(`/api/masters/list`)
      .then(response => {
        if (response.data.success) {
          this.setState({
            isLoading: false,
            error: '',
            masters: response.data.masters
          });
        } else {
          this.setState({ isLoading: false, error: response.data.error });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          error: 'nope'
        });
      });
  }

  render() {
    const masters = this.state.masters;
    return (
      <MDBContainer className='main-container text-center' fluid>
        <h2 className='h1-responsive font-weight-bold text-center my-5'>
          Тренеры
        </h2>
        <MDBRow>
          {!!masters[0] &&
            masters.map((master, index) => {
              return (
                <MDBCol size={12} key={index} id='conn'>
                  <a
                    className='text-center noDecor'
                    href={'/masters/' + `${master.humanId}`}
                  >
                    <Single master={master} index={index} />
                  </a>
                </MDBCol>
              );
            })}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MastersUniversalControl;
