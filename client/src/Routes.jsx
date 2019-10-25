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
