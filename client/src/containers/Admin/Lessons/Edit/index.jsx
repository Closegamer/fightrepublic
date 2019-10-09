import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBSpinner, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { bindActionCreators } from 'redux';
import * as lessonsActions from '../../../../ducks/lessons';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import '../../styles.css';
import config from '../../../../config.json';

export class Edit extends Component {
  static propTypes = {};

  componentDidMount() {
    const { actions, match } = this.props;

    const humanId = match.params.humanId;
    if (humanId) {
      lessonsActions.loadLesson(humanId);
    }
  }

  onSubmit = values => {
    const { lessonsActions, history } = this.props;

    return lessonsActions.createLesson(values).then(result => {
      if (result.success) {
        history.replace('/admin/lessons/list');
      }
    });
  };

  render() {
    const { loadedLesson, loadedLessonInProgress, match } = this.props;

    const humanId = match.params.humanId;

    if (!!humanId && (!loadedLesson || loadedLessonInProgress)) {
      return <MDBSpinner />;
    }

    let initialValues = null;
    if (humanId && loadedLesson) {
      initialValues = loadedLesson;
    } else {
      initialValues = {
        duration: '30',
        autoBetting: 'Да',
        betSize: '10',
        singleStep: 1
      };
    }
    return (
      <div className='monitor-cont'>
        {humanId && <h3>Редактировать игру</h3>}
        {!humanId && <h3>Новая</h3>}
        <MDBContainer>
          <MDBRow>
            <MDBCol size='4'>
              <Form onSubmit={this.onSubmit} initialValues={initialValues} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = ({ lessons }) => ({
  lessonCreationInProgress: lessons.lessonCreationInProgress,
  lessonCreationError: lessons.lessonCreationError,
  lessonCreatedAt: lessons.lessonCreatedAt,

  loadedGame: lessons.loadedLesson,
  loadedGameInProgress: lessons.loadedLessonInProgress
});

const mapDispatchToProps = dispatch => ({
  lessonsActions: bindActionCreators({ ...lessonsActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Edit));
