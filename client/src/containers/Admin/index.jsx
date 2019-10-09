import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lessonsActions from '../../ducks/lessons';
import * as usersActions from '../../ducks/users';
import { Route, Switch, withRouter } from 'react-router-dom';
import Lessons from './Lessons';
import Users from './Users';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBNavLink } from 'mdbreact';
import './styles.css';

const Lost = () => <div>404</div>;

export class Admin extends Component {
  render() {
    const { match } = this.props;

    return (
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='12' xs='12' className='contentArea-container'>
            <MDBRow>
              <MDBCol>
                <h3>Админка - панель управления</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol
                xs='12'
                sm='3'
                md='3'
                lg='3'
                xl='3'
                className='rightBordered'
              >
                <MDBNavLink to={`${match.path}/lessons`}>
                  <MDBBtn className='adminBtn'>Занятия</MDBBtn>
                </MDBNavLink>
                <MDBNavLink to={`${match.path}/users`}>
                  <MDBBtn className='adminBtn'>Пользователи</MDBBtn>
                </MDBNavLink>
              </MDBCol>
              <MDBCol xs='12' sm='9' md='9' lg='9' xl='9'>
                <Switch>
                  <Route path={`${match.path}/`} exact component={Lessons} />
                  <Route path={`${match.path}/lessons`} component={Lessons} />
                  <Route path={`${match.path}/users`} component={Users} />
                  <Route component={Lost} />
                </Switch>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Admin.propTypes = {};

const mapStateToProps = ({ lessons, users }) => ({
  lessons: lessons.list,
  lessonsLoadingInProgress: lessons.lessonsLoadingInProgress,
  lessonsLoadingError: lessons.lessonsLoadingError,
  lessonCreationInProgress: lessons.lessonCreationInProgress,
  lessonCreationError: lessons.lessonCreationError,
  users: users.list,
  usersLoadingInProgress: users.usersLoadingInProgress,
  usersLoadingError: users.usersLoadingError
});

const mapDispatchToProps = dispatch => ({
  lessonsActions: bindActionCreators({ ...lessonsActions }, dispatch),
  usersActions: bindActionCreators({ ...usersActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Admin));
