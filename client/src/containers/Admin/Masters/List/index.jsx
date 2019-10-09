import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBSpinner, MDBAlert, MDBIcon } from 'mdbreact';
import { bindActionCreators } from 'redux';
import * as mastersActions from '../../../../ducks/masters';
import '../../styles.css';
import store from '../../../../store';
import config from '../../../../config.json';

const uploadDir = config.uploadDir;

export class List extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: config.socketEndpoint
    };
  }
  static propTypes = {};

  componentDidMount() {
    const { actions } = this.props;
    mastersActions.loadMasters();
  }

  deleteCurrentMaster = humanId => {
    const { actions } = this.props;
    mastersActions.deleteMaster(humanId);
  };

  render() {
    const {
      masters,
      mastersLoadingInProgress,
      mastersLoadingError
    } = this.props;

    if (!!mastersLoadingError) return <div>{mastersLoadingError}</div>;

    if (mastersLoadingInProgress) return <MDBSpinner />;

    return (
      <React.Fragment>
        {!masters[0] ? (
          <div>Нету тренеров</div>
        ) : (
          <div className='monitor-cont'>
            <h4>Все тренеры</h4>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ masters }) => ({
  masters: masters.list,
  mastersLoadingInProgress: masters.mastersLoadingInProgress,
  mastersLoadingError: masters.mastersLoadingError,
  mastersLoadedAt: masters.mastersLoadedAt
});

const mapDispatchToProps = dispatch => ({
  mastersActions: bindActionCreators({ ...mastersActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
