import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../containers';
import { HomePage, LoginPage, PostPage, PostEditPage } from '../pages';

import './app.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute exact path="/posts" component={PostPage} />
        <PrivateRoute exact path="/posts/new" component={PostEditPage} />
        <PrivateRoute exact path="/posts/edit/:id" component={PostEditPage} />

        <PrivateRoute path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
