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
    lessons: ''
  };

  componentDidMount() {
    return axios
      .post(`/api/lessons/list`)
      .then(response => {
        if (response.data.success) {
          this.setState({
            isLoading: false,
            error: '',
            lessons: response.data.lessons
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
      <div>
        {!this.state.lessons[0] ? (
          <div>Занятий не найдено</div>
        ) : (
          <div className='monitor-cont'>
            <h4>Все занятия</h4>
            <table className='table table-striped text-center'>
              <thead>
                <tr>
                  <th scope='col'>humanId</th>
                  <th scope='col'>Вид спорта</th>
                  <th scope='col'>Фото</th>
                </tr>
              </thead>
              <tbody>
                {this.state.lessons.map((lesson, index) => {
                  return (
                    <tr key={index}>
                      <td>{lesson.humanId}</td>
                      <td>{lesson.sport}</td>
                      <td>
                        {lesson.bigPic &&
                          lesson.bigPic.guid &&
                          lesson.bigPic.ext && (
                            <img
                              alt={lesson.sport}
                              width={90}
                              height={90}
                              src={`${uploadDir}${lesson.bigPic.guid}${lesson.bigPic.ext}`}
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
      </div>
    );
  }
}

export default MastersControl;
