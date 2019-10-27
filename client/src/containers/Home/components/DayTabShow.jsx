import React, { Component } from 'react';
import { MDBTableEditable, MDBBtn,MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios';



class DayTabShow extends Component {
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
        //   const allRows = this.rows;
          this.setState({
            isLoading: false,
            isSaving: false,
            error: ''
          });

        //     let time = null;
        //     let hitZoneMaster = null;
        //     let hitZoneLesson = null;
        //     let tatamiZoneMaster = null;
        //     let tatamiZoneLesson = null;

        //   allRows.forEach(row => {
        //       time = row[0];
        //       hitZoneMaster = row[1];
        //       hitZoneLesson = row[2];
        //       tatamiZoneMaster = row[3];
        //       tatamiZoneLesson = row[4];
        //   });
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

  
  render() {
    const { isLoading, error } = this.state;
    
    if (isLoading) return null;
    
    const columns = [
        {
            label: 'Время',
            field: 'time',
            sort: 'asc'
        },
        {
            label: 'Ударная зона - Тренер',
            field: 'hzm',
            sort: 'asc'
        },
        {
            label: 'Ударная зона - Занятие',
            field: 'hzl',
            sort: 'asc'
        },
        {
            label: 'Зона татами - Тренер',
            field: 'tzm',
            sort: 'asc'
        },
        {
            label: 'Зона татами - Занятие',
            field: 'tzl',
            sort: 'asc'
        }
      ];
    return (
      <>
        <MDBTable responsive className='text-center'>
            <MDBTableHead columns={columns}/>
            <MDBTableBody rows={this.rows} />
        </MDBTable> 
       
      </>
    );
  }
}

DayTabShow.defaultProps = {
  day: 'monday'
};

export default DayTabShow;
