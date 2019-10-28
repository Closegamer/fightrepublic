import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
import './styles.css';
import config from '../../config.json';

const uploadDir = config.uploadDir;

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
            console.log(response.data.masters);
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
    console.log('masters:', masters);
    return (
        <MDBContainer fluid>
            <MDBRow>
            {masters.map((master, index) => {
                return (
                <MDBCol
                    xs='12'
                    sm='4'
                    md='3'
                    lg='2'
                    xl='2'
                    key={index}
                >
                    {master.humanId}
                </MDBCol>
                );
            })}
            </MDBRow>
        </MDBContainer>
    );
  }
}

export default MastersUniversalControl;
