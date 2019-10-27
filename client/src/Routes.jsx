import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PrivateRoute from './components/PrivateRoute';

const Home = lazy(() => import('./containers/Home'));
const Contacts = lazy(() => import('./containers/Contacts'));
const Admin = lazy(() => import('./containers/Admin'));
const Recovery = lazy(() => import('./containers/Recovery'));
const Info = lazy(() => import('./containers/Info'));
const Price = lazy(() => import('./containers/Price'));
const Photos = lazy(() => import('./containers/Photos'));
const Masters = lazy(() => import('./containers/Masters'));
const Master1 = lazy(() => import('./containers/Masters/components/Master1'));
const Master2 = lazy(() => import('./containers/Masters/components/Master2'));
const Master3 = lazy(() => import('./containers/Masters/components/Master3'));
const Master4 = lazy(() => import('./containers/Masters/components/Master4'));
const Master5= lazy(() => import('./containers/Masters/components/Master5'));
const Master6 = lazy(() => import('./containers/Masters/components/Master6'));
const ScheduleShow = lazy(() => import('./containers/ScheduleShow'));


function Routes(auth) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/recovery/' component={Recovery} />
        <Route exact path='/info/' component={Info} />
        <Route exact path='/price/' component={Price} />
        <Route exact path='/photos/' component={Photos} />
        <Route exact path='/masters/' component={Masters} />
        <Route exact path='/schedule-show/' component={ScheduleShow} />
        <Route exact path='/masters/Master1' component={Master1} />
        <Route exact path='/masters/Master2' component={Master2} />
        <Route exact path='/masters/Master3' component={Master3} />
        <Route exact path='/masters/Master4' component={Master4} />
        <Route exact path='/masters/Master5' component={Master5} />
        <Route exact path='/masters/Master6' component={Master6} />
        <Route exact path='/recovery/:token' component={Recovery} />
        <PrivateRoute
          user={auth.user}
          path='/admin'
          component={() => <Admin />}
        />
      </Switch>
    </Suspense>
  );
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user.nick
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
