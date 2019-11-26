import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../../services/authService';

const PublicRoute = ({ component: Component, ...params }) => {
  return (
    <div className="wrapper">
      <main>
        <Route
          {...params}
          render={props =>
            !AuthService.isLoggedIn() ? <Component {...props} /> : <Redirect to="/" />
          }
        />
      </main>
    </div>
  );
};

export default PublicRoute;
