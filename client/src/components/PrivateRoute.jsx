import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, user, ...rest }) => {
  console.log('user: ', user);
  return (
    <Route
      {...rest}
      render={props =>
        user !== 'admin' ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
