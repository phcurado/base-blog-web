import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Navigator } from '../containers';
import { HomePage, LoginPage } from '../pages';

import './app.scss';

const App = () => {
  return (
    <Router>
      <Navigator></Navigator>
      <Header>Header</Header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
