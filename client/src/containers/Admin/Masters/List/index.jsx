import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
import '../../styles.css';
import config from '../../../../config.json';

const uploadDir = config.uploadDir;

export class MastersControl extends Component {
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
          console.log('response: ', response);
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
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            {!this.state.masters[0] ? (
              <div>Тренеров не найдено</div>
            ) : (
              <div className='monitor-cont'>
                <h4>Все тренеры</h4>
                <table className='table table-striped text-center'>
                  <thead>
                    <tr>
                      <th scope='col'>humanId</th>
                      <th scope='col'>Имя</th>
                      <th scope='col'>Фамилия</th>
                      <th scope='col'>Фото</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.masters.map((master, index) => {
                      return (
                        <tr key={index}>
                          <td>{master.humanId}</td>
                          <td>{master.firstName}</td>
                          <td>{master.lastName}</td>
                          <td>
                            {master.bigPic &&
                              master.bigPic.guid &&
                              master.bigPic.ext && (
                                <img
                                  alt={master.lastName}
                                  width={90}
                                  height={90}
                                  src={`${uploadDir}${master.bigPic.guid}${master.bigPic.ext}`}
                                />
                              )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MastersControl;
