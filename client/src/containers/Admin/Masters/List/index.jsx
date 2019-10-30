import React, { Component } from 'react';
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBNavLink
} from 'mdbreact';
import axios from 'axios';
import '../../styles.css';
import config from '../../../../config.json';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mastersActions from '../../../../ducks/masters';

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

  // editMaster = humanId => {
  //   // console.log('editMaster: ', humanId);
  //   const { mastersActions } = this.props;
  //   mastersActions.loadMaster(humanId);
  //   // window.location.assign('/Masters/Edit');
  // };

  // deleteMaster = humanId => {
  //   console.log('deleteMaster: ', humanId);
  // };

  render() {
    return (
      <div>
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
                  <th scope='col'>Специализация</th>
                  <th scope='col'>Регалии</th>
                  <th scope='col'>Фото</th>
                  <th scope='col'>Управление</th>
                </tr>
              </thead>
              <tbody>
                {this.state.masters.map((master, index) => {
                  return (
                    <tr key={index}>
                      <td>{master.humanId}</td>
                      <td>{master.firstName}</td>
                      <td>{master.lastName}</td>
                      <td>{master.specialization}</td>
                      <td>{master.regalies}</td>
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
                      <td>
                        <MDBNavLink
                          color='success'
                          to={'/admin/masters/create/' + `${master.humanId}`}
                        >
                          <MDBIcon far icon='edit' />
                        </MDBNavLink>
                        <MDBNavLink
                          color='success'
                          to={'/admin/masters/delete/' + `${master.humanId}`}
                        >
                          <MDBIcon far icon='trash-alt' />
                        </MDBNavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  mastersActions: bindActionCreators({ ...mastersActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MastersControl);
