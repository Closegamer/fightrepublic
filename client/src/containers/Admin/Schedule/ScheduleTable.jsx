import React, { Component } from 'react';
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBTableEditable
} from 'mdbreact';
import axios from 'axios';
import '../styles.css';
import ScheduleInTabs from './ScheduleInTabs';

export class ScheduleControl extends Component {
  state = {
    isLoading: false,
    isSaving: false,
    error: '',
    lines: []
  };

  table = React.createRef();

  saveTable = () => {
    const data = this.table.current.state.data;
    return axios
      .post(`/api/days/save`, data)
      .then(response => {
        if (response.data.success) {
          this.setState({
            isLoading: false,
            isSaving: false,
            error: '',
            line: response.data.line
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
  };

  render() {
    return (
      <div>
        <ScheduleInTabs />
      </div>
    );
  }
}

export default ScheduleControl;
