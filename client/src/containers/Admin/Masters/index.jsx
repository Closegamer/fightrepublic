import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { MDBNavLink, MDBBtn } from 'mdbreact';
import List from './List';
import Edit from './Edit';

function Masters({ match }) {
  return (
    <React.Fragment>
      <div className='rightBordered'>
        <h3>Управление тренерами</h3>
        <br />
        <div
          className='btn-group btn-group-lg'
          role='group'
          aria-label='Games admin buttons'
        >
          <MDBNavLink to={`/admin/masters/create`}>
            <MDBBtn className='adminBtn'>Создать тренера</MDBBtn>
          </MDBNavLink>
          <MDBNavLink to={`/admin/masters/list`}>
            <MDBBtn className='adminBtn'>Все тренеры</MDBBtn>
          </MDBNavLink>
        </div>
      </div>
      <Switch>
        <Route path={`${match.path}/`} exact component={List} />
        <Route path={`${match.path}/list`} exact component={List} />
        <Route path={`${match.path}/create`} exact component={Edit} />
        <Route
          path={`${match.path}/create/:humanId`}
          exact
          component={Edit}
        />{' '}
        <Route path={`${match.path}/delete/:humanId`} exact component={List} />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Masters);
