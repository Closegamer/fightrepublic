import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { MDBNavLink, MDBBtn } from 'mdbreact';
import List from './List';
import MON from './components/MON';
import TUE from './components/TUE';
import WED from './components/WED';
import THU from './components/THU';
import FRI from './components/FRI';
import SAT from './components/SAT';
import SUN from './components/SUN';

function Schedule({ match }) {
  return (
    <React.Fragment>
      <div className='rightBordered'>
        <h3>Управление расписанием</h3>
        <br />
        <div
          className='btn-group btn-group-lg'
          role='group'
          aria-label='Games admin buttons'
        >
          <MDBNavLink to={`/admin/schedule/list`}>
            <MDBBtn className='dayBtn'>Все дни</MDBBtn>
          </MDBNavLink>
          <MDBNavLink to={`/admin/schedule/createMon`}>
            <MDBBtn className='dayBtn'>Понедельник</MDBBtn>
          </MDBNavLink>
          <MDBNavLink to={`/admin/schedule/createTue`}>
            <MDBBtn className='dayBtn'>Вторник</MDBBtn>
          </MDBNavLink>
          <MDBNavLink to={`/admin/schedule/createWed`}>
            <MDBBtn className='dayBtn'>Среда</MDBBtn>
          </MDBNavLink>
          <MDBNavLink to={`/admin/schedule/createThu`}>
            <MDBBtn className='dayBtn'>Четверг</MDBBtn>
          </MDBNavLink>
          <MDBNavLink to={`/admin/schedule/createFri`}>
            <MDBBtn className='dayBtn'>Пятница</MDBBtn>
          </MDBNavLink>
          <MDBNavLink to={`/admin/schedule/createSat`}>
            <MDBBtn className='dayBtn'>Суббота</MDBBtn>
          </MDBNavLink>
          <MDBNavLink to={`/admin/schedule/createSun`}>
            <MDBBtn className='dayBtn'>Воскресенье</MDBBtn>
          </MDBNavLink>
        </div>
      </div>
      <Switch>
        <Route path={`${match.path}/`} exact component={List} />
        <Route path={`${match.path}/list`} exact component={List} />
        <Route path={`${match.path}/createMon`} exact component={MON} />
        <Route path={`${match.path}/createTue`} exact component={TUE} />
        <Route path={`${match.path}/createWed`} exact component={WED} />
        <Route path={`${match.path}/createThu`} exact component={THU} />
        <Route path={`${match.path}/createFri`} exact component={FRI} />
        <Route path={`${match.path}/createSat`} exact component={SAT} />
        <Route path={`${match.path}/createSun`} exact component={SUN} />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Schedule);
