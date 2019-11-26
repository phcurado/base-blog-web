import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../containers';
import { HomePage, LoginPage } from '../pages';

import './app.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
