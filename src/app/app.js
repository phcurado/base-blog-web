import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header, Navigator } from '../containers';
import { HomePage, LoginPage } from '../pages';

import './app.scss';

const navigationLinks = [
  <Link to={'/'} className="nav-link">
    Home
  </Link>,
  <Link to={'/login'} className="nav-link">
    Login
  </Link>,
  <Link to={'/posts'} className="nav-link">
    Post
  </Link>
];

const App = () => {
  return (
    <Fragment>
      <Navigator navList={navigationLinks}></Navigator>
      <Header>asdf</Header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </main>
    </Fragment>
  );
};

export default App;
