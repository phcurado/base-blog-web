import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../../services/authService';
import Header from '../header/header';
import Navigator from './navigator';

const PrivateRoute = ({ component: Component, ...params }) => {
  return (
    <Fragment>
      <Navigator></Navigator>
      <div className="wrapper">
        <Header>Header</Header>
        <main>
          <Route
            {...params}
            render={props =>
              AuthService.isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
            }
          />
        </main>
      </div>
    </Fragment>
  );
};

export default PrivateRoute;
