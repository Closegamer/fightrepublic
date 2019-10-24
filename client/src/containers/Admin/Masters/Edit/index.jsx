import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBSpinner, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { bindActionCreators } from 'redux';
import * as mastersActions from '../../../../ducks/masters';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import './styles.css';
import config from '../../../../config.json';

export class Edit extends Component {
  static propTypes = {};

  componentDidMount() {
    const { mastersActions, match } = this.props;

    const humanId = match.params.humanId;
    if (humanId) {
      mastersActions.loadMaster(humanId);
    }
  }

  onSubmit = values => {
    console.log('Masters Edit onSubmit values: ', values);
    const { mastersActions, history } = this.props;

    console.log();
    return mastersActions.createMaster(values).then(result => {
      if (result.success) {
        history.replace('/admin/masters/list');
      }
    });
  };

  render() {
    const { loadedMaster, loadedMasterInProgress, match } = this.props;

    const humanId = match.params.humanId;

    if (!!humanId && (!loadedMaster || loadedMasterInProgress)) {
      return <MDBSpinner />;
    }

    return (
      <div className='monitor-cont'>
        <MDBRow>
          <MDBCol size='4'>
            {humanId && <h3>Редактировать тренера</h3>}
            {!humanId && <h3>Новый тренер</h3>}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size='4'>
            <Form onSubmit={this.onSubmit} loadedMaster={loadedMaster} />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

const mapStateToProps = ({ masters }) => ({
  masterCreationInProgress: masters.masterCreationInProgress,
  masterCreationError: masters.masterCreationError,
  masterCreatedAt: masters.masterCreatedAt,

  loadedMaster: masters.loadedMaster,
  loadedMasterInProgress: masters.loadedMasterInProgress
});

const mapDispatchToProps = dispatch => ({
  mastersActions: bindActionCreators({ ...mastersActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Edit));
