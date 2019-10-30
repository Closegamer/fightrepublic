import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBSpinner, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { bindActionCreators } from 'redux';
import * as mastersActions from '../../../../ducks/masters';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import './styles.css';
import config from '../../../../config.json';

const uploadDir = config.uploadDir;

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
    const { mastersActions, history } = this.props;

    return mastersActions.createMaster(values).then(result => {
      if (result.success) {
        history.replace('/admin/masters/list');
      }
    });
  };

  render() {
    console.log('admin masters edit');

    const { loadedMaster, loadedMasterInProgress, match } = this.props;

    const humanId = match.params.humanId;

    if (loadedMasterInProgress) {
      return <MDBSpinner />;
    }

    let initialValues = null;

    if (humanId && loadedMaster) {
      initialValues = loadedMaster;
    }

    return (
      <div className='monitor-cont'>
        <MDBRow>
          <MDBCol xs='12' sm='4'>
            {humanId && <h3>Редактировать тренера</h3>}
            {!humanId && <h3>Новый тренер</h3>}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xs='12' sm='4'>
            <Form
              onSubmit={this.onSubmit}
              loadedMaster={loadedMaster}
              initialValues={initialValues}
            />
          </MDBCol>
          <MDBCol xs='12' sm='8'>
            {initialValues && (
              <React.Fragment>
                <h5>Выбранное фото</h5>
                <img
                  alt={loadedMaster.lastName}
                  className='img-fluid'
                  src={`${uploadDir}${loadedMaster.bigPic.guid}${loadedMaster.bigPic.ext}`}
                />
              </React.Fragment>
            )}
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
  loadedMasterInProgress: masters.masterLoadingInProgress
});

const mapDispatchToProps = dispatch => ({
  mastersActions: bindActionCreators({ ...mastersActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Edit));
