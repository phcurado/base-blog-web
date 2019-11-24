import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../../services/authService';

const PublicRoute = ({ component: Component, ...params }) => {
  return (
    <Route
      {...params}
      render={props => (!AuthService.isLoggedIn() ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PublicRoute;
