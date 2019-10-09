import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBSpinner, MDBAlert, MDBIcon } from 'mdbreact';
import { bindActionCreators } from 'redux';
import * as lessonsActions from '../../../../ducks/lessons';
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
    lessonsActions.loadLessons();
  }

  statusChange = (lesson, newStatus) => {
    const { actions } = this.props;
    lessonsActions.lessonStatusChange(lesson, newStatus);
  };

  deleteCurrentLesson = humanId => {
    const { actions } = this.props;
    lessonsActions.deleteLesson(humanId);
  };

  reactorSwitch = (game, reactorSwitch) => {
    const { actions } = this.props;
    actions.gameReactorSwitch(game, reactorSwitch);
  };

  render() {
    const {
      lessons,
      lessonsLoadingInProgress,
      lessonsLoadingError
    } = this.props;

    if (!!lessonsLoadingError) return <div>{lessonsLoadingError}</div>;

    if (lessonsLoadingInProgress) return <MDBSpinner />;

    return (
      <React.Fragment>
        {!lessons[0] ? (
          <div>Нету занятий</div>
        ) : (
          <div className='monitor-cont'>
            <h4>Все занятия</h4>
            <table className='table table-striped text-center'>
              <thead>
                <tr>
                  <th scope='col'>HumanId</th>
                  <th scope='col'>BigPic</th>
                  <th scope='col'>Caption</th>
                  <th scope='col'>MarketPrice</th>
                  <th scope='col'>CurrentPrice</th>
                  <th scope='col'>TotalIncome</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Duration</th>
                  <th scope='col'>BetSize</th>
                  <th scope='col'>SingleStep</th>
                  <th scope='col'>AutoBetting</th>
                  <th scope='col'>Timer</th>
                  <th scope='col'>Winner</th>
                  <th scope='col'>Reactor</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {lessons.map((lesson, index) => {
                  return (
                    <tr key={index}>
                      <td>{lesson.humanId}</td>
                      <td>
                        {lesson.bigPic &&
                          lesson.bigPic.guid &&
                          lesson.bigPic.ext && (
                            <img
                              alt={lesson.caption}
                              width={90}
                              height={90}
                              src={`${uploadDir}${lesson.bigPic.guid}${lesson.bigPic.ext}`}
                            />
                          )}
                      </td>
                      <td>{lesson.caption}</td>
                      <td>{lesson.marketPrice}</td>
                      <td>{lesson.currentPrice}</td>
                      <td>{lesson.totalIncome}</td>
                      <td>{lesson.status}</td>
                      <td>{lesson.duration}</td>
                      <td>{lesson.betSize}</td>
                      <td>{lesson.singleStep}</td>
                      <td>{lesson.autoBetting}</td>
                      <td>hserh</td>
                      <td>{lesson.winner}</td>
                      <td>
                        {lesson.reactor === 'on' &&
                          lesson.status !== 'closed' &&
                          lesson.autoBetting === 'Да' && (
                            <MDBBtn
                              color='success'
                              rounded
                              size='sm'
                              onClick={e => this.reactorSwitch(lesson, 'off')}
                            >
                              стоп
                            </MDBBtn>
                          )}
                        {lesson.reactor === 'off' &&
                          lesson.status !== 'closed' &&
                          lesson.autoBetting === 'Да' && (
                            <MDBBtn
                              color='danger'
                              rounded
                              size='sm'
                              onClick={e => this.reactorSwitch(lesson, 'on')}
                            >
                              пуск
                            </MDBBtn>
                          )}
                        {!lesson.reactor && (
                          <MDBAlert color='warning'>Problems!</MDBAlert>
                        )}
                      </td>
                      <td>
                        {lesson.status === 'holded' && (
                          <React.Fragment>
                            <MDBBtn
                              color='dark-green'
                              rounded
                              size='sm'
                              onClick={e => this.statusChange(lesson, 'opened')}
                            >
                              <MDBIcon icon='play' />
                            </MDBBtn>
                            <MDBBtn
                              color='blue-grey'
                              rounded
                              disabled
                              outline
                              size='sm'
                            >
                              <MDBIcon icon='pause' />
                            </MDBBtn>
                            <MDBBtn
                              disabled
                              color='pink'
                              rounded
                              size='sm'
                              outline
                            >
                              <MDBIcon icon='stop' />
                            </MDBBtn>
                          </React.Fragment>
                        )}
                        {lesson.status === 'opened' && (
                          <React.Fragment>
                            <MDBBtn
                              color='dark-green'
                              rounded
                              outline
                              disabled
                              size='sm'
                            >
                              <MDBIcon icon='play' />
                            </MDBBtn>
                            <MDBBtn
                              color='blue-grey'
                              rounded
                              size='sm'
                              onClick={e => this.statusChange(lesson, 'paused')}
                            >
                              <MDBIcon icon='pause' />
                            </MDBBtn>
                            <MDBBtn
                              color='pink'
                              rounded
                              size='sm'
                              onClick={e => this.statusChange(lesson, 'closed')}
                            >
                              <MDBIcon icon='stop' />
                            </MDBBtn>
                          </React.Fragment>
                        )}
                        {lesson.status === 'paused' && (
                          <React.Fragment>
                            <MDBBtn
                              color='dark-green'
                              rounded
                              size='sm'
                              onClick={e => this.statusChange(lesson, 'opened')}
                            >
                              <MDBIcon icon='play' />
                            </MDBBtn>
                            <MDBBtn
                              color='blue-grey'
                              rounded
                              outline
                              disabled
                              size='sm'
                            >
                              <MDBIcon icon='pause' />
                            </MDBBtn>
                            <MDBBtn
                              color='pink'
                              rounded
                              size='sm'
                              onClick={e => this.statusChange(lesson, 'closed')}
                            >
                              <MDBIcon icon='stop' />
                            </MDBBtn>
                          </React.Fragment>
                        )}
                        {lesson.status === 'closed' && (
                          <React.Fragment>
                            <MDBBtn
                              color='red'
                              rounded
                              size='sm'
                              onClick={e =>
                                this.deleteCurrentGame(lesson.humanId)
                              }
                            >
                              <MDBIcon icon='times' />
                            </MDBBtn>
                          </React.Fragment>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ lessons }) => ({
  lessons: lessons.list,
  lessonsLoadingInProgress: lessons.lessonsLoadingInProgress,
  lessonsLoadingError: lessons.lessonsLoadingError,
  lessonsLoadedAt: lessons.lessonsLoadedAt
});

const mapDispatchToProps = dispatch => ({
  lessonsActions: bindActionCreators({ ...lessonsActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
