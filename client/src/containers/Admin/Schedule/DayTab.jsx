import React, { Component } from 'react';
import { MDBTableEditable, MDBBtn } from 'mdbreact';
import axios from 'axios';

const columns = [
  'Время',
  'Ударная зона - Тренер',
  'Ударная зона - Занятие',
  'Зона татами - Тренер',
  'Зона татами - Занятие'
];

class DayTab extends Component {
  table = React.createRef();
  rows = null;

  state = {
    isLoading: false,
    isSaving: false,
    error: ''
  };

  componentDidMount() {
    const day = this.props.day;

    return axios
      .post(`/api/days/load`, { day })
      .then(response => {
        if (response.data.success) {
          this.rows = response.data.rows || [['', '', '', '', '']];
          this.setState({
            isLoading: false,
            isSaving: false,
            error: ''
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

  saveTable = () => {
    const day = this.props.day;
    const data = this.table.current.state.data;

    return axios
      .post(`/api/days/save`, { data, day })
      .then(response => {
        if (response.data.success) {
          this.setState({
            isLoading: false,
            isSaving: false,
            error: ''
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
    const { isLoading, isSaving, error } = this.state;
    if (isLoading) return null;
    return (
      <>
        <MDBTableEditable
          ref={this.table}
          data={this.rows}
          columns={columns}
          striped
          bordered
        />
        <MDBBtn onClick={this.saveTable} className='adminBtn'>Сохранить</MDBBtn>
      </>
    );
  }
}

DayTab.defaultProps = {
  day: 'monday'
};

export default DayTab;
