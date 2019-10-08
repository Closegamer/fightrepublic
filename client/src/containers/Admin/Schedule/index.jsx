import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
import '../styles.css';

export class ScheduleControl extends Component {
  state = {
    isLoading: true,
    error: '',
    lessons: ''
  };

  componentDidMount() {
    // return axios
    //   .post(`/api/lessons/load`)
    //   .then(response => {
    //     if (response.data.success) {
    //       this.setState({
    //         isLoading: false,
    //         error: '',
    //         lessons: response.data.lessonsArray
    //       });
    //     } else {
    //       this.setState({ isLoading: false, error: response.data.error });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.setState({
    //       isLoading: false,
    //       error: error.response.data.error
    //     });
    //   });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            {!this.state.lessons[0] ? (
              <div>Занятий не найдено</div>
            ) : (
              <div className='monitor-cont'>Расписание</div>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ScheduleControl;
